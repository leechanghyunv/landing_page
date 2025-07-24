  const appStoreUrl = "https://apps.apple.com/kr/app/%EC%9B%8C%ED%81%AC%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B3%B5%EC%88%98%EB%8B%AC%EB%A0%A5-%EA%B3%B5%EC%88%98%EA%B3%84%EC%82%B0%EA%B8%B0-%EC%9D%BC%EC%9A%A9%EC%A7%81-%EB%85%B8%EA%B0%80%EB%8B%A4-%ED%95%84%EC%88%98/id6596813027";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.app.calendar_project_240727";

export function DownloadHeader() {

  return (
    
      <div className="cta-buttons">
            <a
             href= {appStoreUrl} className="cta-button">
                <span>🍎</span>
                <span>App Store</span>
            </a>
            <a
             href={playStoreUrl} className="cta-button">
                <span>🤖</span>
                <span>Google Play</span>
            </a>
        </div>
    
  );
}

export function DownloadSection() {
 
  return (
    <section className="download">
      <h2>지금 바로 시작하세요</h2>
      <p>스마트한 소비 생활의 첫걸음, 무료로 다운로드하고 체험해보세요</p>
      <div className="store-buttons">
        <a href={appStoreUrl} className="store-button">
          <span>🍎</span>
          <span>App Store</span>
        </a>
        <a href={playStoreUrl} className="store-button">
          <span>🤖</span>
          <span>Google Play</span>
        </a>
      </div>
    </section>
  );
}