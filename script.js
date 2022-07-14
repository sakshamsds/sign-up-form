function matchPassword() {
    let pwd = document.querySelector('.password');
    let confPwd = document.querySelector('.confirm-password');
    // console.log(confPwd.value);
    // console.log(pwd.value);
    if (pwd.value == '' || (pwd.value != confPwd.value)) {
        alert("Passwords did not match");
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // console.log("entered")
    matchPassword();
});