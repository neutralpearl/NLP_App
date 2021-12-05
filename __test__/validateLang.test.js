import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { validateLang } from "../src/client/js/langValidator";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("makes sure text input is in English; otherwise displays error message in UI", () => {

    const key = process.env.API_KEY;
    
    test("successfully fetches response", async () => {
        const input = 'MindRdr performs sentiment analysis on text using Natural Language Processing (NLP).';
        await expect(validateLang(input,key)).resolves.toBeDefined();
    }),
    test("if English, returns API response which evaluates to truthy", async () => {
        
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
            }
        });
        
        for (const input of inputs) {
            expect(validateLang(input,key)).toBeTruthy();
        }

    }),
    test("if not English, returns false", () => {
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
            expect(validateLang(input,key)).toBeFalsy();
        }
    })
});