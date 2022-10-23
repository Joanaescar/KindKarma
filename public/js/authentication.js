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
            toast.show()
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

    } catch (error) {
        console.log(error);
    }

}

async function onRegisterClick() {

    const usernameInput = document.getElementById('signInUsernameInput').value;
    const emailInput = document.getElementById('signInEmailInput').value;
    const passwordInput = document.getElementById('signInPasswordInput').value;

    await register(usernameInput, emailInput, passwordInput);
}

