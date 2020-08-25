document.querySelector('form').addEventListener('submit', e => e.preventDefault());

let wasLastClickOperator = true;

document.querySelectorAll('.button').forEach(element => {
    element.addEventListener('click', () => {
        const output = document.getElementById('result');
        if (element.classList.contains('operator')) {
            if (wasLastClickOperator) {
                return;
            }
            wasLastClickOperator = true;
            output.value = `${output.value}${element.getAttribute('value')}`;
            return;
        }
        wasLastClickOperator = false;
        output.value = `${output.value}${element.getAttribute('value')}`;
    })
});

document.querySelector('#del').addEventListener('click', e => {
    document.getElementById('result').value = '';
})

document.querySelector('.calculate').addEventListener('click', () => {
    const output = document.getElementById('result');
    const replaceDivide = new RegExp(/÷/g);
    const replaceMultiply = new RegExp(/x/g)
    const toEvalValue = output.value.replace(replaceDivide, '/').replace(replaceMultiply, '*');

    output.value = eval(toEvalValue);
});