export const getAnimals = (animals) => ({
  type: 'GET_ANIMALS',
  payload: {
    animals
  }
})

export const getDonations = (donations) => ({
  type: 'GET_DONATIONS',
  payload: {
    donations
  }
})

export const addDonation = (donation) => ({
  type: 'ADD_DONATION',
  payload: {
    donation
  }
})

export const isLoading = (loading) => ({
  type: 'IS_LOADING',
  payload: {
    loading
  }
})

export const hasError = (error) => ({
  type: ' HAS_ERROR',
  payload: {
    error
  }
})