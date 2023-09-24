

const basePath = process.env.BACKEND_API_BASE_PATH || 'http://localhost:7500';
const version = process.env.BACKEND_API_VERSION || '/api/v1'
const path = basePath + version;

export const fetchExchangeRare = async (symbol) => {
    const queryParams = new URLSearchParams({symbol: symbol})
    return fetch(`${path}/exchange-rate?${queryParams}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }

        })
        .catch((error) => {
            throw new Error(error)
        })
}
