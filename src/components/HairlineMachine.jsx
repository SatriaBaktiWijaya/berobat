import React, { useEffect, useRef, useState } from 'react';

export default function HairlineMachine() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Target and current rotation angles for smooth interpolation (lerp)
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    // Handle high DPI display
    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let startTime = performance.now();

    const render = (time) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation
      const lerp = 0.08;
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * lerp;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * lerp;

      // Subtle harmonic idle animation if not reduced motion and not hovered
      let idleAngleY = 0;
      let idleAngleX = 0;
      if (!prefersReducedMotion) {
        const elapsed = (time - startTime) * 0.0015;
        idleAngleY = Math.sin(elapsed) * 0.05;
        idleAngleX = Math.cos(elapsed * 0.8) * 0.02;
      }

      const rotY = currentRot.current.y + idleAngleY;
      const rotX = currentRot.current.x + idleAngleX;

      // Isometric 3D Projection math
      const originX = width / 2;
      const originY = height / 2 + 30;
      const scale = Math.min(width, height) / 380;

      const project = (x, y, z) => {
        // Apply Y-axis yaw rotation
        const cosY = Math.cos(rotY + 0.55);
        const sinY = Math.sin(rotY + 0.55);
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;

        // Apply X-axis pitch rotation
        const cosX = Math.cos(rotX - 0.35);
        const sinX = Math.sin(rotX - 0.35);
        const ry = y * cosX - rz * sinX;
        const finalZ = y * sinX + rz * cosX;

        // Isometric screen coordinates
        const px = originX + rx * scale;
        const py = originY - ry * scale;
        return { x: px, y: py, z: finalZ };
      };

      // Draw helper function
      const drawLine = (p1, p2, color = '#334155', lineWidth = 1.2, lineDash = []) => {
        const a = project(p1[0], p1[1], p1[2]);
        const b = project(p2[0], p2[1], p2[2]);
        ctx.beginPath();
        ctx.setLineDash(lineDash);
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      };

      const drawBox = (x, y, z, w, h, d, color = '#334155', lineWidth = 1.2) => {
        // 8 vertices of box
        const v = [
          [x, y, z],
          [x + w, y, z],
          [x + w, y + h, z],
          [x, y + h, z],
          [x, y, z + d],
          [x + w, y, z + d],
          [x + w, y + h, z + d],
          [x, y + h, z + d],
        ];

        // 12 edges
        drawLine(v[0], v[1], color, lineWidth);
        drawLine(v[1], v[2], color, lineWidth);
        drawLine(v[2], v[3], color, lineWidth);
        drawLine(v[3], v[0], color, lineWidth);

        drawLine(v[4], v[5], color, lineWidth);
        drawLine(v[5], v[6], color, lineWidth);
        drawLine(v[6], v[7], color, lineWidth);
        drawLine(v[7], v[4], color, lineWidth);

        drawLine(v[0], v[4], color, lineWidth);
        drawLine(v[1], v[5], color, lineWidth);
        drawLine(v[2], v[6], color, lineWidth);
        drawLine(v[3], v[7], color, lineWidth);
      };

      // 1. Machine Base Platform & Feet
      drawBox(-85, -150, -45, 170, 15, 90, '#64748b', 1.4);

      // 2. Main Outer Cabinet
      drawBox(-80, -135, -40, 160, 260, 80, '#0f766e', 1.8);

      // 3. Top Header Crown with "BEROBAT" & Green Cross
      drawBox(-75, 90, -35, 150, 30, 70, '#0d9488', 1.5);
      
      // Illuminated Medical Cross on Crown
      drawLine([-8, 105, 36], [8, 105, 36], '#10b981', 2.5);
      drawLine([0, 97, 36], [0, 113, 36], '#10b981', 2.5);

      // 4. Large Glass Display Showcase Window (Left 65% of Front)
      drawBox(-72, -50, -32, 95, 135, 64, '#38bdf8', 1.2);

      // Glass reflection diagonal hairlines
      drawLine([-65, 75, 33], [-25, 45, 33], '#bae6fd', 0.8);
      drawLine([-55, 75, 33], [-15, 45, 33], '#bae6fd', 0.8);

      // Internal Medicine Shelves (3 shelves)
      [-10, 25, 60].forEach((shelfY) => {
        drawLine([-70, shelfY, -30], [20, shelfY, -30], '#cbd5e1', 1);
        drawLine([20, shelfY, -30], [20, shelfY, 30], '#cbd5e1', 1);
        drawLine([-70, shelfY, 30], [20, shelfY, 30], '#0ea5e9', 1.2);

        // Medicine boxes on shelf
        [-55, -25, 5].forEach((boxX) => {
          drawBox(boxX, shelfY + 2, 5, 16, 18, 14, '#14b8a6', 1);
        });
      });

      // 5. Right-side Interaction Console Panel
      drawBox(28, -50, -32, 45, 135, 64, '#1e293b', 1.3);

      // Interactive Touch Screen on Console
      drawBox(33, 20, 33, 35, 45, 2, '#38bdf8', 1.4);
      // Screen UI line details
      drawLine([38, 55, 35], [58, 55, 35], '#22c55e', 1.5); // header on screen
      drawLine([38, 45, 35], [63, 45, 35], '#94a3b8', 1);
      drawLine([38, 38, 35], [55, 38, 35], '#94a3b8', 1);
      drawLine([38, 28, 35], [63, 28, 35], '#0284c7', 1.5); // CTA button on screen

      // QRIS Payment Scanner Glass Window
      drawBox(36, -5, 33, 28, 18, 2, '#a855f7', 1.2);
      // Scanner beam glow line
      drawLine([39, 4, 34], [61, 4, 34], '#c084fc', 1.5);

      // 6. Bottom Medicine Dispenser Chamber (Pickup flap)
      drawBox(-65, -125, -30, 80, 50, 60, '#334155', 1.4);
      drawLine([-60, -80, 31], [10, -80, 31], '#f59e0b', 1.8); // flap hinge handle
      // Illuminated internal pickup bay
      drawLine([-55, -115, 25], [5, -115, 25], '#10b981', 1.2);

      // 7. Ground shadow ellipse / isometric contour
      ctx.beginPath();
      const pCenter = project(0, -155, 0);
      ctx.ellipse(pCenter.x, pCenter.y, 110 * scale, 45 * scale, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const yNorm = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    targetRot.current.y = xNorm * 0.35;
    targetRot.current.x = -yNorm * 0.25;
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    targetRot.current = { x: 0, y: 0 };
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <canvas
        ref={canvasRef}
        aria-label="Ilustrasi isometrik interaktif mesin pintar Berobat"
        role="img"
        className="w-full h-full block"
      />

      {/* Floating Interactive Badge */}
      <div 
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 max-w-[90%] px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm border border-slate-200/80 text-slate-600 shadow-sm transition-opacity duration-200 text-center ${
          isHovered ? 'opacity-90' : 'opacity-70'
        }`}
      >
        <span>💡 Sentuh atau gerakkan kursor untuk memutar sudut mesin 3D</span>
      </div>
    </div>
  );
}
