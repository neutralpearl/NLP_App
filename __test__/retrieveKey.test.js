import { retrieveKey } from "../src/client/js/keyFetcher";

// require('jest-fetch-mock').enableMocks();
// import { fetch } from "./jest-setup";
 
describe("retrieves data object containing API key from local server", () => { 
    test("get correct key", () => {
           
        // output is promise object containing key, not the key itself
        const output = '';

        expect(retrieveKey()).toEqual(output);
})});