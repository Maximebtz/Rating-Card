// Sélectionne tous les boutons de notation
const gradeBtns = document.querySelectorAll('.grade-btn');
let selectedGrade;

// Parcourir toutes les notes
gradeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        selectedGrade = this.textContent; 
    });
});


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Si une note est choisie
    if (selectedGrade) {
        // Ajouter le texte au span Rate sur la seconde page 
        document.getElementById('rate').textContent = selectedGrade
        // Fermer la première carte
        document.getElementById('first-card').style.display = 'none';
        // Ouvrir la deuxième carte
        document.querySelector('.second-card-wrap').style.display = 'block'; 
    } else {
        // Mettre une alerte si c'est submit sans note
        alert('Please select a grade before submitting.');
    }
});
