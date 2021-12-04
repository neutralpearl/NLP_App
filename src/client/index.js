import { handleSubmit } from './js/formHandler';
import { validateLang } from './js/langValidator';
import { configSentiments } from './js/sentimentConfigurator';
import { fetchSentiments } from './js/sentimentFetcher';

import './styles/resets.scss';
import './styles/app.scss'; 

// Listen for form submission
document.getElementById('form').addEventListener("submit", handleSubmit);

export { 
    handleSubmit,
    validateLang,
    configSentiments,
    fetchSentiments
}

