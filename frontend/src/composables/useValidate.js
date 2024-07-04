import { ref } from "vue"

export const useValidate = (callback = {
  onSuccess: new Function(),
  onError: new Function()
}) => {
  
  const errorMessage = ref('')


  function validate(value, rules) {
    if (!Array.isArray(rules) || rules.length === 0) {
      callback.onSuccess()
      return true
    };

    errorMessage.value = ''

    for (let i = 0; i < rules.length; i++) {
      const validator = rules[i]
      const result = validator(value)

      if (typeof result === 'string') {
        errorMessage.value = result
        callback.onError()
        return false
      }
    }
    callback.onSuccess()
    return true
  }


  return {
    errorMessage,
    validate,
  }
}