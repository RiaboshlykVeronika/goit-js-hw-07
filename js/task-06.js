const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

const input = document.querySelector('input');

inputEl.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length == inputLength) {
        input.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
})
