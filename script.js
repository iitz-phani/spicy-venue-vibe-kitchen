// Menu and Gallery Data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const menuData = [
    // Tiffins
    { category: 'tiffins', name: 'IDLI', description: 'Steamed rice and lentil cakes', price: '5.99' },
    { category: 'tiffins', name: 'IDLI SAMBAR(3)', description: 'Idli served with sambar', price: '7.99' },
    { category: 'tiffins', name: 'GHEE KARAM IDLI', description: 'Idli with spicy ghee powder', price: '7.99', badge: 'must-try' },
    { category: 'tiffins', name: 'VADA(2)', description: 'Crispy lentil donuts', price: '6.49' },
    { category: 'tiffins', name: 'VADA SAMBAR(2)', description: 'Vada served with sambar', price: '7.99' },
    { category: 'tiffins', name: 'IDLI VADA COMBO', description: 'Combination of idli and vada', price: '7.99' },
    { category: 'tiffins', name: 'POORI BHAJI', description: 'Puffed bread with potato curry', price: '9.99' },
    { category: 'tiffins', name: 'POORI WITH CHICKEN CURRY', description: 'Poori served with chicken curry', price: '11.99' },
    { category: 'tiffins', name: 'POORI WITH GOAT CURRY', description: 'Poori served with goat curry', price: '14.99' },
    { category: 'tiffins', name: 'UPMA', description: 'Savory semolina porridge', price: '5.99' },
    { category: 'tiffins', name: 'PONGAL', description: 'Rice and lentil porridge', price: '5.99' },
    { category: 'tiffins', name: 'PLAIN DOSA', description: 'Crispy rice and lentil crepe', price: '8.99' },
    { category: 'tiffins', name: 'MASALA DOSA', description: 'Dosa with potato filling', price: '9.99', badge: 'must-try' },
    { category: 'tiffins', name: 'ONION DOSA', description: 'Dosa with onion topping', price: '9.99' },
    { category: 'tiffins', name: 'ONION MASALA DOSA', description: 'Dosa with onion and potato filling', price: '9.99' },
    { category: 'tiffins', name: 'GHEE KARAM DOSA', description: 'Dosa with spicy ghee powder', price: '9.99', badge: 'special' },

    // Appetizers
    { category: 'appetizers', name: 'VEG MANCHURIA', description: 'Indo-Chinese vegetable fritters', price: '9.99' },
    { category: 'appetizers', name: 'PANEER 65', description: 'Spicy cottage cheese fritters', price: '10.99' },
    { category: 'appetizers', name: 'CHILLI PANEER', description: 'Indo-Chinese style spicy paneer', price: '10.99' },
    { category: 'appetizers', name: 'JALAPENO PANEER', description: 'Paneer with spicy jalapenos', price: '11.99' },
    { category: 'appetizers', name: 'GOBI 65', description: 'Spicy cauliflower fritters', price: '9.99' },
    { category: 'appetizers', name: 'GOBI MANCHURIA', description: 'Indo-Chinese style cauliflower', price: '9.99' },
    { category: 'appetizers', name: 'CHILLI BABYCORN', description: 'Spicy baby corn preparation', price: '10.99' },
    { category: 'appetizers', name: 'CRISPY CORN', description: 'Crispy fried corn kernels', price: '10.99' },
    { category: 'appetizers', name: 'SPRING ROLLS', description: 'Vegetable filled crispy rolls', price: '9.99' },
    { category: 'appetizers', name: 'CHILLI EGG', description: 'Spicy egg preparation', price: '10.99' },
    { category: 'appetizers', name: "SURAVI'S SPECIAL CHICKEN 65", description: 'Signature spicy chicken fritters', price: '10.99', badge: 'special' },
    { category: 'appetizers', name: 'CHILLI CHICKEN', description: 'Indo-Chinese style spicy chicken', price: '10.99' },
    { category: 'appetizers', name: 'GUNTUR KODI VEPUDU', description: 'Spicy Guntur style chicken fry', price: '10.99', badge: 'must-try' },
    { category: 'appetizers', name: 'MIRAPA KODI', description: 'Spicy pepper chicken', price: '10.99' },
    { category: 'appetizers', name: 'KARIVAEPAKU KODI', description: 'Curry leaf flavored chicken', price: '10.99' },
    { category: 'appetizers', name: 'CHICKEN GHEE ROAST FRY', description: 'Chicken roasted in ghee', price: '11.99', badge: 'special' },
    { category: 'appetizers', name: 'JALAPENO CHICKEN', description: 'Chicken with spicy jalapenos', price: '11.99' },
    { category: 'appetizers', name: 'GARLIC CHICKEN DRY', description: 'Garlic flavored chicken fry', price: '10.99' },
    { category: 'appetizers', name: "SURAVI'S SPL CHICKEN FRY", description: 'Special house chicken fry', price: '12.99', badge: 'special' },
    { category: 'appetizers', name: 'GOAT FRY', description: 'Spicy goat fry', price: '14.99' },
    { category: 'appetizers', name: 'GOAT GHEE ROAST FRY', description: 'Goat roasted in ghee', price: '14.99', badge: 'special' },
    { category: 'appetizers', name: 'GOAT PEPPER FRY', description: 'Pepper flavored goat fry', price: '14.99' },
    { category: 'appetizers', name: 'CHILLI SHRIMP', description: 'Spicy shrimp preparation', price: '14.99' },
    { category: 'appetizers', name: 'APOLLO FISH', description: 'Special spicy fish fry', price: '14.99', badge: 'must-try' },

    // Indian Curries
    { category: 'indian_curries', name: 'PALAK DAL', description: 'Spinach with lentils', price: '11.99' },
    { category: 'indian_curries', name: 'DAL TADKA', description: 'Tempered yellow lentils', price: '11.99' },
    { category: 'indian_curries', name: 'TOMATO DAL', description: 'Lentils with tomatoes', price: '11.99' },
    { category: 'indian_curries', name: 'PANEER BUTTER MASALA', description: 'Cottage cheese in rich butter sauce', price: '14.99', badge: 'must-try' },
    { category: 'indian_curries', name: 'PANEER TIKKA MASALA', description: 'Grilled cottage cheese in spicy gravy', price: '14.99' },
    { category: 'indian_curries', name: 'PANEER MUTTER MASALA', description: 'Cottage cheese and peas curry', price: '14.99' },
    { category: 'indian_curries', name: 'METHI CHAMAN', description: 'Grated paneer with fenugreek', price: '15.99' },
    { category: 'indian_curries', name: 'PALAK PANEER', description: 'Cottage cheese in spinach gravy', price: '14.99' },
    { category: 'indian_curries', name: 'KADAI PANEER', description: 'Cottage cheese in spicy kadai masala', price: '14.99' },
    { category: 'indian_curries', name: 'SHAHI PANEER', description: 'Rich and creamy paneer curry', price: '14.99' },
    { category: 'indian_curries', name: 'BENDI MASALA', description: 'Okra in spicy masala', price: '13.99' },
    { category: 'indian_curries', name: 'ALOO GOBI MASALA', description: 'Potato and cauliflower curry', price: '13.99' },
    { category: 'indian_curries', name: 'ALOO KOORMA', description: 'Potato in coconut curry', price: '13.99' },
    { category: 'indian_curries', name: 'VEG NAVARATHAN KORMA', description: 'Mixed vegetables in rich gravy', price: '13.99' },
    { category: 'indian_curries', name: 'VEG VINDALOO', description: 'Spicy mixed vegetable curry', price: '13.99' },
    { category: 'indian_curries', name: 'MALAI KOFTA', description: 'Cheese dumplings in rich gravy', price: '13.99' },
    { category: 'indian_curries', name: 'BAGARA BAIGAN', description: 'Stuffed eggplant curry', price: '13.99' },
    { category: 'indian_curries', name: 'CHANA MASALA', description: 'Spiced chickpea curry', price: '12.99' },
    { category: 'indian_curries', name: 'CHETTINAD VEG', description: 'Vegetables in Chettinad spices', price: '13.99' },
    { category: 'indian_curries', name: 'KADAI VEG', description: 'Mixed vegetables in kadai masala', price: '12.99' },
    { category: 'indian_curries', name: 'EGG MASALA', description: 'Eggs in spicy gravy', price: '12.99' },
    { category: 'indian_curries', name: 'EGG BURJI', description: 'Spiced scrambled eggs', price: '12.99' },
    { category: 'indian_curries', name: 'CHETTINAD CHICKEN', description: 'Chicken in Chettinad spices', price: '13.99', badge: 'special' },
    { category: 'indian_curries', name: 'ANDHRA CHICKEN CURRY', description: 'Spicy Andhra style chicken', price: '13.99', badge: 'must-try' },
    { category: 'indian_curries', name: 'KADAI CHICKEN', description: 'Chicken in kadai masala', price: '13.99' },
    { category: 'indian_curries', name: 'GONGURA CHICKEN', description: 'Chicken with sorrel leaves', price: '14.99', badge: 'special' },
    { category: 'indian_curries', name: 'MALAI METHI CHICKEN', description: 'Creamy chicken with fenugreek', price: '15.99' },
    { category: 'indian_curries', name: 'BUTTER CHICKEN MASALA', description: 'Chicken in rich butter sauce', price: '13.99', badge: 'must-try' },
    { category: 'indian_curries', name: 'CHICKEN TIKKA MASALA', description: 'Grilled chicken in spicy gravy', price: '13.99' },
    { category: 'indian_curries', name: 'CHETTINAD GOAT', description: 'Goat in Chettinad spices', price: '15.99' },
    { category: 'indian_curries', name: 'ANDHRA GOAT CURRY', description: 'Spicy Andhra style goat', price: '15.99' },
    { category: 'indian_curries', name: 'KADAI GOAT', description: 'Goat in kadai masala', price: '15.99' },
    { category: 'indian_curries', name: 'GOAT KEEMA', description: 'Minced goat curry', price: '17.99' },
    { category: 'indian_curries', name: 'GONGURA GOAT', description: 'Goat with sorrel leaves', price: '16.99' },
    { category: 'indian_curries', name: 'CHETTINAD SHRIMP', description: 'Shrimp in Chettinad spices', price: '15.99' },

    // Biryanis and Pulavs
    { category: 'biryanis_and_pulavs', name: 'VEGETABLE BIRYANI', description: 'Mixed vegetable biryani', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'PANEER BIRYANI', description: 'Cottage cheese biryani', price: '14.99' },
    { category: 'biryanis_and_pulavs', name: 'GUTTI VANKAYA BIRYANI', description: 'Stuffed eggplant biryani', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'EGG BIRYANI', description: 'Egg biryani', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'CHICKEN DUM BIRYANI', description: 'Traditional chicken biryani', price: '14.99', badge: 'must-try' },
    { category: 'biryanis_and_pulavs', name: 'VIJAYAWADA BONELESS CHICKEN BIRYANI', description: 'Special boneless chicken biryani', price: '15.99', badge: 'special' },
    { category: 'biryanis_and_pulavs', name: 'GONGURA CHICKEN BIRYANI', description: 'Chicken biryani with sorrel leaves', price: '15.99', badge: 'special' },
    { category: 'biryanis_and_pulavs', name: 'CHICKEN 65 BIRYANI', description: 'Biryani with Chicken 65', price: '15.99' },
    { category: 'biryanis_and_pulavs', name: 'CHICKEN GHEE ROAST BIRYANI', description: 'Ghee roasted chicken biryani', price: '16.99' },
    { category: 'biryanis_and_pulavs', name: 'GOAT DUM BIRYANI', description: 'Traditional goat biryani', price: '16.99' },
    { category: 'biryanis_and_pulavs', name: 'GOAT GHEE ROAST BIRYANI', description: 'Ghee roasted goat biryani', price: '17.99' },
    { category: 'biryanis_and_pulavs', name: 'GONGURA GOAT BIRYANI', description: 'Goat biryani with sorrel leaves', price: '17.99' },
    { category: 'biryanis_and_pulavs', name: 'GOAT KEEMA BIRYANI', description: 'Minced goat biryani', price: '17.99' },
    { category: 'biryanis_and_pulavs', name: 'VEG PULAV', description: 'Mixed vegetable pulav', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'PANEER PULAV', description: 'Cottage cheese pulav', price: '14.99' },
    { category: 'biryanis_and_pulavs', name: 'GUTTIVANKAYA PULAV', description: 'Stuffed eggplant pulav', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'GREEN MIRCHI PANEER PULAV', description: 'Spicy green chili paneer pulav', price: '15.99' },
    { category: 'biryanis_and_pulavs', name: 'GREEN MIRCHI CHICKEN PULAV', description: 'Spicy green chili chicken pulav', price: '16.99' },
    { category: 'biryanis_and_pulavs', name: 'GREEN MIRCHI GOAT PULAV', description: 'Spicy green chili goat pulav', price: '17.99' },
    { category: 'biryanis_and_pulavs', name: 'EGG PULAV', description: 'Egg pulav', price: '13.99' },
    { category: 'biryanis_and_pulavs', name: 'CHICKEN PULAV', description: 'Chicken pulav', price: '15.99' },
    { category: 'biryanis_and_pulavs', name: 'VIJAYAWADA BONELESS PULAV', description: 'Special boneless chicken pulav', price: '15.99' },
    { category: 'biryanis_and_pulavs', name: 'CHICKEN GHEE ROAST PULAV', description: 'Ghee roasted chicken pulav', price: '16.99' },
    { category: 'biryanis_and_pulavs', name: 'GOAT GHEE ROAST PULAV', description: 'Ghee roasted goat pulav', price: '17.99' },
    { category: 'biryanis_and_pulavs', name: 'PRAWN PULAV', description: 'Prawn pulav', price: '16.99' },

    // Indo Chinese
    { category: 'indo_chinese', name: 'VEGETABLE FRIED RICE', description: 'Mixed vegetable fried rice', price: '12.99' },
    { category: 'indo_chinese', name: 'VEGETABLE SCHEZWAN FRIED RICE', description: 'Spicy Schezwan vegetable rice', price: '12.99' },
    { category: 'indo_chinese', name: 'VEG NOODLES', description: 'Mixed vegetable noodles', price: '12.99' },
    { category: 'indo_chinese', name: 'VEG SCHEZWAN NOODLES', description: 'Spicy Schezwan vegetable noodles', price: '12.99' },
    { category: 'indo_chinese', name: 'EGG FRIED RICE', description: 'Egg fried rice', price: '13.99' },
    { category: 'indo_chinese', name: 'EGG SCHEZWAN FRIED RICE', description: 'Spicy Schezwan egg rice', price: '13.99' },
    { category: 'indo_chinese', name: 'CHICKEN FRIED RICE', description: 'Chicken fried rice', price: '14.99' },
    { category: 'indo_chinese', name: 'CHICKEN SCHEZWAN FRIED RICE', description: 'Spicy Schezwan chicken rice', price: '14.99' },
    { category: 'indo_chinese', name: 'EGG NOODLES', description: 'Egg noodles', price: '13.99' },
    { category: 'indo_chinese', name: 'EGG SCHEZWAN NOODLES', description: 'Spicy Schezwan egg noodles', price: '13.99' },
    { category: 'indo_chinese', name: 'CHICKEN NOODLES', description: 'Chicken noodles', price: '14.99' },
    { category: 'indo_chinese', name: 'CHICKEN SCHEZWAN NOODLES', description: 'Spicy Schezwan chicken noodles', price: '14.99' },

    // Tandoor
    { category: 'tandoor', name: 'TANDOORI PANEER TIKKA', description: 'Grilled cottage cheese tikka', price: '11.99' },
    { category: 'tandoor', name: 'TANDOORI CHICKEN KEBAB', description: 'Grilled chicken kebab', price: '11.99' },
    { category: 'tandoor', name: 'TANGDI KABAB', description: 'Grilled chicken drumsticks', price: '11.99' },
    { category: 'tandoor', name: 'MURGH MALAI KEBAB', description: 'Creamy chicken kebab', price: '11.99' },
    { category: 'tandoor', name: 'HARYALI CHICKEN TIKKA', description: 'Green herbs marinated chicken tikka', price: '11.99' },
    { category: 'tandoor', name: 'TANDOORI CHICKEN TIKKA', description: 'Classic tandoori chicken tikka', price: '12.99' },
    { category: 'tandoor', name: 'PLAIN NAAN', description: 'Classic plain naan bread', price: '1.99' },
    { category: 'tandoor', name: 'GARLIC NAAN', description: 'Garlic flavored naan', price: '2.99' },
    { category: 'tandoor', name: 'BUTTER NAAN', description: 'Butter layered naan', price: '2.49' },
    { category: 'tandoor', name: 'GARLIC BUTTER NAAN', description: 'Garlic and butter naan', price: '2.99' },
    { category: 'tandoor', name: 'BULLET NAAN', description: 'Spicy chili naan', price: '3.49' },
    { category: 'tandoor', name: 'TANDOORI ROTI', description: 'Whole wheat flatbread', price: '2.99' },

    // Snacks
    { category: 'snacks', name: 'EGG BONDA', description: 'Deep fried egg fritters (4pcs)', price: '4.99' },
    { category: 'snacks', name: 'ALOO SAMOSA', description: 'Potato stuffed pastry (2pcs)', price: '2.99' },
    { category: 'snacks', name: 'ONION SAMOSA', description: 'Onion stuffed pastry (3pcs)', price: '2.99' },
    { category: 'snacks', name: 'PUNUGULU', description: 'Deep fried rice batter balls (10pcs)', price: '4.99' },
    { category: 'snacks', name: 'MYSORE BONDA', description: 'Spicy potato balls (4pcs)', price: '5.99' },
    { category: 'snacks', name: 'MIRCHI BHAJJI', description: 'Stuffed chili fritters (4pcs)', price: '4.99' },
    { category: 'snacks', name: 'STUFFED MIRCHI BHAJJI', description: 'Special stuffed chili fritters (2pcs)', price: '5.99' },
    { category: 'snacks', name: 'CUT MIRCHI', description: 'Crispy fried cut chilies', price: '4.99' },
    { category: 'snacks', name: 'ONION PAKODA', description: 'Crispy onion fritters', price: '4.99' },
    { category: 'snacks', name: 'MASALA PEANUTS', description: 'Spiced peanuts', price: '5.99' },
    { category: 'snacks', name: 'BHEEMLI CUT MIRCHI', description: 'Special Bheemli style cut chilies', price: '9.99' },
    { category: 'snacks', name: 'ALOO BAJJI', description: 'Potato fritters', price: '4.99' },
    { category: 'snacks', name: 'MASALA VADA', description: 'Spiced lentil patties', price: '4.99' },
    { category: 'snacks', name: 'ALOO CHAT', description: 'Spiced potato snack', price: '6.99' },
    { category: 'snacks', name: 'MIRCHI CHAT', description: 'Spicy chili chat', price: '6.99' },
    { category: 'snacks', name: 'SAMOSA CHAT', description: 'Crushed samosa with chutneys', price: '6.99' },
    { category: 'snacks', name: 'PANI PURI', description: 'Hollow crisps with flavored water', price: '6.99' },
    { category: 'snacks', name: 'DAHI PURI', description: 'Hollow crisps with yogurt', price: '6.99' },
    { category: 'snacks', name: 'BEL PURI', description: 'Puffed rice with chutneys', price: '6.99' },

    // Juice and Drinks
    { category: 'juice_and_drinks', name: 'SUGARCANE', description: 'Fresh sugarcane juice', price: '6.99' },
    { category: 'juice_and_drinks', name: 'CHIKOO SHAKE', description: 'Sapota milkshake', price: '6.99' },
    { category: 'juice_and_drinks', name: 'MANGO LASSI', description: 'Mango yogurt drink', price: '4.99' },
    { category: 'juice_and_drinks', name: 'MASALA CHAI(S)', description: 'Small spiced tea', price: '1.00' },
    { category: 'juice_and_drinks', name: 'MASALA CHAI(L)', description: 'Large spiced tea', price: '1.99' },
    { category: 'juice_and_drinks', name: 'IRANI CHAI(S)', description: 'Small Irani style tea', price: '1.00' },
    { category: 'juice_and_drinks', name: 'IRANI CHAI(L)', description: 'Large Irani style tea', price: '1.99' },
    { category: 'juice_and_drinks', name: 'COFFEE(S)', description: 'Small coffee', price: '1.99' },
    { category: 'juice_and_drinks', name: 'COFFEE(L)', description: 'Large coffee', price: '2.99' }
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
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (!slides || slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (!slides || slides.length === 0) return;
    
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider only if slides exist
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides && slides.length > 0) {
        // Show first slide
        showSlide(0);
        // Start auto-rotation
        slideInterval = setInterval(nextSlide, 3000);
    }
}

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

