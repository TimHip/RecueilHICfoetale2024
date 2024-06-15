document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => { data[key] = value });

    fetch('https://script.google.com/macros/s/AKfycbwpesI5zoQ-_yc64-_FXY8yMcoEWRO7xODrM3Oa8FOytQpd4AcEhQ7kaYgItPmXNmOXvg/exec', { // Remplacez par votre URL de script Google Apps
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === "success") {
            alert('Données soumises avec succès');
            event.target.reset();
        } else {
            alert('Erreur lors de la soumission des données: ' + responseData.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de la soumission des données');
    });
});

