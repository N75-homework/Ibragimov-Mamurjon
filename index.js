fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => {
    return res.json();
})
 .then(data => {
    data.forEach(user => {
        const markUp = `<li>${user.name}</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markUp);
    });
})
.catch(error => console.log(error));
