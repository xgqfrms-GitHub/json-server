// import fetch from 'whatwg-fetch';
import 'whatwg-fetch';
// fetch polyfill

const url = `https://abc.xgqfrms.xyz/some-url`;

const headers = new Headers({
    'Content-Type': 'text/plain',
    'X-My-Custom-Header': 'CustomValue'
});

const datas = JSON.stringify(
    {
        user: "username",
        pwd: "password"
    }
);

const method = `POST`;

const request = new Request(url, {
    headers: headers,
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    body: datas
});

fetch(
    request
).then(
    (response) => response.json()
).catch(
    (err) => {
        console.log(`err`, err);
        throw new Error("Whoops, An Error occurred!");
    }
);



const url = `http://localhost:7777/datas`;

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "new-name",
        password: "xyz&123"
    })
});


// Error 
// new Error([message[, fileName[, lineNumber]]])

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw


try {
    throw new Error("Whoops, An Error occurred!");
} catch (e) {
    alert(e.name + ": " + e.message);
}



// https://github.com/github/fetch#installation

// Post form
let form = document.querySelector('form');

fetch('/users', {
    method: 'POST',
    body: new FormData(form)
});


// Post JSON
fetch('/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot'
    })
});


// File upload
let input = document.querySelector('input[type="file"]');
let data = new FormData();

data.append('file', input.files[0]);
data.append('user', 'hubot');

fetch('/avatars', {
    method: 'POST',
    body: data
});