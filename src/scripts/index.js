import axios from 'axios';
import '../styles/index.scss';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

axios.get(BASE_URL)
    .then((response) => {
        console.log(response.data)
        response.data.forEach(element => {
            document.getElementById('ulID').innerHTML += '<li> Name: '+ element.name + '; email: ' + element.email +'</li>'
        });
    })
    .catch((err) => console.log(err))

