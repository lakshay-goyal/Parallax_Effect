// Add this to your JavaScript file
const observerOptions = {
    threshold: 1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe all elements with class 'desc'
document.querySelectorAll('.desc').forEach((desc) => {
    observer.observe(desc);
});