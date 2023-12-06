<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import { ref, onMounted, onUnmounted } from 'vue';
import { toRupiah } from "../utils"

const parallaxOffset = ref(0);

const handleScroll = () => {
    requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        parallaxOffset.value = `${scrollY / 2}`;
    })

};

onMounted(() => {
    if (!window) return
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    if (!window) return
    window.removeEventListener('scroll', handleScroll);
});

const products = ref([
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    },
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    },
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    },
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    },
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    },
    {
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        price: 240000,
        image_url: '/src/assets/images/products/product-1.webp'
    }
])
</script>
<template>
    <Navbar />
    <main id="products">
        <section class="hero">
            <div class="parallax-wrapper" :style="{ marginTop: `-${parallaxOffset}px` }">
                <div class="parallax" :style="{ transform: `translateY(${parallaxOffset}px)` }"></div>
            </div>
            <div class="hero-content d-flex flex-column align-items-center">
                <h1>OUR PRODUCT</h1>
                <input class="form-control rounded-5" placeholder="Search">
            </div>
        </section>
        <section class="products-wrapper">
            <div class="d-md-flex justify-content-between align-items-center my-2 filter-section">
                <p>Showing 1–6 of 27 results</p>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Default sorting</option>
                    <option value="1">Sort by popularity</option>
                    <option value="2">Sort by average rating</option>
                    <option value="3">Sort by lates</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                </select>
            </div>
            <div class="products">

                <template v-for="( product, index ) in  products " :key="index">
                    <router-link :to="'/shop'" class="product">
                        <div class="product-img">
                            <img :src="product.image_url" class="img-fluid">
                            <div class="overlay d-flex justify-content-center align-items-center">
                                <img src="@/assets/icons/circle-plus.png" width="35">
                            </div>
                        </div>
                        <div class="product-info">
                            <h2>{{ product.name }}</h2>
                            <p>{{ toRupiah(product.price) }}</p>
                        </div>
                    </router-link>
                </template>
            </div>
            <div class="d-flex justify-content-center mt-3 mt-lg-5">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    <Footer />
</template>
<style scoped>
#products {
    position: relative;
}

.hero {
    position: relative;
}

.hero-content {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-content h1 {
    font-family: 'Quattrocento', Georgia, 'Times New Roman', Times, serif;
    font-size: 2.5rem;
    line-height: 140%;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
}

.hero-content input {
    font-size: 0.875rem;
    color: #666666;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    padding: 0.5rem;
    width: 100%;
}

.parallax-wrapper {
    inset: 0;
    overflow: hidden;
    height: 300px;
}

.parallax {
    background-image: url('/src/assets/images/products/women-vaping-from-hookah-indoors-scaled.jpg');
    background-position: top;
    background-size: cover;
    height: 450px;
    width: 100%;
    background-origin: border-box;
}

.products-wrapper {
    background-image: url('src/assets/images/products/tea_shop_42.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin: -1.5rem 1rem 0 1em;
    padding: 2rem;
    background-position: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: white;
}

.filter-section {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
}

.filter-section p {
    color: #999999;
    font-weight: 500;
    font-size: 0.875rem;
}

.form-select {
    background-color: #ececec;
    color: #666666;
    width: fit-content;
    font-size: 0.75rem;
}

.products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
}

.product {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
}

.product-img {
    width: 100%;
    height: 100%;
    position: relative;
}

.product-img .overlay {
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.product-img:hover div.overlay {
    opacity: 100%;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.product-info {
    padding: 0 0.5rem;
}

.product-info h2,
.product-info p {
    font-family: 'Quattrocento', Georgia, 'Times New Roman', Times, serif;
}

.product-info h2 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 120%;
    color: #333333;
    text-align: center;
    word-wrap: break-word;
}

.product-info p {
    font-size: 0.875rem;
    line-height: 162%;
    color: #93b786;
    font-weight: 400;
    text-align: center;
}

.page-link {
    font-size: 0.8rem;
}

@media (min-width: 768px) {
    .hero-content input {
        width: 160%
    }

    .parallax-wrapper,
    .parallax {
        height: 370px;
    }

    .products-wrapper {
        margin: -2.5rem 3rem 0 3rem;

        padding: 3rem 4rem;
    }

    .products {
        gap: 1.5rem;
    }

    .product-info h2 {
        font-size: 1.25rem;
    }

    .product-info p {
        font-size: 1.125rem;
    }

    .page-link {
        font-size: 0.9rem;
    }

}

@media (min-width: 1024px) {
    .hero {
        margin-top: 60px;
    }

    .hero-content {
        width: 100%;
    }

    .hero-content h1 {
        font-size: 5rem;
        width: 100%;
    }

    .hero-content input {
        width: 30%
    }

    .parallax-wrapper {
        height: 540px;
    }
    .parallax {
        height: 800px;
    }

    .products-wrapper {
        margin: -4rem 5rem 0 5rem;
        padding: 5rem 7rem;
    }

    .products {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
    }
}

@media (min-width: 1366px) {

    .parallax-wrapper,
    .parallax {
        height: 625px;
    }

    .products-wrapper {
        margin: -6rem 5rem 0 5rem;
    }
}
</style>