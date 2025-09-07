import { Button } from "./ui/button.js";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet.js";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base sm:text-lg">
            워크캘린더
          </span>
        </div>

        <div className="flex-1"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 mr-4">
          <a
            href="#preview"
            className="text-sm hover:text-teal-500 transition-colors"
          >
            정보 살펴보기
          </a>
          <a
            href="#features"
            className="text-sm hover:text-teal-500 transition-colors"
          >
            특징
          </a>
          <a
            href="#testimonials"
            className="text-sm hover:text-teal-500 transition-colors"
          >
            사용자 후기
          </a>
          <a
            href="#faq"
            className="text-sm hover:text-teal-500 transition-colors"
          >
            Q&A
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Download Buttons */}

          {/* Mobile Single Download Button */}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">
                네비게이션 메뉴
              </SheetTitle>
              <SheetDescription className="sr-only">
                앱의 주요 섹션으로 이동하거나 앱을 다운로드할 수
                있는 메뉴입니다.
              </SheetDescription>
              <nav className="flex flex-col space-y-6 mt-8 px-6 pb-6">
                <a
                  href="#preview"
                  className="text-base hover:text-teal-500 transition-colors"
                >
                  정보 살펴보기
                </a>
                <a
                  href="#features"
                  className="text-base hover:text-teal-500 transition-colors"
                >
                  특징
                </a>
                <a
                  href="#testimonials"
                  className="text-base hover:text-teal-500 transition-colors"
                >
                  사용자 후기
                </a>
                <a
                  href="#faq"
                  className="text-base hover:text-teal-500 transition-colors"
                >
                  Q&A
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}