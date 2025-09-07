export default function TestimonialsSection() {
  return (
    <section>
      <h2>사용자 후기</h2>
    </section>
  );
}

import { Card, CardContent } from "./ui/card.js";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "김**",
    content:
      "깔끔한 바탕과 데이터 통계를 확인 가능한 어플이다. 타 업종과 비교도 가능해서 건설업계 진입시 도움이 될 듯 하다.",
    rating: 5,
  },
  {
    id: 2,
    name: "이**",
    content:
      "건설근로자공제앱은 한달이 지나서 공제금액을 정확히 볼 수 있는데 여기서는 퇴직공제금액을 바로바로 계산해줘서 좋습니다.",
    rating: 5,
  },
  {
    id: 3,
    name: "박**",
    content:
      "근로자에게 편하게 잘정리 되어있어서 좋네요. 가시성도 좋고 사용하기 편합니다.",
    rating: 4,
  },
  {
    id: 4,
    name: "최**",
    content:
      "퇴직공제금이랑 근로신고 기록도 볼수 있어서 너무 편리함니다. 광고도 없고 공수 기록하기 좋아요",
    rating: 4,
  },
  {
    id: 5,
    name: "한**",
    content:
      "다른 공수앱을 쓰다가 넘어왔습니다. 한눈에 들어오는 디자인, 편의성이 압도적으로 좋습니다. 광고없는건 덤이구요 ",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-teal-50/30"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            사용자 후기
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-teal-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        i < testimonial.rating
                          ? "fill-current text-teal-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="text-right">
                  <p className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}