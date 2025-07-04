import React from 'react';

export default function PostDetail({ post, onClose }) {
  return (
    <div style={{ border: '1px solid black', padding: '1rem', marginTop: '1rem' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