// Category icons mapping with more appropriate names
const categoryIcons = {
    'tiffins': '🥞',
    'appetizers': '🍢', 
    'indian_curries': '🍛',
    'biryanis_and_pulavs': '🍚',
    'indo_chinese': '🥢',
    'tandoor': '🔥',
    'snacks': '🍿',
    'juice_and_drinks': '🥤'
};

// Category display names
const categoryDisplayNames = {
    'tiffins': 'Tiffins',
    'appetizers': 'Starters',
    'indian_curries': 'Curries', 
    'biryanis_and_pulavs': 'Rice',
    'indo_chinese': 'Chinese',
    'tandoor': 'Tandoor',
    'snacks': 'Snacks',
    'juice_and_drinks': 'Drinks'
};

// Function to create menu item card for new layout
function createMenuItemCard(item) {
    const badgeHtml = item.badge ? `<div class="item-badge badge-${item.badge}">${item.badge === 'special' ? "Chef's Special" : 'Must Try'}</div>` : '';
    
    return `
        <article class="menu-item-card">
            ${badgeHtml}
            <div class="card-content">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-description">${item.description}</p>
                <div class="card-footer">
                    <span class="item-price">$${item.price}</span>
                </div>
            </div>
        </article>
    `;
}

// Function to create menu section with category on left and items on right
function createMenuSection(category, items) {
    return `
        <div class="menu-section">
            <h3 class="category-title-left">${categoryDisplayNames[category]}</h3>
            <div class="menu-items-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;">
                ${items.map(item => createMenuItemCard(item)).join('')}
            </div>
        </div>
    `;
}

