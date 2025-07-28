'use client';

export default function UserReviews() {
  const reviews = [
    {
      id: 1,
      text: "깔끔한 바탕과 데이터 통계를 확인 가능한 어플이다. 타 업종과 비교도 가능해서 건설업계 진입시 도움이 될 듯 하다.",
      rating: 5,
      author: "김**"
    },
    {
      id: 2,
      text: "심플하고 깔끔해서 너무 좋네요.",
      rating: 5,
      author: "이**"
    },
    {
      id: 3,
      text: "퇴직공제금이랑 근로신고 기록도 볼수 있어서 너무 편리함",
      rating: 4,
      author: "박**"
    },
    {
      id: 4,
      text: "광고도 없고 공수 기록하기 좋아요",
      rating: 5,
      author: "최**"
    },
    {
      id: 5,
      text: "건설근로자공제앱은 한달이 지나서 공제금액을 정확히 볼 수 있는데 여기서는 퇴직공제금액을 바로바로 계산해줘서 좋습니다.",
      rating: 5,
      author: "정**"
    },
    {
      id: 6,
      text: "근로자에게 편하게 잘정리 되어있어서 좋네요. 가시성도 좋고 사용하기 편합니다",
      rating: 5,
      author: "한**"
    }
  ];

  return (
    <section className="user-reviews">
      <h2 className="section-title">사용자 후기</h2>
      
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">- {review.author}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .user-reviews {
          padding: 60px 20px;
          background: #ffffff;
          text-align: center;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .review-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e9ecef;
          text-align: left;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .review-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .review-stars {
          margin-bottom: 12px;
        }

        .review-stars .star {
          font-size: 1rem;
          margin-right: 2px;
        }

        .review-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 16px;
          min-height: 48px;
        }

        .review-author {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
          text-align: right;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .user-reviews {
            padding: 40px 15px;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .review-card {
            padding: 20px;
          }

          .review-text {
            font-size: 0.9rem;
            min-height: auto;
          }
        }

        /* 태블릿 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}