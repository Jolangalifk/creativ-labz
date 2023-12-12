<script setup>
import Footer from '../../../components/Footer.vue';
import Navbar from '../../../components/Navbar.vue';
import PostRecomendations from '../../../components/PostRecomendations.vue';
import StarRating from '../../../components/StarRating.vue';
import Gallery from '../../../components/Gallery.vue';

import { ref } from 'vue';
import { toRupiah } from '../../../utils';

const product = ref({
    name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
    image_url: '/src/assets/images/products/product-1-full.webp',
    short_description: 'A sweet and mentholated tobacco, perfect for the former menthol smoker who also enjoys a rich strawberry flavor to accompany their vape afterglow.',
    long_description: 'SCREWBACCO MENTHOL FREEBASE A sweet and mentholated tobacco, perfect for the former menthol smoker who also enjoys a rich strawberry flavor to accompany their vape afterglow. NIC: 3MG, 6MG, 9MG VOL: 60ML (Chubby Gorilla) PRIMARY FLAV: Menthol, Tobacco, Strawberry VG/PG: 75/25',
    price: 240000,
    NIC: [
        {
            id: 1,
            name: '3MG'
        },
        {
            id: 2,
            name: '6MG'
        },
        {
            id: 3,
            name: '9MG'
        }], //not sure what is nic is
    category: '',
    tags: ['creativelabz', 'freebase', 'menthol', 'screwbacco'],
    weight: 800, //gr
})

const productImage = ref([{
    largeURL: '/src/assets/images/products/product-1-full.webp',
    thumbnailURL: '/src/assets/images/products/product-1-full.webp',
    width: 1875,
    height: 2500,
}])

const reviews = ref([])

