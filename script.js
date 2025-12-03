// Весь JavaScript код из тега <script> переносим сюда
document.addEventListener('DOMContentLoaded', function() {
    // Анимация при скролле
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Остальной код...
    
    // Инициализация
    window.addEventListener('load', () => {
        fadeInOnScroll();
        updateActiveDot();
    });
    
    window.addEventListener('scroll', () => {
        fadeInOnScroll();
        updateActiveDot();
    });
});