import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { handleSubmit } from "../src/client/js/formHandler";

describe("responds to form submission by displaying output of sentiment analysis", () => {



	// document.addEventListener = jest.fn((event, callback) => {
    //     events[event] = callback;
    // });
    
    // document.removeEventListener = jest.fn((event, callback) => {
    //     delete events[event];
    // });

    test("returns 'submission handled' if event object passed in", async () => {

        document.body.innerHTML = `
            <form id="form"> <!--onsubmit="return handleSubmit(event)"-->
                <label for="input-text">Enter the text you'd like to analyze.</label>
                <textarea id="input-text" type="text" name="input" value="" minlength="50" required></textarea>
                <input id="form-submit" type="submit"  value="Analyze Sentiments"> <!--onclick="handleSubmit(event)"-->
            </form>
        `;
        const form = document.getElementById('form');
        form.addEventListener("submit", handleSubmit);
        const input = form.simulate('submit');

        // input is event object from submission
        // const input = {
        //     defaultPrevented: true,
        //     type: "submit",
        // };

        const output = 'submission handled';

        await expect(handleSubmit(input)).toEqual(output);
    })
});