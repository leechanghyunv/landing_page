"use client";

import { useState } from "react";
import { Button } from "./ui/button.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const appScreens = [
  {
    id: 1,
    title: "대시보드 화면",
    image:
      "/image/preview_image/IMG_7120.jpg",
    alt: "모바일 앱 대시보드 인터페이스 화면으로 사용자 친화적인 디자인과 직관적인 네비게이션을 보여주는 스크린샷",
  },
  {
    id: 2,
    title: "사용자 인터페이스",
    image:
      "/image/preview_image/IMG_7121.jpg",
    alt: "스마트폰 목업에서 실행되는 모바일 애플리케이션 인터페이스 디자인",
  },
  {
    id: 3,
    title: "기능 화면",
    image:
      "/image/preview_image/IMG_7122.jpg",
    alt: "깔끔하고 현대적인 모바일 앱 사용자 인터페이스 디자인을 보여주는 화면",
  },
  {
    id: 4,
    title: "설정 메뉴",
    image:
      "/image/preview_image/IMG_7126.jpg",
    alt: "현대적인 앱 인터페이스 디자인을 보여주는 모바일 애플리케이션 화면",
  },
  {
    id: 5,
    title: "프로필 화면",
    image:
      "/image/preview_image/IMG_7127.jpg",
    alt: "모바일 애플리케이션 프로필 화면의 사용자 인터페이스 디자인",
  },
];

export function AppPreviewSection() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length);
  };

  const prevScreen = () => {
    setCurrentScreen(
      (prev) =>
        (prev - 1 + appScreens.length) % appScreens.length,
    );
  };

  return (
    <section
      // id="preview"
      className="py-12 sm:py-16 md:py-20 px-4 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            앱 살펴보기
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            워크캘린더는 단순한 공수 기록 앱이 아니라, 현장
            근로자의 든든한 파트너입니다. 편리하고 정확하게,
            그리고 광고 없이! 필요한 정보를 한눈에 확인할 수
            있는 워크캘린더를 지금 경험해 보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="mx-auto w-64 sm:w-72 md:w-80 h-[480px] sm:h-[540px] md:h-[600px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                {/* Screen Content */}
                <div className="w-full h-full relative">
                  <ImageWithFallback
                    src={appScreens[currentScreen].image}
                    alt={appScreens[currentScreen].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg border-teal-200 hover:bg-teal-50 hidden sm:flex w-8 h-8 sm:w-10 sm:h-10"
              onClick={prevScreen}
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg border-teal-200 hover:bg-teal-50 hidden sm:flex w-8 h-8 sm:w-10 sm:h-10"
              onClick={nextScreen}
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
            </Button>

            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden justify-between mt-4 px-8">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-white shadow border-teal-200 hover:bg-teal-50 px-4"
                onClick={prevScreen}
              >
                <ChevronLeft className="h-4 w-4 text-teal-600 mr-1" />
                
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-white shadow border-teal-200 hover:bg-teal-50 px-4"
                onClick={nextScreen}
              >
                
                <ChevronRight className="h-4 w-4 text-teal-600 ml-1" />
              </Button>
            </div>
          </div>

          {/* Screen Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
            {appScreens.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentScreen
                    ? "bg-teal-500"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentScreen(index)}
              />
            ))}
          </div>

          {/* Screen Title */}
          <div className="text-center mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-teal-700">
              {appScreens[currentScreen].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}