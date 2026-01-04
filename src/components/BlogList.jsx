import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogCategory } from '../data/blogData';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';
import './BlogList.css';

const BlogList = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const blogCategory = getBlogCategory(category);

    if (!blogCategory) {
        return (
            <div className="blog-list-container">
                <div className="blog-list-content">
                    <h1>Category Not Found</h1>
                    <button onClick={() => navigate('/')} className="back-button">
                        <FaArrowLeft /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handlePostClick = (postSlug) => {
        navigate(`/blog/${category}/${postSlug}`);
    };

    return (
        <div className="blog-list-container">
            <div className="blog-list-content">
                <button onClick={() => navigate('/')} className="back-button">
                    <FaArrowLeft /> Back to Home
                </button>

                <div className="blog-header">
                    <h1>{blogCategory.title}</h1>
                    <p className="blog-description">{blogCategory.description}</p>
                </div>

                <div className="blog-grid">
                    {blogCategory.posts.map((post) => (
                        <div
                            key={post.id}
                            className="blog-card"
                            onClick={() => handlePostClick(post.slug)}
                        >
                            <div className="blog-card-content">
                                <h2>{post.title}</h2>
                                <p className="blog-card-description">{post.description}</p>

                                <div className="blog-card-meta">
                                    <div className="blog-date">
                                        <FaCalendar />
                                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</span>
                                    </div>

                                    <div className="blog-tags">
                                        <FaTag />
                                        <div className="tags-list">
                                            {post.tags.slice(0, 3).map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="read-more">
                                    Read More →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
