import React, { useEffect, useRef } from 'react';

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle AI network / constellation effect
    const count = Math.min(38, Math.floor((width * height) / 35000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      color: Math.random() > 0.4 ? 'rgba(37, 99, 235, 0.45)' : 'rgba(34, 211, 238, 0.5)',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-[#080D1C]" />

      {/* Futuristic Gradient Glowing Orbs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, rgba(37,99,235,0) 70%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #22D3EE 0%, rgba(34,211,238,0) 70%)',
        }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1D4ED8 0%, rgba(29,78,216,0) 70%)',
        }}
      />

      {/* Cyber Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94A3B8 1px, transparent 1px),
            linear-gradient(to bottom, #94A3B8 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dynamic AI Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
