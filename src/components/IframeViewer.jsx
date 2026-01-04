import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './IframeViewer.css';

const IframeViewer = () => {
    const navigate = useNavigate();
    const { category, slug } = useParams();

    // Map slugs to HTML files
    const htmlFileMap = {
        '3d-vector-representation': '1.3d_vector.html',
        '3d-dot-product': '2.3D_dot_product.html',
        'matrix-transformation': '3.3D_matrix_manupultion.html',
        'loss-function-mse': '4.3D_loss_fnction.html',
        'gradient-descent': '5.3d_gradint_decent.html',
        'gradient-descent-3d': '6.3D_liner_regression.html',
        'conditional-probability-3d': '7.3D_condital_probility.html',
        'logistic-regression-3d': '8.3D_logistic_regression_sigmoid.html'
    };

    const htmlFile = htmlFileMap[slug];

    if (!htmlFile) {
        return (
            <div className="iframe-viewer-container">
                <div className="error-message">
                    <h2>Visualization not found</h2>
                    <button onClick={() => navigate(`/blog/${category}`)} className="back-button-iframe">
                        <FaArrowLeft /> Back to {category}
                    </button>
                </div>
            </div>
        );
    }

    const iframeSrc = `/3d/${htmlFile}`;

    return (
        <div className="iframe-viewer-container">
            <button onClick={() => navigate(`/blog/${category}`)} className="back-button-iframe">
                <FaArrowLeft /> Back to Linear Algebra
            </button>
            <iframe
                src={iframeSrc}
                className="visualization-iframe"
                title={slug}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default IframeViewer;
