<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import PostRecomendations from '../../../components/PostRecomendations.vue';

const data = [
    {
        id: 1,
        name: '1.Buah-Buahan Tropis',
        image: '/src/assets/images/news-and-events/VAPETASIA-STRAW.webp',
        description: 'Rasa buah-buahan tropis seperti mangga, nanas, dan jeruk telah menjadi pilihan yang populer bagi penggemar liquid vape di seluruh dunia. Rasa buah-buahan tropis memberikan sensasi yang menyegarkan dan cocok digunakan di musim panas.'
    },
    {
        id: 2,
        name: '2.Kue dan Roti',
        image: '/src/assets/images/news-and-events/WhatsApp-Image-2021-02-10-at-11.48.46.webp',
        description: 'Liquid vape dengan rasa kue dan roti seperti blueberry muffin, apple pie, dan cinnamon roll juga sangat populer di kalangan penggemar vape. Rasa kue dan roti memberikan sensasi manis dan hangat pada lidah Anda.'
    },
    {
        id: 3,
        name: '3.Menthol dan Mint',
        image: '/src/assets/images/news-and-events/WhatsApp-Image-2022-03-14-at-11.24.12-819x1024.webp',
        description: 'Liquid vape dengan rasa menthol dan mint memberikan sensasi yang dingin pada tenggorokan dan memberikan pengalaman merokok yang segar dan menyegarkan. Rasa menthol dan mint sangat populer pada pengguna vape yang mencari sensasi yang berbeda dari rasa liquid vape tradisional.'
    }
]
</script>

<template>
    <Navbar />
    <main class="bg-white">
        <div class="wrapper-detail">
            <div class="title">
                <h1>Inilah 3 Jenis Rasa Liquid Vape Paling Populer di Tahun Ini</h1>
                <p>by Creativlabz | Mar 27, 2023 | Liquid Vape</p>
            </div>
            <p>Liquid vape adalah salah satu elemen penting dari rokok elektronik. Selain memberikan efek nikotin, liquid
                vape juga memberikan rasa dan aroma yang enak bagi penggunanya. Dalam beberapa tahun terakhir, terdapat
                banyak variasi rasa liquid vape yang diperkenalkan ke pasaran. Di bawah ini, kami telah merangkum 5 jenis
                rasa liquid vape paling populer di tahun ini.</p>
            <div class="list-item">
                <router-link :to="'/detail-news-events/' + item.id" v-for="item in data" :key="item.id" class="item">
                    <h2>{{ item.name }}</h2>
                    <div class="item-image">
                        <img :src="item.image" alt="">
                    </div>
                    <p>{{ item.description }}</p>
                </router-link>
            </div>
        </div>
        <div class="d-lg-flex">
            <div class="vr"></div>
            <PostRecomendations class="post-recomendations" />
        </div>
    </main>
    <Footer />
</template>


<style scoped>
main {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    width: 100%;
}

.post-recomendations {
    margin-bottom: 2rem;
    margin-right: 7rem;
    padding-top: 7rem;
}

.wrapper-detail {
    width: 100%;
    padding: 10rem;
    padding-right: 7rem;
    padding-top: 8rem;
    padding-bottom: 5rem;
}

.title {
    margin-bottom: 3rem;
}

.title h1 {
    font-size: 30px;
    font-weight: 500;
    color: #333333;
    line-height: 1em;
    font-family: 'Open Sans', sans-serif;
}

.title p {
    font-size: 14px;
    color: #666666;
    font-weight: 400;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
}

.wrapper-detail p {
    font-size: 14px;
    color: #666666;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2rem;
}

.item {
    margin-bottom: 2rem;
    text-decoration: none;
}

.item h2 {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 1em;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2rem;
}

.item-image {
    margin-bottom: 2rem;
}

.item-image img {
    box-sizing: border-box;
    height: auto;
    max-width: 100%;
    vertical-align: bottom;
}

@media (max-width: 767px) {
    main {
        flex-direction: column;
    }

    .post-recomendations {
        margin-right: 0;
        padding-top: 0;
    }

    .wrapper-detail {
        margin: 0;
        padding: 2.5rem;
        padding-top: 8rem;
        padding-bottom: 1rem;
        border-right: none;
    }

    .title h1 {
        font-size: 24px;
        font-weight: 400;
    }
}

@media (min-width: 768px) and (max-width: 980px) {
    main {
        flex-direction: column;
    }

    .post-recomendations {
        margin-right: 5rem;
        margin-left: 5rem;
        margin-bottom: 3rem;
        padding: 0;
    }

    .wrapper-detail {
        margin: 0;
        padding: 5rem;
        padding-top: 8rem;
        padding-bottom: 1rem;
        border-right: none;
    }
}
</style>