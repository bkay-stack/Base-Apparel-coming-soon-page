const form = document.getElementById('form');
const input = document.getElementById('email');
const errorMesage = document.querySelector('.error');
const errorImg = document.querySelector('.error-img');
const btn = document.querySelector('.btn');




btn.addEventListener('click', (e) => {
    if (input.value === '') {
        event.preventDefault();
        setTimeout(()=> {
            errorMesage.style.display = 'block';
            errorImg.style.display = 'block';
        },1000)
    }

    
});







//  else {
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.match(emailPattern)) {
//         alert("Invalid email format");
//         return false;
//     }
// }