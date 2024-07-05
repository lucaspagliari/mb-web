import { reactive, ref } from "vue"

export const useAsync = (fn) => {
  const state = reactive({
    loading: false,
    messages: [],
    hasError: false,
  })

  async function run(...args) {
    state.hasError = false
    state.loading = true
    const result = await fn(...args)
    state.loading = false
    const [_, errors] = result
    if (errors) {
      state.messages = errors.map((e) => e.message)
      state.hasError = true
    }

    return result
  }

  return {
    state,
    run,
  }

}