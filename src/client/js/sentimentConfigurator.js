const configSentiments = data => {
    console.log(`::: Displaying results :::`);

    $('results-title').innerHTML = `Sentiments Detected:`;
    $('results-title').style.display = 'block';

    $('agreement').innerHTML = `<strong>Agreement:</strong> ${data.agreement.toLowerCase()}`;
    const agreementEmoji = (data.agreement.toLowerCase() === 'agreement' ? '&#128077;' : '&#128078;');
    $('agreement-emoji').innerHTML = agreementEmoji;

    $('subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${data.subjectivity.toLowerCase()}`;
    const subjectivityEmoji = (data.subjectivity.toLowerCase() === 'objective' ? '&#129488;' : '&#129300;');
    $('subjectivity-emoji').innerHTML = subjectivityEmoji;

    $('confidence').innerHTML = `<strong>Confidence:</strong> ${data.confidence}%`;
    const confidenceEmoji = (data.confidence >= 70 ? '&#128526;' : '&#129320;');
    $('confidence-emoji').innerHTML = confidenceEmoji;

    $('irony').innerHTML = `<strong>Irony:</strong> ${data.irony.toLowerCase()}`;
    const ironyEmoji = (data.irony.toLowerCase() === 'ironic' ? '&#128521;' : '&#128528;');
    $('irony-emoji').innerHTML = ironyEmoji;
}

export { configSentiments }