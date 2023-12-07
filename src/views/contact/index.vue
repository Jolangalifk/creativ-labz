<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
</script>
<template>
    <Navbar />
    <section id="contact">
        <div class="contact-info">
            <div class="contact d-flex">
                <div class="contact-text">
                    <h2>Contact</h2>
                    <h1>Get In Touch</h1>
                    <p>Jangan ragu untuk mengirimkan pertanyaan, masukan, saran atau permintaan informasi melalui form
                        kontak yang tersedia. Tim kami siap membantu menjawab setiap pertanyaan Anda dan memberikan solusi
                        terbaik untuk kebutuhan Anda. Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan
                        kami dan senang mendengar dari Anda.</p>
                </div>
                <form class="rounded-5 bg-white d-flex flex-column">
                    <div class="">
                        <input type="text" class="form-control border-white rounded-4" id="name" placeholder="Name">
                    </div>
                    <div class="">
                        <input type="email" class="form-control border-white rounded-4" id="exampleInputEmail1"
                            placeholder="Email Addres">
                    </div>
                    <div class="">
                        <textarea class="form-control  border-white rounded-4" aria-label="With textarea"
                            placeholder="Message"></textarea>
                    </div>
                    <div class="contact-button">
                        <button type="submit" class="btn rounded-5">SUBMIT</button>
                    </div>
                </form>
            </div>
            <div class="contact-media">
                <div class="media-1">
                    <div class="img">
                        <img src="@/assets/images/contact/ngo-icon-16.png" alt="">
                    </div>
                    <div class="contact">
                        <h2>Email</h2>
                        <p>cs@creativlabz.co.id</p>
                    </div>
                </div>
                <div class="media">
                    <div class="img">
                        <img src="@/assets/images/contact/ngo-icon-17.png" alt="">
                    </div>
                    <div class="contact">
                        <h2>Address</h2>
                        <p>Jl. Mangga Besar IV R No.44, RT.2/RW.1, Taman Sari, Kota Jakarta Barat.</p>
                    </div>
                </div>
                <div class="media-1">
                    <div class="img">
                        <img src="@/assets/images/contact/ngo-icon-18.png" alt="">
                    </div>
                    <div class="contact">
                        <h2>Phone</h2>
                        <p>085254018888</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="visit">
            <div class="text">
                <h1>Visit our offline store!</h1>
                <p>Kunjungi toko kami dan temukan berbagai produk yang tersedia dengan kualitas terbaik. Tim kami siap
                    memberikan saran dan rekomendasi produk terbaik yang sesuai dengan kebutuhan Anda. Silakan kunjungi toko
                    kami pada jam operasional yang telah ditentukan dan nikmati pengalaman berbelanja yang menyenangkan.</p>
                <button>Get Directionts</button>
            </div>
            <div class="working-hours">
                <div class="hours">
                    <p>HOURS</p>
                </div>
                <div class="hourse-time">
                    <h2>Monday - Friday</h2>
                    <p>9am - 5pm</p>
                </div>
                <div class="hourse-time">
                    <h2>Saturdays</h2>
                    <p>11am - 5pm</p>
                </div>
                <div class="hourse-time">
                    <h2>Sundays</h2>
                    <p>9am - 3pm</p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
<style scoped>
#contact {
    font-family: 'Poppins', sans-serif;
}

.contact-info {
    width: 100%;
    background-image: url('src/assets/images/contact/natural-marble-pattern-background-1-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 4rem;
    padding: 10rem;
    margin-top: 0;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.4);
}

.contact {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 4rem;
}

.contact-text {
    width: 100%;
    height: 100%;
}

.contact-text h2 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
}

.contact-text h1 {
    font-size: 44px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
}

.contact-text p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    line-height: 2.2rem;
}

.contact form {
    width: 90%;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.contact form input {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 1px solid #00c0ab;
    border-radius: 5px;
    margin-bottom: 1rem;
    background-color: #F5F3EE;
}

.contact form input::placeholder {
    font-size: 14px;
    color: #00c0ab;
}

.contact form textarea {
    width: 100%;
    height: 150px;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    background-color: #F5F3EE;
}

.contact form textarea::placeholder {
    font-size: 0.8rem;
    color: #00c0ab;
}

.contact-button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}

.contact-button .btn {
    width: 75%;
    padding: 0.7rem 1rem;
    background-color: #00c0ab;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
}

.contact form button {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    background-color: #00c0ab;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
}

