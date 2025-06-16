'use client';

import { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown, Flag, PenLine } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

interface ProductReviewsProps {
  reviews: Review[];
  onWriteReview: () => void;
  onHelpfulVote: (reviewId: number, isHelpful: boolean) => void;
  onReportReview: (reviewId: number) => void;
}

export function ProductReviews({
  reviews,
  onWriteReview,
  onHelpfulVote,
  onReportReview,
}: ProductReviewsProps) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, boolean>>({});

  const handleHelpfulVote = (reviewId: number, isHelpful: boolean) => {
    onHelpfulVote(reviewId, isHelpful);
    setHelpfulVotes((prev) => ({
      ...prev,
      [reviewId]: isHelpful,
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      relative: formatDistanceToNow(date, { addSuffix: true }),
      full: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <button
          onClick={onWriteReview}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <PenLine className="w-4 h-4" />
          Write a Review
        </button>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => {
          const dates = formatDate(review.date);
          return (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm border p-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{review.user}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span>•</span>
                    <span>{dates.relative}</span>
                  </div>
                </div>
                <button
                  onClick={() => onReportReview(review.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Report inappropriate content"
                >
                  <Flag className="w-4 h-4" />
                </button>
              </div>

              <p className="text-foreground leading-relaxed">{review.comment}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Was this review helpful?</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleHelpfulVote(review.id, true)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
                      helpfulVotes[review.id] === true
                        ? 'bg-green-100 text-green-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.helpful}</span>
                  </button>
                  <button
                    onClick={() => handleHelpfulVote(review.id, false)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
                      helpfulVotes[review.id] === false
                        ? 'bg-red-100 text-red-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span>{review.notHelpful}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      <Star className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                  placeholder="Share your experience with this product..."
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 