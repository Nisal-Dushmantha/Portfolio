import React, { useRef, useEffect } from 'react';

const defaultOptions = {
  particleCount: 50,
  maxSize: 3,
  maxVelocity: 0.5,
  linkDistance: 110,
  color: '239,68,68',
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const Particles = ({
  particleCount = defaultOptions.particleCount,
  color = defaultOptions.color,
  maxSize = defaultOptions.maxSize,
  maxVelocity = defaultOptions.maxVelocity,
  linkDistance = defaultOptions.linkDistance,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationId;
    let resizeObserver;

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let particles = [];
      let dpr = window.devicePixelRatio || 1;
      let cssWidth = canvas.offsetWidth || window.innerWidth;
      let cssHeight = canvas.offsetHeight || window.innerHeight;

      const pointer = { x: -1000, y: -1000, active: false };

      const initCanvasSize = () => {
        if (!canvas || !ctx) return;
        dpr = window.devicePixelRatio || 1;
        cssWidth = canvas.offsetWidth || window.innerWidth;
        cssHeight = canvas.offsetHeight || window.innerHeight;

        canvas.width = Math.floor(cssWidth * dpr);
        canvas.height = Math.floor(cssHeight * dpr);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      };

      const createParticles = () => {
        particles = [];
        const isMobile = cssWidth < 768;
        const count = isMobile ? Math.max(15, Math.round(particleCount * 0.4)) : particleCount;
        for (let i = 0; i < count; i++) {
          particles.push({
            x: random(0, cssWidth),
            y: random(0, cssHeight),
            vx: random(-maxVelocity, maxVelocity),
            vy: random(-maxVelocity, maxVelocity),
            r: random(1, maxSize),
            alpha: random(0.2, 0.7),
          });
        }
      };

      const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, cssWidth, cssHeight);

        const distSq = linkDistance * linkDistance;

        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const d = dx * dx + dy * dy;

            if (d < distSq) {
              const dist = Math.sqrt(d);
              const linkAlpha = (1 - dist / linkDistance) * 0.2;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${color},${linkAlpha})`;
              ctx.lineWidth = 1;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.fillStyle = `rgba(${color},${p.alpha})`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      const update = () => {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -10) p.x = cssWidth + 10;
          if (p.x > cssWidth + 10) p.x = -10;
          if (p.y < -10) p.y = cssHeight + 10;
          if (p.y > cssHeight + 10) p.y = -10;
        }
      };

      const tick = () => {
        update();
        draw();
        animationId = requestAnimationFrame(tick);
      };

      initCanvasSize();
      createParticles();
      animationId = requestAnimationFrame(tick);

      const handleResize = () => {
        initCanvasSize();
        createParticles();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
      };
    } catch (err) {
      console.warn('Particles canvas error:', err);
    }
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
      aria-hidden="true"
    />
  );
};

export default Particles;
