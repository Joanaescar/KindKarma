async function login(email, password) {

    const loginRequest = {
        email: email,
        password: password
    };

    const requestHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`${getBaseUrl()}/auth/login`, loginRequest, requestHeaders);
        console.log(response);

        if (response.status === 200) {

            const loginModal = document.getElementById('loginModal');
            const myModalAlternative = bootstrap.Modal.getInstance(loginModal);
            console.log(myModalAlternative);
            myModalAlternative.hide();

            const toastMessage = document.getElementById('loginToastMessage');
            toastMessage.innerHTML = response.data.message;
            const toastDiv = document.getElementById('loginToast');
            const toast = new bootstrap.Toast(toastDiv);
            toast.show();

            localStorage.setItem('user', JSON.stringify(response.data.user));
            setTimeout(() => window.location.pathname = '/profile', 2000);
        } else {
            console.log('Falhou')
        }

    } catch (error) {
        console.log(error);
        const toastMessage = document.getElementById('loginToastMessage');
        const toastDiv = document.getElementById('loginToast');
        const toast = new bootstrap.Toast(toastDiv);

        if (error.response && error.response.data) {
            toastMessage.innerHTML = error.response.data.err.message;
        } else if (error.message) {
            toastMessage.innerHTML = error.message;
        } else {
            toastMessage.innerHTML = 'Erro inesperado';
        }

        toast.show()


    }

}

async function onLoginClick() {
    const emailInput = document.getElementById('loginEmailInput').value;
    const passwordInput = document.getElementById('loginPasswordInput').value;

    await login(emailInput, passwordInput);
}

document.getElementById('loginPasswordInput')
    .addEventListener('keydown', async function (event) {
        if (event.key === 'Enter') {
            console.log('Enter');
            await onLoginClick();
            return;
        }
    })

async function register(username, email, password) {

    const registerRequest = {
        username: username,
        email: email,
        password: password
    };

    const requestHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`${getBaseUrl()}/auth/register`, registerRequest, requestHeaders);
        console.log(response);

        if (response.status === 200) {

            const signInModal = document.getElementById('signInModal');
            const myModalAlternative = bootstrap.Modal.getInstance(signInModal);
            console.log(myModalAlternative);
            myModalAlternative.hide();

            const toastMessage = document.getElementById('signInToastMessage');
            toastMessage.innerHTML = response.data.message;
            const toastDiv = document.getElementById('signInToast');
            const toast = new bootstrap.Toast(toastDiv);
            toast.show();

            localStorage.setItem('user', JSON.stringify(response.data.user));
            // const user = JSON.parse(localStorage.getItem('user'));
            setTimeout(() => window.location.pathname = '/profile', 2000);
        } else {
            console.log('Falhou')
        }

    } catch (error) {
        console.log(error);

        const toastMessage = document.getElementById('signInToastMessage');
        const toastDiv = document.getElementById('signInToast');
        const toast = new bootstrap.Toast(toastDiv);

        if (error.response && error.response.data) {
            toastMessage.innerHTML = error.response.data.err.message;
        } else if (error.message) {
            toastMessage.innerHTML = error.message;
        } else {
            toastMessage.innerHTML = 'Erro inesperado';
        }

        toast.show()
    }

}

async function onRegisterClick() {

    const usernameInput = document.getElementById('signInUsernameInput').value;
    const emailInput = document.getElementById('signInEmailInput').value;
    const passwordInput = document.getElementById('signInPasswordInput').value;

    await register(usernameInput, emailInput, passwordInput);
}

