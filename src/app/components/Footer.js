import { Button } from "./ui/button.js";
import { Separator } from "./ui/separator.js";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* CTA Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            지금 바로 시작해보세요
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            어플리케이션은 유저의 의견에 따라 언제든지 변경,추가
            될 수 있습니다. 불편하셨던점, 추가했으면 하는 기능이
            있으시면 언제든지 의견을 주세요 감사합니다.
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
        </div>

        <Separator className="mb-4 sm:mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground gap-4">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                A
              </span>
            </div>
            <span>©lafayette. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#"
              className="hover:text-teal-600 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-teal-600 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-teal-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}