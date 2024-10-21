import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    // Display a loading spinner while fetching posts
    if (loading) {
        return <Spinner />;
    }

    // Check if there are any posts to display
    if (!posts || posts.length === 0) {
        return <div>No posts available.</div>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {/* Add any additional post details you want to display */}
                </div>
            ))}
        </div>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
