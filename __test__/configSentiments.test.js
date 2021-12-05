// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/using-matchers
// https://jestjs.io/docs/asynchronous
// https://www.valentinog.com/blog/jest/

import { configSentiments } from "../src/client/js/sentimentConfigurator";

describe("updates UI based on MeaningCloud Sentimental Analysis API response", () => {
    test("returns correct text & unicode outputs", () => {
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

        const input1 = {
            agreement: 'AGREEMENT',
            subjectivity: 'OBJECTIVE',
            confidence: '70',
            irony: 'IRONIC',
        };
        const output1 = {
            text: [`agreement`, `objective`, `70%`,`ironic`],
            emojis: ['&#128077;','&#129488;','&#128526;','&#128521;']
        };

        const input2 = {
            agreement: 'DISAGREEMENT',
            subjectivity: 'SUBJECTIVE',
            confidence: '30',
            irony: 'NONIRONIC',
        };
        const output2 = {
            text: [`disagreement`, `subjective`, `30%`,`nonironic`],
            emojis: ['&#128078;','&#129300;','&#129320;','&#128528;']
        };

        expect(configSentiments(input1)).toEqual(output1);
        expect(configSentiments(input2)).toEqual(output2);
    })
});