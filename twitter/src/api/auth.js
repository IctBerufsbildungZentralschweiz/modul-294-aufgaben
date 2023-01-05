import { computed, ref } from 'vue'

export const STORAGE_KEY = 'twitter_session_token'

const auth = ref(localStorage.getItem(STORAGE_KEY))
export function useAuth () {
  function setToken (newToken) {
    auth.value = newToken
    localStorage.setItem(STORAGE_KEY, newToken)
  }

  function logout () {
    auth.value = ''
    localStorage.removeItem(STORAGE_KEY)
  }

  const isLoggedIn = computed(() => !!auth.value)

  return {
    token: auth,
    isLoggedIn,
    setToken,
    logout,
  }
}