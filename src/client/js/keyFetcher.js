// async GET call to retrieve API Key value stored on server
const retrieveKey = async () => {
    const request = await fetch('http://localhost:8081/get-key'); 
    const json = request.json(); // accesses body of API response from server
    return json; 
}

export { retrieveKey }