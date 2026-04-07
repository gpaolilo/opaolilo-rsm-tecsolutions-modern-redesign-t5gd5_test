// Single Navbar scroll effect function - changes from transparent to black
let lastScroll = 0;
let ticking = false;

function updateNavbar() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.add('glass');
        navbar.classList.remove('bg-transparent');
        // Force black background
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.webkitBackdropFilter = 'blur(20px)';
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.remove('glass');
        navbar.classList.add('bg-transparent');
        // Force transparent background
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
    ticking = false;
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbar);
} else {
    updateNavbar();
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Language Management
let currentLanguage = localStorage.getItem('rsm-language') || 'en';

// Translations object
const translations = {
    en: {
        // Navigation
        navAbout: 'About',
        navServices: 'Services',
        navProcess: 'Process',
        navContact: 'Contact Us',
        
        // Hero
        heroTagline: 'Innovative IT Solutions',
        heroTitle1: 'Transform Your ',
        heroTitle2: 'Business',
        heroTitle3: ' with Smart Tech',
        heroDescription: 'RSM TecSolutions delivers customized IT solutions and software development that help companies increase their value and improve operations with quality services.',
        heroButton1: 'Explore Services',
        heroButton2: 'Get in Touch',
        
        // Stats
        statsClients: 'Happy Clients',
        statsAwards: 'Awards Won',
        statsProjects: 'Projects Done',
        statsCertifications: 'Certifications',
        
        // About
        aboutTitle: 'About Us',
        aboutHeading1: 'Driving Innovation Through ',
        aboutHeading2: 'Technology Excellence',
        aboutDescription: 'RSM TecSolutions is an innovative company focused on providing customized solutions in information technology and software development. Our mission is to help companies increase their value and improve their operations with quality and efficient services.',
        aboutItem1: 'Software Development',
        aboutItem1Desc: 'Bespoke solutions tailored to your needs',
        aboutItem2: 'IT Security',
        aboutItem2Desc: 'Protection for your digital assets',
        aboutItem3: 'SAFR Recognition',
        aboutItem3Desc: 'Advanced facial recognition tech',
        aboutItem4: 'IT Consulting',
        aboutItem4Desc: 'Expert guidance and strategy',
        
        // Services
        servicesTitle: 'Our Services',
        servicesHeading1: 'We Provide ',
        servicesHeading2: 'IT Services',
        servicesDescription: 'Discover how RSM TecSolutions can boost your company\'s success, offering customized solutions in software development, IT consulting, information security and facial recognition.',
        service1: 'Software Development',
        service1Desc: 'We seek the best technologies on the market to design innovative solutions and serve each client in the best way.',
        service2: 'IT Security',
        service2Desc: 'We guarantee the security of your digital assets and business continuity with reliable solutions in cybersecurity and threat prevention.',
        service3: 'SAFR Customization',
        service3Desc: 'We offer customization of reports and applications based on SAFR facial recognition technology.',
        service4: 'IT Consultant',
        service4Desc: 'We work with the integration of the most varied technologies available in the market to provide the best solution for our customers.',
        service5: '24/7 Monitoring',
        service5Desc: 'Enhance visibility into your IT environment with advanced monitoring solutions like Grafana for real-time data analysis.',
        service6: 'SAFR Support',
        service6Desc: 'We are a certified partner and able to support the installation, configuration and monitoring of SAFR systems.',
        learnMore: 'Learn More',
        
        // Process
        processTitle: 'Our Process',
        processHeading1: 'Expert Guidance to ',
        processHeading2: 'Achieve Your Objectives',
        step1Title: 'Strategic Business Planning',
        step1Desc: 'At RSM TecSolutions, we provide professional consulting services to help you create and execute a comprehensive business plan tailored to your company\'s unique goals and requirements. Our team of experts works closely with you to analyze your market, identify opportunities, and develop strategies for growth and success.',
        step1Item1: 'Market analysis and research',
        step1Item2: 'Opportunity identification',
        step1Item3: 'Growth strategy development',
        step2Title: 'Solution Development & Deployment',
        step2Desc: 'At RSM TecSolutions, we design and deploy solutions that are actionable, adaptable, and resilient to change. Our team helps organizations plan and implement technology strategies aligned with their business goals. By leveraging Agile methodologies and DevOps practices, along with Continuous Integration and Continuous Delivery (CI/CD), we deliver software faster, improve quality, and enable frequent, reliable releases—helping our clients accelerate time-to-market and stay competitive.',
        step2Item1: 'Agile Development',
        step2Item1Desc: 'Iterative and incremental approach',
        step2Item2: 'DevOps & CI/CD',
        step2Item2Desc: 'Automated deployment and integration',
        step3Title: 'Operations Analysis & KPIs',
        step3Desc: 'Effective operations monitoring involves tracking and analyzing a wide range of data points, including production rates, sales figures, customer feedback, and employee performance. RSM TecSolutions provides valuable insights into how their partners are performing.',
        step3Subtitle: 'Continual Improvement & Growth',
        step3SubDesc: 'By developing targeted strategies and allocating resources effectively, our team can guide meaningful changes that drive your business growth and success.',
        
        // CTA
        ctaHeading1: 'How May We ',
        ctaHeading2: 'Help You!',
        ctaDescription: 'RSM TecSolutions team will work with you to understand your unique needs and goals, and develop a customized approach that meets your budget and timeline.',
        ctaButton: 'Contact Us Today',
        
        // Contact
        contactTitle: 'Get In Touch',
        contactHeading1: 'Contact Us ',
        contactHeading2: 'Today',
        contactDescription: 'Ready to transform your business with innovative IT solutions? Reach out to us directly via email or WhatsApp.',
        contactEmail: 'Email Us',
        contactWhatsApp: 'WhatsApp',
        contactResponse: 'We respond within 24 hours',
        contactChat: 'Chat with us directly',
        contactHours: 'Business Hours: Monday-Friday, 9AM-6PM',
        
        // Footer
        footerDescription: 'Innovative IT solutions provider focused on delivering customized software development, security, and consulting services.',
        footerServices: 'Services',
        footerSoftware: 'Software Development',
        footerSecurity: 'IT Security',
        footerSAFR: 'SAFR Recognition',
        footerConsulting: 'IT Consulting',
        footerCompany: 'Company',
        footerAbout: 'About Us',
        footerProcess: 'Our Process',
        footerContact: 'Contact',
        footerCareers: 'Careers',
        footerRights: '© 2024 RSM TecSolutions. All rights reserved.',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        
        // Modal
        modalTitle: 'Message Sent!',
        modalDescription: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
        modalButton: 'Close'
    },
    pt: {
        // Navigation
        navAbout: 'Sobre',
        navServices: 'Serviços',
        navProcess: 'Processo',
        navContact: 'Contate-nos',
        
        // Hero
        heroTagline: 'Soluções Inovadoras em TI',
        heroTitle1: 'Transforme Seu ',
        heroTitle2: 'Negócio',
        heroTitle3: ' com Tecnologia Inteligente',
        heroDescription: 'RSM TecSolutions oferece soluções personalizadas em TI e desenvolvimento de software que ajudam empresas a aumentar seu valor e melhorar operações com serviços de qualidade.',
        heroButton1: 'Explorar Serviços',
        heroButton2: 'Entre em Contato',
        
        // Stats
        statsClients: 'Clientes Satisfeitos',
        statsAwards: 'Prêmios Conquistados',
        statsProjects: 'Projetos Concluídos',
        statsCertifications: 'Certificações',
        
        // About
        aboutTitle: 'Sobre Nós',
        aboutHeading1: 'Impulsionando Inovação Através da ',
        aboutHeading2: 'Excelência Tecnológica',
        aboutDescription: 'RSM TecSolutions é uma empresa inovadora focada em fornecer soluções personalizadas em tecnologia da informação e desenvolvimento de software. Nossa missão é ajudar empresas a aumentar seu valor e melhorar suas operações com serviços de qualidade e eficientes.',
        aboutItem1: 'Desenvolvimento de Software',
        aboutItem1Desc: 'Soluções sob medida para suas necessidades',
        aboutItem2: 'Segurança de TI',
        aboutItem2Desc: 'Proteção para seus ativos digitais',
        aboutItem3: 'Reconhecimento SAFR',
        aboutItem3Desc: 'Tecnologia avançada de reconhecimento facial',
        aboutItem4: 'Consultoria em TI',
        aboutItem4Desc: 'Orientação e estratégia especializada',
        
        // Services
        servicesTitle: 'Nossos Serviços',
        servicesHeading1: 'Oferecemos ',
        servicesHeading2: 'Serviços em TI',
        servicesDescription: 'Descubra como a RSM TecSolutions pode impulsionar o sucesso da sua empresa, oferecendo soluções personalizadas em desenvolvimento de software, consultoria em TI, segurança da informação e reconhecimento facial.',
        service1: 'Desenvolvimento de Software',
        service1Desc: 'Buscamos as melhores tecnologias do mercado para projetar soluções inovadoras e atender cada cliente da melhor forma.',
        service2: 'Segurança de TI',
        service2Desc: 'Garantimos a segurança dos seus ativos digitais e a continuidade dos negócios com soluções confiáveis em cibersegurança e prevenção de ameaças.',
        service3: 'Personalização SAFR',
        service3Desc: 'Oferecemos personalização de relatórios e aplicações baseadas na tecnologia de reconhecimento facial SAFR.',
        service4: 'Consultoria em TI',
        service4Desc: 'Trabalhamos com a integração das mais variadas tecnologias disponíveis no mercado para fornecer a melhor solução para nossos clientes.',
        service5: 'Monitoramento 24/7',
        service5Desc: 'Aumente a visibilidade do seu ambiente de TI com soluções avançadas de monitoramento como Grafana para análise de dados em tempo real.',
        service6: 'Suporte SAFR',
        service6Desc: 'Somos parceiros certificados e capacitados para dar suporte na instalação, configuração e monitoramento dos sistemas SAFR.',
        learnMore: 'Saiba Mais',
        
        // Process
        processTitle: 'Nosso Processo',
        processHeading1: 'Orientação Especializada para ',
        processHeading2: 'Alcançar Seus Objetivos',
        step1Title: 'Planejamento Estratégico de Negócios',
        step1Desc: 'Na RSM TecSolutions, fornecemos serviços de consultoria profissional para ajudar você a criar e executar um plano de negócios abrangente adaptado aos objetivos e requisitos exclusivos da sua empresa. Nossa equipe de especialistas trabalha em estreita colaboração com você para analisar seu mercado, identificar oportunidades e desenvolver estratégias de crescimento e sucesso.',
        step1Item1: 'Análise e pesquisa de mercado',
        step1Item2: 'Identificação de oportunidades',
        step1Item3: 'Desenvolvimento de estratégias de crescimento',
        step2Title: 'Desenvolvimento e Implantação de Soluções',
        step2Desc: 'Na RSM TecSolutions, projetamos e implantamos soluções que são acionáveis, adaptáveis e resilientes a mudanças. Nossa equipe ajuda as organizações a planejar e implementar estratégias de tecnologia alinhadas com seus objetivos de negócios. Ao aproveitar metodologias Ágeis e práticas DevOps, juntamente com Integração Contínua e Entrega Contínua (CI/CD), entregamos software mais rápido, melhoramos a qualidade e permitimos lançamentos frequentes e confiáveis - ajudando nossos clientes a acelerar o tempo de comercialização e permanecer competitivos.',
        step2Item1: 'Desenvolvimento Ágil',
        step2Item1Desc: 'Abordagem iterativa e incremental',
        step2Item2: 'DevOps & CI/CD',
        step2Item2Desc: 'Implantação e integração automatizadas',
        step3Title: 'Análise de Operações e KPIs',
        step3Desc: 'O monitoramento eficaz das operações envolve o rastreamento e análise de uma ampla gama de pontos de dados, incluindo taxas de produção, números de vendas, feedback do cliente e desempenho dos funcionários. A RSM TecSolutions fornece insights valiosos sobre o desempenho de seus parceiros.',
        step3Subtitle: 'Melhoria Contínua e Crescimento',
        step3SubDesc: 'Ao desenvolver estratégias direcionadas e alocar recursos de forma eficaz, nossa equipe pode orientar mudanças significativas que impulsionam o crescimento e sucesso do seu negócio.',
        
        // CTA
        ctaHeading1: 'Como Podemos ',
        ctaHeading2: 'Ajudar Você!',
        ctaDescription: 'A equipe RSM TecSolutions trabalhará com você para entender suas necessidades e objetivos únicos e desenvolver uma abordagem personalizada que atenda ao seu orçamento e cronograma.',
        ctaButton: 'Contate-nos Hoje',
        
        // Contact
        contactTitle: 'Entre em Contato',
        contactHeading1: 'Contate-nos ',
        contactHeading2: 'Hoje',
        contactDescription: 'Pronto para transformar seu negócio com soluções inovadoras em TI? Entre em contato conosco diretamente por e-mail ou WhatsApp.',
        contactEmail: 'Envie-nos um E-mail',
        contactWhatsApp: 'WhatsApp',
        contactResponse: 'Respondemos em até 24 horas',
        contactChat: 'Converse diretamente conosco',
        contactHours: 'Horário Comercial: Segunda a Sexta, 9h às 18h',
        
        // Footer
        footerDescription: 'Fornecedor de soluções inovadoras em TI focado em oferecer desenvolvimento de software personalizado, segurança e serviços de consultoria.',
        footerServices: 'Serviços',
        footerSoftware: 'Desenvolvimento de Software',
        footerSecurity: 'Segurança de TI',
        footerSAFR: 'Reconhecimento SAFR',
        footerConsulting: 'Consultoria em TI',
        footerCompany: 'Empresa',
        footerAbout: 'Sobre Nós',
        footerProcess: 'Nosso Processo',
        footerContact: 'Contato',
        footerCareers: 'Carreiras',
        footerRights: '© 2024 RSM TecSolutions. Todos os direitos reservados.',
        footerPrivacy: 'Política de Privacidade',
        footerTerms: 'Termos de Serviço',
        
        // Modal
        modalTitle: 'Mensagem Enviada!',
        modalDescription: 'Obrigado por entrar em contato. Retornaremos dentro de 24 horas.',
        modalButton: 'Fechar'
    }
};

// Mobile Menu Toggle - Fixed Animation
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
let menuOpen = false;

if (mobileMenuBtn && mobileMenu) {
    // Initialize menu state
    mobileMenu.classList.add('mobile-menu-closed');
    mobileMenu.classList.remove('hidden'); // Remove hidden to allow transforms
    
    mobileMenuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        const lines = mobileMenuBtn.querySelectorAll('span');
        
        if (menuOpen) {
            // Open menu
            mobileMenu.classList.remove('mobile-menu-closed');
            mobileMenu.classList.add('mobile-menu-open');
            
            // Animate hamburger to X
            if (lines.length >= 3) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            }
        } else {
            // Close menu
            mobileMenu.classList.remove('mobile-menu-open');
            mobileMenu.classList.add('mobile-menu-closed');
            
            // Reset hamburger
            if (lines.length >= 3) {
                lines[0].style.transform = '';
                lines[1].style.opacity = '1';
                lines[2].style.transform = '';
            }
        }
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.remove('mobile-menu-open');
            mobileMenu.classList.add('mobile-menu-closed');
            
            const lines = mobileMenuBtn.querySelectorAll('span');
            if (lines.length >= 3) {
                lines[0].style.transform = '';
                lines[1].style.opacity = '1';
                lines[2].style.transform = '';
            }
        });
    });
}

