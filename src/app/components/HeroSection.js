// components/HeroSection.js
'use client';

import dynamic from 'next/dynamic';
import { DownloadHeader } from './DownLoadButton';


const FireworksBackground = dynamic(
  () => import('./FireworksBackground'),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="hero" >
      {/* <FireworksBackground /> */}
      
     

      <p style={{ 
        marginTop: "28px",
        marginBottom: "48px",
        fontWeight: "bold",
        color: "#000",
        fontSize: "26px" }}>
        똑똑한 공수계산기 찾으세요?
      </p>
      
      <div className="app-mockup">
        <div className="mockup-screen">
          <img src="image/main.jpg" alt="앱 메인 화면"
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
        주요공종 평균일당제공, 근로공제금 자동계산, 로그인 없는 백업 관리 이 모든 기능을 광고없이
      </p>
      <p>오직 워크캘린더만이 할 수 있습니다</p>
      
      <DownloadHeader />
    </section>
  )
}