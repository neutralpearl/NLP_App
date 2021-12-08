import { validateLang } from "../src/client/js/langValidator";
  
describe("makes sure text input is in English; otherwise displays error message in UI", () => {
    
    test("function yields a defined value", () => {
        const input = 'sample text';
        const key = process.env.API_KEY;
        expect(validateLang(input,key)).toBeDefined();
    })
});