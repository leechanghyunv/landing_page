// components/HeroSection.js
'use client';

import dynamic from 'next/dynamic';
import { DownloadHeader } from './DownLoadButton';

export default function HeroSection() {
  return (
    <section className="hero" >
      
      <h1 style={{position: 'absolute', left: '-9999px'}}>
        2025 건설현장 공수계산기 - 일용직 노가다 일당 계산 무료 앱
      </h1>

      <p style={{ 
        marginTop: "28px",
        marginBottom: "48px",
        fontWeight: "bold",
        color: "#000",
        marginBottom: "0px",
        fontSize: "40px" }}>
        똑똑한 공수계산기
      </p>
       <p style={{
        fontWeight: "bold",
        color: "#000",
        fontSize: "40px", // 글자 크기 더 키움
        marginTop: "0px", // 윗 줄과의 간격 조절
        marginBottom: "48px", // 원래 의도한 아랫 부분 마진 유지
      }}>
        찾으세요?
      </p>
      
      <div className="app-mockup">
        <div className="mockup-screen">
          <img src="image/main.jpg" alt="아이폰,안드로이드 공수계산기 어플 추천"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              marginBottom: "12px",
              display: "block",
              objectFit: "cover"
            }} />
        </div>
      </div>
      <h1>워크캘린더</h1>
      <p style={{margin: "3px", fontWeight: "bold", color: "#000" }}>
        주요공종 평균일당제공, 퇴직근로공제금 계산, 실업급여 수급조건 계산, 로그인 없는 백업 관리
      </p>

      <p>이 모든 기능을 광고없이</p>
      <p>오직 워크캘린더만이 할 수 있습니다</p>
      
      <DownloadHeader />
    </section>
  )
}