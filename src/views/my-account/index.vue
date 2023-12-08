<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import AccountSideNavigation from "../../components/AccountSideNavigation.vue"

import { ref } from 'vue';

const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);

const loginData = ref({
    usernameOrEmail: '',
    password: ''
})

const registerData = ref({
    usernameOrEmail: '',
    password: ''
})


const user = ref({
    username: 'slametkopling'
})
</script>
<template>
    <Navbar />
    <main>
        <div class="wrapper d-flex" v-if="!user">
            <div id="login">
                <form>
                    <h2>Login</h2>
                    <div class="form-login p-4">
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1" class="mb-1">Username or email address <span
                                    class="text-danger">*</span></label>
                            <input type="email" class="form-control border-0 rounded-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" v-model="loginData.usernameOrEmail">
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1" class="mb-1">Password <span
                                    class="text-danger">*</span></label>
                            <div class="input-group">
                                <input v-model="loginData.password" :type="showLoginPassword ? 'text' : 'password'"
                                    class="form-control border-0 rounded-0" id="exampleInputPassword1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" @click="showLoginPassword = !showLoginPassword">
                                        <img v-if="showLoginPassword" src="@/assets/icons/eye-open-icon.svg"
                                            alt="Hide Password" />
                                        <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column-reverse flex-md-row gap-3 mb-3">
                            <button type="submit" class="btn rounded-5">Log in</button>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe">
                                <label class="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                        </div>
                        <router-link to="/" class="text-decoration-none forgot-password-link">Lost your
                            password?</router-link>
                    </div>
                </form>
            </div>
            <div id="register">
                <form>
                    <h2>Register</h2>
                    <div class="form-login p-4">
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1" class="mb-1">Username or email address <span
                                    class="text-danger">*</span></label>
                            <input type="email" class="form-control border-0 rounded-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" v-model="registerData.usernameOrEmail">
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1" class="mb-1">Password <span
                                    class="text-danger">*</span></label>
                            <div class="input-group">
                                <input v-model="registerData.password" :type="showRegisterPassword ? 'text' : 'password'"
                                    class="form-control border-0 rounded-0" id="exampleInputPassword1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" @click="showRegisterPassword = !showRegisterPassword">
                                        <img v-if="showRegisterPassword" src="@/assets/icons/eye-open-icon.svg"
                                            alt="Hide Password" />
                                        <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p class="text-decoration-none">Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and for other purposes described in
                            our router <span class="text-primary">privacy policy.</span></p>
                        <button type="submit" class="btn-register rounded-5">Register</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-else class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section>
                <p>Hello <span class="highlight">{{ user.username }}</span> (not <span class="highlight">{{ user.username
                }}</span>? <button>Log
                        out</button>)
                </p>
                <p>From you account dashboard you can view <router-link to="/">recent orders</router-link>, manage your
                    <router-link to="/">shipping and billing addresses</router-link>, and <router-link to="/">edit your
                        password
                        and account details</router-link>
                </p>
            </section>
        </div>
    </main>
    <Footer />
</template>
<style scoped>
.wrapper {
    padding: 10rem;
    gap: 3rem;
}

#login {
    width: 50%;
}

h2 {
    margin-bottom: 2rem;
    font-family: Open Sans, Arial, sans-serif;
    color: #333333;
    font-weight: 500;
}

label {
    font-family: Open Sans, Arial, sans-serif;
}

input {
    font-family: Open Sans, Arial, sans-serif;
}

p,
label[for="rememberMe"],
.forgot-password-link {
    font-size: 0.875rem;
    font-family: Open Sans, Arial, sans-serif;
    color: #666666;
}

.forgot-password-link {
    color: #2ea3f2;
}

a {
    font-family: Open Sans, Arial, sans-serif;
    text-decoration: none;
}

.form-login {
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid #eeeeee;
}

.form-control {
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    background-color: #eeeeee;
}

.input-group-append {
    cursor: pointer;
    position: relative;
}

.input-group-text {
    border: none;
    border-radius: 0;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 25%;
    z-index: 100;
}

.input-group-text img {
    width: 1.2rem;
    height: 1.2rem;
}

.btn {
    width: fit-content;
    height: 100%;
    padding: 0.5rem 1rem;
    background-color: #00c0ab;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'Open Sans', Arial, sans-serif;
}

#register {
    width: 50%;
}

.btn-register {
    width: fit-content;
    height: 100%;
    padding: 0.5rem 1rem;
    background-color: #00c0ab;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    border: none;
    font-family: 'Open Sans', Arial, sans-serif;
}

.dashboard {
    width: 100%;
    margin-top: 3rem;
    padding: 1rem;
}

.dashboard section {
    padding: 0 1rem 3rem 1rem;
}

.dashboard a {
    color: #2ea3f2;
}

.dashboard * {
    font-size: 0.875rem;
    line-height: 170%;
    font-family: 'Open Sans', Arial, sans-serif;
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

@media (min-width: 768px) {
    .wrapper {
        padding: 10rem 4rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    .dashboard {
        padding: 1.5rem 3.5rem;
    }
}


@media (max-width: 768px) {
    h2 {
        font-size: 1.2rem;
    }

    .wrapper {
        flex-direction: column;
        padding: 2rem;
        padding-top: 10rem;
    }

    #login {
        width: 100%;
    }

    #register {
        width: 100%;
    }
}

@media (min-width: 1024px) {
    h2 {
        font-size: 1.6rem;
    }

    .wrapper {
        padding: 10rem 8rem;
    }

    .dashboard {
        display: flex;
        padding: 5.6rem;
    }

    .dashboard .navigation {
        width: 40%;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>