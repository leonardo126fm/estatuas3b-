 // Función para asignar la calificación y cambiar el color de las estrellas seleccionadas
 function giveRating(rating) {
    // Cambiar el color de las estrellas seleccionadas a amarillo
    var stars = document.querySelectorAll('.star');
    stars.forEach(function(star, index) {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
    // Aquí puedes agregar la lógica para enviar la calificación
    console.log('Calificación dada:', rating);
}