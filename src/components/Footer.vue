<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    const contacts = document.querySelectorAll('.contact');
    contacts.forEach((el) => {
        observer.observe(el);
    });
});
</script>
<template>
    <footer id="footer">
        <div class="row pt-5 justify-content-between mx-1 mx-lg-5 px-lg-5">
            <div class="contact text-center col-12 col-lg-4">
                <h4>Visit Us</h4>
                <p>Sunday – Monday : 08.00 am – 10.00 pm</p>
            </div>
            <div class="contact text-center col-12 col-lg-4">
                <h4>Call Us</h4>
                <p>085254018888</p>
            </div>
            <div class="contact text-center col-12 col-lg-4">
                <h4>Address</h4>
                <p>Jl. Mangga Besar IV R No.44, RT.2/RW.1, Taman Sari, Jakarta Barat</p>
            </div>
        </div>
        <div class="socials-media d-flex gap-4 align-items-center justify-content-center mt-5">
            <a href="#" class="d-flex align-items-center justify-content-center"><img src="@/assets/icons/fb.png"></a>
            <a href="#" class="d-flex align-items-center justify-content-center"><img src="@/assets/icons/x.png"></a>
            <a href="https://www.instagram.com/creativlabz/" rel="norefferer noopener"
                class="d-flex align-items-center justify-content-center"><img src="@/assets/icons/ig.png"></a>
        </div>
    </footer>
</template>
<style scoped>
#footer {
    font-weight: 500;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(180deg, #000000 21%, rgba(10, 10, 10, 0.58) 100%),
        url('/src/assets/images/footer-bg.webp') !important;
    background-position: center;
    padding-bottom: 8rem;
}

.contact>h4 {
    font-family: 'Quattrocento', 'Times New Roman', Times, serif;
    font-size: 1rem;
    line-height: 130%;
    color: #00c0ab;
}

.contact>p {
    font-family: 'Quattrocento', 'Times New Roman', Times, serif;
    font-size: 0.875rem;
    line-height: 177%;
    color: white;
}

.socials-media>a {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 5px;
    width: 2.8rem;
    height: 2.8rem;
}

.socials-media>a>img {
    height: 1.125rem;
}

.fade-in {
    animation: fadeIn 1.6s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (min-width: 1024px) {
    .contact>h4 {
        font-size: 1.875rem;
    }

    .contact>p {
        font-size: 1.125rem;
    }
}
</style>