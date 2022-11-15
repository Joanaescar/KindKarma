(function () { //validação dos formulários
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const inputs = document.querySelectorAll('.form-submit')

    // Loop over them and prevent submission
    Array.from(inputs)
        .forEach(function (input) {
            input.addEventListener("keydown", (event) => {
                if (event.isComposing || event.keyCode === 229) {
                    return;
                }
                if (event.keyCode === 13) {
                    console.log('Enter');
                    return;
                }
                //event.preventDefault();
                //event.stopPropagation();
            }, false);
        })
})()