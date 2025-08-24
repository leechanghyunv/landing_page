import "./globals.css";

import { DownloadSection } from './components/DownLoadButton';
import HeroSection from './components/HeroSection'; // 새로운 import
import ScreenshotCarousel from './components/ScreenShotCarousel'; // 스크린샷 캐러셀 컴포넌트 import
import UserReviews from './components/user_rating'; // user_rating.js 파일 import
import Comment from './components/Comment'; 

export const metadata = {
  title: '공수계산기,공수달력,공수앱, 워크캘린더',  // 핵심 키워드 앞배치
  description: '공수계산기 최초 하이테크,일반현장,조선소,플랜트 평균 임금 제공 및 퇴직공제금 자동계산, 로그인 없는 백업 관리 기능을 제공하는 앱입니다.',
  keywords: [
    '공수', 
    '공수달력', 
    '공수노트', 
    '공수계산기', 
    '노가다', 
    '일용직',
    '건설현장', 
    '일당직', 
  ],
   alternates: {
    types: {
      'application/rss+xml': [
        {
          title: '워크캘린더 RSS 피드',
          url: '/rss.xml',
        },
      ],
    },
  },
  openGraph: {
    title: '공수계산기 - 공수달력',
    description: '건설현장 공수 개념부터 노무비 계산까지, 현장 관리자의 필수 앱',
  },
  verification: {
    google: 'h7qGAF-t7ErzI67tKLbr3mHeM06IpybUzfQ6RsGOoZY',
  },
  icons: {
    icon: '/work_calendar.png',
    shortcut: '/work_calendar.png',
    apple: '/work_calendar.png',
  },
};

/// 어디에든 공통적으로 사용되는 화면
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
    <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta name="naver-site-verification" content="2072f8e87baa3a250aebcafae511f324e6047c49" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17290887925"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17290887925');
        `,
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          gtag('event', 'conversion', {
              'send_to': 'AW-17290887925/skwLCPnzzYwbEPWF-LRA',
              'value': 1.0,
              'currency': 'KRW'
          });
        `,
      }}
    />
    <style> 
    </style>
    </head>
      <body suppressHydrationWarning>
        {children}
        
        <HeroSection /> 
        
         <ScreenshotCarousel />



    <section className="features">
        <h2 className="section-title">주요 기능</h2>
        <div className="feature-grid">
            <div className="feature-card">
                <div className="feature-icon">📂</div>
                <h3>건설근로공제 정보제공</h3>
                <p>공수등록 즉시 건설근로공제금액, 수급 조건 기준 정산</p>
            </div>
            
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>유저 일당 통계</h3>
                <p>전기,배관,덕트 등등 주요 공정의 평균임금을 공개합니다.</p>
            </div>
            
            <div className="feature-card">
                <div className="feature-icon">💾</div>
                <h3>간단한 백업관리 </h3>
                <p>복사 붙여넣기 방식으로 로그인 없이 백업 가능합니다.</p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">🏵️</div>
                <h3>차별화된 디자인</h3>
                <p>차별화된 디자인으로 사용자 경험을 향상시킵니다.</p>
            </div>
        </div>
    </section>
    
    
    <UserReviews />
    
     <Comment />
 
    <DownloadSection />

    
      </body>
    </html>
  );
}

