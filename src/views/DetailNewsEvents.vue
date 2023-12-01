<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Navbar />
    <main class="bg-white pt-5">
        <div class="wrapper">
            <div class="title">
                <h1>Inilah 3 Jenis Rasa Liquid Vape Paling Populer di Tahun Ini</h1>
                <p>by Creativlabz | Mar 27, 2023 | Liquid Vape</p>
            </div>
            <p>Liquid vape adalah salah satu elemen penting dari rokok elektronik. Selain memberikan efek nikotin, liquid
                vape juga memberikan rasa dan aroma yang enak bagi penggunanya. Dalam beberapa tahun terakhir, terdapat
                banyak variasi rasa liquid vape yang diperkenalkan ke pasaran. Di bawah ini, kami telah merangkum 5 jenis
                rasa liquid vape paling populer di tahun ini.</p>
            <div class="list-item">
                <div class="item">
                    <h2>1.Buah-Buahan Tropis</h2>
                    <div class="item-image">
                        <img src="@/assets/images/news-and-events/VAPETASIA-STRAW.webp" alt="">
                    </div>
                    <p>Rasa buah-buahan tropis seperti mangga, nanas, dan jeruk telah menjadi pilihan yang populer bagi
                        penggemar liquid vape di seluruh dunia. Rasa buah-buahan tropis memberikan sensasi yang menyegarkan
                        dan cocok digunakan di musim panas.</p>
                </div>
                <div class="item">
                    <h2>2.Kue dan Roti</h2>
                    <div class="item-image">
                        <img src="@/assets/images/news-and-events/WhatsApp-Image-2021-02-10-at-11.48.46.webp" alt="">
                    </div>
                    <p>Liquid vape dengan rasa kue dan roti seperti blueberry muffin, apple pie, dan cinnamon roll juga
                        sangat populer di kalangan penggemar vape. Rasa kue dan roti memberikan sensasi manis dan hangat
                        pada lidah Anda.</p>
                </div>
                <div class="item">
                    <h2>3.Menthol dan Mint</h2>
                    <div class="item-image">
                        <img src="@/assets/images/news-and-events/WhatsApp-Image-2022-03-14-at-11.24.12-819x1024.webp"
                            alt="">
                    </div>
                    <p>Liquid vape dengan rasa menthol dan mint memberikan sensasi yang dingin pada tenggorokan dan
                        memberikan pengalaman merokok yang segar dan menyegarkan. Rasa menthol dan mint sangat populer pada
                        pengguna vape yang mencari sensasi yang berbeda dari rasa liquid vape tradisional.</p>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
.wrapper {
    padding: 5rem 10rem 0 10rem;
    margin-right: 5rem;
    border-right: 1px solid #e5e5e5;
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

.wrapper p {
    font-size: 14px;
    color: #666666;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2rem;
}

.item {
    margin-bottom: 2rem;
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

@media (max-width: 768px) {
    .wrapper {
        padding: 2.5rem;
        padding-top: 5rem;
        margin-right: 0;
        border-right: none;
    }

    .title h1 {
        font-size: 24px;
        font-weight: 400;
    }
}

@media (min-width: 768px) and (max-width: 980px) {
    .wrapper {
        padding: 5rem;
        margin-right: 0;
        border-right: none;
    }
}
</style>