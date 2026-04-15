console.log('hallo2')
// fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => console.log(data));
 
async function getUsers() {
    console.log('hallo')
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);

    }
    catch (error) {
        console.log('Villa:', error);
    }
}
getUsers;
