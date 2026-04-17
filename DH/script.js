document.addEventListener('DOMContentLoaded', function() 
{
    console.log("JS loaded properly");

    // ========== 1. MOBILE HAMBURGER MENU ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // active navbar link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-menu a');

    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // 3: smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4: project modals
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelectorAll('.close-modal');

    const projectData = {
        1: {
            title: 'FinTech Analytics Dashboard',
            client: 'MoneyFlow Inc.',
            industry: 'Financial Services',
            challenge: 'The client needed a real time dashboard...',
            solution: 'DevelopersHub built a React based dashboard...',
            results: '60% faster data retrieval...',
            technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js', 'AWS'],
            duration: '4 months',
            image: 'https://placehold.co/800x500/1A1A1A/8B0000?text=FinTech+Dashboard'
        },
        2: {
            title: 'AI Customer Support Bot',
            client: 'SupportAI',
            industry: 'Customer Service',
            challenge: 'High support ticket volume...',
            solution: 'Developed an AI powered chatbot...',
            results: '75% queries resolved automatically...',
            technologies: ['Python', 'TensorFlow', 'Dialogflow', 'FastAPI', 'PostgreSQL'],
            duration: '3 months',
            image: 'https://placehold.co/800x500/1A1A1A/8B0000?text=AI+Support+Bot'
        },
        3: {
            title: 'E Commerce Platform',
            client: 'ShopFast',
            industry: 'Retail / E commerce',
            challenge: 'Outdated platform...',
            solution: 'Built a modern headless e commerce platform...',
            results: '45% increase in mobile conversions...',
            technologies: ['Next.js', 'Stripe', 'Sanity', 'Tailwind CSS', 'Vercel'],
            duration: '5 months',
            image: 'https://placehold.co/800x500/1A1A1A/8B0000?text=E-Commerce+Platform'
        },
        4: {
            title: 'AI Content Generation Suite',
            client: 'BlogMaster',
            industry: 'Content Marketing',
            challenge: 'Content team spent 20+ hours...',
            solution: 'Custom AI content generator...',
            results: '80% reduction in content creation time...',
            technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL', 'Redis'],
            duration: '3 months',
            image: 'https://placehold.co/800x500/1A1A1A/8B0000?text=Content+Gen+Suite'
        }
    };
    const viewProjectButtons = document.querySelectorAll('.view-project');
console.log("Project buttons found:", viewProjectButtons.length);

viewProjectButtons.forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];

        if (project && projectModal && modalBody) {
            modalBody.innerHTML = `
                <span class="close-modal">&times;</span>
                <img src="${project.image}" class="modal-project-image">
                <h2 class="modal-project-title">${project.title}</h2>
                <p class="modal-project-client">
                    <strong>Client:</strong> ${project.client} |
                    <strong>Industry:</strong> ${project.industry}
                </p>

                <div class="modal-section">
                    <h4>The Challenge</h4>
                    <p>${project.challenge}</p>
                </div>

                <div class="modal-section">
                    <h4>The Solution</h4>
                    <p>${project.solution}</p>
                </div>

                <div class="modal-section">
                    <h4>The Results</h4>
                    <p>${project.results}</p>
                </div>

                <div class="modal-section">
                    <h4>Technologies Used</h4>
                    <div>
                        ${project.technologies
                            .map(tech => `<span class="modal-tech-badge">${tech}</span>`)
                            .join('')}
                    </div>
                </div>

                <div class="modal-section">
                    <h4>Project Duration</h4>
                    <p>${project.duration}</p>
                </div>
            `;

            projectModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');   // 👈 THIS IS WHERE IT GOES
    });

    document.body.style.overflow = 'auto';
}

    // Get blog and service modals
    const blogModal = document.getElementById('blogModal');
    const blogModalBody = document.getElementById('blogModalBody');
    const serviceModal = document.getElementById('serviceModal');
    const serviceModalBody = document.getElementById('serviceModalBody');

    // Blog Data
    const blogData = {
    1: {
        title: 'The Future of AI in Software Development',
        date: 'March 15, 2026',
        category: 'AI',
        content: 'How artificial intelligence is reshaping how we build software...',
        fullContent: 'Artificial intelligence is fundamentally reshaping how we build software...'
    },

    2: {
        title: 'Why Your Business Needs a Custom CRM',
        date: 'March 28, 2026',
        category: 'Business',
        fullContent: 'Custom CRM systems help businesses manage customers efficiently, improve sales tracking, and automate workflows...'
    },

    3: {
        title: 'Top 5 Web Development Trends in 2026',
        date: 'April 10, 2026',
        category: 'Web Dev',
        fullContent: 'Modern web development is shifting toward edge computing, AI integration, and faster frameworks like Next.js and WebAssembly...'
    },

    4: {
        title: 'How to Choose the Right Tech Stack for Your Startup',
        date: 'April 25, 2026',
        category: 'Technology',
        fullContent: 'Choosing the right tech stack depends on scalability, team skill, budget, and long-term maintenance requirements...'
    }
};

    // Service Data
    const serviceData = {
    1: {
        title: 'Software Development',
        description: 'Custom web, mobile, and SaaS applications built to scale with your business.',
        fullDescription: 'We build custom software solutions...',
        benefits: ['Custom  tailoredsolutions', 'Scalable architecture'],
        process: ['Discovery', 'Design', 'Development']
    },
    2: {
        title: 'AI Solutions & Automation',
        description: 'AI automation',
        fullDescription: 'AI automation and ML solutions...',
        benefits: ['Efficiency', 'Automation'],
        process: ['Planning', 'Development', 'Deployment']
    },
    3: {
        title: 'AI Content Generation',
        description: 'Content automation',
        fullDescription: 'Generate content using AI...',
        benefits: ['Save time', 'Consistency'],
        process: ['Input', 'Generate', 'Review']
    },
    4: {
        title: 'Digital Marketing',
        description: 'Marketing services',
        fullDescription: 'SEO, ads, social media...',
        benefits: ['Growth', 'Reach'],
        process: ['Audit', 'Strategy', 'Execution']
    },
    5: {
        title: 'Post Production Services',
        description: 'Video editing',
        fullDescription: 'Professional editing services...',
        benefits: ['Quality', 'Fast'],
        process: ['Edit', 'Review', 'Deliver']
    }
};

    // BLOG
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogId = this.getAttribute('data-blog');
            const blog = blogData[blogId];

            if (blog && blogModal && blogModalBody) {
                blogModalBody.innerHTML = `
                    <span class="close-modal">&times;</span>
                    <h2>${blog.title}</h2>
                    <p><strong>${blog.date}</strong> | ${blog.category}</p>
                    <p>${blog.fullContent}</p>
                `;

                blogModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // SERVICE
    document.addEventListener('click', function(e) {
    const button = e.target.closest('.learn-more-btn');

    if (!button) return;

    const serviceId = button.getAttribute('data-service');
    const service = serviceData[serviceId];

    if (service && serviceModal && serviceModalBody) {

        serviceModalBody.innerHTML = `
            <span class="close-modal">&times;</span>
            <h2 class="modal-project-title">${service.title}</h2>

            <div class="modal-section">
                <h4>Overview</h4>
                <p>${service.fullDescription || service.description}</p>
            </div>

            <div class="modal-section">
                <h4>Key Benefits</h4>
                <ul>
                    ${service.benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h4>Our Process</h4>
                <ul>
                    ${service.process.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `;


        serviceModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
});
    // CONTACT FORM
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    function showFormMessage(element, message, type) {
        if (element) {
            element.innerHTML = message;
            element.className = type === 'error' ? 'form-message error' : 'form-message success';
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!name) return showFormMessage(formMessage, 'Enter name', 'error');
            if (!email) return showFormMessage(formMessage, 'Enter email', 'error');

            showFormMessage(formMessage, 'Submitted successfully!', 'success');
            contactForm.reset();
        });
    }

    // BOOKING
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');
    const timeSlots = document.querySelectorAll('.time-slot');
    let selectedTimeSlot = null;

    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            timeSlots.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            selectedTimeSlot = this.textContent;
        });
    });

    function showBookingMessage(message, type) {
        if (bookingMessage) {
            bookingMessage.innerHTML = message;
            bookingMessage.className = `form-message ${type}`;
        }
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('bookingName').value.trim();
            const email = document.getElementById('bookingEmail').value.trim();
            const bookingDate = document.getElementById('bookingDate').value;

            if (!selectedTimeSlot) return showBookingMessage('Select time slot', 'error');

            showBookingMessage(
                `Thank you ${name}! Booking confirmed for ${bookingDate} at ${selectedTimeSlot}.`,
                'success'
            );

            bookingForm.reset();
            selectedTimeSlot = null;
            timeSlots.forEach(s => s.classList.remove('active'));
        });
    }

    // NAVBAR BACKGROUND
    const navbar = document.querySelector('.navbar');

    function updateNavbarBackground() {
        if (navbar) {
            navbar.style.background = window.scrollY > 50
                ? 'rgba(10,10,10,0.98)'
                : 'rgba(10,10,10,0.95)';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);
    

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-modal')) {
        closeAllModals();
    }
});
    console.log("Website Loaded Successfully");
});