
'use client';

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
          <div className="relative">
            {/* 🔄 Feature 섹션과 동일한 스타일 적용 */}
            <div className="max-w-xs sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/image/main.png"
                  alt="워크캘린더 공수계산기 앱 대표 이미지 - 스마트폰에서 캘린더 앱을 사용하는 모습"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
            4.5/5 평점 (10,000+ 리뷰)
          </span>
        </div>
      </div>
    </section>
  );
}


