import { fetchSentiments } from "../src/client/js/sentimentFetcher";

// require('jest-fetch-mock').enableMocks();
// import { fetch } from "./jest-setup";
  
describe("gets data from MeaningCloud sentiment analysis API", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("...", () => {

        const input = 'Colavita brings a classic Italian favorite straight from the fertile soil of Italy, with their flavorful Sun-Dried Tomato Pesto Sauce.'
        const output = '...'; // Promise ?

        const key = 'process.env.API_KEY'; // will this work?

        expect(fetchSentiments(input,key)).toEqual(output);
})});