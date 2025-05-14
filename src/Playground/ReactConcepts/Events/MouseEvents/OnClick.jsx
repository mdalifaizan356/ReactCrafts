import React, { useState } from 'react';

const OnClick = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLike} style={{ 
        ...styles.button, 
        color: liked ? 'red' : 'gray',
        transform: liked ? 'scale(1.2)' : 'scale(1)'
      }}>
        ❤️
      </button>
      <span style={styles.count}>{likes}</span>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    background: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif'
  },
  button: {
    fontSize: '50px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, color 0.2s ease',
  },
  count: {
    marginTop: '10px',
    fontSize: '20px',
    color: '#333',
  }
};

export default OnClick;
