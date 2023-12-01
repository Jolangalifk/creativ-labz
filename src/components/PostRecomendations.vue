<script setup>
import { ref } from 'vue';

const posts = ref([
    {
        title: 'Inilah 3 Jenis Rasa Liquid Vape Paling Populer di Tahun Ini',
        slug: 'inilah-3-jenis-rasa-liquid-vape-paling-populer-di-tahun-ini'
    }, {
        title: 'Cara Memilih Liquid Vape yang Tepat Sesuai dengan Selera Anda',
        slug: 'cara-memilih-liquid-vape-yang-tepat-sesuai-dengan-selera-anda'
    }, {
        title: 'Kandungan Apa Saja yang Ada di Liquid Vape?',
        slug: 'kandungan-apa-saja-yang-ada-di-liquid-vape'
    },
    {
        title: 'Fakta Menarik Tentang Vape',
        slug: 'fakta-menarik-tentang-vape'
    },
    {
        title: 'Liquid Vape | Vapor Indonesia',
        slug: 'liquid-vape-vapor-indonesia'
    }
])

const comments = ref([])
</script>
<template>
    <section class="wrapper">
        <form @submit.prevent="" class="d-flex">
            <input type="text" class="">
            <button type="submit" class="btn">Search</button>
        </form>
        <div class="mt-4">
            <h2>Recent Posts</h2>
            <template v-for="post in posts" :key="post.slug">
                <RouterLink :to="post.slug" class="inner-text">{{ post.title }}</RouterLink>
            </template>
        </div>
        <div class="mt-4">
            <h2>Recent Comments</h2>
            <p v-if="!comments.length" class="inner-text">No comments to show</p>
        </div>
    </section>
</template>
<style scoped>
.wrapper {
    padding: 0 2rem;
}

form {
    border: 1px solid #dddddd;
    width: 100%;
}

form input,
form button {
    font-size: 0.875rem;
    color: #666666;
}

form input {
    padding: 0.3rem;
    border: none;
}

form input:focus {
    box-shadow: none;
    outline: none;
}

button {
    padding: 0.5rem 0.7rem;
    height: 100%;
    background-color: #dddddd;
    border-radius: 0;
}

.inner-text {
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
}

.inner-text:hover {
    color: #00c0ab;
}

h2 {
    font-size: 1.625rem;
    font-weight: 400;
    color: #333333;
}

@media (max-width: 1024px) {
    form input {
        width: 100%;
    }
}

@media (min-width: 1024px) {
    form {
        width: fit-content;
    }
}
</style>