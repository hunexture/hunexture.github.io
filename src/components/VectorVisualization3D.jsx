import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './VectorVisualization3D.css';

const VectorVisualization3D = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const arrowHelperRef = useRef(null);
    const lineFloorRef = useRef(null);
    const lineVertRef = useRef(null);
    const labelsRef = useRef([]);

    const [vectorX, setVectorX] = useState(100);
    const [vectorY, setVectorY] = useState(20);
    const [vectorZ, setVectorZ] = useState(30);

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

    // Update Vector Function
    const updateVector = (x, y, z) => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Remove old arrow
        if (arrowHelperRef.current) {
            scene.remove(arrowHelperRef.current);
        }

        const origin = new THREE.Vector3(0, 0, 0);
        const vectorDest = new THREE.Vector3(x, y, z);
        const length = vectorDest.length();
        const direction = length > 0 ? vectorDest.clone().normalize() : new THREE.Vector3(0, 1, 0);

        arrowHelperRef.current = new THREE.ArrowHelper(
            direction,
            origin,
            length,
            0xffff00,
            Math.min(length * 0.2, 10),
            Math.min(length * 0.1, 5)
        );
        scene.add(arrowHelperRef.current);

        // Remove old projection lines
        if (lineFloorRef.current) scene.remove(lineFloorRef.current);
        if (lineVertRef.current) scene.remove(lineVertRef.current);

        // Floor Line
        const materialLine = new THREE.LineBasicMaterial({
            color: 0xaaaaaa,
            opacity: 0.4,
            transparent: true
        });

        const pointsFloor = [
            new THREE.Vector3(x, 0, 0),
            new THREE.Vector3(x, 0, z),
            new THREE.Vector3(0, 0, z),
            new THREE.Vector3(0, 0, 0)
        ];
        const geometryFloor = new THREE.BufferGeometry().setFromPoints(pointsFloor);
        lineFloorRef.current = new THREE.Line(geometryFloor, materialLine);
        scene.add(lineFloorRef.current);

        // Vertical Line
        const pointsVert = [
            new THREE.Vector3(x, 0, z),
            new THREE.Vector3(x, y, z)
        ];
        const geometryVert = new THREE.BufferGeometry().setFromPoints(pointsVert);
        lineVertRef.current = new THREE.Line(geometryVert, materialLine);
        scene.add(lineVertRef.current);

        // Remove old labels
        labelsRef.current.forEach(l => scene.remove(l));
        labelsRef.current = [];

        // Add new labels
        const addLabel = (text, pos, bg) => {
            const sprite = makeTextSprite(text, { fontsize: 32, backgroundColor: bg });
            sprite.position.copy(pos);
            scene.add(sprite);
            labelsRef.current.push(sprite);
        };

        addLabel(` (${x}, ${y}, ${z}) `, new THREE.Vector3(x, y + (y >= 0 ? 5 : -5), z), { r: 0, g: 0, b: 0, a: 0.6 });

        if (Math.abs(x) > 1) addLabel(`X: ${x}`, new THREE.Vector3(x / 2, 2, 0), { r: 100, g: 0, b: 0, a: 0.6 });
        if (Math.abs(z) > 1) addLabel(`Z: ${z}`, new THREE.Vector3(0, 2, z / 2), { r: 0, g: 0, b: 100, a: 0.6 });
        if (Math.abs(y) > 1) addLabel(`Y: ${y}`, new THREE.Vector3(x, y / 2, z), { r: 0, g: 100, b: 0, a: 0.6 });
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
        camera.position.set(150, 100, 200);
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

        const axesHelper = new THREE.AxesHelper(200);
        scene.add(axesHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 50, 50);
        scene.add(dirLight);

        // Initial vector
        updateVector(vectorX, vectorY, vectorZ);

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
        updateVector(vectorX, vectorY, vectorZ);
    }, [vectorX, vectorY, vectorZ]);

    const handleUpdate = () => {
        updateVector(vectorX, vectorY, vectorZ);
    };

    return (
        <div className="vector-viz-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-viz">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="panel">
                <h3>Vector Config</h3>

                <div className="input-group">
                    <label className="color-x">X:</label>
                    <input
                        type="number"
                        value={vectorX}
                        onChange={(e) => setVectorX(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="input-group">
                    <label className="color-y">Y:</label>
                    <input
                        type="number"
                        value={vectorY}
                        onChange={(e) => setVectorY(parseFloat(e.target.value) || 0)}
                    />
                </div>
                <div className="input-group">
                    <label className="color-z">Z:</label>
                    <input
                        type="number"
                        value={vectorZ}
                        onChange={(e) => setVectorZ(parseFloat(e.target.value) || 0)}
                    />
                </div>

                <button onClick={handleUpdate} className="update-btn">Update Vector</button>

                <div className="instructions">
                    Left Click: Rotate<br />
                    Right Click: Pan<br />
                    Scroll: Zoom
                </div>
            </div>

            <div ref={mountRef} className="canvas-container" />
        </div>
    );
};

export default VectorVisualization3D;
