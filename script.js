document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize theme based on localStorage
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Apply the saved theme on load
    initializeTheme();

    // Toggle Light/Dark Mode
    const themeToggleButton = document.querySelector('.theme-toggle');
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });

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
                winner = "The winner is Charizard";
            } else if (pokemon1 === "Charizard" && pokemon2 === "Pikachu") {
                winner = "The winner is Charizard!";
            } else if (pokemon1 === "Bulbasaur" && pokemon2 === "Squirtle") {
                winner = "The winner is Squirtle!";
            } else if (pokemon1 === "Squirtle" && pokemon2 === "Bulbasaur") {
                winner = "The winner is Squirtle!";
            } else {
                winner = "Battle is too close to call!";
            }

            document.getElementById('battleResult').textContent = `${winner}!`;
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
