import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './LogisticRegression3D.css';

const LogisticRegression3D = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const geometryRef = useRef(null);
    const thresholdPlaneRef = useRef(null);

    const [w1, setW1] = useState(1.5);
    const [w2, setW2] = useState(1.5);
    const [b, setB] = useState(0);
    const [threshold, setThreshold] = useState(0.5);
    const [mode, setMode] = useState('sigmoid');
    const [collapsed, setCollapsed] = useState(false);

    const sigmoid = (z) => {
        return 1 / (1 + Math.exp(-z));
    };

    const updateSurfaceGeometry = () => {
        if (!geometryRef.current) return;

        const positions = geometryRef.current.attributes.position;

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const z = positions.getZ(i);

            const linearZ = (w1 * x) + (w2 * z) + b;

            let yVal;
            if (mode === 'sigmoid') {
                yVal = sigmoid(linearZ);
            } else {
                yVal = linearZ;
            }

            positions.setY(i, yVal);
        }

        positions.needsUpdate = true;
        geometryRef.current.computeVertexNormals();
    };

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050510);
        scene.fog = new THREE.FogExp2(0x050510, 0.03);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(8, 6, 8);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 10, 7);
        dirLight.castShadow = true;
        scene.add(dirLight);

        // Grid helpers
        const gridHelper0 = new THREE.GridHelper(10, 10, 0x333333, 0x111111);
        scene.add(gridHelper0);

        const gridHelper1 = new THREE.GridHelper(10, 10, 0x333333, 0x111111);
        gridHelper1.position.y = 1;
        scene.add(gridHelper1);

        const axesHelper = new THREE.AxesHelper(1);
        scene.add(axesHelper);

        // Data Points
        const pointsGroup = new THREE.Group();
        scene.add(pointsGroup);

        const sphereGeo = new THREE.SphereGeometry(0.15, 16, 16);
        const redMat = new THREE.MeshStandardMaterial({ color: 0xff4b4b, roughness: 0.3, metalness: 0.7 });
        const blueMat = new THREE.MeshStandardMaterial({ color: 0x4b4bff, roughness: 0.3, metalness: 0.7 });

        // Class 0 (Red) - Bottom left
        for (let i = 0; i < 20; i++) {
            const mesh = new THREE.Mesh(sphereGeo, redMat);
            mesh.position.x = -2 + (Math.random() * 3 - 1.5);
            mesh.position.z = -2 + (Math.random() * 3 - 1.5);
            mesh.position.y = 0;
            mesh.castShadow = true;
            pointsGroup.add(mesh);
        }

        // Class 1 (Blue) - Top right
        for (let i = 0; i < 20; i++) {
            const mesh = new THREE.Mesh(sphereGeo, blueMat);
            mesh.position.x = 2 + (Math.random() * 3 - 1.5);
            mesh.position.z = 2 + (Math.random() * 3 - 1.5);
            mesh.position.y = 1;
            mesh.castShadow = true;
            pointsGroup.add(mesh);
        }

        // Surface
        const segments = 50;
        const geometry = new THREE.PlaneGeometry(10, 10, segments, segments);
        geometry.rotateX(-Math.PI / 2);

        const surfaceMat = new THREE.MeshPhongMaterial({
            color: 0x00f260,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.4,
            wireframe: false,
            shininess: 100
        });

        const surfaceMesh = new THREE.Mesh(geometry, surfaceMat);
        scene.add(surfaceMesh);

        const wireframeMat = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
        scene.add(wireframeMesh);

        geometryRef.current = geometry;

        // Threshold Plane
        const thresholdGeo = new THREE.PlaneGeometry(10, 10);
        thresholdGeo.rotateX(-Math.PI / 2);
        const thresholdMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.15,
            depthWrite: false
        });
        const thresholdPlane = new THREE.Mesh(thresholdGeo, thresholdMat);
        thresholdPlane.position.y = 0.5;
        scene.add(thresholdPlane);
        thresholdPlaneRef.current = thresholdPlane;

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

        // Initial update
        updateSurfaceGeometry();

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        updateSurfaceGeometry();
    }, [w1, w2, b, mode]);

    useEffect(() => {
        if (thresholdPlaneRef.current) {
            thresholdPlaneRef.current.position.y = threshold;
        }
    }, [threshold]);

    const getTooltipText = () => {
        if (mode === 'linear') {
            return (
                <>
                    <strong>Linear Regression Mode:</strong><br />
                    See how the plane extends to infinity? This is why linear regression is bad for classification.
                    It predicts values like 5.2 or -3.1, which aren't probabilities!
                </>
            );
        }
        return (
            <>
                <strong>The Sigmoid Function:</strong><br />
                The squashing function bends the plane into an S-curve, keeping predictions strictly between 0 and 1.
            </>
        );
    };

    return (
        <div className="logistic-regression-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-lr">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className={`ui-container-lr ${collapsed ? 'collapsed' : ''}`}>
                <div className="ui-header-lr">
                    <h2>Logistic Classifier</h2>
                    <button
                        className="toggle-ui-lr"
                        onClick={() => setCollapsed(!collapsed)}
                        title={collapsed ? "Maximize" : "Minimize"}
                    >
                        {collapsed ? <FaPlus /> : <FaMinus />}
                    </button>
                </div>

                {!collapsed && (
                    <div className="ui-content-lr">
                        <h3>Model Parameters</h3>
                        <div className="control-group-lr">
                            <label>
                                Weight 1 (X slope)
                                <span className="value-display-lr">{w1.toFixed(1)}</span>
                            </label>
                            <input
                                type="range"
                                min="-5"
                                max="5"
                                step="0.1"
                                value={w1}
                                onChange={(e) => setW1(parseFloat(e.target.value))}
                            />
                        </div>

                        <div className="control-group-lr">
                            <label>
                                Weight 2 (Y slope)
                                <span className="value-display-lr">{w2.toFixed(1)}</span>
                            </label>
                            <input
                                type="range"
                                min="-5"
                                max="5"
                                step="0.1"
                                value={w2}
                                onChange={(e) => setW2(parseFloat(e.target.value))}
                            />
                        </div>

                        <div className="control-group-lr">
                            <label>
                                Bias (Offset)
                                <span className="value-display-lr">{b.toFixed(1)}</span>
                            </label>
                            <input
                                type="range"
                                min="-5"
                                max="5"
                                step="0.1"
                                value={b}
                                onChange={(e) => setB(parseFloat(e.target.value))}
                            />
                        </div>

                        <h3>Decision Boundary</h3>
                        <div className="control-group-lr">
                            <label>
                                Threshold
                                <span className="value-display-lr">{threshold.toFixed(2)}</span>
                            </label>
                            <input
                                type="range"
                                min="0.01"
                                max="0.99"
                                step="0.01"
                                value={threshold}
                                onChange={(e) => setThreshold(parseFloat(e.target.value))}
                            />
                        </div>

                        <h3>Visualization Mode</h3>
                        <div className="btn-group-lr">
                            <button
                                className={mode === 'linear' ? 'active' : ''}
                                onClick={() => setMode('linear')}
                            >
                                Linear (Raw)
                            </button>
                            <button
                                className={mode === 'sigmoid' ? 'active' : ''}
                                onClick={() => setMode('sigmoid')}
                            >
                                Sigmoid (Prob)
                            </button>
                        </div>

                        <div className="legend-lr">
                            <div><span className="dot-lr dot-red"></span> Class 0 (No)</div>
                            <div><span className="dot-lr dot-blue"></span> Class 1 (Yes)</div>
                        </div>
                    </div>
                )}
            </div>

            <div className="tooltip-lr">
                {getTooltipText()}
            </div>

            <div ref={mountRef} className="canvas-container-lr" />
        </div>
    );
};

export default LogisticRegression3D;
