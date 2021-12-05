const configSentiments = data => {
    console.log(`::: Running configSentiments :::`);

    document.getElementById('results-title').innerHTML = `Sentiments Detected:`;
    document.getElementById('results-title').style.display = 'block';

    document.getElementById('agreement').innerHTML = `<strong>Agreement:</strong> ${data.agreement.toLowerCase()}`;
    const agreementEmoji = (data.agreement.toLowerCase() === 'agreement' ? '&#128077;' : '&#128078;');
    document.getElementById('agreement-emoji').innerHTML = agreementEmoji;

    document.getElementById('subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${data.subjectivity.toLowerCase()}`;
    const subjectivityEmoji = (data.subjectivity.toLowerCase() === 'objective' ? '&#129488;' : '&#129300;');
    document.getElementById('subjectivity-emoji').innerHTML = subjectivityEmoji;

    document.getElementById('confidence').innerHTML = `<strong>Confidence:</strong> ${data.confidence}%`;
    const confidenceEmoji = (data.confidence >= 70 ? '&#128526;' : '&#129320;');
    document.getElementById('confidence-emoji').innerHTML = confidenceEmoji;

    document.getElementById('irony').innerHTML = `<strong>Irony:</strong> ${data.irony.toLowerCase()}`;
    const ironyEmoji = (data.irony.toLowerCase() === 'ironic' ? '&#128521;' : '&#128528;');
    document.getElementById('irony-emoji').innerHTML = ironyEmoji;
}

export { configSentiments }