// NOTE: This duplicate function block has been removed and merged with the one above

// Counter Animation with robust handling
const counters = document.querySelectorAll('.counter-animated');

const animateCounter = (counter, target) => {
    const duration = 1500; // 1.5 seconds for smoother animation
    const startValue = 0;
    const startTime = performance.now();
    
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
    
    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        
        const currentValue = Math.floor(easedProgress * target);
        counter.innerText = currentValue + (target >= 100 ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + (target >= 100 ? '+' : '');
            counter.classList.add('counter-completed');
        }
    };
    
    requestAnimationFrame(updateCounter);
};

// Simple and reliable Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            if (!isNaN(target) && entry.target.innerText === '0') {
                // Start animation immediately
                animateCounter(entry.target, target);
            }
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: '50px' // Start animation 50px before element enters viewport
});

// Initialize counters on DOM load
function initCounters() {
    // Reset all counters to 0
    counters.forEach(counter => {
        if (!counter.classList.contains('counter-completed')) {
            counter.innerText = '0';
        }
    });
    
    // Set up observer for each counter
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Check for counters already in view on load
    setTimeout(() => {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            const isInViewport = (
                rect.top <= windowHeight * 0.75 && // 75% down from top
                rect.bottom >= 0
            );
            
            if (isInViewport && counter.innerText === '0') {
                const target = parseInt(counter.getAttribute('data-target'));
                if (!isNaN(target)) {
                    animateCounter(counter, target);
                }
            }
        });
    }, 500);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
} else {
    initCounters();
}

