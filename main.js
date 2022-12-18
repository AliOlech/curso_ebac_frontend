const form = document.getElementById('form');
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
const resp = document.getElementById('resp')
const error = document.getElementById('error')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2');
    const resp = `O numero <b>${n1.value}</b> eh menor que <b>${n2.value}</b>`;
})

    if (n1 > n2) {
        const resp = document.querySelector('.resp');
        resp.innerHTML = resp;
        resp.style.display = 'block';
        
        n1.value = '';
        n2.value = '';

    } else {
        const error = document.querySelector('.error')
        document.querySelector('.error').style.display = 'none';
    }

