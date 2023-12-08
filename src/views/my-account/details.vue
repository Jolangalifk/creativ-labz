<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import AccountSideNavigation from '../../components/AccountSideNavigation.vue'
import { ref } from 'vue'

const profile = ref({
    firstName: '',
    lastName: '',
    displayName: '',
    emailAddress: '',
})

const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmationPassword = ref(false)

const resetPasswordData = ref({
    currentPassword: '',
    newPassword: '',
    confirmationPassword: ''
})
</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section class="w-100">
                <form @submit.prevent="">
                    <div class="input-name w-100 mb-2">
                        <div class="w-100">
                            <label class="form-label">First name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="profile.firstName" required>
                        </div>
                        <div class="w-100">
                            <label class="form-label">Last name <span class=" text-danger">*</span></label>
                            <input type="text" class="form-control w-100" v-model="profile.lastName" required>
                        </div>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Display name <span class=" text-danger">*</span></label>
                        <input type="text" class="form-control w-100" v-model="profile.displayName" required>
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                    </div>
                    <div class="w-100 mb-2">
                        <label class="form-label">Email address <span class=" text-danger">*</span></label>
                        <input type="email" class="form-control w-100" v-model="profile.emailAddress" required>
                    </div>

                    <div class="w-100 mb-2 reset-password">
                        <p class="">Password change</p>
                        <div class="w-100 mb-2">
                            <label class="form-label">Current password (leave blank to leave unchanged)</label>
                            <div class="input-group">
                                <input :type="showCurrentPassword ? 'text' : 'password'" class="form-control w-100"
                                    v-model="resetPasswordData.currentPassword">
                                <span tabindex="0" class="input-group-icon"
                                    @click="showCurrentPassword = !showCurrentPassword">
                                    <img v-if="showCurrentPassword" src="@/assets/icons/eye-open-icon.svg" width="20"
                                        alt="Hide Password" />
                                    <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" width="20" />
                                </span>
                            </div>
                        </div>
                        <div class="w-100 mb-2">
                            <label class="form-label">New password (leave blank to leave unchanged)</label>
                            <div class="input-group">
                                <input :type="showNewPassword ? 'text' : 'password'" class="form-control w-100"
                                    v-model="resetPasswordData.newPassword">
                                <span tabindex="0" class="input-group-icon" @click="showNewPassword = !showNewPassword">
                                    <img v-if="showNewPassword" src="@/assets/icons/eye-open-icon.svg" width="20"
                                        alt="Hide Password" />
                                    <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" width="20" />
                                </span>
                            </div>
                        </div>
                        <div class="w-100 mb-2">
                            <label class="form-label">Confirm new password</label>
                            <div class="input-group">
                                <input :type="showConfirmationPassword ? 'text' : 'password'" class="form-control w-100"
                                    v-model="resetPasswordData.confirmationPassword">
                                <span tabindex="0" class="input-group-icon"
                                    @click="showConfirmationPassword = !showConfirmationPassword">
                                    <img v-if="showConfirmationPassword" src="@/assets/icons/eye-open-icon.svg" width="20"
                                        alt="Hide Password" />
                                    <img v-else src="@/assets/icons/eye-closed-icon.svg" alt="Show Password" width="20" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="btn rounded-5 mt-3" type="submit">Save changes</button>
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
    font-size: 1.375rem;
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

.form-control+p {
    font-style: italic;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
}

.input-name {
    gap: 3rem;
}

.form-label,
.highlight,
.reset-password>p {
    font-size: 0.875rem;
    line-height: 200%;
    color: #666666;
}

.reset-password>p {
    line-height: 100%;
    margin: 0;
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

.reset-password {
    margin-top: 1rem;
}

.reset-password>div {
    padding: 0.25rem;
}

.input-group {
    position: relative;
}

.input-group-icon {
    border: none;
    border-radius: 0;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 25%;
    z-index: 100;
    padding: 0 0.75rem;
    cursor: pointer;
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
        width: 40%;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>
