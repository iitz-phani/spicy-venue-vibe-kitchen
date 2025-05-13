// Menu and Gallery Data
const menuData = [
    {
        category: 'main',
        name: 'Hyderabadi Biryani',
        description: 'Aromatic basmati rice cooked with tender meat and authentic spices',
        price: '$18.99',
        image: 'images/biryani.jpg',
        isVeg: false,
        isSpicy: 3,
        isPopular: true
    },
    {
        category: 'main',
        name: 'Butter Chicken',
        description: 'Tender chicken cooked in a rich, creamy tomato sauce',
        price: '$18.99',
        image: 'images/butter-chicken.jpg',
        isVeg: false,
        isSpicy: 2,
        isPopular: true
    },
    {
        category: 'main',
        name: 'Tandoori Specialties',
        description: 'Grilled delicacies from our traditional clay oven',
        price: '$19.99',
        image: 'images/tandoori.jpg',
        isVeg: false,
        isSpicy: 2,
        isPopular: true
    },
    {
        category: 'starters',
        name: 'Paneer Tikka',
        description: 'Chunks of paneer marinated in spices and grilled in a tandoor',
        price: '12.99',
        image: 'images/paneer-tikka.jpg',
        isVeg: true,
        isSpicy: 2,
        isPopular: true
    },
    {
        category: 'starters',
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas',
        price: '8.99',
        image: 'images/samosa.jpg',
        isVeg: true,
        isSpicy: 2
    },
    {
        category: 'main',
        name: 'Palak Paneer',
        description: 'Cottage cheese cubes in a smooth spinach gravy',
        price: '15.99',
        image: 'images/palak-paneer.jpg',
        isVeg: true,
        isSpicy: 2
    },
    {
        category: 'bread',
        name: 'Garlic Naan',
        description: 'Soft bread topped with garlic and butter, baked in tandoor',
        price: '$4.99',
        image: 'images/naan.jpg',
        isVeg: true,
        isSpicy: 0
    },
    {
        category: 'bread',
        name: 'Jeera Rice',
        description: 'Basmati rice flavored with cumin seeds',
        price: '$6.99',
        image: 'images/jeera-rice.jpg',
        isVeg: true,
        isSpicy: 0
    },
    {
        category: 'desserts',
        name: 'Gulab Jamun',
        description: 'Deep-fried milk solids soaked in sugar syrup',
        price: '$7.99',
        image: 'images/gulab-jamun.jpg',
        isVeg: true,
        isSpicy: 0,
        isPopular: true
    },
];

const galleryData = [
    {
        image: 'images/gallery1.jpg',
        title: 'Traditional Indian Thali',
        description: 'A complete meal with various dishes served on a traditional platter'
    },
    {
        image: 'images/gallery2.jpg',
        title: 'Live Cooking Demonstration',
        description: 'Our expert chefs showcasing their culinary skills'
    },
    {
        image: 'images/gallery3.jpg',
        title: 'Colorful Indian Spices',
        description: 'Fresh and aromatic spices used in our authentic recipes'
    },
    {
        image: 'images/gallery4.jpg',
        title: 'Authentic Dining Experience',
        description: 'Modern ambiance meets traditional Indian hospitality'
    },
    {
        image: 'images/gallery5.jpg',
        title: 'Traditional Indian Desserts',
        description: 'Sweet delicacies made with traditional recipes'
    },
    {
        image: 'images/gallery6.jpg',
        title: 'Street Food Specialties',
        description: 'Popular Indian street food with a gourmet twist'
    },
    {
        image: 'images/gallery7.jpg',
        title: 'Modern Indian Fusion',
        description: 'Contemporary interpretations of classic dishes'
    },
    {
        image: 'images/gallery8.jpg',
        title: 'Restaurant Ambiance',
        description: 'Elegant dining space with modern amenities'
    },
    {
        image: 'images/gallery9.jpg',
        title: "Chef's Special Preparation",
        description: 'Signature dishes crafted by our master chefs'
    },
    {
        image: 'images/gallery10.jpg',
        title: 'Tandoor Specialties',
        description: 'Dishes cooked in our traditional clay oven'
    }
];

