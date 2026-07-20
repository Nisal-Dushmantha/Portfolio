import React, { useRef, useEffect } from 'react';

const defaultOptions = {
  particleCount: 60,
  maxSize: 3,
  maxVelocity: 0.6,
  linkDistance: 120,
  color: '255,59,48', // red tone (r,g,b)
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const Particles = ({ particleCount, color, maxSize, maxVelocity, linkDistance }) => {
  const canvasRef = useRef(null);
  const options = { ...defaultOptions, particleCount, color, maxSize, maxVelocity, linkDistance };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let animationId;

    const particles = [];

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < options.particleCount; i++) {
        particles.push({
          x: random(0, w),
          y: random(0, h),
          vx: random(-options.maxVelocity, options.maxVelocity),
          vy: random(-options.maxVelocity, options.maxVelocity),
          r: random(1, options.maxSize),
          alpha: random(0.3, 0.9),
        });
      }
    };

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // draw links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < options.linkDistance) {
            const linkAlpha = (1 - dist / options.linkDistance) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${options.color},${linkAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${options.color},${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }
    };

    const tick = () => {
      update();
      draw();
      animationId = requestAnimationFrame(tick);
    };

    // initialize
    createParticles();
    animationId = requestAnimationFrame(tick);

    // handle resize
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener('resize', resize);
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', resize);
    };
  }, [particleCount, color, maxSize, maxVelocity, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
      aria-hidden
    />
  );
};

export default Particles;
