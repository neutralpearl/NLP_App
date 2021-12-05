import { retrieveKey } from './keyFetcher';
import { validateLang } from './langValidator';
import { fetchSentiments } from './sentimentFetcher';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault(); // 
    console.log("::: Form submitted... :::");

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    try {
        await retrieveKey() 
        .then(async json => {
            // use MeaningCloud Language Identification API to make sure text is in English
            const isValidated = await validateLang(formText,`${json.key}`);
            if (isValidated) {
                // retrieve Sentimental Analysis data from MeaningCloud API
                const request = await fetchSentiments(formText,`${json.key}`);
                return request; 
            } else {
                throw new Error('No English text to evaluate');
            }
        })
        .then(request => {     
            return request.json(); // accesses body of API response from MeaningCloud
        })
        .then(data => {
            configSentiments(data); // populate DOM elements with API data
        })
        .then( () => {
            // display retrieved sentiment data in results div
            $('sentiments').style.visibility = 'visible';
            
            // add animations
            $('sentiments').classList.add = 'animate__animated animate__fadeInDown';
            const sentiments = document.getElementsByClassName('sentiment-grid');
            for (let i=0; i < sentiments.length; i++) {
                sentiments[i].classList.add('animate__animated','animate__zoomIn','animate__slow');
            }

            // show div containing sentiments
            $('results').style.display = 'grid';
            $('results').style.visibility = 'visible';
        })     
    } catch(error) {
        console.log(error);
    }
}

export { handleSubmit }