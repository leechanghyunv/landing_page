
import { HeroSection } from './components/HeroSection';
import { Feature1Section } from './components/Feature1Section';
import { Feature2Section } from './components/Feature2Section';
import { Feature3Section } from './components/Feature3Section';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { SalaryInfoSection } from './components/SalaryInfoSection';

export default function Home() {

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '건설근로자공제회 퇴직금은 어떻게 계산하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '근로일당 6,500원(세후 6,200원) + 주휴일수 추가. 2공수 근무시 이틀치 적용. 워크캘린더 앱에서 자동계산 가능.'
      }
    },
    {
      '@type': 'Question', 
      name: '공수계산기 앱 중 광고없는 무료앱은?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '광고 없는 공수계산기입니다. 퇴직공제금 자동계산, 실업급여 조건 체크 기능 포함.'
      }
    }
  ]
};


  return (
    <>

 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

    <main>
   <HeroSection />
   {/* <AppPreviewSection /> */}
      <Feature1Section />
      <Feature2Section />
      <Feature3Section />
      {/* <SalaryInfoSection />   */}
      <TestimonialsSection />
      <FAQSection />
      </main>
    </>
  );
}





