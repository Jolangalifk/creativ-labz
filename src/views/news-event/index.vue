<script setup>
import { ref } from 'vue';
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';

const carouselData = ref([
    {
        title: 'Fakta Menarik Tentang Vape',
        text: 'Rokok Elektrik tidak menghasilkan asap melainkan uap air (Liquid). Cairan yang terdapat pada rokok elektrik atau vape mengandung zat nikotin',
        url: 'dfdf dfdf',
        image_url: '/src/assets/images/news-and-events/vaping-device-e-cigarette-scaled.jpg'
    },
    {
        title: 'Kandungan Apa Saja yang Ada di Liquid Vape?',
        text: 'Rokok Elektrik tidak menghasilkan asap melainkan uap air (Liquid). Cairan yang terdapat pada rokok elektrik atau vape mengandung zat nikotin.',
        url: '',
        image_url: '/src/assets/images/news-and-events/hemp-oil-that-is-paired-with-hemp-brown-wooden-floor-scaled.jpg'
    }
])

const newsAndEvents = ref([{
    title: 'Inilah 3 Jenis Rasa Liquid Vape Paling Populer di Tahun Ini',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Liquid vape adalah salah satu elemen penting dari rokok elektronik. Selain memberikan efek nikotin, liquid vape juga memberikan rasa dan aroma yang enak bagi penggunanya. Dalam beberapa tahun terakhir, terdapat banyak variasi rasa liquid vape yang diperkenalkan ke...',
    image_url: '/src/assets/images/news-and-events/VAPETASIA-STRAW-400x250.webp'
},
{
    title: 'Kandungan Apa Saja yang Ada di Liquid Vape?',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Rokok Elektrik tidak menghasilkan asap melainkan uap air (Liquid). Cairan yang terdapat pada rokok elektrik atau vape mengandung zat nikotin. Apa saja sih yang terkandung dalam cairan rokok elektrik? Dalam cairan rokok elektrik mengandung propilen glikol atau gliserin...',
    image_url: '/src/assets/images/news-and-events/hemp-oil-that-is-paired-with-hemp-brown-wooden-floor-400x250.jpg'
},
{
    title: 'Cara Memilih Liquid Vape yang Tepat Sesuai dengan Selera Anda',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Young beauty woman wearing in sunglasses smoking vape on gray background. Liquid vape adalah salah satu elemen penting dari rokok elektronik. Selain memberikan rasa dan aroma yang enak, liquid vape juga berperan dalam memberikan efek nikotin dan meningkatkan...',
    image_url: '/src/assets/images/news-and-events/young-woman-wearing-sunglasses-smoking-vape-gray-wall-400x250.jpg'
},
{
    title: 'Fakta Menarik Tentang Vape',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Maraknya industri vape di Indonesia beberapa tahun belakangan ini membuat masyarakat bertanya-tanya. Apakah vape sama fungsinya dengan rokok? Apakah vape memiliki bahaya yang sama dengan rokok? Apakah vape itu nama lain dari e-cigarettes? Masih banyak...',
    image_url: '/src/assets/images/news-and-events/vaping-device-e-cigarette-scaled.jpg'
},
{
    title: 'Liquid Vape | Vapor Indonesia',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Rokok elektrik atau sering disebut sebagai liquid vape menjadi salah satu penghantar nikotin elektronik. Bagi para pecandu rokok tembakau , melalui liquid vape ini dapat membantu untuk memulai berhenti merokok. Rokok elektrik ini banyak diminati oleh para pecandu...',
    image_url: '/src/assets/images/news-and-events/vaping-device-400x250.jpg'
},
{
    title: 'Rokok Elektrik Lebih Aman dari Rokok Biasa',
    author: 'Creativlabz',
    createdAt: 'Mar 27, 2023',
    category: 'Liquid Vape',
    text: 'Banyak orang Indonesia yang membicarakan tentang bahaya merokok. Kebiasan yang dapat menimbulkan berbagai penyakit. Banyak orang yang mengatakan bahwa rokok elektrik lebih aman dari rokok biasa. Menurut PHE rokok elektrik dapat membantu para perokok dewasa untuk bisa...',
    image_url: '/src/assets/images/news-and-events/woman-with-cigar-vaper-hands-with-open-palms-400x250.jpg'
}])
</script>
<template>
    <Navbar />
    <main class="bg-black" id="news-events">
        <h1>News & Events</h1>
        <div id="newsEventCarousel" class="carousel carousel-fade mx-auto" data-bs-interval="false">
            <div class="carousel-indicators">
                <button v-for="(item, index) in carouselData" :key="index" type="button" data-bs-target="#newsEventCarousel"
                    :data-bs-slide-to="index.toString()" class="carousel-navigation" :class="{ 'active': index === 0 }"
                    :aria-current="index === 0" :aria-label="'Slide' + (index + 1)"></button>
            </div>
            <div class="carousel-inner">
                <div v-for="(item, index) in  carouselData " :key="index"
                    class="carousel-item rounded-5 text-white d-flex align-items-center" :class="{ 'active': index === 0 }"
                    :style="{ 'background-image': `url(${item.image_url})` }">
                    <div class="carousel-content d-flex flex-column align-items-center justify-content-center">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.text }}</p>
                            <button class="btn rounded-5 px-4 py-1">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#newsEventCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#newsEventCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <section class="news-events-container mt-5 mx-auto">
            <template v-for="(item, index) in newsAndEvents" :key="index">
                <div class="news-event-item d-flex flex-column">
                    <img :src="item.image_url" class="d-block img-fluid">
                    <div class="news-event-teks">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.author }} | {{ item.createdAt }} | {{ item.category }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </template>
        </section>
    </main>
    <Footer />
</template>
<style scoped>
#news-events {
    padding-top: 30px;
}

#news-events h1 {
    font-family: 'Quattrocento', 'Times New Roman', Times, serif;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0 3rem 0;
}

#newsEventCarousel {
    width: 80%;
}

.carousel-navigation {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    margin: 0 0.3rem;
}

.carousel-item {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
}

.carousel-content::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
}

.carousel-content {
    margin: 0 auto;
    width: 100%;
    height: 100%;
}

.carousel-content div {
    width: 60%;
}

.carousel-content h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
}

.carousel-content p {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 0.875rem;
    line-height: 170%;
    font-weight: 400;
    text-align: center;
}

.carousel-content button {
    background-color: #00c0ab;
    color: white;
    font-size: 0.875rem;
    line-height: 170%;
    margin: 0 auto;
}

.news-events-container {
    columns: 1;
    gap: 4rem;
    width: 80%;
}

.news-event-item {
    margin-bottom: 2rem;
    background-color: white;
    padding: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
}

.news-event-item img {
    border-top-left-radius: 21px;
    padding: 1px;
    border-top-right-radius: 21px;
}

.news-event-teks {
    margin: 1.5rem 1rem 1rem 1rem;
}

.news-event-teks h2 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 140%;
    color: #333333;
}

.news-event-teks p {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
}

.carousel-item.active .carousel-content>div {
    animation: fadeUp 1200ms ease-in-out;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20%);
    }

    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

@media (min-width: 768px) {
    .news-events-container {
        columns: 2;
    }

    .news-event-item {
        margin-bottom: 4rem;
    }
}

@media (min-width: 1024px) {
    #news-events {
        padding-top: 60px;
    }

    #news-events h1 {
        font-size: 4.1rem;
        margin-top: 4rem;
    }

    .carousel-content h2 {
        font-size: 1.75rem;
    }

    .carousel-item {
        height: 500px;
    }
}

@media (min-width: 1240px) {
    .news-events-container {
        columns: 3;
    }
}
</style>