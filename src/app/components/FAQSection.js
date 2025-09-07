export default function FAQSection() {
  return (
    <section>
      <h2>FAQ</h2>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.js";

const faqs = [
  {
    id: "item-1",
    question: "퇴직공제금은 어떤식으로 계산되는 건가요",
    answer:
      "근로일수당 6500원, 세금제외 6200원에 주휴일수 추가, 2공수일시 이틀치 근로수당 추가 -> 이 조건하에 모든 근로기록을 통합합니다.",
  },
  {
    id: "item-2",
    question: "공수기록 백업은 어떻게 하나요?",
    answer:
      "공수기록 백업은 누적기록 -> 공수기록 백업 란에서 [공수기록 백업] 버튼을 누르면 영문코드로 압축이 됩니다. 이 코드를 메일이나, 카카오톡에 보관하신 후에 새로 이용하실 기기에 붙여넣습니다.",
  },
  {
    id: "item-3",
    question: "데이터는 안전하게 보호되나요?",
    answer:
      "워크캘린더의 데이터는 외부와 연결되어 있지 않습니다. 오직 유저의 스마트폰 내부저장공간만 이용합니다.",
  },
  {
    id: "item-4",
    question: "일당,공종 설문조사는 이제 안하나요",
    answer:
      "설문조사는 처음 워크캘린더를 시작하는 유저에게 반감을 줄 수 있다는게 데이터로 확인되었습니다. 다른 경로로 자료를 얻을 예정입니다.",
  },
  {
    id: "item-5",
    question: "아이폰, 안드로이드 모두 지원되는건가요?",
    answer:
      "네 워크캘린더는 아이폰 위주로 운영했지만, 2025년 1월부터 안드로이드,아이폰 모두 지원하고있습니다.",
  },
  {
    id: "item-6",
    question: "앱 업데이트는 얼마나 자주 있나요?",
    answer: "1주일에서 1달사이에 주기적으로 진행하고 있습니다",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            자주 묻는 질문
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-teal-100"
            >
              <AccordionTrigger className="text-left hover:text-teal-600 transition-colors text-sm sm:text-base py-3 sm:py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8 sm:mt-12">
          <div className="space-y-3 sm:space-y-4">
            <p className="font-semibold text-sm sm:text-base mt-4 sm:mt-6">
              더 궁금한 점이 있으신가요?
            </p>
            <p className="text-teal-600 text-sm sm:text-base">
              qqqqq7ppppp@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}