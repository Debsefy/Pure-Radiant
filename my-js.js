
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  
  // this is the togglebar


// This is for the filtering section

function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
    if (category === 'all' || product.getAttribute('data-category').toLowerCase() === category.toLowerCase()) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

filterProducts('all');

// this is for the cartCount

  let cartCount = 0;
  const cartCountElement1 = document.getElementById('cart-count');

  // Select all product cart icons
  const productCartIcons1 = document.querySelectorAll('.product .cart-icon, .info .cart-icon');

  productCartIcons1.forEach(icon => {
    icon.addEventListener('click', () => {
      cartCount++;
      cartCountElement1.textContent = cartCount;
    });
  });



//  ths is for the testimonial section

  let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.dots');

  // Create dots dynamically
  testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      currentIndex = i;
      showTestimonial(currentIndex);
      resetInterval();
    });
  });

  const dots = document.querySelectorAll('.dots span');

  function showTestimonial(index) {
    testimonials.forEach((card, i) => {
      card.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        card.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Auto slide every 5s
  // let slideInterval = setInterval(nextTestimonial, 5000);

  // Reset timer when manually clicked
  // function resetInterval() {
  //   clearInterval(slideInterval);
  //   slideInterval = setInterval(nextTestimonial, 5000);
  // }
















  // ==================== CART FUNCTIONALITY ====================

// Keep cart data in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Select elements
const cartCountElement = document.getElementById('cart-count');
const productCartIcons = document.querySelectorAll('.product .cart-icon');

// Update cart count when the page loads
updateCartCount();

// Add click events to every cart icon
productCartIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    const productElement = e.target.closest('.product');
    const name = productElement.querySelector('.product-name').textContent;
    const price = productElement.querySelector('.product-price').textContent;
    const image = productElement.querySelector('.product-image').src;

    // Add to cart
    const item = { name, price, image };
    cart.push(item);

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update counter
    updateCartCount();
  });
});

// Function to update the cart count display
function updateCartCount() {
  cartCountElement.textContent = cart.length;
}


// ==================== SEARCH FUNCTIONALITY ====================

const searchInput = document.getElementById("product-search");
const searchBtn = document.getElementById("search-btn");
const products = document.querySelectorAll(".product");  

function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  products.forEach(product => {
    const productName = product.querySelector(".product-name").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Event listeners
searchBtn.addEventListener("click", searchProducts);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchProducts();
});

