document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const navLinks = document.querySelectorAll('nav a');

    function checkSlide() {
        sections.forEach(section => {
            const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
            const sectionBottom = section.offsetTop + section.offsetHeight;
            const isHalfShown = slideInAt > section.offsetTop;
            const isNotScrolledPast = window.scrollY < sectionBottom;

            if (isHalfShown && isNotScrolledPast) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    }

    function animateSkills() {
        skillProgressBars.forEach(bar => {
            if (bar.classList.contains('python')) bar.style.width = '70%';
            if (bar.classList.contains('java')) bar.style.width = '60%';
            if (bar.classList.contains('javascript')) bar.style.width = '50%';
            if (bar.classList.contains('htmlcss')) bar.style.width = '80%';
            if (bar.classList.contains('react')) bar.style.width = '30%';
            if (bar.classList.contains('sql')) bar.style.width = '60%';
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide();
    setTimeout(animateSkills, 500);
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});