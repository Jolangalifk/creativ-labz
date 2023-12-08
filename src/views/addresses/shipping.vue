<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountSideNavigation from '../../components/AccountSideNavigation.vue'
import { ref } from 'vue'

const shippingAddress = ref({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    province: '',
    city: '',
    subdistrict: '',
    streetAddress: '',
    postcode: '',
})

</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section class="w-100">
                <form @submit.prevent="">
                    <h2>Shipping Address</h2>
                    <div class="input-name w-100 mb-2">
                        <div class="w-100">
                            <label class="form-label">First name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="shippingAddress.firstName" required>
                        </div>
                        <div class="w-100">
                            <label class="form-label">Last name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="shippingAddress.lastName" required>
                        </div>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Company name (optional)</label>
                        <input type="text" class="form-control w-100" v-model="shippingAddress.companyName">
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Country / Region <span class=" text-danger">*</span></label>
                        <p class="highlight">Indonesia</p>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Province <span class=" text-danger">*</span></label>
                        <select class="form-select border rounded-1" v-model="shippingAddress.province" required>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Town / City <span class=" text-danger">*</span></label>
                        <select class="form-select border rounded-1" v-model="shippingAddress.city" required>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Subdistrict (optional)</label>
                        <select class="form-select border rounded-1" v-model="shippingAddress.subdistrict">
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Street address <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="shippingAddress.streetAddress" required>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Postcode / ZIP <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="shippingAddress.postcode" required>
                    </div>
                    <button class="btn rounded-5 mt-3" type="submit">Save address</button>
                </form>
            </section>
        </div>
    </main>
    <Footer />
</template>
<style>
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

form h2 {
    font-size: 1rem;
    line-height: 100%;
    color: #333333;
    font-weight: 400;
}

.form-select:focus,
.form-control {
    outline: none !important;
    box-shadow: none !important;
    border: none;
    border-radius: 0;
}

.form-control {
    background-color: #eeeeee !important;
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 0.875rem;
    line-height: 170%;
    color: #3e3e3e;
}

.input-name {
    gap: 3rem;
}

.form-label,
.highlight {
    font-size: 0.875rem;
    line-height: 200%;
    color: #666666;
}

.highlight {
    font-weight: 700;
    padding: 0;
    margin: 0;
}

.form-select {
    font-size: 0.875rem;
    color: #444444;
    line-height: 100%;
    padding: 0.5rem;
}

form .btn,
form .btn:active,
form .btn:hover {
    background-color: #00c0ab;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1.15rem;

}


@media (min-width: 768px) {
    .dashboard {
        padding: 1.5rem 3.5rem;
    }

    .input-name {
        display: flex;
    }
}

@media (min-width: 1024px) {
    .dashboard {
        display: flex;
        padding: 5.6rem;
    }

    .dashboard .navigation {
        width: 47%;
    }

    form h2 {
        font-size: 1.375rem;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>
