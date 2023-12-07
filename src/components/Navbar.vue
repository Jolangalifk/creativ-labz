<script setup>
import { onMounted, ref } from 'vue';
const isScrolled = ref(false)
const showMenu = ref(false)

onMounted(() => {
    if (!window) return
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            isScrolled.value = true
        } else {
            isScrolled.value = false
        }
    })
})
</script>
<template>
    <header id="header" class="d-flex justify-content-between align-items-center"
        :class="{ 'scrolled-navbar': isScrolled }">
        <router-link class="image" to="/">
            <img src="@/assets/images/logos/aset-logo-creativelabz.png" alt="logo" class="d-none d-lg-block"
                :width="isScrolled ? 34 : 46" :height="isScrolled ? 34 : 46">
            <img src="@/assets/images/logos/aset-logo-creativelabz.png" alt="logo" class="d-lg-none" width="46" height="46">

        </router-link>
        <nav class="" :class="{ 'show': showMenu }">
            <div>
                <router-link to="/" class="active" aria-current="page" activeClass="active-route">Home</router-link>
                <router-link to="/about-us" class="active" aria-current="page" activeClass="active-route">About
                    Us</router-link>
                <router-link to="/shop" class="active" aria-current="page" activeClass="active-route">Product</router-link>
                <router-link to="/news-event" class="active" aria-current="page" activeClass="active-route">News &
                    Event</router-link>
                <router-link to="/contact" class="active" aria-current="page"
                    activeClass="active-route">Contact</router-link>
                <router-link to="/my-account" class="active" aria-current="page" activeClass="active-route">My
                    account</router-link>
                <router-link to="/cart" class="d-none d-lg-flex align-items-center">
                    <img src="@/assets/icons/cart.svg" alt="" class="m-0 p-0" width="18" height="18">
                </router-link>
            </div>
        </nav>
        <div class="btn-container">
            <router-link to="/cart" class="">
                <img src="@/assets/icons/cart.svg" alt="" width="20" height="20" class="p-0 m-0">
            </router-link>
            <button class="btn" @click="showMenu = !showMenu">
                <img src="@/assets/icons/hamburger.svg">
            </button>
        </div>
    </header>
</template>
<style scoped>
#header {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background-color: white;
    padding: 1rem 1rem 1rem 2rem;
    position: relative;
    z-index: 2000;
    border-bottom: 1px solid rgba(0, 192, 171, 0.15);
}

img[alt="logo"] {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

nav {
    position: absolute;
    top: 78px;
    width: 75%;
    left: 50%;
    display: grid;
    transform: translateX(-50%);
    grid-template-rows: 0fr;
    transition: 500ms all ease-out;
}

nav div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 0 0.7rem;
}

.show {
    z-index: 999;
    background-color: white;
    top: 78px;
    left: 50%;
    grid-template-rows: 1fr !important;
    padding-bottom: 0.7rem;
}

.show div {
    border-top: 3px solid #00c0ab;
}

nav a {
    color: #999999;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.75rem 0.3rem;
}

nav a:hover {
    color: #666666;
}

.btn-container {
    display: flex;
    align-items: center;
    filter: brightness(0);
}

a.active-route {
    color: #00c0ab;
}

@media (min-width: 768px) {
    #header {
        padding: 1rem 5.5rem;
    }
}

@media (min-width:1024px) {
    #header {
        background-color: black;
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0rem 8.5rem;
        height: 4.625rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: none;
    }


    header.scrolled-navbar {
        background-color: rgba(0, 0, 0, 0.8) !important;
        height: 3.325rem !important;
    }

    nav div {
        display: flex;
        align-items: stretch;
        flex-direction: row;
        background-color: transparent;
        gap: 1.65rem;
        height: 100%;
    }

    .show {
        background-color: transparent;
        padding-bottom: 0;
    }

    .show div {
        border: none;
    }

    nav {
        position: static;
        inset: 0;
        width: auto;
        display: block;
        transform: translateX(0);
    }

    nav a {
        align-self: center;
        margin: 0;
        font-weight: 600;
        width: auto;
        padding: 0;
    }

    .btn-container {
        display: none;
    }
}
</style>