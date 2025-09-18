import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature1Section() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="container mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* 🔥 HeroSection과 동일한 너비 적용 */}
              <div className="max-w-xs sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/image/Group 18.png" 
                    alt="공수 계산기 스마트폰 앱 인터페이스의 첫 번째 주요 기능을 보여주는 화면으로 사용자 경험과 기능성을 강조하는 디자인"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* 🔥 콘텐츠도 모바일에서 동일한 너비 제한 */}
            <div className="max-w-xs sm:max-w-sm lg:max-w-none mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                편리한 <span className="text-teal-600">공수입력</span>
              </h2>
              

<div className="flex justify-center lg:justify-start items-start gap-2 text-sm sm:text-base pb-4">
  <div>
    <strong>정상근무(1.0)</strong>, <strong>연장근무(1.5)</strong>, 
    <strong>야간근무(2.0)</strong>
  </div>
</div>



              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                워크캘린더는 
                필요한 정보를 간결하게 보여드립니다.
                다른 공수 어플과 달리 정상근무(1.0),연장근무(1.5),야간근무(2.0) 등
                근무형태를 바로바로 입력할 수 있도록 작은 버튼으로
                구성되었습니다. (1.0),(1.5),(2.0)의 구성은 변경 가능합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1Section;