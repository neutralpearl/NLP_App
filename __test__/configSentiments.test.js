// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/using-matchers
// https://jestjs.io/docs/asynchronous
// https://www.valentinog.com/blog/jest/

// require('jest-fetch-mock').enableMocks();
import { fetch } from "./jest-setup";

import { configSentiments } from "../src/client/js/sentimentConfigurator";

describe("updates UI based on MeaningCloud Sentimental Analysis API response", () => {
    test("parses json data by key and modifies corresponding DOM elements", () => {
        const input = {
            agreement: '',
            subjectivity: '',
            confidence: '',
            irony: '',
        };
        const output = {};

        expect(configSentiments(input)).toEqual(output);
})});