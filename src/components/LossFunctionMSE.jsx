import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './LossFunctionMSE.css';

const LossFunctionMSE = () => {
    const navigate = useNavigate();
    const mount3DRef = useRef(null);
    const canvas2DRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const markerRef = useRef(null);
    const dropLineRef = useRef(null);

    // State
    const [w, setW] = useState(0);
    const [b, setB] = useState(0);
    const [loss, setLoss] = useState(0);

    // Constants
    const TRUE_W = 2.0;
    const TRUE_B = 1.0;

    const dataPoints = [
        { x: -1, y: -0.8 },
        { x: 0, y: 1.2 },
        { x: 1, y: 3.1 },
        { x: 2, y: 4.8 },
        { x: 3, y: 7.2 }
    ];

    const wMin = -1, wMax = 5;
    const bMin = -5, bMax = 5;

    // Calculate MSE
    const calculateMSE = (weight, bias) => {
        let sumErrorSq = 0;
        for (let p of dataPoints) {
            const yPred = weight * p.x + bias;
            const error = p.y - yPred;
            sumErrorSq += error * error;
        }
        return sumErrorSq / dataPoints.length;
    };

    // Text Sprite Function
    const makeTextSprite = (message, parameters = {}) => {
        const fontface = parameters.fontface || "Arial";
        const fontsize = parameters.fontsize || 24;
        const borderThickness = parameters.borderThickness || 4;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        const metrics = context.measureText(message);
        const textWidth = metrics.width;

        context.fillStyle = "rgba(255, 255, 255, 1.0)";
        context.fillText(message, borderThickness, fontsize + borderThickness);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(2, 1, 1);
        return sprite;
    };

    // 2D Drawing Functions
    const toScreen = (x, y, width, height) => {
        const minX = -2, maxX = 4;
        const minY = -2, maxY = 8;
        const sx = ((x - minX) / (maxX - minX)) * width;
        const sy = height - ((y - minY) / (maxY - minY)) * height;
        return { x: sx, y: sy };
    };

    const draw2D = () => {
        const canvas = canvas2DRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Draw Axes
        const origin = toScreen(0, 0, width, height);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;

        // X Axis
        ctx.beginPath();
        ctx.moveTo(0, origin.y);
        ctx.lineTo(width, origin.y);
        ctx.stroke();

        // Y Axis
        ctx.beginPath();
        ctx.moveTo(origin.x, 0);
        ctx.lineTo(origin.x, height);
        ctx.stroke();

        // Draw Data Points
        dataPoints.forEach(p => {
            const pos = toScreen(p.x, p.y, width, height);
            ctx.fillStyle = '#60a5fa';
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw Regression Line
        const startX = -2;
        const endX = 4;
        const startY = w * startX + b;
        const endY = w * endX + b;

        const p1 = toScreen(startX, startY, width, height);
        const p2 = toScreen(endX, endY, width, height);

        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Draw Residuals
        ctx.strokeStyle = '#f87171';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);

        dataPoints.forEach(p => {
            const predictedY = w * p.x + b;
            const actualPos = toScreen(p.x, p.y, width, height);
            const predictedPos = toScreen(p.x, predictedY, width, height);

            ctx.beginPath();
            ctx.moveTo(actualPos.x, actualPos.y);
            ctx.lineTo(predictedPos.x, predictedPos.y);
            ctx.stroke();
        });
        ctx.setLineDash([]);
    };

    // Initialize 3D Scene
    useEffect(() => {
        if (!mount3DRef.current) return;

        const container = mount3DRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#0f172a');
        scene.fog = new THREE.Fog('#0f172a', 10, 50);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(8, 12, 12);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        // Grid
        const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        scene.add(gridHelper);

        // Axis Labels
        const labelW = makeTextSprite("Weight (w)", { fontsize: 32 });
        labelW.position.set(6, 0, 0);
        scene.add(labelW);

        const labelB = makeTextSprite("Bias (b)", { fontsize: 32 });
        labelB.position.set(0, 0, 6);
        scene.add(labelB);

        const labelLoss = makeTextSprite("Loss (Error)", { fontsize: 32 });
        labelLoss.position.set(0, 6, 0);
        scene.add(labelLoss);

        // Create Loss Surface
        const segments = 40;
        const geometry = new THREE.PlaneGeometry(wMax - wMin, bMax - bMin, segments, segments);
        const count = geometry.attributes.position.count;
        const colors = [];
        const colorObject = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const lx = geometry.attributes.position.getX(i);
            const ly = geometry.attributes.position.getY(i);

            const wVal = lx + (wMax + wMin) / 2;
            const bVal = ly + (bMax + bMin) / 2;

            const lossVal = calculateMSE(wVal, bVal);
            const displayHeight = Math.min(lossVal, 15);

            geometry.attributes.position.setZ(i, displayHeight);

            const t = Math.min(lossVal / 20, 1);
            colorObject.setHSL(0.7 - (t * 0.7), 1.0, 0.5);
            colors.push(colorObject.r, colorObject.g, colorObject.b);
        }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            side: THREE.DoubleSide,
            wireframe: false,
            roughness: 0.5,
            metalness: 0.1
        });

        const surface = new THREE.Mesh(geometry, material);
        surface.rotation.x = -Math.PI / 2;
        surface.position.x = (wMax + wMin) / 2;
        surface.position.z = (bMax + bMin) / 2;
        scene.add(surface);

        // Wireframe
        const wireframe = new THREE.WireframeGeometry(geometry);
        const line = new THREE.LineSegments(wireframe);
        line.material.depthTest = true;
        line.material.opacity = 0.1;
        line.material.transparent = true;
        line.rotation.x = -Math.PI / 2;
        line.position.copy(surface.position);
        scene.add(line);

        // Marker Sphere
        const sphereGeo = new THREE.SphereGeometry(0.3, 32, 32);
        const sphereMat = new THREE.MeshPhongMaterial({
            color: 0xffea00,
            emissive: 0xff0000,
            emissiveIntensity: 0.2
        });
        const marker = new THREE.Mesh(sphereGeo, sphereMat);
        scene.add(marker);
        markerRef.current = marker;

        // Drop Line
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, -10, 0)
        ]);
        const lineMat = new THREE.LineBasicMaterial({
            color: 0xffea00,
            transparent: true,
            opacity: 0.5
        });
        const dropLine = new THREE.Line(lineGeo, lineMat);
        scene.add(dropLine);
        dropLineRef.current = dropLine;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            if (markerRef.current) {
                markerRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.005) * 0.05);
            }
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            if (!mount3DRef.current || !canvas2DRef.current) return;

            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);

            const canvas = canvas2DRef.current;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            draw2D();
        };
        window.addEventListener('resize', handleResize);

        // Initial 2D canvas setup
        if (canvas2DRef.current) {
            canvas2DRef.current.width = canvas2DRef.current.parentElement.clientWidth;
            canvas2DRef.current.height = canvas2DRef.current.parentElement.clientHeight;
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    // Update visualization when w or b changes
    useEffect(() => {
        const currentLoss = calculateMSE(w, b);
        setLoss(currentLoss);

        // Update 3D Marker
        if (markerRef.current) {
            markerRef.current.position.set(w, currentLoss, b);
        }

        // Update Drop Line
        if (dropLineRef.current) {
            const positions = dropLineRef.current.geometry.attributes.position.array;
            positions[0] = w; positions[1] = currentLoss; positions[2] = b;
            positions[3] = w; positions[4] = 0; positions[5] = b;
            dropLineRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // Update 2D View
        draw2D();
    }, [w, b]);

    return (
        <div className="loss-function-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-loss">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="viz-split">
                {/* 3D Loss Landscape */}
                <div className="view-3d">
                    <div className="view-label">3D Loss Landscape (Mean Squared Error)</div>
                    <div ref={mount3DRef} className="canvas-3d" />
                </div>

                {/* 2D Regression View */}
                <div className="view-2d">
                    <div className="view-label">2D Model Fit (y = wx + b)</div>
                    <canvas ref={canvas2DRef} className="canvas-2d" />
                </div>
            </div>

            {/* Controls */}
            <div className="controls-loss">
                <div className="controls-left">
                    <h1>The "Scorecard" Control Panel</h1>
                    <p>Adjust the Weight (Slope) and Bias (Intercept) to minimize the error.</p>

                    <div className="slider-group-loss">
                        <div className="slider-header">
                            <label>Weight (w): <span className="val-w">{w.toFixed(2)}</span></label>
                        </div>
                        <input
                            type="range"
                            min="-1"
                            max="5"
                            step="0.1"
                            value={w}
                            onChange={(e) => setW(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className="slider-group-loss">
                        <div className="slider-header">
                            <label>Bias (b): <span className="val-b">{b.toFixed(2)}</span></label>
                        </div>
                        <input
                            type="range"
                            min="-5"
                            max="5"
                            step="0.1"
                            value={b}
                            onChange={(e) => setB(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                <div className="controls-right">
                    <div className="stat-box">
                        <div className="stat-value">{loss.toFixed(2)}</div>
                        <div className="stat-label">Current MSE (Loss)</div>
                    </div>
                    <div className="instructions-loss">
                        <ul>
                            <li><strong>3D View:</strong> The height represents the error. Lower is better (the blue valley).</li>
                            <li><strong>2D View:</strong> Red lines show the "residuals" (distance between prediction and reality).</li>
                            <li><strong>Goal:</strong> Get the ball to the bottom of the bowl!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LossFunctionMSE;
