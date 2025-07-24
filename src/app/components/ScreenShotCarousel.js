// components/ScreenshotCarousel.js
'use client';

// components/ScreenshotCarousel.js
'use client';

import { useState } from 'react';

const ScreenshotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEndX(e.touches[0].clientX);
};

const handleTouchEnd = () => {
  const swipeDistance = touchStartX - touchEndX;

  // 최소 스와이프 거리 설정 (예: 50px 이상이어야 인식)
  if (swipeDistance > 50) {
    handleNext(); // 왼쪽으로 스와이프 → 다음 슬라이드
  } else if (swipeDistance < -50) {
    handlePrev(); // 오른쪽으로 스와이프 → 이전 슬라이드
  }

  // 초기화
  setTouchStartX(0);
  setTouchEndX(0);
};  

  // 중앙 정렬을 위한 계산
  const getTransformValue = () => {
    // 320px (카드 너비) + 20px (gap)
    const slideWidth = 340;
    // 현재 슬라이드를 중앙에 위치
    return `translateX(calc(50% - ${170 + currentSlide * slideWidth}px))`;
  };

  return (
    <section className="screenshots">
      {/* <h2 style={{marginBottom: "10px"}}  className="section-title">앱 화면 미리보기</h2> */}
      <h2 style={{ marginBottom: "10px", color: "#000",fontWeight: "bold" }} className="section-title">
      {["향상된 디자인", "유저 데이터 공유", "꼼꼼한 이력관리"][currentSlide]}
      </h2>
      
      <div className="screenshot-container" style={{ overflow: 'hidden', position: 'relative' }}>
        <div 
          className="carousel-wrapper"
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
          style={{ 
            transform: getTransformValue(),
            display: 'flex',
            gap: '20px',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="screenshot">
            <div className="screen-content">
               <img src="image/main.jpg" alt="앱 메인 화면" />
            </div>
          </div>
          
          <div className="screenshot">
            <div className="screen-content">
              <img src="image/statistics.jpg" alt="앱 메인 화면" />
            </div>
          </div>
          
          <div className="screenshot">
            <div className="screen-content">
              <img src="image/history.jpg" alt="앱 메인 화면" />
            </div>
          </div>
        </div>
      </div>

  
      <div className="carousel-indicators">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ScreenshotCarousel;