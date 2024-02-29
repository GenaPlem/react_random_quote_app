export const fetchQuote = async () => {
    try {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')

        if (res.ok === true) {
            return {
                error: null,
                response: await res.json()
            }
        }

//        throw new Error('Some error there')
    } catch (e) {
        return {
            error: e,
            response: null
        }
    }

}