// DOM Elements
const header = document.querySelector('header');
const slides = document.querySelectorAll('.slide');
const menuContainer = document.querySelector('.menu-grid');
const galleryContainer = document.querySelector('.gallery-grid');

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.menu-item').forEach(item => observer.observe(item));
document.querySelectorAll('.gallery-item').forEach(item => observer.observe(item));
document.querySelectorAll('section h2').forEach(heading => observer.observe(heading));

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Hero Section Slider
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Menu Functionality
let activeCategory = 'all';

function createMenuCard(item) {
    const spiceIndicator = item.isSpicy ? `<div class="spice-indicator">${'🌶️'.repeat(item.isSpicy)}</div>` : '';
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-badges">
                <span class="badge ${item.isVeg ? 'veg' : 'non-veg'}">${item.isVeg ? 'Veg' : 'Non-Veg'}</span>
                ${item.isPopular ? '<span class="badge popular">Popular</span>' : ''}
            </div>
            <button class="heart-icon">
                <i class="far fa-heart"></i>
            </button>
            <div class="menu-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price-spice">
                    <span class="price">$${item.price}</span>
                    ${spiceIndicator}
                </div>
            </div>
        </div>
    `;
}

function updateMenu(category = 'all') {
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    menuContainer.innerHTML = filteredItems.map(createMenuCard).join('');
    
    // Add heart icon click handlers
    document.querySelectorAll('.heart-icon').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
        });
    });
}

// Category button handling
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateMenu(button.dataset.category);
    });
});

// Gallery Functionality
function createGalleryItem(item) {
    return `
        <div class="gallery-item animate-fade-in">
            <img src="${item.image}" 
                 alt="${item.title}" 
                 loading="lazy"
                 title="${item.description}">
            <div class="gallery-caption">${item.title}</div>
        </div>
    `;
}

function initializeGallery() {
    if (!galleryContainer) return;

    // Populate gallery
    galleryContainer.innerHTML = galleryData.map(createGalleryItem).join('');

    // Add click handlers for gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            showGalleryModal(index);
        });
    });

    // Re-observe new elements
    document.querySelectorAll('.gallery-item').forEach(item => observer.observe(item));
}

// Gallery Modal
function createGalleryModal() {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-modal-content">
            <span class="gallery-modal-close">&times;</span>
            <img id="gallery-modal-img" src="" alt="">
            <div class="gallery-modal-caption"></div>
            <button class="gallery-modal-prev">&lt;</button>
            <button class="gallery-modal-next">&gt;</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Add event listeners
    modal.querySelector('.gallery-modal-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.querySelector('.gallery-modal-prev').addEventListener('click', () => {
        currentModalIndex = (currentModalIndex - 1 + galleryData.length) % galleryData.length;
        updateModalContent(currentModalIndex);
    });

    modal.querySelector('.gallery-modal-next').addEventListener('click', () => {
        currentModalIndex = (currentModalIndex + 1) % galleryData.length;
        updateModalContent(currentModalIndex);
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    return modal;
}

let galleryModal;
let currentModalIndex = 0;

function showGalleryModal(index) {
    if (!galleryModal) {
        galleryModal = createGalleryModal();
    }

    currentModalIndex = index;
    updateModalContent(index);
    galleryModal.style.display = 'flex';
}

function updateModalContent(index) {
    const item = galleryData[index];
    const modalImg = document.getElementById('gallery-modal-img');
    const modalCaption = document.querySelector('.gallery-modal-caption');

    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalCaption.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});

// Initialize menu
updateMenu();

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    document.querySelectorAll('.animate-on-load').forEach(el => {
        el.classList.add('animate-fade-in');
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = 'none';
    }
});
