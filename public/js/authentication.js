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
        const response = await axios.post('http://localhost:3000/login', loginRequest, requestHeaders);
        console.log(response);

        if (response.status === 200) {

            //const loginModal = document.getElementById('loginModal');
            //const myModalAlternative = bootstrap.Modal.getInstance(loginModal);
            //console.log(myModalAlternative);
            //myModalAlternative.hide();

            const toastMessage = document.getElementById('loginToastMessage');
            toastMessage.innerHTML = response.data.message;
            const toastDiv = document.getElementById('loginToast');
            const toast = new bootstrap.Toast(toastDiv);
            toast.show()
        } else {

        }

    } catch (error) {
        console.log(error);
    }

}

function onLoginClick() {
    const emailInput = document.getElementById('loginEmailInput').value;
    const passwordInput = document.getElementById('loginPasswordInput').value;

    login(emailInput, passwordInput);
}