// Intersection Observer for scroll animations - Enhanced reliability
const observerOptions = {
    threshold: 0.05, // More sensitive trigger
    rootMargin: '100px' // Start animation 100px before element enters viewport
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // If it's a process image, ensure it's fully visible
            if (entry.target.classList.contains('process-image')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            }
        }
    });
}, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
    // Exclude hero-content and hero-image from scroll observer to prevent layout shift
    const animatedElements = document.querySelectorAll(
        '.about-content, .about-image, .services-header, .service-card, .process-header, .process-step, .cta-content, .contact-info, .contact-form, .process-content, .process-image'
    );
    
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
    
    // Hero content is already visible by CSS, no need to animate
    // This prevents the "move to left" issue after page load
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'none';
    }
    if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'none';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
    });
} else {
    initScrollAnimations();
}

// Initialize GSAP ScrollTrigger if available - Fixed to avoid CSS conflicts
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Note: Process steps are handled by CSS/IntersectionObserver to avoid conflicts
    // but we add subtle parallax to process images
    gsap.utils.toArray('.process-image').forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// Preloader and initial animations - Fixed
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Ensure hero is visible if animation didn't trigger
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && getComputedStyle(heroContent).opacity === '0') {
            document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
                el.classList.add('visible');
            });
        }
    }, 1500);
});