const relatedProducts = ref([
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

const imageStyle = ref({
    backgroundImage: `url(${product.value.image_url})`,
    backgroundPosition: '0% 0%'
})

const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect()
    const x = (event.pageX - left) / width * 100
    const y = (event.pageY - top) / height * 100
    imageStyle.value.backgroundPosition = `${x}% ${y}%`
}

const selectedTab = ref('decs')
</script>
<template>
    <Navbar />

    <main id="main-content">
        <section class=" product-container">
            <div class="d-flex align-items-center flex-wrap custom-breadcrumb">
                <RouterLink :to="'/'">Home </RouterLink>
                <span>/</span>
                <RouterLink :to="'/product-category/' + product.category">
                    {{ product.category || 'Uncategorized' }}
                </RouterLink>
                <span>/</span>
                <span class="text-uppercase">{{ product.name }}</span>
            </div>
            <div class="product">
                <div class="">
                    <div @mousemove="(event) => handleMouseMove(event)" :style="imageStyle" class="img-container">
                        <!-- <img :src="product.image_url" class="img-fluid"> -->
                        <div class="magnify"><img src="@/assets/icons/search.png">
                        </div>
                        <Gallery galleryID="product-image" :images="productImage" />
                    </div>
                </div>
                <div class="mt-3 mt-lg-0">
                    <h1>{{ product.name }}</h1>
                    <p class="price">{{ toRupiah(product.price) }}</p>
                    <p class="description">{{ product.short_description }}</p>
                    <div class="product-nic d-flex align-content-center gap-5">
                        <p>NIC</p>
                        <select class="form-select">
                            <option selected>Default sorting</option>
                            <template v-for="item in product.NIC" :key="item.id">
                                <option :value="item.id">{{ item.name }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="d-flex align-items-start gap-4 mt-4 mb-4">
                        <input class="form-control" type="number" min="1" :value="1">
                        <button class="btn">Add to cart</button>
                    </div>
                    <div class="variant-info mt-md-5">
                        <p>SKU: N/A Category: <span class="highlight-text">{{ product.category
                        }}</span> Tags: <span class="highlight-text">{{ product.tags.join(', ') }}</span></p>
                    </div>
                </div>
            </div>
            <div class="product-info-tab">
                <div class="tab-selections d-md-flex align-items-sm-stretch">
                    <label :class="{ 'selected-tab': selectedTab === 'decs' }">
                        <input type="radio" :value="'decs'" class="w-100 h-100 d-none " v-model="selectedTab" />
                        Description
                    </label>
                    <label :class="{ 'selected-tab': selectedTab === 'info' }">
                        <input type="radio" :value="'info'" class="w-100 h-100 d-none " v-model="selectedTab" />
                        Additional Information
                    </label>
                    <label :class="{ 'selected-tab': selectedTab === 'reviews' }">
                        <input type="radio" :value="'reviews'" class="w-100 h-100 d-none " v-model="selectedTab" />
                        Reviews ({{ reviews.length }})
                    </label>
                    <div class="flex-grow-1 d-none d-md-block">

                    </div>
                </div>
                <div v-if="selectedTab === 'decs'" class="info-tab">
                    <h2>Description</h2>
                    <p>{{ product.long_description }}</p>
                </div>
                <div v-if="selectedTab === 'info'" class="info-tab">
                    <h2>Additional Information</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th width="20%">Weight</th>
                                <td>{{ (product.weight / 1000).toFixed(1).toString().replace(/\./g, ',') }} kg</td>
                            </tr>
                            <tr>
                                <th width="20%">NIC</th>
                                <td> {{ product.NIC.map(item => item.name).join(', ') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="selectedTab === 'reviews'" class="info-tab">
                    <h2>Reviews</h2>
                    <p v-if="!reviews.length">
                        There are no reviews yet.
                        <br>
                        Be the first to review “{{ product.name }}”
                        <br>
                        Your email address will not be published. Required fields are marked *
                    </p>
                    <form class="review-form" @submit.prevent="">
                        <p class="m-0 p-0">Your rating *</p>
                        <StarRating :read-only="false" :active-color="'#2ea3f2'" :rating-size="'1.4rem'" />
                        <textarea class="form-control w-100 h-100 mt-3" :rows="3" placeholder="Your review *"
                            required></textarea>
                        <input type="text" class="form-control" placeholder="Name *">
                        <input type="email" class="form-control" placeholder="Email *">
                        <label class="d-lg-flex gap-2 align-items-center mt-4">
                            <input type="checkbox">
                            Save my name, email, and website in this browser for the next time I
                            comment.</label>
                        <div class="mt-4 d-flex justify-content-end">
                            <button class="btn rounded-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="related-products-section mt-5">
                <h2>Related products</h2>
                <div class="d-flex flex-wrap gap-0 flex-md-nowrap gap-md-4 gap-xl-5 related-products-container">
                    <template v-for="(product, index) in relatedProducts" :key="index">
                        <router-link :to="'/shop'" class="related-product">
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
            </div>
        </section>

        <div class="d-lg-flex">
            <div class="vr"></div>
            <PostRecomendations class="post-recomendations " />
        </div>
    </main>
    <Footer />
</template>
<style scoped>
#main-content {
    font-family: 'Open Sans', Arial, sans-serif;
}

.product-container {
    margin: 4rem 2rem 2rem 2rem;
}

.post-recomendations {
    margin-bottom: 2rem;
}

.custom-breadcrumb a {
    text-decoration: none;
}

.custom-breadcrumb {
    padding-top: 2rem;
    margin-bottom: 0.6rem;
}

.custom-breadcrumb>*+* {
    margin-right: 0.2rem;
}

.custom-breadcrumb a,
.custom-breadcrumb span {
    font-size: 0.8125rem;
    line-height: 185%;
    color: #767676;
    font-weight: 500;
}

.img-container {
    width: fit-content;
    background-repeat: no-repeat;
    position: relative;
}


#product-image:hover {
    opacity: 0;
}

.magnify:hover {
    opacity: 1;
}

.magnify {
    background-color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.magnify img {
    width: 16px;
    height: 16px;
}

.product h1 {
    font-size: 1.25rem;
    line-height: 100%;
    color: #333333;
    font-weight: 500;
}


.product .price {
    font-size: 1rem;
    color: #00c0ab;
    font-weight: 500;
    margin: 0;
}

.product .description {
    font-size: 0.875rem;
    line-height: 170%;
    font-weight: 500;
    color: #666666;
}

.form-select {
    background-color: #ececec;
    color: #666666;
    width: min-content;
    font-size: 0.75rem;
    border-radius: 0;
    height: fit-content;
}

.form-select:focus,
.form-control {
    outline: none !important;
    box-shadow: none !important;
    border: none;
    border-radius: 0;
}

.product .product-nic p {
    font-size: 0.875rem;
    line-height: 200%;
    font-weight: 700;
    color: #666666;
}

.form-control {
    background-color: #eeeeee;
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 0.875rem;
    line-height: 170%;
    color: #3e3e3e;
}

.btn {
    background-color: #7fdfd5;
    color: white;
    font-size: 1rem;
    line-height: 170%;
    font-weight: 500;
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
}

.variant-info p {
    margin-right: 0.5rem;
    border-top: 1px solid #dadada;
    padding-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    font-weight: 500;
}

.variant-info p .highlight-text {
    color: #00c0ab;
    text-transform: uppercase;
}

.product-info-tab {
    border: 1px solid #d9d9d9;
    margin-top: 2rem;
}

.tab-selections {
    width: 100%;
    background-color: #f4f4f4;
}

.tab-selections label {
    cursor: pointer;
    background-color: #f4f4f4;
    padding: 0.25rem 1rem;
    border-bottom: 1px solid #d9d9d9;
    font-size: 0.875rem;
    line-height: 185%;
    font-weight: 700;
    color: #666666;
    width: 100%;
}

.tab-selections div {
    border-bottom: 1px solid #d9d9d9;
}

.tab-selections label.selected-tab {
    background-color: white;
    color: black;
}

.info-tab {
    padding: 2rem;
}

.info-tab h2,
.related-products-section h2,
.product-info h2 {
    font-size: 1.625rem;
    color: #333333;
    font-weight: 400;
}

.product-info h2 {
    font-size: 1rem;
}

.info-tab p,
.product-info p {
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    font-weight: 500;
}

.info-tab table {
    width: 100%;
}

.info-tab table,
.info-tab table tr {
    border: 1px solid #eeeeee;
}

.info-tab table th {
    padding: 0.8rem 0.4rem;
}

.info-tab table th {
    font-size: 0.875rem;
    line-height: 170%;
    color: #555555;
    font-weight: 500;
}

.info-tab table td {
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    font-weight: 500;
    font-style: italic;
}

.info-tab table tr:nth-child(odd) {
    background-color: white;
}

.info-tab table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.related-product {
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

.related-products-container {
    gap: 4rem;
}

.review-form .form-control,
.review-form .form-control::placeholder {
    color: #999999;
}

.review-form input.form-control {
    margin-top: 1.7rem;
    width: 100%;
}

.review-form label {
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    font-weight: 500;
}

.review-form .btn {
    background-color: #00c0ab;
    color: white;
    font-size: 1rem;
    padding-right: 1em;
    padding-left: 1em;
}


@media (min-width: 768px) {
    .product-container {
        margin: 5rem 5rem 2rem 5rem;
    }

    .post-recomendations {
        margin: 0rem 5rem 4rem 2.8rem;
    }

    .review-form input.form-control {
        width: 50%;
    }

    .tab-selections label {
        width: auto;
    }
}

@media (min-width: 1024px) {
    #main-content {
        display: flex;
    }

    .product-container {
        margin: 4rem 0rem 4rem 4.6rem;
        padding-right: 1.5rem;
    }

    .post-recomendations {
        margin: 4rem 4.6rem 4rem 0rem;
        padding-top: 6rem;
    }

    .post-recomendations {
        width: 100%;
        margin: 0;
    }

    .img-container {
        width: 289px;
    }

    .product {
        display: flex;
        gap: 2rem;
    }
}

@media (min-width: 1366px) {
    .product-container {
        margin: 6rem 0rem 7rem 7.6rem;
    }

    .post-recomendations {
        margin: 6rem 4.6rem 7rem 0;
        padding-top: 2rem;
    }

    .img-container {
        width: 380px;
    }

    .product h1 {
        font-size: 1.875rem;
    }

    .product .price {
        font-size: 1.625rem;
    }

    .tab-selections label {
        border-right: 1px solid #d9d9d9;
    }

    .tab-selections label.selected-tab {
        border-bottom: none;
        border-right: 1px solid #d9d9d9;
    }
}
</style>