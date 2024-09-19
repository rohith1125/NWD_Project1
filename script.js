// Ensure the DOM content is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Toggle Light/Dark Mode
    const toggleThemeButton = document.getElementById('toggleTheme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Battle Functionality
    const battleButton = document.getElementById('battleBtn');
    if (battleButton) {
        battleButton.addEventListener('click', function() {
            const pokemon1 = document.getElementById('pokemon1').value;
            const pokemon2 = document.getElementById('pokemon2').value;

            let winner;
            if (pokemon1 === pokemon2) {
                winner = "It's a tie!";
            } else if (pokemon1 === "Pikachu" && pokemon2 === "Charizard") {
                winner = "Charizard";
            } else if (pokemon1 === "Charizard" && pokemon2 === "Pikachu") {
                winner = "Charizard";
            } else if (pokemon1 === "Bulbasaur" && pokemon2 === "Squirtle") {
                winner = "Squirtle";
            } else if (pokemon1 === "Squirtle" && pokemon2 === "Bulbasaur") {
                winner = "Squirtle";
            } else {
                winner = "Battle is too close to call!";
            }

            document.getElementById('battleResult').textContent = `The winner is ${winner}!`;
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                document.getElementById('formMessage').textContent = "Thank you for your message!";
                document.getElementById('formMessage').style.color = "green";
            } else {
                document.getElementById('formMessage').textContent = "Please fill out all fields.";
                document.getElementById('formMessage').style.color = "red";
            }
        });
    }

    // Modal Popup for About Page
    const aboutModalBtn = document.getElementById('aboutModalBtn');
    const aboutModal = document.getElementById('aboutModal');
    const closeModalBtn = document.getElementsByClassName('close-btn')[0];

    if (aboutModalBtn && aboutModal && closeModalBtn) {
        aboutModalBtn.onclick = function() {
            aboutModal.style.display = 'block';
        };

        closeModalBtn.onclick = function() {
            aboutModal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == aboutModal) {
                aboutModal.style.display = 'none';
            }
        };
    }
});
