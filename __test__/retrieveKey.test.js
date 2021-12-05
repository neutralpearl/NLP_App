// https://jestjs.io/docs/asynchronous

import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { retrieveKey } from "../src/client/js/keyFetcher";
 
describe("retrieves data object containing API key from local server", () => { 
    test("get correct key", async () => {
           
        // output is promise object containing key, not the key itself
        const input = await retrieveKey();
        const output = ''; // need to mimic either data or returned promise

        return expect(input).resolves.toEqual(output);
})});