import React, { useState } from 'react'
import { FiChevronLeft, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import ReviewCard from '../../components/feedback/ReviewCard'
import TemporaryStorage from '../../utils/TemporaryStorage'

const PROGRAM_EVALUATION_VISIBLE_QUESTIONS = [
  'What did you enjoy most?',
  'Suggestions to improve the program',
  'New skills developed',
  'Most challenging aspect',
  'Motivation to join',
  'Additional comments'
]

export default function RecentReviewsPage() {
  const navigate = useNavigate()
  const reviews = TemporaryStorage.getReviews()
  const [selectedReview, setSelectedReview] = useState(null)

  return (
    <div className="px-10 py-8">
      <button
        onClick={() => navigate('/feedback')}
        className="flex items-center gap-1 text-sm font-bold uppercase text-gray-700 mb-6 hover:underline"
      >
        <FiChevronLeft size={16} />
        Back
      </button>

      <h2 className="text-xl font-semibold mb-6">Recent Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500 text-sm">No reviews submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <ReviewCard
              key={review.id}
              review={review}
              onClick={() => setSelectedReview(review)}
            />
          ))}
        </div>
      )}

      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] shadow-lg relative flex flex-col overflow-hidden">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FiX size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">{selectedReview.type}</h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="text-sm font-semibold">{selectedReview.reviewer}</p>
                <p className="text-xs text-gray-500">{selectedReview.role}</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto pr-2">
              {selectedReview.responses ? (
                <div className="space-y-6">
                  {selectedReview.responses
                    .filter(item => {
                      if (selectedReview.type !== 'Program Evaluation') return true
                      return PROGRAM_EVALUATION_VISIBLE_QUESTIONS.some(q =>
                        item.question?.toLowerCase().includes(q.toLowerCase())
                      )
                    })
                    .map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-gray-50">
                        <p className="text-sm font-semibold text-gray-800 mb-2">{item.question}</p>
                        <p className="text-sm text-gray-700 whitespace-pre-line">{item.answer}</p>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="bg-gray-50 border rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line">
                  {selectedReview.content}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
