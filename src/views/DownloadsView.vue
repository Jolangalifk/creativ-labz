<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import AccountSideNavigation from "../components/AccountSideNavigation.vue"
import { ref } from 'vue';

const downloads = ref([])
</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section>
                <div v-if="downloads.length">

                </div>
                <div else class="empty-download d-flex justify-content-between">
                    No downloads available yet
                    <div class="d-flex justify-content-end">
                        <button class="d-flex align-items-center">
                            <router-link to="/shop">Browse products</router-link>
                            <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <Footer />
</template>
<style scoped>
.dashboard {
    width: 100%;
    margin-top: 3rem;
    padding: 1rem;
    font-family: 'Open Sans', Arial, sans-serif;
}

.dashboard section {
    padding: 0 1rem 3rem 1rem;
    width: 100%;
}


.dashboard a {
    color: #2ea3f2;
}

.dashboard button {
    background-color: transparent;
    color: #2ea3f2;
    padding: 0;
    outline: none;
    border: none;
}

.dashboard span.highlight {
    font-weight: 700 !important;
    color: #666666;
}

.empty-download {
    background-color: #00c0ab;
    padding: 1rem;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 140%;
    color: white;
    margin: 0;
}

.empty-download button {
    padding: 0.35rem 0.75rem;
    width: fit-content;
    font-size: 0.875rem;
    line-height: 185%;
    font-weight: 500;
    transition: all 500ms ease;
}

.empty-download button:hover {
    background-color: #2ea3f2;
}

.empty-download .arrow-right {
    display: none;
    width: 0;
    transition: all 500ms ease;
}

.empty-download button:hover .arrow-right {
    display: block;
    width: fit-content;
}

.empty-download a {
    text-decoration: none;
    color: white;
}

@media (min-width: 768px) {
    .dashboard {
        padding: 1.5rem 3.5rem;
    }

    .empty-download {
        display: block;
        gap: 0;
    }
}

@media (min-width: 1024px) {
    .dashboard {
        display: flex;
        padding: 5.6rem;
    }

    .dashboard .navigation {
        width: 40%;
    }

    .empty-download {
        font-size: 1.125rem;
    }

    .empty-download button {
        font-size: 1rem;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>