.contact-media {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
}

.contact-media .media {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.3rem;
    background-color: #fff;
    border-radius: 15px;
}

.contact-media .media .img {
    width: 80px;
    height: 80px;
    margin-right: 1rem;
}

.contact-media .media .contact h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #00c0ab;
    margin-bottom: 0.5rem;
}

.contact-media .media .contact p {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    margin: 0;
}

.contact-media .media-1 {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.3rem;
    background-color: #fff;
    border-radius: 15px;
}

.contact-media .media-1 .img {
    width: 80px;
    height: 80px;
    margin-right: 1rem;
}

.contact-media .media-1 .contact h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #00c0ab;
    margin-bottom: 0.5rem;
}

.contact-media .media-1 .contact p {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    margin: 0;
}

.visit {
    width: 100%;
    background-image: url('src/assets/images/contact/natural-marble-pattern-background-1-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.7);
}

.visit .text {
    width: 58%;
    height: 100%;
    margin-bottom: 6rem;
}

.visit .text h1 {
    font-size: 44px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
}

.visit .text p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    line-height: 180%;
    margin-bottom: 2rem;
}

.visit .text button {
    height: 100%;
    padding: 0.7rem 1rem;
    border-radius: 2rem;
    background-color: #00c0ab;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    border: none;
}

.visit .working-hours {
    width: 37%;
    height: 100%;
    padding: 3rem 1rem;
    padding-bottom: 1rem;
    background-color: #00c0ab;
    border-radius: 1.5rem;
}

.visit .working-hours .hours {
    width: 30%;
    padding: 0.8rem 1rem;
    background-color: #EF8451;
    border-radius: 2rem;
    margin-bottom: 1rem;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.visit .working-hours .hours p {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
    text-align: center;
}

.visit .working-hours .hourse-time {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.visit .working-hours .hourse-time h2 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin: 0.7rem;
    letter-spacing: 1px;
}

.visit .working-hours .hourse-time p {
    font-size: 1rem;
    font-weight: 600;
    color: #99E6DD;
    margin: 0.3rem;
}

@media (max-width: 980px) {
    .contact-info {
        margin: 0;
        padding: 4rem 2rem 2rem 2rem;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .contact {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
    }

    .contact-text {
        width: 100%;
        height: 100%;
    }

    .contact-text p {
        font-size: 16px;
        line-height: 1.8rem;
        margin-bottom: 0;
    }

    .contact form {
        width: 100%;
        height: 100%;
        padding: 3rem 1.5rem;
    }

    .contact form input {
        margin-bottom: 0.5rem;
    }

    /* .contact-button .btn {
     width: 35%;
    } */

    .contact-media {
        margin-top: 4rem;
        flex-direction: column;
        gap: 2rem;
    }

    .contact-media .media {
        width: 100%;
        height: 100%;
        flex-direction: row;
        gap: 1rem;
        padding: 1.5rem;
    }

    .contact-media .media .img {
        margin-right: 0rem;
    }

    .contact-media .media-1 {
        width: 100%;
        height: 100%;
        flex-direction: row;
        gap: 1rem;
        padding: 1.5rem;
    }

    .contact-media .media-1 .img {
        margin-right: 0rem;
    }

    .visit {
        width: 100%;
        padding: 2rem;
        flex-direction: column;
        gap: 2rem;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .visit .text {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
    }

    .visit .text p {
        font-size: 16px;
        line-height: 1.8rem;
    }

    .visit .working-hours {
        width: 100%;
        height: 100%;
        padding: 2rem 1rem;
    }

}

@media (min-width: 980px) and (max-width: 1024px) {
    .contact-info {
        padding: 8rem 2rem;
        margin: 0;

    }

    .contact-media .media-1 {
        padding-right: 0;
    }

    .contact-media .media-1 .contact {
        overflow: hidden;
    }

    .visit {
        padding: 6rem 2rem;
        gap: 2rem;
    }

    .visit .text {
        margin-bottom: 0;
    }

    .visit .text p {
        font-size: 18px;
    }
}

@media (min-width: 768px) {
    .visit .working-hours .hourse-time h2 {
        font-size: 1.25rem;
    }

    .contact-info {
        padding: 5rem;
    }

    .contact-button .btn {
        width: 35%;
    }

    .visit {
        padding: 5rem;
    }
}

@media (min-width: 1024px) {
    .contact-info {
        margin-top: 60px;
    }
}
</style>