let store = {
  profile: null,
  reviews: [],
  programEvaluationDraft: {},
};

const TemporaryStorage = {
  // Profile (used by ProfilePage)
  getProfile() {
    return store.profile;
  },

  saveProfile(data) {
    store.profile = data ? { ...data } : null;
  },

  clearProfile() {
    store.profile = null;
  },

  // Reviews (used by AlumniFeedback, ProgramEvaluation, Suggestions, RecentReviews)
  addReview(review) {
    store.reviews.push({
      id: Date.now(),
      ...review,
    });
  },

  getReviews() {
    return store.reviews;
  },

  clearReviews() {
    store.reviews = [];
  },

  clear() {
    store.reviews = [];
  },

  // Program evaluation draft (used by ProgramEvaluation flow)
  saveProgramEvaluationDraft(sectionData) {
    store.programEvaluationDraft = {
      ...store.programEvaluationDraft,
      ...sectionData,
    };
  },

  getProgramEvaluationDraft() {
    return store.programEvaluationDraft;
  },

  clearProgramEvaluationDraft() {
    store.programEvaluationDraft = {};
  },

  // Clear all storage
  clearAll() {
    store = {
      profile: null,
      reviews: [],
      programEvaluationDraft: {},
    };
  },
};

export default TemporaryStorage;
