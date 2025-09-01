// components/ScreenshotCarousel.js
'use client';

import { useState } from 'react';

const ScreenshotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const totalSlides = 3;

  // 다음 슬라이드로 이동
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // 이전 슬라이드로 이동
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
    // 280px (카드 너비) + 20px (gap) = 300px
    const slideWidth = 300;
    // 현재 슬라이드를 중앙에 위치
    // calc(50% - 140px)는 첫 번째 슬라이드를 중앙에 놓기 위한 값
    // currentSlide * slideWidth로 이동
    return `translateX(calc(50% - ${140 + currentSlide * slideWidth}px))`;
  };

  return (
    <section className="screenshots">

      <p style={{ 
        marginTop: "28px",
        marginBottom: "48px",
        fontWeight: "bold",
        color: "#000",
        marginBottom: "20px",
        fontSize: "40px" }}>
        워크캘린더 살펴보기
      </p>

      <h2 style={{ marginBottom: "10px", color: "#000", fontWeight: "bold" }} className="section-title">
        {["깔끔한 디자인", "꼼꼼한 이력관리","유저 데이터 공유"][currentSlide]}
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
              <img src="image/main.jpg" alt="광고없는 공수계산기 노가다 일용직 급여관리 앱" />
            </div>
          </div>
          
          <div className="screenshot">
            <div className="screen-content">
              <img src="image/history2.jpg" alt="건설근로공제 퇴직금,실업급여조건을 보여주는 공수달력의 모습" />
            </div>
          </div>
          
          <div className="screenshot">
            <div className="screen-content">
              <img src="image/statistics.jpg" alt="반도체현장,일반현장,인테리어,철거,조선소,플랜트 평균 일당을 보여주는 모습" />
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