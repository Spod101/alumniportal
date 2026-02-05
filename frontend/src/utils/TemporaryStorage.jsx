// utils/TemporaryStorage.jsx

let programEvaluationDraft = {}
let profileData = null

// Simple in-memory store (TEMPORARY ONLY)
const TemporaryStorage = {
  reviews: [],

  // PROFILE (current user – used by Profile page)
  getProfile() {
    return profileData
  },

  saveProfile(data) {
    profileData = data ? { ...data } : null
  },

  clearProfile() {
    profileData = null
  },

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