// Function to create category navigation
function createCategoryNavigation() {
    const categories = Object.keys(categoryIcons);
    let navHTML = '<div class="category-navigation">';
    
    // Add "ALL" button
    navHTML += `
        <div class="category-nav-item ${activeCategory === 'all' ? 'active' : ''}" onclick="switchCategory('all')">
            <div class="category-nav-icon">👨‍🍳</div>
            <div class="category-nav-label">ALL</div>
        </div>
    `;
    
    // Add category buttons
    categories.forEach(category => {
        navHTML += `
            <div class="category-nav-item ${activeCategory === category ? 'active' : ''}" onclick="switchCategory('${category}')">
                <div class="category-nav-icon">${categoryIcons[category]}</div>
                <div class="category-nav-label">${categoryDisplayNames[category]}</div>
            </div>
        `;
    });
    
    navHTML += '</div>';
    return navHTML;
}

// Function to switch category
function switchCategory(category) {
    activeCategory = category;
    updateMenuSideBySide();
}

// Function to update menu with new side-by-side layout
function updateMenuSideBySide() {
    console.log('updateMenuSideBySide called');
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
        console.error('Menu grid not found!');
        return;
    }

    console.log('Menu grid found, clearing content');
    // Clear existing content
    menuGrid.innerHTML = '';
    
    // Group items by category
    const groupedItems = menuData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    console.log('Grouped items:', groupedItems);
    console.log('Categories found:', Object.keys(groupedItems));

    // Create sections for each category
    Object.entries(groupedItems).forEach(([category, categoryItems]) => {
        if (categoryItems.length > 0) {
            console.log(`Creating section for ${category} with ${categoryItems.length} items`);
            menuGrid.innerHTML += createMenuSection(category, categoryItems);
        }
    });
    
    console.log('Final menu grid HTML length:', menuGrid.innerHTML.length);
}

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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize slider
    initializeSlider();
    
    // Initialize cart from localStorage
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart icon visibility and badge
    const cartIcons = document.querySelectorAll('#cart-icon');
    cartIcons.forEach(icon => {
        if (icon) {
            icon.style.display = cart.length > 0 ? 'block' : 'none';
            
            // Only add click handler if we're not on the cart page
            if (!window.location.href.includes('cart.html')) {
                icon.addEventListener('click', function(e) {
                    window.location.href = 'cart.html';
                });
            }
        }
    });
    
    // Update cart badge
    updateCartBadge();

    // Initialize menu if we're on the main page
    const menuGrid = document.querySelector('.menu-grid');
    if (menuGrid) {
        // Check if we're on all-menu page
        const isAllMenuPage = window.location.href.includes('all-menu.html');
        
        if (isAllMenuPage) {
            // Use side-by-side layout for all-menu page
            updateMenuSideBySide();
            // Set up category pill functionality
            handleCategoryPillClick();
        } else {
            // Use original layout for home page
            updateMenu();
        }
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menuToggle && navLinks && !e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
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

// Update cart badge count
function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = cart.length;
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
}