// Magnetic effect for buttons and interactive elements
const magneticElements = document.querySelectorAll('.magnetic-element, .magnetic-btn');

magneticElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const maxMove = 15;
        const moveX = (x / rect.width) * maxMove;
        const moveY = (y / rect.height) * maxMove;
        
        elem.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    elem.addEventListener('mouseleave', () => {
        elem.style.transform = 'translate(0, 0)';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
function handleFormSubmit(form) {
    const modal = document.getElementById('success-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Animate in
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 10);
    
    // Reset form
    form.reset();
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('success-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Animate out
    modalContent.style.transform = 'scale(0.95)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

// Close modal on outside click
document.getElementById('success-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'success-modal') {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('success-modal');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

// Floating animation for cards - No parallax conflict
// Let CSS handle the floating animation
// Remove parallax to avoid conflicts with CSS animations

// Initialize GSAP ScrollTrigger if available - Fixed to avoid CSS conflicts
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Note: Process steps are handled by CSS/IntersectionObserver to avoid conflicts
    // but we add subtle parallax to process images
    gsap.utils.toArray('.process-image').forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-accent-blue');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-accent-blue');
        }
    });
});

// Preloader and initial animations - Fixed
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Ensure hero is visible if animation didn't trigger
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && getComputedStyle(heroContent).opacity === '0') {
            document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        }
    }, 1500);
});

