<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountSideNavigation from '../../components/AccountSideNavigation.vue'
import { ref } from 'vue'

const billingAddress = ref({
    firstName: 'Slamet',
    lastName: 'Kopling',
    companyName: 'Kopling Corporation',
    country: 'Indonesia',
    province: 'Jawa Tengah',
    city: 'Semarang',
    subdistrict: 'Semarang Tengah',
    streetAddress: 'Jl. jalan-jalan',
    postcode: '0000',
    emailAddress: 'slametkopling@gmail.com',
    phoneNumber: '1212'
})
const shippingAddress = ref()
</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section class="w-100">
                <p class="info">The following addresses will be used on the checkout page by default.</p>
                <div class="addresses">
                    <div class="address-container">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3>Billing address</h3>
                            <router-link to="/my-account/edit-address/billing" v-if="billingAddress">Edit</router-link>
                            <router-link to="/my-account/edit-address/billing" v-else>Add</router-link>
                        </div>

                        <div class="address">
                            <div v-if="billingAddress">
                                <p>{{ billingAddress.firstName + ' ' + billingAddress.lastName }}</p>
                                <p>{{ billingAddress.companyName }}</p>
                                <p>{{ billingAddress.streetAddress }}</p>
                                <p>{{ billingAddress.province }}</p>
                                <p>{{ billingAddress.city }}</p>
                                <p>{{ billingAddress.subdistrict }}</p>
                                <p>{{ billingAddress.postcode }}</p>
                            </div>
                            <p v-else>You have not set up this type of address yet.</p>
                        </div>

                    </div>

                    <div class="address-container">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3>Shipping address</h3>
                            <router-link to="/my-account/edit-address/shipping" v-if="shippingAddress">Edit</router-link>
                            <router-link to="/my-account/edit-address/shipping" v-else>Add</router-link>
                        </div>
                        <div class="address">
                            <div v-if="shippingAddress">
                                <p>{{ shippingAddress.firstName + ' ' + shippingAddress.lastName }}</p>
                                <p>{{ shippingAddress.companyName }}</p>
                                <p>{{ shippingAddress.streetAddress }}</p>
                                <p>{{ shippingAddress.province }}</p>
                                <p>{{ shippingAddress.city }}</p>
                                <p>{{ shippingAddress.subdistrict }}</p>
                                <p>{{ shippingAddress.postcode }}</p>
                            </div>
                            <p v-else>You have not set up this type of address yet.</p>
                        </div>
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

.addresses {
    width: 100%;
}


.address-container {
    margin-bottom: 2rem;
}

.address-container h3 {
    font-size: 1rem;
    line-height: 100%;
    color: #333333;
    font-weight: 400;
}

.address-container a {
    text-decoration: none;
    color: #2ea3f2;
    font-size: 0.875rem;
    line-height: 170%;
}

.address,
.info {
    font-style: italic;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
}

.info {
    font-style: normal;
}

.address p {
    padding: 0;
    margin: 0;
}

@media (min-width: 768px) {
    .dashboard {
        padding: 1.5rem 3.5rem;
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

    .addresses {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
    }

    .address-container h3 {
        font-size: 1rem;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>
