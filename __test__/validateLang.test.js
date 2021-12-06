import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { validateLang } from "../src/client/js/langValidator";
  
describe("makes sure text input is in English; otherwise displays error message in UI", () => {

    const key = process.env.API_KEY;
    
    test("fetches response without throwing error", async () => {
        const input = 'MindRdr performs sentiment analysis on text using Natural Language Processing (NLP).';
        await expect(() => {
            validateLang(input,key)}).not.toThrowError();
    }),
    test("if English, returns API response which evaluates to truthy", async () => {
        
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

        const inputs = [
            'MindRdr performs sentiment analysis on text using Natural Language Processing (NLP).',
            'None of these forms is particularly superior to the others, and you can mix and match them across a codebase or even in a single file.',
            'If you have changed the default behavior to use the real implementation, you can guarantee the next call to fetch will be mocked.'
        ]

        fetch.mockResponseOnce({
            language_list: [
                {name: 'English'}
            ],
            status: {
                msg: 'OK'
            },
            body: {
                message: 'foo'
            }        
        });
        
        for (const input of inputs) {
            const response = await validateLang(input,key);
            expect(response).not.toEqual(false);
        }
    }),
    test("if not English, returns false", async () => {
        const inputs = [
            'MindRdr realiza un análisis de sentimientos en el texto mediante el procesamiento del lenguaje natural (NLP).',
            'MindRdr thực hiện phân tích cảm xúc trên văn bản bằng Xử lý ngôn ngữ tự nhiên (NLP).',
            'MindRdr utfører sentimentanalyse på tekst ved hjelp av Natural Language Processing (NLP).'
        ]

        fetch.mockResponseOnce({
            language_list: [
                {name: 'Spanish'}
            ],
            status: {
                msg: 'OK'
            }
        });
        
        for (const input of inputs) {
            const response = await validateLang(input,key);
            expect(response).toEqual(false);
        }
    })
});