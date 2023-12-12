<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import BillingDetails from '../../components/BillingDetails.vue';
import Payment from '../../components/Payment.vue';

import { ref } from 'vue';

const showLoginDropdown = ref(false);

const toggleLoginDropdown = () => {
    showLoginDropdown.value = !showLoginDropdown.value;
};

const showCouponDropdown = ref(false);

const toggleCouponDropdown = () => {
    showCouponDropdown.value = !showCouponDropdown.value;
};

const shipToDifferentAddress = ref(false);


</script>

<template>
    <Navbar />
    <main>
        <h1>Checkout</h1>
        <div class="body">
            <div class="module">
                <div class="module-inner">
                    <p>Returning customer?<a href="#" @click="toggleLoginDropdown">Click here to login</a></p>
                </div>
                <form v-if="showLoginDropdown" class="dropdown-lc" :class="{ 'show': showLoginDropdown }">
                    <p>If you have shopped with us before, please enter your details below. If you are a new customer,
                        please proceed to the Billing section.</p>
                    <div class="name">
                        <div class="label">
                            <label for="email">Username or email <span>*</span></label>
                            <input type="text" id="email" />
                        </div>
                        <div class="label">
                            <label for="password">Password <span>*</span></label>
                            <input type="text" id="password" />
                        </div>
                    </div>
                    <div class="button">
                        <button>
                            <p>Login</p>
                        </button>
                        <div class="form-check-login">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <a href="#" class="text-decoration-none">Lost your password?</a>
                </form>
                <div class="module-inner">
                    <p>Have a coupon?<a href="#" @click="toggleCouponDropdown">Click here to enter your code</a></p>
                </div>
                <form v-if="showCouponDropdown" class="dropdown-lc" :class="{ 'show': showCouponDropdown }">
                    <p>If you have a coupon code, please apply it below.</p>
                    <div class="name">
                        <div class="name">
                            <div class="label">
                                <input type="text" id="coupon" placeholder="Coupon code" />
                            </div>
                            <div class="button">
                                <button>
                                    <p>Apply coupon</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <BillingDetails />
            <div class="form-check-addres">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    v-model="shipToDifferentAddress" />
                <label class="form-check-label" for="flexCheckDefault">
                    <h3>Ship to a different address?</h3>
                </label>
            </div>
            <div v-if="shipToDifferentAddress" class="dropdown-billing">
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
            </div>
            <form>
                <h3>Your order</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="light">SCREWBACCO MENTHOL FREEBASE 60ML - 3MG <span class="">× 1</span></th>
                            <td class="light-td">Rp240.000</td>
                        </tr>
                        <tr>
                            <th>Subtotal</th>
                            <td>Rp240.000</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>There are no shipping options available. Please ensure that your address has been entered
                                correctly, or contact us if you need any help.</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>Rp240.000</td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div class="info">
                <h3>Additional information</h3>
                <p>Order notes (optional)</p>
                <div class="notes">
                    <textarea id="note" rows="4" cols="5"
                        placeholder="Notes about your order, e.g. special noter for delivery."></textarea>
                </div>
            </div>
            <Payment />
        </div>
    </main>
    <Footer />
</template>

<style scoped>
main {
    padding: 8rem 10rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;
    font-family: 'Quattrocento', Georgia, "Times New Roman", serif;
}


h3 {
    font-size: 22px;
    color: #333;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 1rem;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2.5rem;
    background-color: #fff;
    border-radius: 1.5rem 1.5rem 0 0;
}

.module {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.module-inner {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #00c0ab;
    padding: 1rem;
    margin-bottom: 2.5rem;
}

.module-inner p {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

.module-inner a {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    margin-left: 0.3rem;
}

.dropdown-lc {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 0.3rem;
    margin-bottom: 2.5rem;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.dropdown-lc.show {
    max-height: 500px; /* Sesuaikan dengan tinggi maksimum dropdown */
    opacity: 1;
}

.dropdown-lc .button {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.dropdown-lc .button button {
    background-color: #00c0ab;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
}

.dropdown-lc .button button p {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
}

.dropdown-lc .button .form-check-login input {
    margin-right: 0.5rem;
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
    color: #333;
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

.form-check-label {
    color: #333;
    line-height: 2em;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
}

.form-check-addres {
    width: 100%;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
}

.form-check-addres input {
    margin-right: 0.5rem;
}

.form-check-addres label {
    color: #333;
    line-height: 1em;
    font-size: 22px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
}

.dropdown-billing {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0.3rem;
    margin-bottom: 2.5rem;
    transition: all 0.3s ease-in-out;
}

.dropdown-billing .label-full {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
}

.dropdown-billing .label-full .input-container{
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

.dropdown-billing .label-full input {
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

form {
    width: 100%;
}

.table {
    width: 100%;
    margin-bottom: 2rem;
    color: #333;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #dee2e6;
}

.table thead th {
    vertical-align: middle;
    border-bottom: 2px solid #dee2e6;
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
    color: #666;
    font-size: 14px;
}

.table th {
    vertical-align: middle;
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
    color: #666;
    font-size: 14px;
}

.table th.light {
    font-weight: 400;
}

.table th span {
    vertical-align: middle;
    color: #666;
    font-weight: 700;
}

.table td {
    padding: 0.5rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
    color: #666;
    font-size: 14px;
}

.table td.light-td {
    font-weight: 400;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
}

.info p {
    color: #666;
    line-height: 2em;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
}

.info .notes {
    width: 100%;
}

.info .notes textarea {
    width: 100%;
    background-color: #eee;
    border-width: 0;
    border-radius: 0;
    color: #999;
    font-size: 14px;
    padding: 16px;
    line-height: 1.7em;
    border-style: solid;
    outline: none;
}

@media (max-width: 980px) {
    main {
        padding: 3rem 6rem;
    }

    .body {
        padding: 2rem 1.5rem;
    }

    .module-inner {
        margin-bottom: 1.5rem;
    }
}

@media (max-width: 768px) {
    main {
        padding: 3rem 4rem;
    }

    .body {
        padding: 2rem 1rem;
    }

    .module-inner {
        margin-bottom: 1rem;
    }

    .name {
        flex-direction: column;
        gap: 1rem;
    }

    h3 {
        font-size: 17px;
    }
}
</style>