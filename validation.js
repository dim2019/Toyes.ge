// ................რეგისტრაციის ვალიდაციები ........//


document.getElementById('RegForm').addEventListener('submit', function(event) {

    event.preventDefault();

    let errors = {};

    let form = event.target

    //სახელის ვალიდაცია

    let username = form.querySelector('[name="username"]').value;


    if (username == '') {
        errors.username = 'ველი ცარიელია';
    }

    //password
    let password = form.querySelector('[name="password"]').value
    let passwordCheck = form.querySelector('[name="passwordCheck"]').value
    if (password == '') {
        errors.password = 'ველი ცარიელია'

    } else {
        if (password.length < 5) {
            errors.password = 'მინიმალური ასობის რაოდენობა 5'
        }

    }

    if (password != passwordCheck) {
        errors.passwordCheck = 'გთხოვთ დარწმუნდით, რომ შეყვანილი პაროლი სწორია'
    }
    if (passwordCheck == '') {
        errors.passwordCheck = 'ველი ცარიელია'
    }

    //email
    let email = document.querySelector('[name="email"]').value

    if (email == '') {
        errors.email = 'ველი ცარიელია'
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            errors.email = 'მეილის ფორმატი არასწორია'
        }

    }
    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = ' '
    })


    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error-' + name)
        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name]
        }
    }
    console.log(errors);

})

// ..................ავტორიზაციის ვალიდაციები ....................//



document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let shecdomebi = {};

    let Form = event.target

    //სახელის ვალიდაცია

    let username1 = Form.querySelector('[name="username1"]').value;


    if (username1 == '') {
        shecdomebi.username1 = 'ველი ცარიელია';
    }

    //password
    let password1 = Form.querySelector('[name="password1"]').value
    if (password1 == '') {
        shecdomebi.password1 = 'ველი ცარიელია'

    } else {
        if (password1.length < 5) {
            shecdomebi.password1 = 'მინიმალური ასობის რაოდენობა 5'
        }

    }
    Form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = ' '
    })

    for (let velebi in shecdomebi) {
        let shecdomebiFile = document.getElementById('error_' + velebi)
        if (shecdomebiFile) {
            shecdomebiFile.textContent = shecdomebi[velebi]
        }
    }
    console.log(shecdomebi);

})



// ...ტრანსფორმის გამოყენებით ფორმების მოძრაობა მარჯვნივ და მარცხნივ..//
var LoginForm = document.getElementById("LoginForm")
var RegForm = document.getElementById("RegForm")
var Indicator = document.getElementById("Indicator")

function register() {
    RegForm.style.transform = "translateX(0px)"
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(168px)"
}

function login() {
    RegForm.style.transform = "translateX(300px)"
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(10px)"
}