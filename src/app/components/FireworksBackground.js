'use client';

import { useEffect, useRef } from 'react';

export default function FireworksBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // 캔버스 크기 설정
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 폭죽 파티클 클래스
    class Particle {
      constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
        this.gravity = 0.05;
      }

      update() {
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // 빛나는 효과
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // 폭죽 클래스
    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetY = Math.random() * canvas.height * 0.3 + 100; // 상단 영역에서만 터짐
        this.velocity = { x: 0, y: -Math.random() * 3 - 9 };
        this.exploded = false;
        this.particles = [];
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }

      update() {
        if (!this.exploded) {
          this.y += this.velocity.y;
          
          if (this.y <= this.targetY) {
            this.explode();
          }
        }

        this.particles = this.particles.filter(particle => {
          particle.update();
          return particle.alpha > 0;
        });
      }

      explode() {
        this.exploded = true;
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 / particleCount) * i;
          const velocity = {
            x: Math.cos(angle) * Math.random() * 5,
            y: Math.sin(angle) * Math.random() * 5
          };
          
          this.particles.push(new Particle(this.x, this.y, this.color, velocity));
        }
      }

      draw() {
        if (!this.exploded) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        this.particles.forEach(particle => particle.draw());
      }
    }

    const fireworks = [];
    
    // 애니메이션
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 랜덤하게 폭죽 생성 (더 적게)
      if (Math.random() < 0.01) {
        fireworks.push(new Firework());
      }

      // 폭죽 업데이트 및 그리기
      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();

        // 완료된 폭죽 제거
        if (fireworks[i].exploded && fireworks[i].particles.length === 0) {
          fireworks.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
