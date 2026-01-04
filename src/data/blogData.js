export const blogData = {
    'linear-algebra': {
        title: 'Linear Algebra',
        description: 'Explore fundamental concepts of Linear Algebra through interactive 3D visualizations',
        posts: [
            {
                id: '3d-vector-representation',
                title: '3D Vector Representation',
                slug: '3d-vector-representation',
                description: 'Interactive 3D visualization of vectors in three-dimensional space. Understand vector components and their geometric representation.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['vectors', '3d', 'visualization', 'mathematics'],
                component: 'VectorVisualization3D'
            },
            {
                id: '3d-dot-product',
                title: '3D Dot Product',
                slug: '3d-dot-product',
                description: 'Explore the dot product of vectors in 3D space. Visualize how the angle between vectors affects their dot product.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['dot product', 'vectors', '3d', 'mathematics'],
                component: 'DotProduct3D'
            },
            {
                id: 'matrix-transformation',
                title: 'Matrix Transformation',
                slug: 'matrix-transformation',
                description: 'Discover how matrices transform vectors in 3D space. Experiment with different transformation matrices and see the results in real-time.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['matrix', 'transformation', '3d', 'linear algebra'],
                component: 'MatrixTransformation3D'
            },
            {
                id: 'loss-function-mse',
                title: 'Loss Function Visualizer (MSE)',
                slug: 'loss-function-mse',
                description: 'Understand Mean Squared Error through interactive 3D loss landscape and 2D regression visualization. Adjust parameters to minimize the error.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['loss function', 'MSE', 'machine learning', 'optimization'],
                component: 'LossFunctionMSE'
            },
            {
                id: 'gradient-descent',
                title: 'Gradient Descent Visualizer',
                slug: 'gradient-descent',
                description: 'Watch gradient descent in action! See how the algorithm automatically finds the minimum of the loss function by following the gradient downhill.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['gradient descent', 'optimization', 'machine learning', 'animation'],
                component: 'GradientDescentVisualizer'
            },
            {
                id: 'gradient-descent-3d',
                title: 'Gradient Descent 3D (Normalization)',
                slug: 'gradient-descent-3d',
                description: 'Advanced gradient descent visualization showing the critical importance of data normalization. Toggle between normalized and unnormalized data to see the dramatic effects!',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['gradient descent', 'normalization', 'data scaling', 'machine learning'],
                component: 'GradientDescent3D'
            },
            {
                id: 'conditional-probability-3d',
                title: 'Conditional Probability 3D',
                slug: 'conditional-probability-3d',
                description: 'Understand conditional probability P(A|B) through an interactive 3D particle system. Step through the logic of restricting sample spaces.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['conditional probability', 'probability', 'statistics', '3d visualization'],
                component: 'ConditionalProbability3D'
            },
            {
                id: 'logistic-regression-3d',
                title: '3D Logistic Regression Explorer',
                slug: 'logistic-regression-3d',
                description: 'Explore logistic regression in 3D! See how the sigmoid function creates a decision boundary. Compare linear vs sigmoid modes and understand why logistic regression works for classification.',
                date: '2026-01-04',
                category: 'Linear Algebra',
                tags: ['logistic regression', 'sigmoid', 'classification', 'machine learning'],
                component: 'LogisticRegression3D'
            }
        ]
    }
};

export const getAllBlogPosts = () => {
    const allPosts = [];
    Object.keys(blogData).forEach(category => {
        blogData[category].posts.forEach(post => {
            allPosts.push({ ...post, categorySlug: category });
        });
    });
    return allPosts;
};

export const getBlogPostBySlug = (categorySlug, postSlug) => {
    const category = blogData[categorySlug];
    if (!category) return null;
    return category.posts.find(post => post.slug === postSlug);
};

export const getBlogCategory = (categorySlug) => {
    return blogData[categorySlug] || null;
};
