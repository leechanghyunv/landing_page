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
              <div className=" max-w-xs sm:max-w-sm mx-auto sm:rounded-3xl shadow-2xl">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/image/Group 18.png" 
                    alt="스마트폰 앱 인터페이스의 첫 번째 주요 기능을 보여주는 화면으로 사용자 경험과 기능성을 강조하는 디자인"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              편리한 구성
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              공수계산기를 만들면서 가장 중요하게 생각한건
              필요한 정보를 간결하게 보여주는 것이었습니다.
              다른앱과 달리 정상근무1,연장근무,야간근무 등
              근무형태를 바로바로 입력할 수 있도록 작은 버튼으로
              구성되었습니다. 그리고 입력한 값에 따라 현장직
              근로자에게 필요한 정보를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1Section;