<script setup>
import { ref } from 'vue';

const radioGroupName = 'flexRadioDefault';
const selectedOption = ref('');

const paymentOptions = [
    { label: 'Transfer Payment - BCA', value: 'transfer_bca' },
    { label: 'Online Payment', value: 'online_payment' },
    { label: 'GoPay', value: 'gopay' },
];
</script>

<template>
    <div class="payment">
        <div v-for="(option, index) in paymentOptions" :key="index">
            <div class="form-check">
                <input class="form-check-input" type="radio" :name="radioGroupName" :id="'flexRadioDefault' + index"
                    :value="option.value" v-model="selectedOption" />
                <label class="form-check-label" :for="'flexRadioDefault' + index">
                    {{ option.label }} 
                    <div v-if="option.value === 'online_payment'" class="payment-image">
                        <img src="@/assets/images/payment/midtrans.png" alt="">
                    </div>
                    <div v-if="option.value === 'gopay'" class="payment-image">
                        <img src="@/assets/images/payment/gopay.png" alt="">
                    </div>
                </label>
            </div>
            <div v-if="selectedOption === 'transfer_bca' && selectedOption === option.value" class="list-payment">
                <p>Pembayaran melalui Bank Transfer di lakukan pengecekan secara manual, jadi memerlukan waktu lebih
                    lama dari online payment, di harapkan melampirkan bukti transfer ke wa kami, terimakasih.</p>
            </div>
            <div v-if="selectedOption === 'online_payment' && selectedOption === option.value" class="list-payment">
                <p>Pembayaran Otomatis tanpa harus konfirmasi bukti pembayaran. Tersedia berbagai metode pembayaran
                    yang didukung. Pilih pembayaran yang anda inginkan di halaman berikutnya.</p>
            </div>
            <div v-if="selectedOption === 'gopay' && selectedOption === option.value" class="list-payment">
                <div></div>
            </div>
        </div>
        <div class="container-order">
            <div class="form-check mt-4 mb-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="shipToSave">
                <label class="form-check-label" for="flexCheckDefault">
                    I would like to receive exclusive emails with discounts and product information
                </label>
            </div>
            <p>Your personal data will be used to process your order, support your experience throughout this
                website, and for other purposes described in our <a href="#" class="text-decoration-none">privacy
                    policy</a>.</p>
            <div class="button-order">
                <button>
                    <p>Place order</p>
                    <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
    background-color: #eee;
    padding: 1rem;
}

.payment .form-check input {
    margin-right: 1rem;
}

.payment .form-check label {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 14px;
    color: #666;
}

.payment .payment-image {
    display: flex;
    align-items: center;
}

.payment .payment-image img {
    width: 30%;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #ccc;
}

.payment .list-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 1em;
    margin: 1em 0;
    font-size: .92em;
    border-radius: 2px;
    line-height: 1.5;
    background-color: #dcd7e3;
    color: #515151;
}

.payment .list-payment p {
    margin: 0;
    font-size: 14px;
    color: #515151;
}

.container-order p {
    color: #666;
    line-height: 2em;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    margin-bottom: 1rem;
}

.container-order .button-order {
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: 1rem;
}

.button-order button {
    background-color: #00c0ab;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3em 1em 0.3em 1em;
}

.button-order button:hover {
    background-color: #00B0BA;
    border-radius: 0;
}

.button-order button:hover .arrow-right {
    opacity: 1;
    width: fit-content;
    transition: all 500ms ease;
}

.button-order .arrow-right {
    opacity: 0;
    width: 0;
    transition: all 500ms ease;
}

.button-order button p {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .button-order button {
        width: 100%;
    }
}
</style>