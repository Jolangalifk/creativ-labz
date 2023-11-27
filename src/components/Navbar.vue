<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="nav-wp container-fluid d-flex justify-content-between">
            <div class="logo">
                <router-link class="image" to="/">
                    <img src="@/assets/images/logos/aset-logo-creativelabz.png" width="50" height="50" alt="">
                </router-link>
            </div>
            <div class="nav-content collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                <ul class="navbar-nav gap-2">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-us" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/news-and-event" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">News & Event</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/my-account" class="nav-link active" aria-current="page" href="#"
                        style="color: #999999; font-weight: 700; font-size: 14px;">My Account</router-link>
                    </li>
                    <li class="nav-item d-flex align-items-center justify-content-center">
                        <img src="@/assets/icons/cart.svg" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgba(0, 0, 0, 0.8);
}

.nav-wp {
    padding: 0;
    width: 80%;
}

.logo {
    width: 50px;
    height: 50px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .navbar {
        padding: 2rem;
        background-color: white;
    }
    .nav-wp {
        width: 100%;
    }
}
</style>
  