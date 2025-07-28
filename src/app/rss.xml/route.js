import RSS from 'rss';

export async function GET() {
  const siteUrl = 'https://landing-page-vert-sigma.vercel.app';
  
  // RSS 피드 생성
  const feed = new RSS({
    title: '공수계산기 워크캘린더 - 공수달력, 일용직 노가다',
    description: '건설현장 공수 계산을 한 번에! 현장 관리자를 위한 필수 공수노트',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    copyright: `${new Date().getFullYear()} 워크캘린더`,
    language: 'ko',
    pubDate: new Date(),
    ttl: 60, // 60분마다 업데이트 확인
    image_url: `${siteUrl}/work_calendar.png`,
    categories: ['건설', '공수계산', '건설근로공제'],
  });

  // 피드 아이템 추가
  const posts = [
    {
      title: '공수달력 워크캘린더 앱 출시 안내',
      description: '공수계산, 건설근로공제 정보제공, 유저 일당 통계, 간단한 백업관리 기능을 제공하는 워크캘린더가 출시되었습니다.',
      url: siteUrl,
      categories: ['공지사항', '앱출시'],
      date: new Date('2024-01-01'),
      author: '워크캘린더 팀',
    },
    {
      title: '건설근로공제 퇴직금 자동계산 기능 소개',
      description: '공수등록 즉시 건설근로공제금액과 수급 조건 기준을 자동으로 정산합니다. 복잡한 계산 없이 한눈에 확인하세요.',
      url: siteUrl,
      categories: ['기능소개', '건설근로공제'],
      date: new Date('2024-01-05'),
      enclosure: {
        url: `${siteUrl}/image/main.jpg`,
        type: 'image/jpeg',
      },
    },
    {
      title: '주요 공종별 평균일당 통계 제공',
      description: '전기, 배관, 덕트 등 주요 공종의 평균임금 통계를 실시간으로 확인할 수 있습니다. 다른 유저들의 데이터를 기반으로 한 정확한 통계!',
      url: siteUrl,
      categories: ['기능소개', '임금통계'],
      date: new Date('2024-01-10'),
      enclosure: {
        url: `${siteUrl}/image/statistics.jpg`,
        type: 'image/jpeg',
      },
    },
    {
      title: '로그인 없는 간편한 백업 기능',
      description: '복사 붙여넣기 방식으로 로그인 없이도 안전하게 데이터를 백업할 수 있습니다. 개인정보 걱정 없이 사용하세요.',
      url: `${siteUrl}#features`,
      categories: ['기능소개', '백업'],
      date: new Date('2024-01-15'),
    },
    {
      title: '앱 스토어 및 구글 플레이 출시',
      description: '워크캘린더가 애플 앱스토어와 구글 플레이스토어에 정식 출시되었습니다. 지금 바로 다운로드하세요!',
      url: siteUrl,
      categories: ['공지사항', '다운로드'],
      date: new Date('2024-01-20'),
    },
  ];

  // 피드에 아이템 추가
  posts.forEach(post => {
    feed.item(post);
  });

  // XML 생성
  const xml = feed.xml({ indent: true });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // 1시간 캐싱
    },
  });
}