import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './GradientDescent3D.css';

const GradientDescent3D = () => {
    const navigate = useNavigate();
    const mount3DRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const agentMeshRef = useRef(null);
    const trailMeshRef = useRef(null);
    const lossSurfaceRef = useRef(null);
    const animationFrameRef = useRef(null);
    const lastTimeRef = useRef(0);

    // State
    const [learningRate, setLearningRate] = useState(0.01);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [history, setHistory] = useState([]);
    const [isUnnormalized, setIsUnnormalized] = useState(false);

    const maxSteps = 100;
    const initialW = 0.0;
    const initialB = -2.0;
    const frameInterval = 50;

    // Base Data
    const BASE_X = [1, 2, 3, 4, 5];
    const BASE_Y = [2, 4, 6, 8, 10];

    const getData = () => {
        const scale = isUnnormalized ? 3 : 1;
        const X = BASE_X.map(x => x * scale);
        const Y = BASE_Y.map(y => y * scale);
        return { X, Y };
    };

    const calculateMSE = (w, b) => {
        const { X, Y } = getData();
        let errorSum = 0;
        const n = X.length;
        for (let i = 0; i < n; i++) {
            const prediction = w * X[i] + b;
            errorSum += (Y[i] - prediction) ** 2;
        }
        return errorSum / n;
    };

    const stepGradient = (w, b, lr) => {
        const { X, Y } = getData();
        let dw = 0;
        let db = 0;
        const n = X.length;
        for (let i = 0; i < n; i++) {
            const prediction = w * X[i] + b;
            const error = Y[i] - prediction;
            dw += -2 * X[i] * error;
            db += -2 * error;
        }
        return {
            newW: w - (lr * dw) / n,
            newB: b - (lr * db) / n,
        };
    };

    const calculateHistory = () => {
        let w = initialW;
        let b = initialB;
        const newHistory = [];

        newHistory.push({ w, b, cost: calculateMSE(w, b) });

        for (let i = 0; i < maxSteps; i++) {
            const update = stepGradient(w, b, learningRate);
            w = update.newW;
            b = update.newB;
            newHistory.push({ w, b, cost: calculateMSE(w, b) });
        }

        setHistory(newHistory);
    };

    const createLossSurface = (scene) => {
        if (lossSurfaceRef.current) {
            scene.remove(lossSurfaceRef.current);
            lossSurfaceRef.current.geometry.dispose();
            lossSurfaceRef.current.material.dispose();
        }

        const wRange = { min: -1, max: 5, steps: 40 };
        const bRange = { min: -3, max: 3, steps: 40 };

        const positions = [];
        const colors = [];
        const indices = [];

        const visualScale = isUnnormalized ? 0.015 : 0.1;

        for (let i = 0; i <= wRange.steps; i++) {
            for (let j = 0; j <= bRange.steps; j++) {
                const w = wRange.min + (i / wRange.steps) * (wRange.max - wRange.min);
                const b = bRange.min + (j / bRange.steps) * (bRange.max - bRange.min);
                const cost = calculateMSE(w, b);
                const visualY = Math.min(cost * visualScale, 8);

                positions.push(w, visualY, b);

                const colorScale = isUnnormalized ? 0.002 : 0.02;
                const color = new THREE.Color().setHSL(0.6 - Math.min(cost * colorScale, 0.6), 1, 0.5);
                colors.push(color.r, color.g, color.b);
            }
        }

        const rowSize = bRange.steps + 1;
        for (let i = 0; i < wRange.steps; i++) {
            for (let j = 0; j < bRange.steps; j++) {
                const a = i * rowSize + j;
                const b = i * rowSize + j + 1;
                const c = (i + 1) * rowSize + j;
                const d = (i + 1) * rowSize + j + 1;
                indices.push(a, b, d);
                indices.push(a, d, c);
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            side: THREE.DoubleSide,
            flatShading: true,
            transparent: true,
            opacity: 0.8
        });

        const mesh = new THREE.Mesh(geometry, material);

        const wireGeo = new THREE.WireframeGeometry(geometry);
        const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
        const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
        mesh.add(wireMesh);

        scene.add(mesh);
        lossSurfaceRef.current = mesh;
    };

    const createAxis = (start, end, colorHex) => {
        const pStart = new THREE.Vector3(...start);
        const pEnd = new THREE.Vector3(...end);
        const direction = new THREE.Vector3().subVectors(pEnd, pStart);
        const length = direction.length();
        const pos = new THREE.Vector3().addVectors(pStart, pEnd).multiplyScalar(0.5);

        const group = new THREE.Group();
        group.position.copy(pos);
        group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

        const cylinder = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, length, 8),
            new THREE.MeshBasicMaterial({ color: colorHex })
        );
        group.add(cylinder);

        const cone = new THREE.Mesh(
            new THREE.ConeGeometry(0.08, 0.2, 12),
            new THREE.MeshBasicMaterial({ color: colorHex })
        );
        cone.position.y = length / 2;
        group.add(cone);

        return group;
    };

    // Initialize 3D Scene
    useEffect(() => {
        if (!mount3DRef.current) return;

        const container = mount3DRef.current;
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            50,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );
        camera.position.set(8, 6, 8);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(2, 0, 0);
        controls.enableDamping = true;
        controls.maxPolarAngle = Math.PI / 2 - 0.1;
        controlsRef.current = controls;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // Grid
        const grid = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        grid.position.y = -0.05;
        scene.add(grid);

        // Axes
        scene.add(createAxis([0, 0, 0], [5, 0, 0], 0xff0000)); // W (Red)
        scene.add(createAxis([0, 0, 0], [0, 0, 3], 0x0000ff)); // B (Blue)
        scene.add(createAxis([0, 0, 0], [0, 5, 0], 0x00ff00)); // Cost (Green)

        // Agent
        const agentMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0xff00ff, emissiveIntensity: 0.5 })
        );
        scene.add(agentMesh);
        agentMeshRef.current = agentMesh;

        // Trail
        const MAX_POINTS = 105;
        const trailGeometry = new THREE.BufferGeometry();
        const trailPositions = new Float32Array(MAX_POINTS * 3);
        trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
        const trailMesh = new THREE.Line(
            trailGeometry,
            new THREE.LineBasicMaterial({ color: 0xff00ff })
        );
        scene.add(trailMesh);
        trailMeshRef.current = trailMesh;

        // Initial setup
        calculateHistory();
        createLossSurface(scene);

        // Handle resize
        const handleResize = () => {
            if (!mount3DRef.current) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    // Update visuals when step changes
    useEffect(() => {
        if (history.length === 0) return;

        const safeStep = Math.min(currentStep, history.length - 1);
        const current = history[safeStep];

        const visualScale = isUnnormalized ? 0.015 : 0.1;
        const visualY = Math.min(current.cost * visualScale, 8);

        // Move Ball
        if (agentMeshRef.current) {
            agentMeshRef.current.position.set(current.w, visualY, current.b);
        }

        // Update Trail
        if (trailMeshRef.current) {
            const drawCount = safeStep + 1;
            const posAttribute = trailMeshRef.current.geometry.attributes.position;

            for (let i = 0; i < drawCount; i++) {
                const h = history[i];
                const hY = Math.min(h.cost * visualScale, 8) + 0.05;
                posAttribute.setXYZ(i, h.w, hY, h.b);
            }

            trailMeshRef.current.geometry.setDrawRange(0, drawCount);
            posAttribute.needsUpdate = true;
        }
    }, [currentStep, history, isUnnormalized]);

    // Recalculate when parameters change
    useEffect(() => {
        calculateHistory();
        setCurrentStep(0);
        setIsPlaying(false);

        if (sceneRef.current) {
            createLossSurface(sceneRef.current);
        }
    }, [learningRate, isUnnormalized]);

    // Animation loop
    useEffect(() => {
        const gameLoop = (timestamp) => {
            if (isPlaying) {
                if (timestamp - lastTimeRef.current > frameInterval) {
                    if (currentStep < maxSteps) {
                        setCurrentStep(prev => prev + 1);
                    } else {
                        setIsPlaying(false);
                    }
                    lastTimeRef.current = timestamp;
                }
            }

            if (controlsRef.current) controlsRef.current.update();
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(gameLoop);
        };

        animationFrameRef.current = requestAnimationFrame(gameLoop);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPlaying, currentStep]);

    const handlePlayPause = () => {
        if (currentStep >= maxSteps) {
            setCurrentStep(0);
        }
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        setIsPlaying(false);
        setCurrentStep(0);
    };

    const current = history[Math.min(currentStep, history.length - 1)] || { w: 0, b: 0, cost: 0 };
    const isExploded = !isFinite(current.cost) || current.cost > 10000;

    // 2D Chart rendering
    const render2DChart = () => {
        const dataScale = isUnnormalized ? 3 : 1;
        const { X, Y } = getData();
        const xMax = 6 * dataScale;

        const xScale = (val) => 20 + (val / xMax) * 240;
        const yScale = (val) => 160 - (val / (12 * dataScale)) * 140;

        return (
            <svg width="100%" height="180" viewBox="0 0 280 180">
                <line x1="20" y1="160" x2="260" y2="160" stroke="#666" strokeWidth="2" />
                <line x1="20" y1="160" x2="20" y2="20" stroke="#666" strokeWidth="2" />

                {X.map((x, i) => (
                    <circle key={i} cx={xScale(x)} cy={yScale(Y[i])} r="4" fill="#4ade80" />
                ))}

                <line
                    x1={xScale(0)}
                    y1={yScale(current.b)}
                    x2={xScale(xMax)}
                    y2={yScale(current.w * xMax + current.b)}
                    stroke="#ff00ff"
                    strokeWidth="2"
                    strokeDasharray="4"
                />

                <text x="140" y="180" fill="#888" fontSize="10" textAnchor="middle">Size (x)</text>
                <text x="10" y="90" fill="#888" fontSize="10" transform="rotate(-90, 10, 90)">Price (y)</text>
            </svg>
        );
    };

    return (
        <div className="gd3d-container">
            <button onClick={() => navigate('/blog/linear-algebra')} className="back-button-gd3d">
                <FaArrowLeft /> Back to Linear Algebra
            </button>

            <div className="canvas-container-gd3d">
                <div className="overlay-gd3d">
                    <h1>Gradient Descent Visualizer</h1>
                    <p>Visualizing how the machine "learns" weights (w) and bias (b) by minimizing Error.</p>
                    <div className="goal-text">Goal: Find the bottom of the valley.</div>
                    <div className="legend-gd3d">
                        <span style={{ color: '#f87171' }}>Red: Weight (x)</span>
                        <span style={{ color: '#60a5fa' }}>Blue: Bias (z)</span>
                        <span style={{ color: '#4ade80' }}>Green: Loss (y)</span>
                    </div>
                    {isUnnormalized && (
                        <div className="warning-box-gd3d">
                            <strong>Unnormalized Data Mode:</strong><br />
                            Notice the deep, narrow valley. The "mountain" has been stretched. Standard Learning Rates may cause the ball to bounce wildly (diverge)!
                        </div>
                    )}
                </div>
                <div ref={mount3DRef} className="canvas-3d-gd3d" />
            </div>

            <div className="sidebar-gd3d">
                <div className="chart-container-gd3d">
                    <div className="chart-header-gd3d">
                        <span>Model Fit (2D)</span>
                        <span>Epoch: {currentStep}</span>
                    </div>
                    {render2DChart()}
                    <div className="chart-params">
                        <span>w: {current.w.toFixed(2)}</span>
                        <span>b: {current.b.toFixed(2)}</span>
                    </div>
                </div>

                <div className="controls-gd3d">
                    <div className="toggle-group-gd3d">
                        <div>
                            <div className="toggle-title">UNNORMALIZED DATA</div>
                            <div className="toggle-subtitle">Simulate large inputs</div>
                        </div>
                        <label className="toggle-switch-gd3d">
                            <input
                                type="checkbox"
                                checked={isUnnormalized}
                                onChange={(e) => setIsUnnormalized(e.target.checked)}
                            />
                            <span className="slider-toggle"></span>
                        </label>
                    </div>

                    <div className="btn-group-gd3d">
                        <button onClick={handlePlayPause} className={`btn-gd3d ${isPlaying ? 'btn-pause' : 'btn-play'}`}>
                            {isPlaying ? 'Pause' : (currentStep >= maxSteps ? 'Restart' : 'Train (Play)')}
                        </button>
                        <button onClick={handleReset} className="btn-gd3d btn-reset">Reset</button>
                    </div>

                    <div className="slider-group-gd3d">
                        <label>Learning Rate (Step Size)</label>
                        <input
                            type="range"
                            min="0.001"
                            max="0.08"
                            step="0.001"
                            value={learningRate}
                            onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                        />
                        <div className="slider-labels-gd3d">
                            <span>0.001</span>
                            <span className="lr-value">{learningRate.toFixed(3)}</span>
                            <span>0.08</span>
                        </div>
                        <p className="slider-hint">Try increasing! Too high = chaos.</p>
                    </div>

                    <div className="stats-gd3d">
                        <div className="stat-row-gd3d">
                            <span>Step:</span>
                            <span>{currentStep} / {maxSteps}</span>
                        </div>
                        <div className="stat-row-gd3d">
                            <span>Cost (MSE):</span>
                            <span className={isExploded ? 'val-danger' : (current.cost < 0.5 ? 'val-good' : 'val-bad')}>
                                {isExploded ? 'EXPLODED' : current.cost.toFixed(4)}
                            </span>
                        </div>
                        <div className="stat-row-gd3d">
                            <span>Weight (w):</span>
                            <span>{current.w.toFixed(4)}</span>
                        </div>
                        <div className="stat-row-gd3d">
                            <span>Bias (b):</span>
                            <span>{current.b.toFixed(4)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientDescent3D;
