document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const data = { email, password };
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                return console.log(data.error);
            }
            console.log(data);
        })
        .catch(err => console.log(err));

})