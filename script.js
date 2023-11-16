function validateCreditCard() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const result = document.getElementById('result')
    fetch('http://localhost:8080/ws/api/v1/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({creditCardNumber: creditCardNumber}),
    })
    .then(response => response.json())
    .then(data => {
        result.innerText = data.message;
        if(!data.message.includes("n'est pas valide"))
            result.className = "result-success";
        else
            result.className = "result-error"
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
