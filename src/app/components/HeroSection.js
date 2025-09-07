import { Button } from "./ui/button.js";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2 text-black leading-tight">
          공수계산기 그 이상
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-tight">
          워크캘린더
        </h1>

        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-80 sm:w-96 md:w-[500px] h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632152943364-728220ee6b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwY2FsZW5kYXIlMjBhcHAlMjBtb2JpbGUlMjBwaG9uZXxlbnwxfHx8fDE3NTcyMzQyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="워크캘린더 앱 대표 이미지 - 스마트폰에서 캘린더 앱을 사용하는 모습"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          광고만 많고 특별한 기능없는 공수계산기를 써오셨다면
          이젠 바꾸세요 워크캘린더는 공수계산기록에 따른
          퇴직근로공제금, 실업급여 수급조건 계산 등 다른
          공수앱에는 없었던 기능을 제공합니다. 이런 공수앱을
          광고없이 만나보세요.
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 min-w-[140px]"
          >
            iOS 다운로드
          </Button>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 min-w-[140px]"
          >
            Android 다운로드
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 text-teal-500">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 sm:w-5 h-4 sm:h-5 ${i < 4 ? "fill-current" : "fill-current opacity-50"}`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">
            4.5/5 평점 (10,000+ 리뷰)
          </span>
        </div>
      </div>
    </section>
  );
}


// // components/HeroSection.js
// 'use client';

// import dynamic from 'next/dynamic';
// import { DownloadHeader } from './DownLoadButton';

// export default function HeroSection() {
//   return (
//     <section className="hero" >
      
//       <h1 style={{position: 'absolute', left: '-9999px'}}>
//         2025 건설현장 공수계산기 - 일용직 노가다 일당 계산 무료 앱, 아이폰 공수계산기 추천 현장직 급여 계산기 
//       </h1>

//       <p style={{ 
//         marginTop: "28px",
//         marginBottom: "48px",
//         fontWeight: "bold",
//         color: "#000",
//         marginBottom: "0px",
//         fontSize: "40px" }}>
//         똑똑한 공수계산기
//       </p>
//        <p style={{
//         fontWeight: "bold",
//         color: "#000",
//         fontSize: "40px", // 글자 크기 더 키움
//         marginTop: "0px", // 윗 줄과의 간격 조절
//         marginBottom: "48px", // 원래 의도한 아랫 부분 마진 유지
//       }}>
//         찾으세요?
//       </p>
      
//       <div className="app-mockup">
//         <div className="mockup-screen">
//           <img src="image/main.jpg" alt="아이폰,안드로이드 공수계산기 어플 추천"
//             style={{
//               width: "100%",
//               height: "auto",
//               borderRadius: "16px",
//               marginBottom: "12px",
//               display: "block",
//               objectFit: "cover"
//             }} />
//         </div>
//       </div>
//       <h1>워크캘린더</h1>
//       <p style={{margin: "3px", fontWeight: "bold", color: "#000" }}>
//         주요공종 평균일당제공, 퇴직근로공제금 계산, 실업급여 수급조건 계산, 로그인 없는 백업 관리
//       </p>

//       <p>이 모든 기능을 광고없이</p>
//       <p>오직 워크캘린더만이 할 수 있습니다</p>
      
//       <DownloadHeader />
//     </section>
//   )
// }