import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { handleSubmit } from "../src/client/js/formHandler";

describe("responds to form submission by displaying output of sentiment analysis", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("...", () => {

            //input is event object from submission
           const input = {
               target: '',
            };

           const output = 'submission handled';

           expect(handleSubmit(input)).toEqual(output);
})});