import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './DotProduct3D.css';

const DotProduct3D = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const arrowARef = useRef(null);
    const arrowBRef = useRef(null);
    const labelsRef = useRef([]);

    // Vector A (Yellow - Reference)
    const [ax, setAx] = useState(50);
    const [ay, setAy] = useState(0);
    const [az, setAz] = useState(0);

    // Vector B (Cyan - Comparison)
    const [bx, setBx] = useState(30);
    const [by, setBy] = useState(40);
    const [bz, setBz] = useState(0);

    // Results
    const [dotProduct, setDotProduct] = useState(0);
    const [angle, setAngle] = useState(0);
    const [meaning, setMeaning] = useState({ text: '', color: '#aaa' });

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

        context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
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

    // Update Vector Function
    const updateVector = () => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Clear old arrows
        if (arrowARef.current) scene.remove(arrowARef.current);
        if (arrowBRef.current) scene.remove(arrowBRef.current);
        labelsRef.current.forEach(l => scene.remove(l));
        labelsRef.current = [];

        // Create Vectors
        const vecA = new THREE.Vector3(ax, ay, az);
        const vecB = new THREE.Vector3(bx, by, bz);

        // Draw Arrows
        arrowARef.current = createArrow(ax, ay, az, 0xffff00); // Yellow
        arrowBRef.current = createArrow(bx, by, bz, 0x00ffff); // Cyan
        scene.add(arrowARef.current);
        scene.add(arrowBRef.current);

        // Calculate Dot Product & Angle
        const dot = vecA.dot(vecB);
        setDotProduct(dot);

        let angleDeg = 0;
        if (vecA.length() > 0 && vecB.length() > 0) {
            const angleRad = vecA.angleTo(vecB);
            angleDeg = angleRad * (180 / Math.PI);
        }
        setAngle(angleDeg);

        // Update Meaning
        if (vecA.length() === 0 || vecB.length() === 0) {
            setMeaning({ text: "One vector has zero length.", color: "#aaa" });
        } else if (Math.abs(dot) < 0.1 || Math.abs(angleDeg - 90) < 0.1) {
            setMeaning({ text: "Perpendicular (Unrelated). Result is Zero.", color: "#aaa" });
        } else if (dot > 0) {
            setMeaning({ text: "Similar directions (Positive).", color: "#44ff44" });
        } else {
            setMeaning({ text: "Opposite directions (Negative).", color: "#ff4444" });
        }

        // Add Labels
        const labelA = makeTextSprite(" A ", { fontsize: 24, backgroundColor: { r: 100, g: 100, b: 0, a: 0.6 } });
        labelA.position.copy(vecA).multiplyScalar(1.1);
        scene.add(labelA);
        labelsRef.current.push(labelA);

        const labelB = makeTextSprite(" B ", { fontsize: 24, backgroundColor: { r: 0, g: 100, b: 100, a: 0.6 } });
        labelB.position.copy(vecB).multiplyScalar(1.1);
        scene.add(labelB);
        labelsRef.current.push(labelB);
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
        camera.position.set(100, 100, 150);
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
        const gridHelper = new THREE.GridHelper(400, 40, 0x444444, 0x222222);
        scene.add(gridHelper);

        const axesHelper = new THREE.AxesHelper(100);
        scene.add(axesHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 50, 50);
        scene.add(dirLight);

        // Initial vector
        updateVector();

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
        updateVector();
    }, [ax, ay, az, bx, by, bz]);

    return (
        <div className="dot-product-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-dot">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="panel-dot">
                <h3>Dot Product Visualizer</h3>

                <span className="section-title text-yellow">Vector A (Reference)</span>
                <div className="input-group-dot">
                    <label className="color-x">X</label>
                    <input type="number" value={ax} onChange={(e) => setAx(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="input-group-dot">
                    <label className="color-y">Y</label>
                    <input type="number" value={ay} onChange={(e) => setAy(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="input-group-dot">
                    <label className="color-z">Z</label>
                    <input type="number" value={az} onChange={(e) => setAz(parseFloat(e.target.value) || 0)} />
                </div>

                <span className="section-title text-cyan">Vector B (Comparison)</span>
                <div className="input-group-dot">
                    <label className="color-x">X</label>
                    <input type="number" value={bx} onChange={(e) => setBx(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="input-group-dot">
                    <label className="color-y">Y</label>
                    <input type="number" value={by} onChange={(e) => setBy(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="input-group-dot">
                    <label className="color-z">Z</label>
                    <input type="number" value={bz} onChange={(e) => setBz(parseFloat(e.target.value) || 0)} />
                </div>

                <div className="results">
                    <div className="result-row">
                        Dot Product: <span className="result-val highlight">{dotProduct.toFixed(2)}</span>
                    </div>
                    <div className="result-row">
                        Angle: <span className="result-val">{angle.toFixed(1)}°</span>
                    </div>
                    <div className="meaning-text" style={{ color: meaning.color }}>
                        {meaning.text}
                    </div>
                </div>

                <button onClick={updateVector} className="update-btn-dot">Update / Recalculate</button>

                <div className="instructions-dot">
                    Try setting B to [-50, 0, 0] for opposite,<br />
                    or [0, 50, 0] for perpendicular.<br /><br />
                    Left Click: Rotate | Scroll: Zoom
                </div>
            </div>

            <div ref={mountRef} className="canvas-container-dot" />
        </div>
    );
};

export default DotProduct3D;
