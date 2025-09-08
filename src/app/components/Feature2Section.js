import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature2Section() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-teal-50/30 to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              퇴직공제금,실업급여 조건 계산
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              건설근로공제 퇴직금 계산, 퇴직공제금 수급조건
              계산은 워크캘린더에만 있는 특별한 기능입니다. 이제
              건설근로공제회 어플 따로 확인하지 마시고
              워크캘린더 이용하세요, 실업급여 수급조건(18개월간
              180일)의 수급조건 또한 알아서 척척 계산해서
              보여드립니다.
            </p>
          </div>

          {/* Image */}
          <div className="order-2">
            <div className="relative">
              <div className=" max-w-xs sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/image/Group 45.png" 
                    alt="모바일 앱의 두 번째 주요 기능인 스마트 자동화 시스템을 보여주는 인터페이스 화면"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* <div className="absolute -z-10 top-3 sm:top-4 -left-3 sm:-left-4 w-full h-full bg-teal-500/20 rounded-2xl sm:rounded-3xl" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}