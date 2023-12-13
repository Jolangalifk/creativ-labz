<template>
    <div class="billing">
        <h3>Billing details</h3>
        <div class="name">
            <div class="label">
                <label for="first-name">First name <span>*</span></label>
                <input type="text" id="first-name" />
            </div>
            <div class="label">
                <label for="last-name">Last name <span>*</span></label>
                <input type="text" id="last-name" />
            </div>
        </div>
        <div class="label-full">
            <label for="company-name">Company name (optional)</label>
            <input type="text" id="company-name" />
        </div>
        <div class="label-full">
            <label for="company-country">Country / Region <span>*</span></label>
            <p>Indonesia</p>
        </div>
        <div class="label-full" @click="toggleProvinceDropdown">
            <label for="province">Province <span>*</span></label>
            <div class="input-container">
                <input type="text" id="province-name" v-model="selectedProvince" readonly />
                <img :src="showProvinceDropdown ? '/src/assets/icons/arrow-up.svg' : '/src/assets/icons/arrow-down.svg'"
                    alt="Toggle Arrow" class="dropdown-icon" />
            </div>
            <div v-if="showProvinceDropdown" class="dropdown-content">
                <ul>
                    <li v-for="province in provinces" :key="province.id" @click="selectProvince(province)">
                        {{ province.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="label-full" @click="toggleCityDropdown">
            <label for="city">Town / City <span>*</span></label>
            <div class="input-container">
                <input type="text" id="city" v-model="selectedCity" readonly />
                <img :src="showCityDropdown ? '/src/assets/icons/arrow-up.svg' : '/src/assets/icons/arrow-down.svg'"
                    alt="Toggle Arrow" class="dropdown-icon" />
            </div>
            <div v-if="showCityDropdown" class="dropdown-content">
                <ul>
                    <li v-for="city in cities" :key="city.id" @click="selectCity(city)">
                        {{ city.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="label-full">
            <label for="subdistrict">Subdistrict (optional)</label>
            <input type="text" id="subdistrict" placeholder="Subdistrict" />
        </div>
        <div class="label-full">
            <label for="street-address">Street address <span>*</span></label>
            <input type="text" id="street-address" placeholder="House number and street name" />
        </div>
        <div class="label-full">
            <label for="postcode">Postcode / ZIP <span>*</span></label>
            <input type="text" id="postcode" />
        </div>
        <div class="label-full">
            <label for="phone">Phone <span>*</span></label>
            <input type="text" id="phone" />
        </div>
        <div class="label-full">
            <label for="email">Email address <span>*</span></label>
            <input type="text" id="email" />
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="shipToDifferentAccount">
            <label class="form-check-label" for="flexCheckDefault">
                Create an account?
            </label>
        </div>
        <div v-if="shipToDifferentAccount" class="label-full">
            <div class="input-group">
                <label for="password">Create account password <span>*</span></label>
                <input v-model="loginData.password" :type="showLoginPassword ? 'text' : 'password'"
                    class="form-control border-0 rounded-0" id="exampleInputPassword1" placeholder="Password" />
                <div class="input-group-append">
                    <span class="input-group-text" @click="showLoginPassword = !showLoginPassword">
                        <img v-if="showLoginPassword" src="@/assets/icons/eye-open-icon.svg" alt="Hide Password" />
                        <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showProvinceDropdown = ref('false');
const selectedProvince = ref('DKI Jakarta');
const provinces = ref([
    { id: 1, name: 'DKI Jakarta' },
    { id: 2, name: 'Bandung' },
    { id: 3, name: 'Semarang' },
    { id: 4, name: 'Surabaya' },
    { id: 5, name: 'Bali' },
]);

const toggleProvinceDropdown = () => {
    showProvinceDropdown.value = !showProvinceDropdown.value;
    showCityDropdown.value = false;
};

const selectProvince = (province) => {
    selectedProvince.value = province.name;
    showProvinceDropdown.value = false;
};

const showCityDropdown = ref(false);
const selectedCity = ref('Jakarta Selatan');
const cities = ref([
    { id: 1, name: 'Jakarta Pusat' },
    { id: 2, name: 'Jakarta Barat' },
    { id: 3, name: 'Jakarta Selatan' },
    { id: 4, name: 'Jakarta Timur' },
    { id: 5, name: 'Jakarta Utara' },
]);

const toggleCityDropdown = () => {
    showCityDropdown.value = !showCityDropdown.value;
    showProvinceDropdown.value = false;
};

const selectCity = (city) => {
    selectedCity.value = city.name;
    showCityDropdown.value = false;
};

const shipToDifferentAccount = ref(false);
const showLoginPassword = ref(false);
const loginData = ref({
    usernameOrEmail: '',
    password: ''
})

onMounted(() => {
    document.getElementById('province-name').value = selectedProvince.value;
    document.getElementById('city').value = selectedCity.value;
});
</script>

<style scoped>
.form-control {
    width: calc(100% - 5rem);
    font-size: 1rem;
    background-color: #eeeeee;
}

.input-group {
    position: relative;
}

.input-group-append {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
}

.input-group-text {
    border: none;
    border-radius: 0;
    background-color: transparent;
}

.input-group-text img {
    width: 1.2rem;
    height: 1.2rem;
}

.dropdown-content {
    position: relative;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #eee;
}

.dropdown-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-content ul li {
    padding: 0.5rem;
    cursor: pointer;
}

.dropdown-content ul li:hover {
    background-color: #0693e3;
    color: #fff;
}

h3 {
    font-size: 22px;
    color: #333;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 1rem;
}

.name {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;
    gap: 3rem;
}

.name .label {
    display: flex;
    flex-direction: column;
    width: 100%;
}

label {
    color: #666;
    line-height: 2em;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
}

span {
    color: #ff0000;
}

.name .label input {
    background-color: #eee;
    max-width: 100%;
    border-width: 0;
    border-radius: 0;
    color: #000000;
    font-size: 14px;
    padding: 16px;
    line-height: 1.7em;
    border-style: solid;
    outline: none;
}

.billing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.billing .label-full {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    animation: growDown 300ms ease-in-out forwards
}

@keyframes growDown {
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
}

.billing .label-full .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #eee;
    border-width: 0;
    border-radius: 0;
    color: #666;
    font-size: 14px;
    padding-right: 1rem;
    line-height: 1.7em;
    border-style: solid;
    outline: none;
    cursor: pointer;
}

.billing .label-full input {
    background-color: #eee;
    max-width: 100%;
    border-width: 0;
    border-radius: 0;
    color: #666;
    font-size: 14px;
    padding: 16px;
    line-height: 1.7em;
    border-style: solid;
    outline: none;
    cursor: pointer;
}

.billing .label-full p {
    color: #666;
    line-height: 1.7em;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.form-check {
    margin-bottom: 1rem;
}

@media (max-width: 767px) {
    .name {
        flex-direction: column;
        gap: 0;
    }

    .name .label {
        width: 100%;
    }

    .name .label input {
        margin-bottom: 0.5rem;
    }
}
</style>