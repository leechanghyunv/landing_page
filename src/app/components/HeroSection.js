
'use client';

import { Button } from "./ui/button.js";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section 
    id="preview"
    className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center">
      
      <div className="sr-only">
          <h1>건설근로자 공수 계산기 - 일용직 노가다 공수 달력 앱</h1>
          <p>건설현장 일당계산, 근로일수 관리, 건설근로자공제회 퇴직금 계산</p>
        </div>

        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 font-bold text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
  
          <span>iOS, 안드로이드 공수앱 최고평점</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2 text-black leading-tight">
          공수계산기 그 이상
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-tight">
          워크캘린더
        </h1>


  <div className="flex flex-wrap justify-center gap-2 mb-4 text-sm sm:text-base">
          <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
            #공수달력
          </span>
          <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
            #일당계산
          </span>
          <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
            #퇴직공제금
          </span>
          <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
            #실업급여
          </span>
        </div>

       <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative">
            {/* 🔄 Feature 섹션과 동일한 스타일 적용 */}
            <div className="max-w-xs sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/image/main.png"
                  alt="워크캘린더 공수계산기 앱 메인 - 건설현장 일용직 노가다 공수달력 일당계산"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>





      <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
        <strong>워크캘린더</strong>는 지난 2년간 유저들의 피드백을 모아 유저들의 불편함을 개선했습니다.
        그 결과 <span className="text-teal-600 font-semibold">iOS 및 안드로이드</span>에서 공수앱 부문 <strong>최고평점</strong>을 유지하고 있습니다.
      </p>


       <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
  <Button
    size="lg"
    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 sm:px-8 min-w-[140px]"
    asChild>
    <a
      href="https://apps.apple.com/kr/app/워크캘린더-공수달력-공수계산기-일용직-노가다-필수/id6596813027"
      target="_blank"
      rel="noopener noreferrer"
    >
      iOS 다운로드
    </a>
  </Button>

  <Button
    size="lg"
    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 sm:px-8 min-w-[140px]"
    asChild
  >
    <a
      href="https://play.google.com/store/apps/details?id=com.app.calendar_project_240727"
      target="_blank"
      rel="noopener noreferrer"
    >
      Android 다운로드
    </a>
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
            4.7/5 평점
          </span>
        </div>

  <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span>✓ 광고 없음</span>
          
          <span>✓ 데이터 백업 지원</span>
          <span>✓ 개인정보 수집 없음</span>
        </div>

        {/* 💡 브릿지 배너 (Option A) */}
        <div className="mt-12 sm:mt-16 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-teal-50/60 via-emerald-50/30 to-teal-50/60 border border-teal-100/80 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
            {/* Deco background blur */}
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal-200/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
            
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  워크캘린더는 다른 공수앱에서 볼 수 없는 <span className="text-teal-600 font-bold">최고 수준의 디자인</span>을 제공합니다. 
                  동시에 <span className="text-teal-700 font-semibold">퇴직공제금, 실업급여 수급조건</span> 등 다른 공수앱에서는 찾아볼 수 없는 특별한 기능을 모두 보유하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


