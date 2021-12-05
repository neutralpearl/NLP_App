import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { validateLang } from "../src/client/js/langValidator";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("makes sure text input is in English; otherwise displays error message in UI", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("if English, returns API response", () => {
        const inputs = [
            'Colavita brings a classic Italian favorite straight from the fertile soil of Italy, with their flavorful Sun-Dried Tomato Pesto Sauce.',
        ]
        const outputs = [
            {},
            {},
            {}
        ];
        const key = process.env.API_KEY;
           
        expect(validateLang(inputs[0],key)).toEqual(outputs[0]);
    }),
    test("if not English, throws error and shows error message in UI containing correct language name", () => {
        const input = 'Colavita brings a classic Italian favorite straight from the fertile soil of Italy, with their flavorful Sun-Dried Tomato Pesto Sauce.'
        const output = '';
           
        expect(validateLang(inputs[0],key)).toEqual(output);
    })
});