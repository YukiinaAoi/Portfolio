function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

function showProjects() {
    var projectsSection = document.getElementById("projects");
    projectsSection.classList.remove("hidden");
    projectsSection.scrollIntoView({ behavior: "smooth" });
}

