import "./globals.css";



export const Metadata = {
  /// 네이버나 구글에서 검색하면
  title: '공수계산기 - 공수달력, 일용직 노가다 워크캘린더',  // 핵심 키워드 앞배치
  description: '건설현장 공수 계산을 한 번에! 현장 관리자를 위한 필수 공수계산기 앱',
  keywords: [
    '공수', 
    '공수달력', 
    '공수계산기', 
    '노가다', 
    '일용직',
    '건설현장', 
    '일당직', 
  ],
  openGraph: {
    /// 카카오톡으로 링크 공유하면
    title: '공수계산기 - 공수달력',
    description: '건설현장 공수 개념부터 노무비 계산까지, 현장 관리자의 필수 앱',
  }
}


/// 어디에든 공통적으로 사용되는 화면
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
