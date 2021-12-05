// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/using-matchers
// https://jestjs.io/docs/asynchronous
// https://www.valentinog.com/blog/jest/

import { configSentiments } from "../src/client/js/sentimentConfigurator";

describe("updates UI based on MeaningCloud Sentimental Analysis API response", () => {
    test("parses json data by key and modifies corresponding DOM elements", () => {
        document.body.innerHTML = `
            <section id="sentiments">
                <div id="error-message"></div>
                <div id="results-title"></div>
                <div id="results">
                    <div class="sentiment-grid">
                        <div class="emoji" id="agreement-emoji"></div>
                        <p id="agreement"></p>
                    </div>
                    <div class="sentiment-grid">
                        <div class="emoji" id="subjectivity-emoji"></div>
                        <p id="subjectivity"></p>
                    </div>
                    <div class="sentiment-grid" >
                        <div class="emoji" id="confidence-emoji"></div>
                        <p id="confidence"></p>
                    </div>
                    <div class="sentiment-grid">
                        <div class="emoji" id="irony-emoji"></div>
                        <p id="irony"></p>
                    </div>
                </div>
            </section>
        `;

        const input = {
            agreement: 'AGREEMENT',
            subjectivity: 'OBJECTIVE',
            confidence: '70',
            irony: 'IRONIC',
        };
        const output = {
            text: [`agreement`, `objective`, `70%`,`ironic`],
            emojis: ['&#128077;','&#129488;','&#128526;','&#128521;']
        };
        expect(configSentiments(input)).toEqual(output);
    })
});