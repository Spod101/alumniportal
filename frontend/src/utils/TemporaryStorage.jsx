// utils/TemporaryStorage.jsx

let programEvaluationDraft = {}

// Simple in-memory store (TEMPORARY ONLY)
const TemporaryStorage = {
  reviews: [],

  addReview(review) {
    this.reviews.push({
      id: Date.now(),
      ...review,
    })
  },

  getReviews() {
    return this.reviews
  },

  clear() {
    this.reviews = []
  },

  // PROGRAM EVALUATION 

  saveProgramEvaluationDraft(sectionData) {
    programEvaluationDraft = {
      ...programEvaluationDraft,
      ...sectionData
    }
  },

  getProgramEvaluationDraft() {
    return programEvaluationDraft
  },

  clearProgramEvaluationDraft() {
    programEvaluationDraft = {}
  }
}

export default TemporaryStorage
