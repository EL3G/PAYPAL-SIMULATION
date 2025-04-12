function showEnviarForm() {
    document.getElementById('enviar-form').style.display = 'flex';
}

function hideEnviarForm() {
    document.getElementById('enviar-form').style.display = 'none';
}

function showConfirmacion() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (recipient && amount) {
        document.getElementById('confirm-recipient').textContent = recipient;
        document.getElementById('confirm-amount').textContent = amount;
        document.getElementById('confirmacion').style.display = 'flex';
        hideEnviarForm();
    } else {
        alert('Por favor, ingrese el destinatario y el importe.');
    }
}

function hideConfirmacion() {
    document.getElementById('confirmacion').style.display = 'none';
}

function showComprobante() {
    const recipient = document.getElementById('confirm-recipient').textContent;
    const amount = document.getElementById('confirm-amount').textContent;
    const fecha = new Date().toLocaleString();

    document.getElementById('comprobante-recipient').textContent = recipient;
    document.getElementById('comprobante-amount').textContent = amount;
    document.getElementById('comprobante-fecha').textContent = fecha;
    document.getElementById('comprobante').style.display = 'flex';
    hideConfirmacion();
}

function hideComprobante() {
    document.getElementById('comprobante').style.display = 'none';
}
