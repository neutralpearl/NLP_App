// async GET call to retrieve API Key value stored on server
const retrieveKey = async () => {
    const request = await fetch('http://localhost:8081/get-key'); 
    const data = request.json(); // accesses body of API response from server
    return data; 
}

export { retrieveKey }