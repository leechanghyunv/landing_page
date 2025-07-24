'use client'
import { useEffect } from "react";

export default function FeatureAnimation() {
  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .stat-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
      observer.observe(card);
    });

    // 앱 목업 애니메이션
    const mockup = document.querySelector('.app-mockup');
    if (mockup) {
      mockup.style.animation = 'float 3s ease-in-out infinite';
    }

    // cleanup
    return () => observer.disconnect();
  }, []);

  return null;
}




