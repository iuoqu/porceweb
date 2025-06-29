document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const homeLogo = document.getElementById('home-logo');
    const cartCountSpan = document.getElementById('cart-count');
    const mobileCartCountSpan = document.getElementById('mobile-cart-count');

    // State
    let cart = []; // Stores { productId: id, quantity: count }
    let currentPage = 'home';

    // Add at the top, after DOMContentLoaded:
    const uiText = {
        homeTitle: { zh: '瓷韵新生：匠心独运，全球共享', en: 'Porcelain Renaissance: Ingenuity Shared Worldwide' },
        homeDesc: { zh: '探索中国创意陶瓷的无限魅力。每一件作品都承载着深厚的文化底蕴、精湛的传统技艺与独特的艺术哲学。在这里，您将与艺术家直接对话，感受瓷器背后的故事与灵魂。', en: 'Explore the infinite charm of Chinese creative ceramics. Each piece carries deep cultural heritage, exquisite traditional craftsmanship, and unique artistic philosophy. Here, you can connect directly with artists and feel the stories and soul behind the porcelain.' },
        featuredProducts: { zh: '精选作品', en: 'Featured Products' },
        featuredArtists: { zh: '探索艺术家', en: 'Explore Artists' },
        allProducts: { zh: '所有作品', en: 'All Products' },
        allProductsDesc: { zh: '浏览我们精心挑选的中国创意陶瓷作品，每一件都独一无二。', en: 'Browse our carefully selected Chinese creative ceramic works, each one unique.' },
        all: { zh: '全部', en: 'All' },
        cups: { zh: '杯具', en: 'Cups' },
        vases: { zh: '花瓶', en: 'Vases' },
        sculptures: { zh: '雕塑', en: 'Sculptures' },
        materials: { zh: '材质分类', en: 'Material Categories' },
        materialsDesc: { zh: '深入了解不同材质的魅力，感受中国陶瓷的千变万化。', en: 'Learn about the charm of different materials and experience the diversity of Chinese ceramics.' },
        blueWhite: { zh: '青花瓷', en: 'Blue-and-white' },
        celadon: { zh: '青瓷', en: 'Celadon' },
        clay: { zh: '陶器', en: 'Clay' },
        designs: { zh: '设计风格', en: 'Design Styles' },
        designsDesc: { zh: '探索多样化的设计风格，从传统到现代，每一件都充满创意。', en: 'Explore diverse design styles, from traditional to modern, each full of creativity.' },
        handDrawn: { zh: '手绘', en: 'Hand-drawn' },
        modern: { zh: '现代', en: 'Modern' },
        plainColor: { zh: '纯色', en: 'Plain Color' },
        artists: { zh: '艺术家', en: 'Artists' },
        artistsDesc: { zh: '认识每一位匠心独运的艺术家，了解他们对陶瓷艺术的执着与热爱。', en: 'Meet each ingenious artist and learn about their dedication and passion for ceramic art.' },
        cart: { zh: '我的购物车', en: 'My Cart' },
        cartEmpty: { zh: '购物车是空的。', en: 'Your cart is empty.' },
        total: { zh: '总计:', en: 'Total:' },
        checkout: { zh: '前往结算 (模拟)', en: 'Proceed to Checkout (Demo)' },
        checkoutTitle: { zh: '结算 (模拟)', en: 'Checkout (Demo)' },
        checkoutThanks: { zh: '感谢您的订单！您的模拟购买已成功处理。', en: 'Thank you for your order! Your demo purchase has been processed.' },
        checkoutInfo: { zh: '在真实的Shopify集成中，您将在此处填写送货和支付信息。', en: 'In a real Shopify integration, you would fill in shipping and payment info here.' },
        backHome: { zh: '返回首页', en: 'Back to Home' },
        addToCart: { zh: '加入购物车', en: 'Add to Cart' },
        backToProducts: { zh: '返回作品列表', en: 'Back to Products' },
        backToArtists: { zh: '返回艺术家列表', en: 'Back to Artists' },
        artistBio: { zh: '艺术家简介', en: 'Artist Bio' },
        philosophy: { zh: '创作理念', en: 'Philosophy' },
        techniques: { zh: '擅长技法', en: 'Techniques' },
        artistWorks: { zh: '艺术家作品', en: 'Artist Works' },
        designPhilosophy: { zh: '设计哲学', en: 'Design Philosophy' },
        techniquesUsed: { zh: '创作技法', en: 'Techniques Used' },
        artistNote: { zh: '艺术家手记', en: 'Artist Note' },
        size: { zh: '尺寸', en: 'Size' },
        material: { zh: '材质', en: 'Material' },
        style: { zh: '风格', en: 'Style' },
        remove: { zh: '移除', en: 'Remove' },
        cartAdded: { zh: '已添加到购物车', en: 'added to cart' },
        footer: { zh: '© 2024 瓷韵新生. 本网站仅用于展示。', en: '© 2024 Porcelain Renaissance. This website is for demonstration only.' },
        artist: { zh: '艺术家', en: 'Artist' },
        siteTitle: { zh: '瓷韵新生', en: 'Porcelain Renaissance' },
        homeTab: { zh: '首页', en: 'Home' },
        productsTab: { zh: '作品', en: 'Products' },
        materialsTab: { zh: '材质', en: 'Materials' },
        designsTab: { zh: '设计', en: 'Designs' },
        artistsTab: { zh: '艺术家', en: 'Artists' },
        cartTab: { zh: '购物车', en: 'Cart' }
    };

    // Page Templates
    function getHomePageTemplate() {
        return `
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">${uiText.homeTitle[window.currentLanguage]}</h2>
                <p class="text-lg max-w-3xl mx-auto text-gray-600">${uiText.homeDesc[window.currentLanguage]}</p>
            </div>

            <div class="mb-12">
                <h3 class="text-3xl font-bold mb-6 text-center">${uiText.featuredProducts[window.currentLanguage]}</h3>
                <div id="featured-products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                </div>
            </div>

            <div>
                <h3 class="text-3xl font-bold mb-6 text-center">${uiText.featuredArtists[window.currentLanguage]}</h3>
                <div id="featured-artists-grid" class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                </div>
            </div>
        `;
    }

    function getProductsPageTemplate() {
        return `
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">${uiText.allProducts[window.currentLanguage]}</h2>
                <p class="text-lg max-w-3xl mx-auto text-gray-600">${uiText.allProductsDesc[window.currentLanguage]}</p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <button class="category-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-category="all">${uiText.all[window.currentLanguage]}</button>
                <button class="category-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-category="cups">${uiText.cups[window.currentLanguage]}</button>
                <button class="category-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-category="vases">${uiText.vases[window.currentLanguage]}</button>
                <button class="category-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-category="sculptures">${uiText.sculptures[window.currentLanguage]}</button>
            </div>
            <div id="products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
        `;
    }

    function getMaterialsPageTemplate() {
        return `
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">${uiText.materials[window.currentLanguage]}</h2>
                <p class="text-lg max-w-3xl mx-auto text-gray-600">${uiText.materialsDesc[window.currentLanguage]}</p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <button class="material-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-material="all">${uiText.all[window.currentLanguage]}</button>
                <button class="material-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-material="blue_white">${uiText.blueWhite[window.currentLanguage]}</button>
                <button class="material-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-material="celadon">${uiText.celadon[window.currentLanguage]}</button>
                <button class="material-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-material="clay">${uiText.clay[window.currentLanguage]}</button>
            </div>
            <div id="materials-products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
        `;
    }

    function getDesignsPageTemplate() {
        return `
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">${uiText.designs[window.currentLanguage]}</h2>
                <p class="text-lg max-w-3xl mx-auto text-gray-600">${uiText.designsDesc[window.currentLanguage]}</p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <button class="design-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-design="all">${uiText.all[window.currentLanguage]}</button>
                <button class="design-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-design="hand_drawn">${uiText.handDrawn[window.currentLanguage]}</button>
                <button class="design-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-design="modern">${uiText.modern[window.currentLanguage]}</button>
                <button class="design-filter-btn px-6 py-2 rounded-full bg-secondary-bg hover:bg-gray-300 transition-colors" data-design="plain_color">${uiText.plainColor[window.currentLanguage]}</button>
            </div>
            <div id="designs-products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
        `;
    }

    function getArtistsPageTemplate() {
        return `
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">${uiText.artists[window.currentLanguage]}</h2>
                <p class="text-lg max-w-3xl mx-auto text-gray-600">${uiText.artistsDesc[window.currentLanguage]}</p>
            </div>
            <div id="artists-grid" class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            </div>
        `;
    }

    function getCartPageTemplate() {
        return `
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
                <h2 class="text-4xl font-bold mb-6 text-center">${uiText.cart[window.currentLanguage]}</h2>
                <div id="cart-items-container">
                    <p class="text-center text-gray-600" id="empty-cart-message">${uiText.cartEmpty[window.currentLanguage]}</p>
                </div>
                <div id="cart-summary" class="mt-8 pt-4 border-t border-gray-200 hidden">
                    <div class="flex justify-between items-center text-2xl font-bold mb-4">
                        <span>${uiText.total[window.currentLanguage]}</span>
                        <span id="cart-total">¥0.00</span>
                    </div>
                    <button id="proceed-to-checkout-btn" class="w-full py-3 bg-accent-bg text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">${uiText.checkout[window.currentLanguage]}</button>
                </div>
            </div>
        `;
    }

    function getCheckoutPageTemplate() {
        return `
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8 text-center">
                <h2 class="text-4xl font-bold mb-6">${uiText.checkoutTitle[window.currentLanguage]}</h2>
                <p class="text-lg text-gray-700 mb-8">${uiText.checkoutThanks[window.currentLanguage]}</p>
                <p class="text-gray-600 mb-8">${uiText.checkoutInfo[window.currentLanguage]}</p>
                <button onclick="navigateTo('home')" class="py-3 px-8 bg-accent-bg text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">${uiText.backHome[window.currentLanguage]}</button>
            </div>
        `;
    }

    // Helper Functions
    function getArtistById(id) {
        return artistsData.find(artist => artist.id === id);
    }

    function getProductById(id) {
        return productsData.find(product => product.id === id);
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.textContent = totalItems;
        mobileCartCountSpan.textContent = totalItems;
        if (totalItems > 0) {
            cartCountSpan.classList.remove('hidden');
            mobileCartCountSpan.classList.remove('hidden');
        } else {
            cartCountSpan.classList.add('hidden');
            mobileCartCountSpan.classList.add('hidden');
        }
    }

    function renderProductCards(products, targetGrid, showPrice = true) {
        targetGrid.innerHTML = '';
        products.forEach(product => {
            const artist = getArtistById(product.artistId);
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer';
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name[window.currentLanguage]}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${product.name[window.currentLanguage]}</h3>
                    <p class="text-gray-600 mb-2">${uiText.artist[window.currentLanguage]}: ${artist ? artist.name[window.currentLanguage] : '未知'}</p>
                    ${showPrice ? `<p class="text-2xl accent-text font-semibold">¥${product.price.toFixed(2)}</p>` : ''}
                </div>
            `;
            card.addEventListener('click', () => showProductDetailPage(product.id));
            targetGrid.appendChild(card);
        });
    }

    function renderArtistCards(artists, targetGrid) {
        targetGrid.innerHTML = '';
        artists.forEach(artist => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center p-6';
            card.innerHTML = `
                <img src="${artist.image}" alt="${artist.name[window.currentLanguage]}" class="w-32 h-32 rounded-full object-cover mb-4 shadow-md">
                <h3 class="text-xl font-bold">${artist.name[window.currentLanguage]}</h3>
                <p class="accent-text font-semibold">${artist.specialty[window.currentLanguage]}</p>
            `;
            card.addEventListener('click', () => showArtistDetailPage(artist.id));
            targetGrid.appendChild(card);
        });
    }

    function showProductDetailPage(productId) {
        const product = getProductById(productId);
        if (!product) {
            navigateTo('products');
            return;
        }
        const artist = getArtistById(product.artistId);
        const mainContent = document.getElementById('main-content');

        mainContent.innerHTML = `
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
                <button onclick="navigateTo('products')" class="text-gray-500 hover:text-black mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    ${uiText.backToProducts[window.currentLanguage]}
                </button>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="md:col-span-1">
                        <img id="main-product-image" src="${product.images[0]}" alt="${product.name[window.currentLanguage]}" class="w-full rounded-lg shadow-md mb-4">
                        ${product.images.length > 1 ? `<div class="flex gap-2 mt-2">
                            ${product.images.map(img => `<img src="${img}" class="w-20 h-20 object-cover rounded-md cursor-pointer hover:border-2 accent-border" onclick="document.getElementById('main-product-image').src='${img}'">`).join('')}
                        </div>` : ''}
                    </div>
                    <div class="md:col-span-1">
                        <h2 class="text-3xl font-bold mb-2">${product.name[window.currentLanguage]}</h2>
                        <p class="text-xl accent-text font-semibold mb-4">¥${product.price.toFixed(2)}</p>
                        <p class="text-gray-700 mb-4"><strong>${uiText.artist[window.currentLanguage]}:</strong> <span class="accent-text cursor-pointer" onclick="showArtistDetailPage(${artist.id});">${artist ? artist.name[window.currentLanguage] : '未知'}</span></p>
                        <p class="text-gray-700 mb-2"><strong>${uiText.size[window.currentLanguage]}:</strong> ${product.dimensions[window.currentLanguage]}</p>
                        <p class="text-gray-700 mb-2"><strong>${uiText.material[window.currentLanguage]}:</strong> ${product.material === 'blue_white' ? (window.currentLanguage === 'zh' ? '青花瓷' : 'Blue-and-white') : product.material === 'celadon' ? (window.currentLanguage === 'zh' ? '青瓷' : 'Celadon') : (window.currentLanguage === 'zh' ? '陶器' : 'Clay')}</p>
                        <p class="text-gray-700 mb-6"><strong>${uiText.style[window.currentLanguage]}:</strong> ${product.design === 'hand_drawn' ? (window.currentLanguage === 'zh' ? '手绘' : 'Hand-drawn') : product.design === 'modern' ? (window.currentLanguage === 'zh' ? '现代' : 'Modern') : (window.currentLanguage === 'zh' ? '纯色' : 'Plain color')}</p>
                        <button onclick="addToCart(${product.id})" class="w-full py-3 bg-accent-bg text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors">${uiText.addToCart[window.currentLanguage]}</button>
                        <h3 class="text-2xl font-bold mt-8 mb-4 border-b pb-2">${uiText.designPhilosophy[window.currentLanguage]}</h3>
                        <p class="text-gray-700 mb-6">${product.designPhilosophy[window.currentLanguage]}</p>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.techniquesUsed[window.currentLanguage]}</h3>
                        <p class="text-gray-700 mb-6">${product.techniquesUsed[window.currentLanguage]}</p>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.artistNote[window.currentLanguage]}</h3>
                        <p class="text-gray-700 mb-6 italic border-l-4 accent-border pl-4">${product.artistExplanation[window.currentLanguage]}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function showArtistDetailPage(artistId) {
        const artist = getArtistById(artistId);
        if (!artist) {
            navigateTo('artists');
            return;
        }
        const mainContent = document.getElementById('main-content');
        const artistProducts = productsData.filter(p => p.artistId === artist.id);
        let productsHtml = artistProducts.map(p => `
            <div class="bg-secondary-bg rounded-lg shadow-md overflow-hidden cursor-pointer" onclick="showProductDetailPage(${p.id});">
                <img src="${p.images[0]}" alt="${p.name[window.currentLanguage]}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h4 class="font-bold">${p.name[window.currentLanguage]}</h4>
                    <p class="text-sm accent-text">¥${p.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
        mainContent.innerHTML = `
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
                <button onclick="navigateTo('artists')" class="text-gray-500 hover:text-black mb-6 flex items-center">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    ${uiText.backToArtists[window.currentLanguage]}
                </button>
                <div class="text-center mb-8">
                    <img src="${artist.image}" alt="${artist.name[window.currentLanguage]}" class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg">
                    <h2 class="text-3xl font-bold mb-2">${artist.name[window.currentLanguage]}</h2>
                    <p class="text-xl accent-text font-semibold mb-4">${artist.specialty[window.currentLanguage]}</p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.artistBio[window.currentLanguage]}</h3>
                        <p class="text-gray-700 mb-6">${artist.bio[window.currentLanguage]}</p>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.philosophy[window.currentLanguage]}</h3>
                        <p class="text-gray-700 mb-6 italic border-l-4 accent-border pl-4">${artist.philosophy[window.currentLanguage]}</p>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.techniques[window.currentLanguage]}</h3>
                        <div class="flex flex-wrap gap-2">
                            ${artist.techniques[window.currentLanguage].map(tech => `<span class="px-4 py-2 bg-secondary-bg rounded-full">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">${uiText.artistWorks[window.currentLanguage]}</h3>
                        <div class="grid md:grid-cols-3 gap-4">
                            ${productsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartSummary = document.getElementById('cart-summary');
        const cartTotalSpan = document.getElementById('cart-total');

        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartSummary.classList.add('hidden');
            return;
        } else {
            emptyCartMessage.classList.add('hidden');
            cartSummary.classList.remove('hidden');
        }

        cart.forEach(item => {
            const product = getProductById(item.productId);
            if (!product) return;

            const itemTotal = product.price * item.quantity;
            total += itemTotal;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'flex items-center justify-between bg-secondary-bg p-4 rounded-lg shadow-sm mb-4';
            cartItemDiv.innerHTML = `
                <div class="flex items-center">
                    <img src="${product.images[0]}" alt="${product.name[window.currentLanguage]}" class="w-20 h-20 object-cover rounded-md mr-4">
                    <div>
                        <h3 class="font-bold text-lg">${product.name[window.currentLanguage]}</h3>
                        <p class="text-accent-text">¥${product.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <input type="number" min="1" value="${item.quantity}" data-product-id="${product.id}" class="w-16 p-2 border rounded-md text-center quantity-input">
                    <button data-product-id="${product.id}" class="text-gray-500 hover:text-red-500 remove-from-cart-btn">${uiText.remove[window.currentLanguage]}</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        cartTotalSpan.textContent = `¥${total.toFixed(2)}`;

        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                const newQuantity = parseInt(e.target.value);
                const cartItem = cart.find(item => item.productId === productId);
                if (cartItem && newQuantity > 0) {
                    cartItem.quantity = newQuantity;
                } else if (cartItem && newQuantity <= 0) {
                    cart = cart.filter(item => item.productId !== productId);
                }
                updateCartCount();
                renderCart();
            });
        });

        document.querySelectorAll('.remove-from-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                cart = cart.filter(item => item.productId !== productId);
                updateCartCount();
                renderCart();
            });
        });
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ productId, quantity: 1 });
        }
        updateCartCount();
        
        // Show feedback
        const addedProduct = getProductById(productId);
        if (addedProduct) {
            const feedback = document.createElement('div');
            feedback.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            feedback.textContent = `${addedProduct.name[window.currentLanguage]} ${uiText.cartAdded[window.currentLanguage]}`;
            document.body.appendChild(feedback);
            setTimeout(() => feedback.remove(), 2000);
        }
    }

    // Navigation
    function navigateTo(pageId) {
        currentPage = pageId;
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        const mainContent = document.getElementById('main-content');
        switch (pageId) {
            case 'home':
                mainContent.innerHTML = getHomePageTemplate();
                const featuredProducts = productsData.filter(p => p.featured);
                const featuredArtists = artistsData.filter(a => a.featured);
                renderProductCards(featuredProducts, document.getElementById('featured-products-grid'));
                renderArtistCards(featuredArtists, document.getElementById('featured-artists-grid'));
                break;
            case 'products':
                mainContent.innerHTML = getProductsPageTemplate();
                renderProductCards(productsData, document.getElementById('products-grid'));
                setupCategoryFilters();
                break;
            case 'materials':
                mainContent.innerHTML = getMaterialsPageTemplate();
                renderProductCards(productsData, document.getElementById('materials-products-grid'));
                setupMaterialFilters();
                break;
            case 'designs':
                mainContent.innerHTML = getDesignsPageTemplate();
                renderProductCards(productsData, document.getElementById('designs-products-grid'));
                setupDesignFilters();
                break;
            case 'artists':
                mainContent.innerHTML = getArtistsPageTemplate();
                renderArtistCards(artistsData, document.getElementById('artists-grid'));
                break;
            case 'cart':
                mainContent.innerHTML = getCartPageTemplate();
                renderCart();
                setupCheckoutButton();
                break;
            case 'checkout':
                mainContent.innerHTML = getCheckoutPageTemplate();
                cart = []; // Clear cart on checkout
                updateCartCount();
                break;
        }

        window.scrollTo(0, 0);
        history.pushState(null, null, `#${pageId}`);

        addLanguageToggle();
        updateNavTabNames();
    }

    // Filter Setup Functions
    function setupCategoryFilters() {
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('accent-bg', 'text-white'));
                this.classList.add('accent-bg', 'text-white');
                const category = this.dataset.category;
                const filteredProducts = category === 'all' ? productsData : productsData.filter(p => p.category === category);
                renderProductCards(filteredProducts, document.getElementById('products-grid'));
            });
        });
        document.querySelector('.category-filter-btn[data-category="all"]').classList.add('accent-bg', 'text-white');
    }

    function setupMaterialFilters() {
        document.querySelectorAll('.material-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.material-filter-btn').forEach(b => b.classList.remove('accent-bg', 'text-white'));
                this.classList.add('accent-bg', 'text-white');
                const material = this.dataset.material;
                const filteredProducts = material === 'all' ? productsData : productsData.filter(p => p.material === material);
                renderProductCards(filteredProducts, document.getElementById('materials-products-grid'));
            });
        });
        document.querySelector('.material-filter-btn[data-material="all"]').classList.add('accent-bg', 'text-white');
    }

    function setupDesignFilters() {
        document.querySelectorAll('.design-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.design-filter-btn').forEach(b => b.classList.remove('accent-bg', 'text-white'));
                this.classList.add('accent-bg', 'text-white');
                const design = this.dataset.design;
                const filteredProducts = design === 'all' ? productsData : productsData.filter(p => p.design === design);
                renderProductCards(filteredProducts, document.getElementById('designs-products-grid'));
            });
        });
        document.querySelector('.design-filter-btn[data-design="all"]').classList.add('accent-bg', 'text-white');
    }

    function setupCheckoutButton() {
        const checkoutBtn = document.getElementById('proceed-to-checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => navigateTo('checkout'));
        }
    }

    // Event Listeners
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(this.dataset.page);
        });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(this.dataset.page);
        });
    });

    homeLogo.addEventListener('click', () => navigateTo('home'));

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Handle initial load and browser history
    function handleInitialLoadAndHistory() {
        const hash = window.location.hash;
        if (hash) {
            const pageId = hash.substring(1);
            navigateTo(pageId);
        } else {
            navigateTo('home');
        }
    }

    handleInitialLoadAndHistory();
    window.addEventListener('popstate', handleInitialLoadAndHistory);

    // Expose navigation/detail functions globally for inline onclick handlers
    window.showArtistDetailPage = showArtistDetailPage;
    window.showProductDetailPage = showProductDetailPage;
    window.navigateTo = navigateTo;
    window.addToCart = addToCart;

    // Add a language toggle button to the navigation (after nav bar HTML is rendered)
    function addLanguageToggle() {
        const nav = document.querySelector('nav .flex');
        if (!nav) return;
        let langBtn = document.getElementById('lang-toggle-btn');
        if (!langBtn) {
            langBtn = document.createElement('button');
            langBtn.id = 'lang-toggle-btn';
            langBtn.className = 'ml-4 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100';
            nav.appendChild(langBtn);
        }
        langBtn.textContent = window.currentLanguage === 'zh' ? 'English' : '中文';
        langBtn.onclick = function() {
            window.currentLanguage = window.currentLanguage === 'zh' ? 'en' : 'zh';
            navigateTo(currentPage);
            addLanguageToggle();
        };
    }

    // Add at the top, after DOMContentLoaded:
    window.currentLanguage = 'zh';

    // After DOMContentLoaded, add this function to update nav tab names
    function updateNavTabNames() {
        // Desktop nav
        const navMap = [
            { selector: '.nav-link[data-page="home"]', key: 'homeTab' },
            { selector: '.nav-link[data-page="products"]', key: 'productsTab' },
            { selector: '.nav-link[data-page="materials"]', key: 'materialsTab' },
            { selector: '.nav-link[data-page="designs"]', key: 'designsTab' },
            { selector: '.nav-link[data-page="artists"]', key: 'artistsTab' },
            { selector: '.nav-link[data-page="cart"]', key: 'cartTab' }
        ];
        navMap.forEach(({ selector, key }) => {
            const el = document.querySelector(selector);
            if (el && uiText[key]) {
                el.textContent = uiText[key][window.currentLanguage];
            }
        });
        // Mobile nav
        const mobileNavMap = [
            { selector: '.mobile-nav-link[data-page="home"]', key: 'homeTab' },
            { selector: '.mobile-nav-link[data-page="products"]', key: 'productsTab' },
            { selector: '.mobile-nav-link[data-page="materials"]', key: 'materialsTab' },
            { selector: '.mobile-nav-link[data-page="designs"]', key: 'designsTab' },
            { selector: '.mobile-nav-link[data-page="artists"]', key: 'artistsTab' },
            { selector: '.mobile-nav-link[data-page="cart"]', key: 'cartTab' }
        ];
        mobileNavMap.forEach(({ selector, key }) => {
            const el = document.querySelector(selector);
            if (el && uiText[key]) {
                el.textContent = uiText[key][window.currentLanguage];
            }
        });
        // Site title/logo
        const logo = document.getElementById('home-logo');
        if (logo && uiText.siteTitle) {
            logo.textContent = uiText.siteTitle[window.currentLanguage];
        }
    }

    updateNavTabNames();
}); 