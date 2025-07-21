(function() {
    'use strict';

    // Inicialización cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
        initSmoothScrolling();
        initHeaderScroll();
        initFormValidation();
        // Puedes agregar aquí más funciones si las necesitas
    });

    /**
     * Smooth scrolling para enlaces de navegación
     */
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.header__nav-link[href^="#"], .navbar-brand[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId.length > 1) {
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Cierra el menú hamburguesa en móvil después de hacer clic
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        if (navbarCollapse.classList.contains('show')) {
                           const toggler = document.querySelector('.navbar-toggler');
                           toggler.click();
                        }
                    }
                }
            });
        });
    }

    /**
     * Efecto en el header al hacer scroll
     */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                } else {
                    header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                }
            });
        }
    }

    /**
     * Validación simple para un formulario de contacto (si existiera)
     */
    function initFormValidation() {
        const form = document.querySelector('.contact-form'); // Asumiendo que tienes un form con esta clase
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailField = form.querySelector('input[type="email"]');
                if (emailField && !emailField.value.includes('@')) {
                    alert('Por favor, introduce un email válido.');
                } else {
                    alert('¡Formulario enviado con éxito!');
                    form.reset();
                }
            });
        }
    }

})();