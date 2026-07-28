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

const Particles = ({
  particleCount = defaultOptions.particleCount,
  mobileParticleCount,
  color = defaultOptions.color,
  maxSize = defaultOptions.maxSize,
  mobileMaxSize,
  maxVelocity = defaultOptions.maxVelocity,
  mobileMaxVelocity,
  linkDistance = defaultOptions.linkDistance,
  mobileLinkDistance,
  enableTouch = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let particles = [];
    let dpr = window.devicePixelRatio || 1;
    let cssWidth = canvas.offsetWidth || window.innerWidth;
    let cssHeight = canvas.offsetHeight || window.innerHeight;

    // Track active pointer position (mouse or touch)
    const pointer = { x: -1000, y: -1000, active: false };

    const getSettings = (w) => {
      const isMobile = w < 768;
      const count = isMobile
        ? (mobileParticleCount ?? Math.max(15, Math.round(particleCount * 0.42)))
        : particleCount;
      const dist = isMobile
        ? (mobileLinkDistance ?? Math.round(linkDistance * 0.65))
        : linkDistance;
      const size = isMobile
        ? (mobileMaxSize ?? Math.max(1.5, maxSize * 0.75))
        : maxSize;
      const vel = isMobile
        ? (mobileMaxVelocity ?? maxVelocity * 0.7)
        : maxVelocity;

      return { isMobile, count, dist, size, vel };
    };

    let settings = getSettings(cssWidth);

    const initCanvasSize = () => {
      dpr = window.devicePixelRatio || 1;
      cssWidth = canvas.offsetWidth || window.innerWidth;
      cssHeight = canvas.offsetHeight || window.innerHeight;

      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      settings = getSettings(cssWidth);
      particles = [];
      for (let i = 0; i < settings.count; i++) {
        particles.push({
          x: random(0, cssWidth),
          y: random(0, cssHeight),
          vx: random(-settings.vel, settings.vel),
          vy: random(-settings.vel, settings.vel),
          r: random(1, settings.size),
          alpha: random(0.3, 0.85),
        });
      }
    };

    let lastWidth = cssWidth;
    let lastIsMobile = settings.isMobile;

    const handleResize = () => {
      initCanvasSize();
      const currentSettings = getSettings(cssWidth);

      // Re-create particles if mobile breakpoint changed or width changed significantly (> 100px)
      if (currentSettings.isMobile !== lastIsMobile || Math.abs(cssWidth - lastWidth) > 100) {
        lastWidth = cssWidth;
        lastIsMobile = currentSettings.isMobile;
        createParticles();
      } else {
        // Clamp existing particles inside new dimensions without resetting positions
        for (let p of particles) {
          p.x = Math.min(p.x, cssWidth);
          p.y = Math.min(p.y, cssHeight);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      const linkDist = settings.dist;
      const linkDistSq = linkDist * linkDist;

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < linkDistSq) {
            const dist = Math.sqrt(distSq);
            const linkAlpha = (1 - dist / linkDist) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color},${linkAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections to active touch / pointer
        if (pointer.active) {
          const dx = p1.x - pointer.x;
          const dy = p1.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          const touchLinkDist = linkDist * 1.2;
          if (distSq < touchLinkDist * touchLinkDist) {
            const dist = Math.sqrt(distSq);
            const linkAlpha = (1 - dist / touchLinkDist) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color},${linkAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
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

        // Wrap around edges
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

    // Pointer events for mobile touch & desktop mouse
    const updatePointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerMove = (e) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      pointer.active = false;
    };

    initCanvasSize();
    createParticles();
    animationId = requestAnimationFrame(tick);

    // Event Listeners
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener('resize', handleResize);
    }

    if (enableTouch) {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('mouseleave', handlePointerLeave, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      window.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', handleResize);

      if (enableTouch) {
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('mouseleave', handlePointerLeave);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('touchcancel', handleTouchEnd);
      }
    };
  }, [
    particleCount,
    mobileParticleCount,
    color,
    maxSize,
    mobileMaxSize,
    maxVelocity,
    mobileMaxVelocity,
    linkDistance,
    mobileLinkDistance,
    enableTouch,
  ]);

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

