


import React, { useRef, useState, useEffect } from 'react';

const Circle = () => {
  const canvasRef = useRef(null);
  const [circles, setCircles] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = randomIntFromInterval(10, 50);
    const color = `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)})`;

    setCircles((prevCircles) => [
      ...prevCircles,
      { x, y, radius, color }
    ]);
  };

  const detectOverlap = (circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distanceSquared = dx * dx + dy * dy;
    const radiiSum = circle1.radius + circle2.radius;
    const radiiSumSquared = radiiSum * radiiSum;
  
    return distanceSquared < radiiSumSquared;
  };
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
      let overlapping = false;

      for (const otherCircle of circles) {
        if (circle !== otherCircle && detectOverlap(circle, otherCircle)) {
          overlapping = true;
          break;
        }
      }

      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = overlapping ? 'red' : circle.color;
      ctx.fill();
      ctx.closePath();
    });
  }, [circles]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
        onClick={handleCanvasClick}
      />
      <p>Click on the canvas to draw circles. Overlapping circles turn red.</p>
    </div>
  );
};

export default Circle;
