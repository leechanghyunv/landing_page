export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-center px-4">
        {/* 중앙 정렬된 네비게이션 - 모든 스크린 크기에서 가운데 정렬 */}
        <nav className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8">
            <a href="#preview" className="text-sm hover:text-teal-500 transition-colors">
              다운로드
            </a>
            <a href="#features" className="text-sm hover:text-teal-500 transition-colors">
              특징
            </a>
            <a href="#testimonials" className="text-sm hover:text-teal-500 transition-colors">
              사용자 후기
            </a>
            <a href="#faq" className="text-sm hover:text-teal-500 transition-colors">
              Q&A
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}