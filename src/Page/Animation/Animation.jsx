import React, { useState, useEffect, useRef } from 'react';

const BouncingBall = () => {
 
  const FIELD_HEIGHT = 300;
  const FIELD_WIDTH = 400;
  const BALL_SIZE = 70;
  const MAX_LEFT = FIELD_WIDTH - BALL_SIZE - 2;
  const MAX_TOP = FIELD_HEIGHT - BALL_SIZE - 2;
  const VX = 1;
  const VY = 1;

  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [ballType, setBallType] = useState('none');
  const directionRef = useRef({ goRight: true, goDown: true });
  const animationRef = useRef(null);

 
  const process = () => {
    if (!isRunning) return;

    setPosition(prev => {
      let { x, y } = prev;
      const { goRight, goDown } = directionRef.current;

      if (goRight) {
        x += VX;
        if (x >= MAX_LEFT) {
          directionRef.current.goRight = false;
          x = MAX_LEFT;
        }
      } else {
        x -= VX;
        if (x <= 0) {
          directionRef.current.goRight = true;
          x = 0;
        }
      }

      if (goDown) {
        y += VY;
        if (y >= MAX_TOP) {
          directionRef.current.goDown = false;
          y = MAX_TOP;
        }
      } else {
        y -= VY;
        if (y <= 0) {
          directionRef.current.goDown = true;
          y = 0;
        }
      }

      return { x, y };
    });

    animationRef.current = requestAnimationFrame(process);
  };

  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(process);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isRunning]);

  const containerStyle = {
    border: '1px solid black',
    width: 'fit-content',
    margin: '10px auto',
    borderRadius: '10px'
  };

  const fieldStyle = {
    border: '1px solid rgb(255, 0, 0)',
    width: `${FIELD_WIDTH}px`,
    height: `${FIELD_HEIGHT}px`,
    margin: '10px',
    borderRadius: '10px',
    backgroundImage: "url('https://cdn.discordapp.com/attachments/883701887424147536/1298671826536497255/wood.jpg?ex=671a69e3&is=67191863&hm=b48856135c0344ddeae04ca9c0a4828751aead357680fdaac45223ddd3f0686a&')", // แก้ path ตรงนี้
    backgroundPosition: 'center',
    backgroundSize: '100%',
    position: 'relative'
  };

  const getBallStyle = () => {
    const baseStyle = {
      border: '1px solid rgb(0, 0, 0)',
      borderRadius: '50%',
      width: `${BALL_SIZE}px`,
      height: `${BALL_SIZE}px`,
      backgroundColor: 'coral',
      backgroundPosition: 'center',
      backgroundSize: '120%',
      position: 'absolute',
      left: position.x,
      top: position.y
    };

    switch (ballType) {
      case 'basketball':
        return {
          ...baseStyle,
          backgroundImage: "url('https://cdn.discordapp.com/attachments/883701887424147536/1298671827954176121/basketbal.png?ex=671a69e3&is=67191863&hm=5d3d9c7fe9a6cba1da9002070ff840e4208f4e5113cf23428ddaa237a542b9c1&')"
        };
      case 'football':
        return {
          ...baseStyle,
          backgroundImage: "url('https://cdn.discordapp.com/attachments/883701887424147536/1298671828541112420/football.png?ex=671a69e4&is=67191864&hm=d33e5af3c18de0d4ecdf71bc6ed7d3a7fc53cef2be2c24aafd4ae081ad4be332&')"
        };
      default:
        return {
          ...baseStyle,
          backgroundImage: 'none'
        };
    }
  };

  const controlStyle = {
    margin: '10px',
    display: 'flex',
    gap: '10px'  
  };

  const buttonStyle = {
    marginRight: '10px' 
  };

  return (
    <div style={containerStyle}>
      <div style={fieldStyle}>
        <div style={getBallStyle()} />
      </div>

      <div style={controlStyle}>
        <button
          style={buttonStyle}
          className={`btn ${isRunning ? 'btn-danger' : 'btn-success'}`}
          onClick={() => setIsRunning(!isRunning)}
        >
          <i className={`bi ${isRunning ? 'bi-pause' : 'bi-play'}`}></i>
          {isRunning ? ' PAUSE' : ' PLAY'}
        </button>

        <button 
          style={buttonStyle}
          className="btn btn-secondary"
          onClick={() => setBallType('none')}
        >
          None
        </button>

        <button 
          style={buttonStyle}
          className="btn btn-warning"
          onClick={() => setBallType('basketball')}
        >
          Basketball
        </button>

        <button 
          className="btn btn-success"
          onClick={() => setBallType('football')}
        >
          Football
        </button>
      </div>
    </div>
  );
};

export default BouncingBall;