import appConfig from './config';

const config = appConfig();

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
                        'X-API-KEY': config.apiKey,
                    },
                });
                const data = await response.json();
                return data.beers;

            } catch (err) {
                console.log('err');
                throw `error: ${err}`;
            }
        },
        getDetail: async (id=1) => {
            try {
                const requestURL = `${beersList}/${id}`

                const response = await fetch(requestURL , {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': config.apiKey,
                    },
                });
                const data = await response.json();
                return data.beer;

            } catch (err) {
                console.log(err);
                throw `error: ${err}`;
            }
        },
        addLike: async(id=1) => {
            try{
                const requestURL = `${beersList}/${id}/like`

                const response = await fetch(requestURL , {
                    method: 'POST',
                    headers: {
                        'X-API-KEY': config.apiKey,
                    },
                });
                const data = await response.json();
                return data.beer;
            } catch (err) {
                console.log(err);
                throw `error: ${err}`;
            }
        }

    }


}

export default apiBeers;