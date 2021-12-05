import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { retrieveKey } from "../src/client/js/keyFetcher";
 
describe("retrieves data object containing API key from local server", () => { 
    test("get correct key", async () => {
        
    const url = 'http://localhost:8081/get-key';
    const output = process.env.API_KEY;

    fetch.mockResponse(JSON.stringify({key: output}));

    const response = await retrieveKey(url);
    expect(response.key).toEqual(output);

})});