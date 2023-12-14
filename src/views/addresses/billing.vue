<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountSideNavigation from '../../components/AccountSideNavigation.vue'
import { ref, watch, computed } from 'vue'
import 'vue-select/dist/vue-select.css';

const billingAddress = ref({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    province: '',
    city: '',
    subdistrict: '',
    streetAddress: '',
    postcode: '',
    emailAddress: '',
    phoneNumber: ''
})

const provinces = [
    {
        code: 1,
        name: 'Jawa Barat'
    },
    {
        code: 2,
        name: 'DKI Jakarta'
    }
]

const cities = [
    {
        code: 1,
        name: 'Bandung'
    }, {
        code: 2,
        name: 'Jakarta Tengah'
    }
]

const subdistricts = [
    {
        code: 1,
        name: 'Bandung Selatan'
    },
    {
        code: 2,
        name: 'Jakarta Tengah Utara'
    }
]


const selectedLocation = ref({
    province: null,
    city: null,
    subdistrict: null
})


const computedSelectedLocation = computed(() => {
    return Object.assign({}, selectedLocation.value)
})

watch(computedSelectedLocation, (newValue, oldValue) => {
    if (newValue.province !== oldValue.province) {
        selectedLocation.value.city = null;
    }

    if (newValue.city !== oldValue.city) {
        selectedLocation.value.subdistrict = null;
    }

});
</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section class="w-100">
                <form @submit.prevent="">
                    <h2>Billing Address</h2>
                    <div class="input-name w-100 mb-2">
                        <div class="w-100 mb-2 lg-mb-0">
                            <label class="form-label">First name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="billingAddress.firstName" required>
                        </div>
                        <div class="w-100">
                            <label class="form-label">Last name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="billingAddress.lastName" required>
                        </div>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Company name (optional)</label>
                        <input type="text" class="form-control w-100" v-model="billingAddress.companyName">
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Country / Region <span class=" text-danger">*</span></label>
                        <p class="highlight">Indonesia</p>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Province <span class=" text-danger">*</span></label>
                        <v-select label="name" :options="provinces" v-model="selectedLocation.province" :clearable="false">
                            <template #no-options="{}">
                                Province not found
                            </template>
                            <template #open-indicator="{ attributes }">
                                <span v-bind="attributes"><img src="/src/assets/icons/arrow-down.svg"></span>
                            </template>
                        </v-select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Town / City <span class=" text-danger">*</span></label>
                        <v-select label="name" :options="cities" v-model="selectedLocation.city"
                            :disabled="!selectedLocation.province" :clearable="false">
                            <template #no-options="{}">
                                City not found
                            </template>
                            <template #open-indicator="{ attributes }">
                                <span v-bind="attributes"><img src="/src/assets/icons/arrow-down.svg"></span>
                            </template>
                        </v-select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Subdistrict (optional)</label>
                        <v-select label="name" :options="subdistricts" v-model="selectedLocation.subdistrict"
                            :disabled="!selectedLocation.city" :clearable="false">
                            <template #no-options="{}">
                                Subdistrict not found
                            </template>
                            <template #open-indicator="{ attributes }">
                                <span v-bind="attributes"><img src="/src/assets/icons/arrow-down.svg"></span>
                            </template>
                        </v-select>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Street address <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="billingAddress.streetAddress" required>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Postcode / ZIP <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="billingAddress.postcode" required>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Phone <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="billingAddress.phoneNumber" required>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Email address <span class=" text-danger">*</span></label>
                        <input type="email" class="form-control w-100" v-model="billingAddress.emailAddress" required>
                    </div>
                    <button class="btn rounded-5 mt-3" type="submit">Save address</button>
                </form>
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
