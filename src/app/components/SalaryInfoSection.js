

export function SalaryInfoSection() {
  const salaryData = [
    {
      category: "일반현장",
      icon: "🏗️",
      dailyWage: "20만원",
      description: "일반 건설현장 평균"
    },
    {
      category: "반도체현장", 
      icon: "💻",
      dailyWage: "25만원",
      description: "삼성, SK하이닉스 등"
    },
    {
      category: "조선소",
      icon: "🚢",
      dailyWage: "23만원", 
      description: "대형 조선소 기준"
    },
    {
      category: "플랜트",
      icon: "🏭",
      dailyWage: "28만원",
      description: "화학, 정유 플랜트"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-teal-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            현장별 <span className="text-teal-600">평균 일당</span> 정보
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            2025년 기준 현장별 평균 일당 정보입니다
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {salaryData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{item.category}</h3>
              <p className="text-teal-600 font-bold text-lg sm:text-xl mb-1">{item.dailyWage}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalaryInfoSection;