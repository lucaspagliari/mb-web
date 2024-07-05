const API_URL = import.meta.env.VITE_API_URL

async function create(data) {
  let res = await fetch(`${API_URL}/registration`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())

  return [res.data, res.errors]
}

export const clientService = { create }