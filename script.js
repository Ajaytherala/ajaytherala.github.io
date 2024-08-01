document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - 120; // Adjust offset to match the new height

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});
