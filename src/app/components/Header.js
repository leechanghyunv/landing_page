export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center px-4">
        {/* 중앙 정렬된 네비게이션 */}
        <nav className="flex items-center justify-center">
          <div className="flex items-center space-x-6">
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