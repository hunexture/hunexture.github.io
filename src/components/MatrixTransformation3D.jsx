import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './MatrixTransformation3D.css';

const MatrixTransformation3D = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const arrowInputRef = useRef(null);
    const arrowOutputRef = useRef(null);
    const labelsRef = useRef([]);

    // Panel minimized state
    const [minimized, setMinimized] = useState(false);

    // Input Vector
    const [vx, setVx] = useState(10);
    const [vy, setVy] = useState(10);
    const [vz, setVz] = useState(10);

    // Matrix values (3x3)
    const [m00, setM00] = useState(1);
    const [m01, setM01] = useState(0);
    const [m02, setM02] = useState(0);
    const [m10, setM10] = useState(0);
    const [m11, setM11] = useState(1);
    const [m12, setM12] = useState(0);
    const [m20, setM20] = useState(0);
    const [m21, setM21] = useState(0);
    const [m22, setM22] = useState(1);

    // Result
    const [resX, setResX] = useState(0);
    const [resY, setResY] = useState(0);
    const [resZ, setResZ] = useState(0);

    // Text Label Function
    const makeTextSprite = (message, parameters = {}) => {
        const fontface = parameters.fontface || "Arial";
        const fontsize = parameters.fontsize || 24;
        const borderThickness = parameters.borderThickness || 4;
        const backgroundColor = parameters.backgroundColor || { r: 255, g: 255, b: 255, a: 1.0 };

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
        sprite.scale.set(textWidth / 3, fontsize / 1.5, 1.0);
        return sprite;
    };

    const createArrow = (x, y, z, color) => {
        const origin = new THREE.Vector3(0, 0, 0);
        const dest = new THREE.Vector3(x, y, z);
        const length = dest.length();
        const direction = length > 0 ? dest.clone().normalize() : new THREE.Vector3(0, 1, 0);
        return new THREE.ArrowHelper(
            direction,
            origin,
            length,
            color,
            Math.min(length * 0.2, 10),
            Math.min(length * 0.1, 5)
        );
    };

    // Update Visualization
    const updateVisualization = () => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Clear old arrows
        if (arrowInputRef.current) scene.remove(arrowInputRef.current);
        if (arrowOutputRef.current) scene.remove(arrowOutputRef.current);
        labelsRef.current.forEach(l => scene.remove(l));
        labelsRef.current = [];

        // Calculate Output (Matrix * Vector)
        const outputX = (m00 * vx) + (m01 * vy) + (m02 * vz);
        const outputY = (m10 * vx) + (m11 * vy) + (m12 * vz);
        const outputZ = (m20 * vx) + (m21 * vy) + (m22 * vz);

        // Update Result State
        setResX(outputX);
        setResY(outputY);
        setResZ(outputZ);

        // Draw Arrows
        arrowInputRef.current = createArrow(vx, vy, vz, 0xffff00); // Yellow
        arrowOutputRef.current = createArrow(outputX, outputY, outputZ, 0x00ffff); // Cyan
        scene.add(arrowInputRef.current);
        scene.add(arrowOutputRef.current);

        // Add Labels
        const labelIn = makeTextSprite(" Input ", { fontsize: 24, backgroundColor: { r: 100, g: 100, b: 0, a: 0.6 } });
        labelIn.position.set(vx, vy, vz).multiplyScalar(1.1);
        scene.add(labelIn);
        labelsRef.current.push(labelIn);

        const labelOut = makeTextSprite(" Output ", { fontsize: 24, backgroundColor: { r: 0, g: 100, b: 100, a: 0.6 } });
        labelOut.position.set(outputX, outputY, outputZ).multiplyScalar(1.1);
        scene.add(labelOut);
        labelsRef.current.push(labelOut);
    };

    // Preset Functions
    const setIdentity = () => {
        setM00(1); setM01(0); setM02(0);
        setM10(0); setM11(1); setM12(0);
        setM20(0); setM21(0); setM22(1);
    };

    const setScale2x = () => {
        setM00(2); setM01(0); setM02(0);
        setM10(0); setM11(2); setM12(0);
        setM20(0); setM21(0); setM22(2);
    };

    const setRotateY = () => {
        setM00(0); setM01(0); setM02(1);
        setM10(0); setM11(1); setM12(0);
        setM20(-1); setM21(0); setM22(0);
    };

    const setShear = () => {
        setM00(1); setM01(1); setM02(0);
        setM10(0); setM11(1); setM12(0);
        setM20(0); setM21(0); setM22(1);
    };

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a1a);
        scene.fog = new THREE.Fog(0x1a1a1a, 100, 1000);
        sceneRef.current = scene;

        // Camera Setup
        const camera = new THREE.PerspectiveCamera(
            45,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            2000
        );
        camera.position.set(60, 40, 80);
        cameraRef.current = camera;

        // Renderer Setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Grid and Axes
        const gridHelper = new THREE.GridHelper(200, 20, 0x444444, 0x222222);
        scene.add(gridHelper);

        const axesHelper = new THREE.AxesHelper(50);
        scene.add(axesHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 50, 50);
        scene.add(dirLight);

        // Initial visualization
        updateVisualization();

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        updateVisualization();
    }, [vx, vy, vz, m00, m01, m02, m10, m11, m12, m20, m21, m22]);

    return (
        <div className="matrix-transform-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-matrix">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="panel-matrix">
                <div className="header-row">
                    <h3>Matrix Machine</h3>
                    <button
                        className="min-btn"
                        onClick={() => setMinimized(!minimized)}
                        title={minimized ? "Restore" : "Minimize"}
                    >
                        {minimized ? <FaPlus /> : <FaMinus />}
                    </button>
                </div>

                {!minimized && (
                    <div className="panel-content-matrix">
                        {/* Input Vector */}
                        <span className="section-title-matrix text-yellow">1. Input Vector (v)</span>
                        <div className="input-group-matrix">
                            <label className="color-x">X</label>
                            <input type="number" value={vx} onChange={(e) => setVx(parseFloat(e.target.value) || 0)} />
                            <label className="color-y">Y</label>
                            <input type="number" value={vy} onChange={(e) => setVy(parseFloat(e.target.value) || 0)} />
                            <label className="color-z">Z</label>
                            <input type="number" value={vz} onChange={(e) => setVz(parseFloat(e.target.value) || 0)} />
                        </div>

                        {/* Matrix Input */}
                        <span className="section-title-matrix">2. Transformation Matrix (M)</span>
                        <div className="matrix-container">
                            <div className="matrix-bracket">[</div>
                            <div className="matrix-grid">
                                <div className="matrix-row-input">
                                    <input type="number" className="matrix-input" value={m00} onChange={(e) => setM00(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m01} onChange={(e) => setM01(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m02} onChange={(e) => setM02(parseFloat(e.target.value) || 0)} />
                                </div>
                                <div className="matrix-row-input">
                                    <input type="number" className="matrix-input" value={m10} onChange={(e) => setM10(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m11} onChange={(e) => setM11(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m12} onChange={(e) => setM12(parseFloat(e.target.value) || 0)} />
                                </div>
                                <div className="matrix-row-input">
                                    <input type="number" className="matrix-input" value={m20} onChange={(e) => setM20(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m21} onChange={(e) => setM21(parseFloat(e.target.value) || 0)} />
                                    <input type="number" className="matrix-input" value={m22} onChange={(e) => setM22(parseFloat(e.target.value) || 0)} />
                                </div>
                            </div>
                            <div className="matrix-bracket">]</div>
                        </div>

                        {/* Presets */}
                        <div className="btn-group-matrix">
                            <button className="preset-btn-matrix" onClick={setIdentity}>Identity</button>
                            <button className="preset-btn-matrix" onClick={setScale2x}>Scale 2x</button>
                            <button className="preset-btn-matrix" onClick={setRotateY}>Rot Y 90°</button>
                            <button className="preset-btn-matrix" onClick={setShear}>Shear</button>
                        </div>

                        {/* Results */}
                        <div className="results-matrix">
                            <span className="section-title-matrix text-cyan" style={{ marginTop: 0 }}>3. Output Result (M × v)</span>
                            <div className="result-row-matrix">X: <span className="result-val-matrix highlight">{resX.toFixed(2)}</span></div>
                            <div className="result-row-matrix">Y: <span className="result-val-matrix highlight">{resY.toFixed(2)}</span></div>
                            <div className="result-row-matrix">Z: <span className="result-val-matrix highlight">{resZ.toFixed(2)}</span></div>
                        </div>

                        <button onClick={updateVisualization} className="update-btn-matrix">Apply Transformation</button>

                        <div className="instructions-matrix">
                            The Matrix multiplies the Input Vector to create the Output Vector.<br /><br />
                            Left Click: Rotate | Scroll: Zoom
                        </div>
                    </div>
                )}
            </div>

            <div ref={mountRef} className="canvas-container-matrix" />
        </div>
    );
};

export default MatrixTransformation3D;
