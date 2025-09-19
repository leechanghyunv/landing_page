import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature3Section() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* 🔥 이미지 너비 이미 일관성 있음 (그대로 유지) */}
              <div className="max-w-xs sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/image/Group 46.png"
                    alt="건설현장 평균 일당 정보 - 전기 덕트 비계 배관 공종별 일당 임금정보 제공화면"
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
                현장별 평균 임금자료 제공
              </h2>

<div className="flex justify-center lg:justify-start items-start gap-2 text-sm sm:text-base pb-4">
  <div>
    <strong>삼성반도체</strong>,<strong>하이닉스</strong> 현장 노가다 일당은?
    
  </div>
</div>


              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                현장근로자의 어려움 중 하나는 임금정보가 투명하지
                않다는 것입니다. 워크캘린더는 이 문제를 해결하고
                싶었습니다. 그간 유저들의 설문조사에서 얻은 결과로
                전기,덕트,비계,배관 등 주요 공종에 대한 평균 일당
                정보를 제공합니다. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature3Section;