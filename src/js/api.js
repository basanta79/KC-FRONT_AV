
const apiBeers = (apiURL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
    const beersList = `${apiURL}beers`;
    const beerFilter = `${apiURL}beers?`;

    return{
        getBeers: async (query) => {
            try{
                const requestURL = query ? beerFilter+'search='+query : beersList;

                const response = await fetch(requestURL , {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '9SFHASA-GJV4ZAB-KX8AEAT-QQ8W6M3',
                    },
                });
                const data = await response.json();
                return data.beers;

            } catch (err) {
                console.log('err');
                throw `error: ${err}`;
            }
        },

    }


}

export default apiBeers;