function addToCart(item) {
    // Initialize cart if it doesn't exist
    if (!Array.isArray(cart)) {
        cart = [];
    }
    
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show cart icon - Updated to be more robust
    const cartIcons = document.querySelectorAll('#cart-icon');
    cartIcons.forEach(icon => {
        if (icon) {
            icon.style.display = 'block';
        }
    });
    
    // Update cart badge
    updateCartBadge();
    
    // Show toast notification
    showToast(`${item.name} added to cart!`);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Update removeFromCart function
function removeFromCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart badge and icon visibility
    updateCartBadge();
    const cartIcons = document.querySelectorAll('#cart-icon');
    cartIcons.forEach(icon => {
        if (icon) {
            icon.style.display = cart.length > 0 ? 'block' : 'none';
        }
    });

    // If we're on the cart page, refresh the display
    if (window.location.href.includes('cart.html')) {
        const cartContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartSummary = document.querySelector('.cart-summary');
        
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            cartSummary.style.display = 'none';
        } else {
            let total = 0;
            const cartHTML = cart.map(item => {
                const price = parseFloat(item.price.replace('$', ''));
                total += price;
                return `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p class="item-description">${item.description}</p>
                            <p class="item-price">$${item.price}</p>
                        </div>
                        <button class="remove-item" onclick="removeFromCart('${item.name}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');

            cartContainer.innerHTML = cartHTML;
            cartTotal.textContent = `$${total.toFixed(2)}`;
            cartSummary.style.display = 'block';
        }
    }
}

// Simple function to create a menu card for home page
function createMenuCard(item) {
    const badgeHtml = item.badge ? `<div class="item-badge badge-${item.badge}">${item.badge === 'special' ? "Chef's Special" : 'Must Try'}</div>` : '';
    
    return `
        <div class="food-card" onclick="window.location.href='all-menu.html'" style="cursor: pointer;">
            ${badgeHtml}
            <div class="card-content">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="card-footer">
                    <span class="item-price">$${item.price}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to update menu based on category (for home page)
function updateMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;

    // Home page layout (show only starters and biryanis)
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-menu-container';

    // Create starters section
    const startersSection = document.createElement('div');
    startersSection.className = 'home-category-section';
    const startersTitle = document.createElement('div');
    startersTitle.className = 'category-title';
    startersTitle.setAttribute('data-icon', categoryIcons['appetizers']);
    startersTitle.innerHTML = `
        Starters
        <a href="all-menu.html" class="view-all-btn">View All</a>
    `;
    startersSection.appendChild(startersTitle);

    // Create cards container for starters
    const startersCards = document.createElement('div');
    startersCards.className = 'cards-container';
    const starters = menuData.filter(item => item.category === 'appetizers').slice(0, 4);
    starters.forEach(item => {
        startersCards.innerHTML += createMenuCard(item);
    });
    startersSection.appendChild(startersCards);

    // Create biryanis section
    const biryanisSection = document.createElement('div');
    biryanisSection.className = 'home-category-section';
    const biryanisTitle = document.createElement('div');
    biryanisTitle.className = 'category-title';
    biryanisTitle.setAttribute('data-icon', categoryIcons['biryanis_and_pulavs']);
    biryanisTitle.innerHTML = `
        Biryanis
        <a href="all-menu.html" class="view-all-btn">View All</a>
    `;
    biryanisSection.appendChild(biryanisTitle);

    // Create cards container for biryanis
    const biryanisCards = document.createElement('div');
    biryanisCards.className = 'cards-container';
    const biryanis = menuData.filter(item => item.category === 'biryanis_and_pulavs').slice(0, 4);
    biryanis.forEach(item => {
        biryanisCards.innerHTML += createMenuCard(item);
    });
    biryanisSection.appendChild(biryanisCards);

    // Add both sections to container
    homeContainer.appendChild(startersSection);
    homeContainer.appendChild(biryanisSection);
    menuGrid.appendChild(homeContainer);
}

// Function to handle category pill clicks
function handleCategoryPillClick() {
    const categoryPills = document.querySelectorAll('.category-pill');
    console.log('Setting up category pill clicks, found:', categoryPills.length, 'pills');
    
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function() {
            console.log('Category pill clicked:', this.dataset.category);
            
            // Remove selected class from all pills
            categoryPills.forEach(p => p.classList.remove('selected'));
            // Add selected class to clicked pill
            this.classList.add('selected');
            
            // Get category and update menu
            const category = this.dataset.category;
            console.log('Filtering to category:', category);
            
            if (category === 'all') {
                console.log('Showing all categories');
                updateMenuSideBySide(); // Show all categories
            } else {
                console.log('Showing single category:', category);
                updateMenuSideBySideSingle(category); // Show single category
            }
        });
    });
}

// Function to update menu with single category
function updateMenuSideBySideSingle(category) {
    console.log('updateMenuSideBySideSingle called with category:', category);
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
        console.error('Menu grid not found!');
        return;
    }

    // Clear existing content
    menuGrid.innerHTML = '';
    
    // Get items for the selected category
    const categoryItems = menuData.filter(item => item.category === category);
    console.log(`Found ${categoryItems.length} items for category ${category}`);
    
    if (categoryItems.length > 0) {
        console.log('Creating section for category:', category);
        menuGrid.innerHTML = createMenuSection(category, categoryItems);
        console.log('Menu grid HTML length after update:', menuGrid.innerHTML.length);
    } else {
        console.log('No items found for category:', category);
        menuGrid.innerHTML = '<p>No items found for this category.</p>';
    }
}

