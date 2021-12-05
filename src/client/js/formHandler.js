import { validateLang } from './langValidator';
import { fetchSentiments } from './sentimentFetcher';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted; now handling... :::");

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    // async GET call to retrieve API Key value stored on server
    const retrieveKey = async () => {
        const request = await fetch('http://localhost:8081/get-key');
        const json = request.json();
        console.log(json);
        return json;
    }

    try {
        await retrieveKey() // returns promise containing key
        .then(async (response) => {
            // use Language Identification API to make sure text is in English
            const isValidated = await validateLang(formText,`${response.key}`);
            if (isValidated) {
                // retrieve Sentimental Analysis data from API
                const request = await fetchSentiments(formText,`${response.key}`);
                // const json = await request.json(); // Transform into JSON
                // return json; 
                return request;
            } else {
                throw new Error('No English text to evaluate');
            }
        })
        .then(request => {
            // retrieve data from API & populate DOM content
            configSentiments(request);
        })
        .then( () => {
            // display retrieved sentiment data in results div
            document.getElementById('sentiments').style.visibility = 'visible';
            
            // add animations
            document.getElementById('sentiments').classList.add = 'animate__animated animate__fadeInDown';
            const sentiments = document.getElementsByClassName('sentiment-grid');
            for (let i=0; i < sentiments.length; i++) {
                sentiments[i].classList.add('animate__animated','animate__zoomIn','animate__slow');
            }

            // show div containing sentiments
            document.getElementById('results').style.display = 'grid';
            document.getElementById('results').style.visibility = 'visible';
        })     
    } catch(error) {
        console.log(error);
    }
}

export { handleSubmit }