import "./globals.css";
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const metadata = {
  title: '공수계산기 - 건설 일당 계산 무료 노가다 앱,| 워크캘린더',  // 핵심 키워드 앞배치
  description: '공수계산기, 퇴직공제금,실업급여조건 산정, 노가다 현장 평균일당정보제공 기능을 하나로! 평택삼성, 용인하이닉스, 조선소, 플랜트 현장 근로자를 위한 맞춤형 일당·공수 관리 앱',
  keywords: [
    '공수표', 
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
     images: [
    {
      url: 'image/main.png', // public 폴더에 있는 파일
      width: 500,
      height: 500,
      alt: '공수계산기 앱 미리보기',
    },
  ],
  type: 'website',
  locale: 'ko_KR',
  },

  twitter: {
  card: 'summary_large_image',
  title: '공수계산기 - 공수달력',
  description: '건설현장 공수 관리와 일용직 임금 계산을 한번에!',
  images: ['image/main_image.png'],
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

 
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: '워크캘린더 - 공수계산기 & 공수달력',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
      description: '광고 없음'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '150'
    },
    'creator': {
    '@type': 'Organization',
    'name': 'lafayette'
  },
    'featureList': [
    "공수계산기",
    "퇴직공제금 자동계산",
    "실업급여 조건 확인",
    "건설현장 일당정보",
    '건설근로자공제회 퇴직금 계산',
    '광고 없음'
  ],
    description: '광고없는 공수계산기, 공수달력, 현장직 실업급여 조건, 퇴직공제금 계산 지원 앱'
  };

  return (
    <html lang="ko">
    <head>

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta name="naver-site-verification" content="2072f8e87baa3a250aebcafae511f324e6047c49" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17290887925"></script>
    
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />

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
      
         <Header />
       
       {children}
      
      <Footer />
    
      </body>
    </html>
  );
}

