export const GET_COUNTRIES = 'GET_COUNTRIES'

const API_URL = 'https://restcountries.com/v3.1/region/europe'

export const getCountries = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await result.json()
            if (json) {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: json
                })
            } else {
                console.log('Unable to fetch!')
            }
        }
    } catch (error) {
        console.log(error)
    }
}