// Performance optimization: Disable complex animations on touch devices
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (isTouchDevice) {
    // Simplify animations for mobile
    document.querySelectorAll('.floating-card').forEach(el => {
        el.style.animation = 'none';
    });
}

// Language Switcher Functions
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('rsm-language', lang);
    
    // Update language attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update language switcher buttons
    document.querySelectorAll('.language-switcher').forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update current language text in desktop switcher
    const currentLangText = document.getElementById('current-language');
    if (currentLangText) {
        currentLangText.textContent = lang.toUpperCase();
    }
    
    // Update page title based on language
    if (lang === 'pt') {
        document.title = 'RSM TecSolutions – Consultoria e Soluções em TI';
    } else {
        document.title = 'RSM TecSolutions – IT Consulting and Solutions';
    }
    
    // Close mobile menu after language switch on mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (window.innerWidth < 768 && mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenu.classList.add('mobile-menu-closed');
        
        const lines = mobileMenuBtn.querySelectorAll('span');
        if (lines.length >= 3) {
            lines[0].style.transform = '';
            lines[1].style.opacity = '1';
            lines[2].style.transform = '';
        }
    }
    
    // Trigger animations for language change
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .about-content, .about-image, .services-header, .service-card, .process-header, .process-step, .cta-content, .contact-info, .contact-form, .process-content, .process-image');
    animatedElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = null;
    });
    
    // Language change notification removed
}

// Language notification function removed - no longer showing notification cards

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateLanguage(currentLanguage);
    
    // Add language switcher event listeners
    document.querySelectorAll('.language-switcher').forEach(button => {
        button.addEventListener('click', () => {
            updateLanguage(button.dataset.lang);
        });
    });
});

// Particle System for Hero Section
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.opacity = 0.3 + Math.random() * 0.5;
        container.appendChild(particle);
    }
}

// Initialize particles on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}

// Console welcome message
console.log('%c RSM TecSolutions ', 'background: #c1ff00; color: #0a0a0a; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Welcome to our website! ', 'color: #1a2ffb; font-size: 14px;');