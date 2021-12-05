async function validateLang(inputText,key) {
    console.log(`::: Checking language of: "${inputText}" :::`);  

    let endpoint = 'https://api.meaningcloud.com/lang-4.0/identification';
    const MeaningCloud_API_Key = key;

    const formdata = new FormData();
    formdata.append("key", `${MeaningCloud_API_Key}`);
    formdata.append("txt", `${inputText}`);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

    try {
        const request = await fetch(`${endpoint}`, requestOptions);
        const response = await request.json();
        const lang = response.language_list[0].name;
        const errorMessage = $('error-message');

        if (lang === 'English') {
            errorMessage.style.display = 'none'; 
            return response;
        } else {
            errorMessage.innerHTML = `The text you entered is in ${lang}.<br/><br/> MindRdr cannot analyze non-English text at this time.`;
            errorMessage.style.display = 'block';          

            //show error message in lieu of response
            $('sentiments').style.visibility = 'visible';
            $('results-title').style.display = 'none';
            $('results').style.display = 'none';

            throw new Error('Sorry! MindRdr cannot analyze non-English text at this time.');
        }
        
    } catch(error) {
        console.log(error);
        return false;
    }
}

export { validateLang }
