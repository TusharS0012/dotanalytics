const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signInBtn = document.getElementById('sign-in-btn');
const signInForm = document.getElementById('sign-in-form');
function handleSignIn(e){
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    console.log('Sign In Attempt:', { email, password });

    signInForm.reset();
};

function handleSignUp(e){
    const signupForm = document.getElementById('signupForm');
    e.preventDefault();
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    console.log('Sign Up Attempt:', { name, email, password });
    signupForm.reset();
}