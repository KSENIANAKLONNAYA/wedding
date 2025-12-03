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
    
    // Навигация по точкам
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section, footer');
    
    const updateActiveDot = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-target') === currentSection) {
                dot.classList.add('active');
            }
        });
    };
    
    // Плавная прокрутка для навигационных точек
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetId = dot.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Обратный отсчет до свадьбы (10 января 2026, 17:00 Москва)
    function updateCountdown() {
        const weddingDate = new Date('January 10, 2026 17:00:00 GMT+0300').getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        if (timeLeft < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.querySelector('.countdown-title').textContent = 'Мы поженились!';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Инициализация
    window.addEventListener('load', () => {
        fadeInOnScroll();
        updateActiveDot();
        updateCountdown();
        setInterval(updateCountdown, 1000); // Обновлять каждую секунду
        
        // Анимация для элементов с задержкой
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    window.addEventListener('scroll', () => {
        fadeInOnScroll();
        updateActiveDot();
    });
});