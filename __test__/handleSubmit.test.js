import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { handleSubmit } from "../src/client/js/formHandler";

describe("responds to form submission by displaying output of sentiment analysis", () => {

    test("function returns defined value", () => {
        
        const input = {}; // empty object mocking event object
        expect(handleSubmit(input)).toBeDefined;
    })
});