import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { fetchSentiments } from "../src/client/js/sentimentFetcher";
  
describe("gets data from MeaningCloud sentiment analysis API", () => {
    test("response received from API", async () => {

        const input = 'Colavita brings a classic Italian favorite straight from the fertile soil of Italy.'
        const key = 'process.env.API_KEY';
        
        fetch.mockResponse({ok: true, status: 200});

        return fetchSentiments(input,key).then(data => {
            expect(data.ok).toBeTruthy();
            expect(data.status).toEqual(200);
        });
})});