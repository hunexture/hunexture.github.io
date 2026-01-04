import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './GradientDescentVisualizer.css';

const GradientDescentVisualizer = () => {
    const navigate = useNavigate();
    const mount3DRef = useRef(null);
    const canvas2DRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const markerRef = useRef(null);
    const pathLineRef = useRef(null);
    const animationRef = useRef(null);

    // State
    const [w, setW] = useState(-1);
    const [b, setB] = useState(4);
    const [loss, setLoss] = useState(0);
    const [lr, setLr] = useState(0.01);
    const [isDescending, setIsDescending] = useState(false);
    const [steps, setSteps] = useState(0);
    const [history, setHistory] = useState([]);

    // Constants
    const dataPoints = [
        { x: -1, y: -0.8 },
        { x: 0, y: 1.2 },
        { x: 1, y: 3.1 },
        { x: 2, y: 4.8 },
        { x: 3, y: 7.2 }
    ];

    const wMin = -1, wMax = 5;
    const bMin = -5, bMax = 5;
    const MAX_PATH_POINTS = 1000;

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

    // Calculate Gradients
    const calculateGradients = (weight, bias) => {
        let dw = 0;
        let db = 0;
        const N = dataPoints.length;

        for (let p of dataPoints) {
            const yPred = weight * p.x + bias;
            const error = p.y - yPred;
            dw += -2 * error * p.x;
            db += -2 * error;
        }

        return { dw: dw / N, db: db / N };
    };

    // Text Sprite Function
    const makeTextSprite = (message, x, y, z) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = "Bold 24px Arial";
        const metrics = context.measureText(message);

        context.fillStyle = "rgba(255, 255, 255, 1.0)";
        context.fillText(message, 0, 24);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(4, 2, 1);
        sprite.position.set(x, y, z);
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

        // Axes
        const origin = toScreen(0, 0, width, height);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, origin.y); ctx.lineTo(width, origin.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(origin.x, 0); ctx.lineTo(origin.x, height); ctx.stroke();

        // Data Points
        dataPoints.forEach(p => {
            const pos = toScreen(p.x, p.y, width, height);
            ctx.fillStyle = '#60a5fa';
            ctx.beginPath(); ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2); ctx.fill();
        });

        // Regression Line
        const startX = -2, endX = 4;
        const startY = w * startX + b;
        const endY = w * endX + b;
        const p1 = toScreen(startX, startY, width, height);
        const p2 = toScreen(endX, endY, width, height);

        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();

        // Residuals
        ctx.strokeStyle = '#f87171';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        dataPoints.forEach(p => {
            const predictedY = w * p.x + b;
            const actualPos = toScreen(p.x, p.y, width, height);
            const predictedPos = toScreen(p.x, predictedY, width, height);
            ctx.beginPath(); ctx.moveTo(actualPos.x, actualPos.y); ctx.lineTo(predictedPos.x, predictedPos.y); ctx.stroke();
        });
        ctx.setLineDash([]);
    };

    // Initialize 3D Scene
    useEffect(() => {
        if (!mount3DRef.current) return;

        const container = mount3DRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#0f172a');
        scene.fog = new THREE.Fog('#0f172a', 10, 60);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(10, 14, 14);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        // Grid
        const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        scene.add(gridHelper);

        // Labels
        scene.add(makeTextSprite("Weight (w)", 8, 0, 0));
        scene.add(makeTextSprite("Bias (b)", 0, 0, 8));
        scene.add(makeTextSprite("Loss", 0, 8, 0));

        // Create Loss Surface
        const segments = 50;
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

            const t = Math.min(lossVal / 25, 1);
            colorObject.setHSL(0.66 - (t * 0.66), 1.0, 0.5);
            colors.push(colorObject.r, colorObject.g, colorObject.b);
        }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeVertexNormals();

        const surface = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.4 })
        );
        surface.rotation.x = -Math.PI / 2;
        surface.position.x = (wMax + wMin) / 2;
        surface.position.z = (bMax + bMin) / 2;
        scene.add(surface);

        // Wireframe
        const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05 })
        );
        wireframe.rotation.x = -Math.PI / 2;
        wireframe.position.copy(surface.position);
        scene.add(wireframe);

        // Marker
        const marker = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 32, 32),
            new THREE.MeshPhongMaterial({ color: 0xffea00, emissive: 0xff0000, emissiveIntensity: 0.2 })
        );
        scene.add(marker);
        markerRef.current = marker;

        // Path Trail
        const pathGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(MAX_PATH_POINTS * 3);
        pathGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pathGeometry.setDrawRange(0, 0);
        const pathLine = new THREE.Line(
            pathGeometry,
            new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 })
        );
        scene.add(pathLine);
        pathLineRef.current = pathLine;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
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

        // Initial loss calculation
        const initialLoss = calculateMSE(w, b);
        setLoss(initialLoss);
        setHistory([{ w, b, loss: initialLoss }]);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    // Update visuals when state changes
    useEffect(() => {
        // Update 3D Marker
        if (markerRef.current) {
            markerRef.current.position.set(w, loss, b);
        }

        // Update Path Trail
        if (pathLineRef.current && history.length > 0) {
            const positions = pathLineRef.current.geometry.attributes.position.array;
            for (let i = 0; i < history.length && i < MAX_PATH_POINTS; i++) {
                positions[i * 3] = history[i].w;
                positions[i * 3 + 1] = history[i].loss + 0.05;
                positions[i * 3 + 2] = history[i].b;
            }
            pathLineRef.current.geometry.setDrawRange(0, history.length);
            pathLineRef.current.geometry.attributes.position.needsUpdate = true;
        }

        draw2D();
    }, [w, b, loss, history]);

    // Gradient Descent Step
    const stepGradientDescent = () => {
        const grads = calculateGradients(w, b);

        const newW = w - (lr * grads.dw);
        const newB = b - (lr * grads.db);
        const newLoss = calculateMSE(newW, newB);

        setW(newW);
        setB(newB);
        setLoss(newLoss);
        setSteps(prev => prev + 1);
        setHistory(prev => [...prev, { w: newW, b: newB, loss: newLoss }]);

        // Auto-stop if converged
        if (Math.abs(grads.dw) < 0.001 && Math.abs(grads.db) < 0.001) {
            setIsDescending(false);
            console.log("Converged!");
            return false;
        }

        return true;
    };

    // Animation loop for gradient descent
    useEffect(() => {
        if (isDescending) {
            animationRef.current = setTimeout(() => {
                const shouldContinue = stepGradientDescent();
                if (!shouldContinue) {
                    setIsDescending(false);
                }
            }, 50);
        }

        return () => {
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, [isDescending, w, b, lr]);

    // Handlers
    const handleManualChange = (newW, newB) => {
        if (isDescending) setIsDescending(false);
        setW(newW);
        setB(newB);
        const newLoss = calculateMSE(newW, newB);
        setLoss(newLoss);
        setHistory([{ w: newW, b: newB, loss: newLoss }]);
        setSteps(0);
    };

    const handleStart = () => {
        setIsDescending(true);
    };

    const handleStop = () => {
        setIsDescending(false);
    };

    const handleReset = () => {
        setIsDescending(false);
        setW(-1);
        setB(4);
        const newLoss = calculateMSE(-1, 4);
        setLoss(newLoss);
        setSteps(0);
        setHistory([{ w: -1, b: 4, loss: newLoss }]);
    };

    return (
        <div className="gradient-descent-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-gd">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="viz-split-gd">
                <div className="view-3d-gd">
                    <div className="view-label-gd">3D Loss Landscape (Gradient Descent)</div>
                    <div ref={mount3DRef} className="canvas-3d-gd" />
                </div>

                <div className="view-2d-gd">
                    <div className="view-label-gd">2D Data Fit</div>
                    <canvas ref={canvas2DRef} className="canvas-2d-gd" />
                </div>
            </div>

            <div className="controls-gd">
                {/* Manual Controls */}
                <div className="control-panel-gd">
                    <h1>1. Manual Exploration</h1>
                    <p>Move the sliders to position the walker.</p>

                    <div className="slider-group-gd">
                        <div className="slider-header-gd">
                            <label>Weight (w): <span className="val-w-gd">{w.toFixed(3)}</span></label>
                        </div>
                        <input
                            type="range"
                            min="-1"
                            max="5"
                            step="0.1"
                            value={w}
                            onChange={(e) => handleManualChange(parseFloat(e.target.value), b)}
                        />
                    </div>

                    <div className="slider-group-gd">
                        <div className="slider-header-gd">
                            <label>Bias (b): <span className="val-b-gd">{b.toFixed(3)}</span></label>
                        </div>
                        <input
                            type="range"
                            min="-5"
                            max="5"
                            step="0.1"
                            value={b}
                            onChange={(e) => handleManualChange(w, parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Gradient Descent Controls */}
                <div className="control-panel-gd border-left-gd">
                    <h1>2. Gradient Descent (The Walker)</h1>
                    <p>Let math find the bottom of the valley automatically.</p>

                    <div className="slider-group-gd">
                        <div className="slider-header-gd">
                            <label>Learning Rate (Step Size): <span className="val-lr-gd">{lr.toFixed(3)}</span></label>
                        </div>
                        <input
                            type="range"
                            min="0.001"
                            max="0.2"
                            step="0.001"
                            value={lr}
                            onChange={(e) => setLr(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className="button-group-gd">
                        {!isDescending ? (
                            <button onClick={handleStart} className="btn-gd btn-primary-gd">Start Descent</button>
                        ) : (
                            <button onClick={handleStop} className="btn-gd btn-danger-gd">Stop</button>
                        )}
                        <button onClick={handleReset} className="btn-gd btn-secondary-gd">Reset</button>
                    </div>
                </div>

                {/* Stats */}
                <div className="stats-panel-gd">
                    <div className="stat-box-gd border-red">
                        <div className="stat-value-gd text-red">{loss.toFixed(3)}</div>
                        <div className="stat-label-gd">MSE (Loss)</div>
                    </div>
                    <div className="stat-box-gd border-purple">
                        <div className="stat-value-gd text-purple">{steps}</div>
                        <div className="stat-label-gd">Steps Taken</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientDescentVisualizer;
