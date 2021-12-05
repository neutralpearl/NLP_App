import { handleSubmit } from './js/formHandler';
import { retrieveKey } from './js/keyFetcher';
import { validateLang } from './js/langValidator';
import { configSentiments } from './js/sentimentConfigurator';
import { fetchSentiments } from './js/sentimentFetcher';

import './styles/resets.scss';
import './styles/app.scss'; 

const $ = id => document.getElementById(id); // define global shorthand
window.$ = $; // assign method as property of window object

// Listen for form submission
$('form').addEventListener("submit", handleSubmit);

export { 
    handleSubmit,
    retrieveKey,
    validateLang,
    configSentiments,
    fetchSentiments
}

