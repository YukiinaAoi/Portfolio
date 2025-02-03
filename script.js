// Function to transition to the main content
function enterPortfolio() {
    // Hide the landing page
    document.getElementById('landing-page').style.display = 'none';

    // Show the main content with a fade-in effect
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 50);

    // Blur the background image
    document.getElementById('background').classList.add('blurred');
}

// Function to show different sections in the main content
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}
