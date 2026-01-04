import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './ConditionalProbability3D.css';

const ConditionalProbability3D = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const geometryRef = useRef(null);
    const universeBoxRef = useRef(null);
    const planeARef = useRef(null);
    const planeBRef = useRef(null);
    const pDataRef = useRef([]);

    const [currentState, setCurrentState] = useState(0);
    const [counts, setCounts] = useState({ total: 0, A: 0, B: 0, A_and_B: 0 });

    const PARTICLE_COUNT = 3000;
    const CUBE_SIZE = 40;

    const COLOR_NEITHER = new THREE.Color(0x475569);
    const COLOR_A = new THREE.Color(0xef4444);
    const COLOR_B = new THREE.Color(0x3b82f6);
    const COLOR_INTERSECTION = new THREE.Color(0xd946ef);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f172a);
        scene.fog = new THREE.FogExp2(0x0f172a, 0.008);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(60, 40, 70);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controlsRef.current = controls;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Universe Box
        const boxGeometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
        const boxEdges = new THREE.EdgesGeometry(boxGeometry);
        const boxMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true });
        const universeBox = new THREE.LineSegments(boxEdges, boxMaterial);
        scene.add(universeBox);
        universeBoxRef.current = universeBox;

        // Planes
        const planeGeom = new THREE.PlaneGeometry(CUBE_SIZE, CUBE_SIZE);

        const planeB = new THREE.Mesh(
            planeGeom,
            new THREE.MeshBasicMaterial({ color: 0x3b82f6, opacity: 0.1, transparent: true, side: THREE.DoubleSide })
        );
        planeB.rotation.y = Math.PI / 2;
        scene.add(planeB);
        planeBRef.current = planeB;

        const planeA = new THREE.Mesh(
            planeGeom,
            new THREE.MeshBasicMaterial({ color: 0xef4444, opacity: 0.1, transparent: true, side: THREE.DoubleSide })
        );
        planeA.rotation.x = Math.PI / 2;
        scene.add(planeA);
        planeARef.current = planeA;

        // Particle System
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const sizes = [];
        const pData = [];

        let countA = 0, countB = 0, countAB = 0, countTotal = 0;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const x = (Math.random() - 0.5) * CUBE_SIZE;
            const y = (Math.random() - 0.5) * CUBE_SIZE;
            const z = (Math.random() - 0.5) * CUBE_SIZE;

            positions.push(x, y, z);

            const isB = x > 0;
            const isA = y > 0;

            let baseColor = COLOR_NEITHER;

            if (isA && isB) {
                baseColor = COLOR_INTERSECTION;
                countAB++;
                countA++;
                countB++;
            } else if (isB) {
                baseColor = COLOR_B;
                countB++;
            } else if (isA) {
                baseColor = COLOR_A;
                countA++;
            }

            countTotal++;

            colors.push(baseColor.r, baseColor.g, baseColor.b);
            sizes.push(1.0);

            pData.push({
                id: i,
                isA,
                isB,
                baseColor,
                originalPos: new THREE.Vector3(x, y, z)
            });
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                pointTexture: { value: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png') }
            },
            vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 1.0);
          gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          if (gl_FragColor.a < 0.5) discard;
        }
      `,
            depthTest: true,
            depthWrite: true,
            transparent: false,
            vertexColors: true
        });

        const pointsSystem = new THREE.Points(geometry, shaderMaterial);
        scene.add(pointsSystem);

        geometryRef.current = geometry;
        pDataRef.current = pData;
        setCounts({ total: countTotal, A: countA, B: countB, A_and_B: countAB });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            if (!mountRef.current) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    const animateTransition = (targetColors, targetSizes) => {
        const duration = 60;
        let frame = 0;

        const startSizes = [];
        const startColors = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            startSizes.push(geometryRef.current.attributes.size.array[i]);
            startColors.push(
                geometryRef.current.attributes.color.array[i * 3],
                geometryRef.current.attributes.color.array[i * 3 + 1],
                geometryRef.current.attributes.color.array[i * 3 + 2]
            );
        }

        const step = () => {
            frame++;
            const progress = frame / duration;
            const ease = 1 - Math.pow(1 - progress, 3);

            const currentColors = geometryRef.current.attributes.color.array;
            const currentSizes = geometryRef.current.attributes.size.array;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                currentSizes[i] = startSizes[i] + (targetSizes[i] - startSizes[i]) * ease;
                currentColors[i * 3] = startColors[i * 3] + (targetColors[i * 3] - startColors[i * 3]) * ease;
                currentColors[i * 3 + 1] = startColors[i * 3 + 1] + (targetColors[i * 3 + 1] - startColors[i * 3 + 1]) * ease;
                currentColors[i * 3 + 2] = startColors[i * 3 + 2] + (targetColors[i * 3 + 2] - startColors[i * 3 + 2]) * ease;
            }

            geometryRef.current.attributes.color.needsUpdate = true;
            geometryRef.current.attributes.size.needsUpdate = true;

            if (frame < duration) {
                requestAnimationFrame(step);
            }
        };
        step();
    };

    const updateVisualization = (state) => {
        if (!geometryRef.current || !controlsRef.current) return;

        const targetColors = [];
        const targetSizes = [];
        const pData = pDataRef.current;

        switch (state) {
            case 0: // Universe
                controlsRef.current.autoRotate = true;
                if (universeBoxRef.current) universeBoxRef.current.visible = true;
                if (planeARef.current) planeARef.current.visible = true;
                if (planeBRef.current) planeBRef.current.visible = true;

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    const p = pData[i];
                    targetColors.push(p.baseColor.r, p.baseColor.g, p.baseColor.b);
                    targetSizes.push(1.0);
                }
                break;

            case 1: // Condition B
                controlsRef.current.autoRotate = false;

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    const p = pData[i];
                    if (p.isB) {
                        targetColors.push(p.baseColor.r, p.baseColor.g, p.baseColor.b);
                        targetSizes.push(1.0);
                    } else {
                        targetColors.push(0.1, 0.1, 0.1);
                        targetSizes.push(0.3);
                    }
                }
                break;

            case 2: // Restrict Space
                controlsRef.current.autoRotate = false;
                if (universeBoxRef.current) universeBoxRef.current.visible = false;
                if (planeARef.current) planeARef.current.visible = false;
                if (planeBRef.current) planeBRef.current.visible = true;

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    const p = pData[i];
                    if (p.isB) {
                        targetColors.push(p.baseColor.r, p.baseColor.g, p.baseColor.b);
                        targetSizes.push(1.0);
                    } else {
                        targetColors.push(0, 0, 0);
                        targetSizes.push(0.0);
                    }
                }
                break;

            case 3: // Target A
                controlsRef.current.autoRotate = true;

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    const p = pData[i];
                    if (p.isB) {
                        if (p.isA) {
                            targetColors.push(1.0, 0.0, 1.0);
                            targetSizes.push(1.5);
                        } else {
                            targetColors.push(0.2, 0.4, 0.8);
                            targetSizes.push(0.5);
                        }
                    } else {
                        targetColors.push(0, 0, 0);
                        targetSizes.push(0.0);
                    }
                }
                break;
        }

        animateTransition(targetColors, targetSizes);
    };

    useEffect(() => {
        updateVisualization(currentState);
    }, [currentState]);

    const getExplanation = () => {
        switch (currentState) {
            case 0:
                return {
                    title: 'Step 1: The Sample Space (Ω)',
                    text: `These particles represent all possible outcomes.\nCount: ${counts.total}\nP(A) ≈ ${(counts.A / counts.total).toFixed(2)} (Red region)\nP(B) ≈ ${(counts.B / counts.total).toFixed(2)} (Blue region)`,
                    math: 'P(Ω) = 1.0'
                };
            case 1:
                return {
                    title: 'Step 2: The Condition (Event B)',
                    text: 'We want to know the probability of A, given B has occurred.\nEvent B is the condition (The Blue & Purple dots on the right).',
                    math: 'Condition: "Event B Occurred"'
                };
            case 2:
                return {
                    title: 'Step 3: Restrict Sample Space',
                    text: 'Since we know B occurred, we ignore everything else.\nThe "Blue Side" is now our entire Universe.',
                    math: `New Sample Space = Size of B (${counts.B})`
                };
            case 3:
                const prob = (counts.A_and_B / counts.B).toFixed(3);
                return {
                    title: 'Step 4: Identify Target (A)',
                    text: 'Within our new universe (B), we look for outcomes that are also A.\nThese are the Purple dots (Intersection A ∩ B).',
                    math: `P(A|B) = Count(A ∩ B) / Count(B)\nP(A|B) = ${counts.A_and_B} / ${counts.B}\nP(A|B) = ${prob}`
                };
        }
    };

    const explanation = getExplanation();

    return (
        <div className="cond-prob-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-cp">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div ref={mountRef} className="canvas-container-cp" />

            <div className="ui-layer-cp">
                <div className="panel-cp panel-top">
                    <h1>Conditional Probability</h1>
                    <h2>Visualizing P(A | B)</h2>
                    <div className="explanation-cp">
                        <strong>{explanation.title}</strong><br />
                        {explanation.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}<br />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="math-display-cp">
                        {explanation.math.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}<br />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="legend-cp">
                        <div className="legend-item-cp">
                            <div className="dot-cp" style={{ background: '#ef4444' }} /> Event A
                        </div>
                        <div className="legend-item-cp">
                            <div className="dot-cp" style={{ background: '#3b82f6' }} /> Event B
                        </div>
                        <div className="legend-item-cp">
                            <div className="dot-cp" style={{ background: '#d946ef' }} /> A & B
                        </div>
                    </div>
                </div>

                <div className="panel-cp panel-bottom">
                    <div className="controls-cp">
                        <button
                            className={currentState === 0 ? 'active' : ''}
                            onClick={() => setCurrentState(0)}
                        >
                            1. Universe (Ω)
                        </button>
                        <button
                            className={currentState === 1 ? 'active' : ''}
                            onClick={() => setCurrentState(1)}
                        >
                            2. Condition (B)
                        </button>
                        <button
                            className={currentState === 2 ? 'active' : ''}
                            onClick={() => setCurrentState(2)}
                        >
                            3. Restrict Space
                        </button>
                        <button
                            className={currentState === 3 ? 'active' : ''}
                            onClick={() => setCurrentState(3)}
                        >
                            4. Target (A)
                        </button>
                    </div>
                    <p className="hint-cp">
                        Click buttons to step through the logic. Drag to rotate. Scroll to zoom.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConditionalProbability3D;
