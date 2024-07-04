const API_URL = import.meta.env.VITE_API_URL
console.log(import.meta);

async function create(data) {
  try {
    const res = await fetch(`${API_URL}/register`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    return [res.data, null]
  } catch (error) {
    return [null, error]
  }
}

export const clientService = { create }