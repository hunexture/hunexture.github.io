import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogData';
import IframeViewer from './IframeViewer';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPost = () => {
    const { category, slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogPostBySlug(category, slug);

    if (!post) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--background-color)',
                color: 'var(--text-color)',
                padding: '20px'
            }}>
                <h1>Blog Post Not Found</h1>
                <button
                    onClick={() => navigate(`/blog/${category}`)}
                    style={{
                        marginTop: '20px',
                        padding: '12px 24px',
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}
                >
                    <FaArrowLeft /> Back to Blog
                </button>
            </div>
        );
    }

    // All visualizations now use IframeViewer to render HTML files
    return <IframeViewer />;
};

export default BlogPost;
