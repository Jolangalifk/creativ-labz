<template>
    <Navbar />
    <main>
        <div class="wrapper d-flex">
            <div id="login">
                <form>
                    <h2>Login</h2>
                    <div class="form-login p-4">
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1" class="mb-1">Username or email address <span
                                    class="text-danger">*</span></label>
                            <input type="email" class="form-control border-0 rounded-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1" class="mb-1">Password <span
                                    class="text-danger">*</span></label>
                            <div class="input-group">
                                <input v-model="password" :type="showPassword ? 'text' : 'password'"
                                    class="form-control border-0 rounded-0" id="exampleInputPassword1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" @click="togglePasswordVisibility">
                                        <img v-if="showPassword" src="@/assets/icons/eye-open-icon.svg"
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
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputPassword1" class="mb-1">Password <span
                                    class="text-danger">*</span></label>
                            <div class="input-group">
                                <input v-model="password" :type="showPassword ? 'text' : 'password'"
                                    class="form-control border-0 rounded-0" id="exampleInputPassword1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" @click="togglePasswordVisibility">
                                        <img v-if="showPassword" src="@/assets/icons/eye-open-icon.svg"
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
    </main>
    <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import { ref } from 'vue';

const password = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>

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
    font-family: Open Sans, Arial, sans-serif;
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
    font-family: Open Sans, Arial, sans-serif;
}

@media (min-width: 768px) {
    .wrapper {
        padding: 10rem 4rem;
    }

    h2 {
        font-size: 1.4rem;
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
}
</style>