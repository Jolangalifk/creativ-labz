<script setup>
import Navbar from '../../../../components/Navbar.vue';
import Footer from '../../../../components/Footer.vue';
import AccountSideNavigation from "../../../../components/AccountSideNavigation.vue"
import { ref } from 'vue';
import { toRupiah } from '../../../../utils';
const order = ref({
    id: '1',
    date: 'December, 13 2023',
    status: 'Pending payment',
    totalItems: 2,
    products: [
        {
            name: 'PB & JAM MONSTER STRAWBERRY 60ML - 3MG ',
            quantity: 1,
            slug: 'slug',
            NIC: '3MG',
            total: 190000
        },
        {
            name: 'PB & JAM MONSTER BANANA 60ML - 3MG × 1',
            quantity: 1,
            slug: 'slug',
            NIC: '3MG',
            total: 190000
        }
    ],
    subTotal: 380000,
    shipping: {
        fee: 10000,
        courier: 'JNE - CTC (1-2 days)'
    },
    paymentMethod: 'Online Payment',
    total: 390000,
    paymentPageUrl: 'https://app.midtrans.com/snap/v3/redirection/6774ab03-dd0e-49f2-a700-c832f8917f8d'
})

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

const shippingAddress = ref({
    firstName: 'Slamet',
    lastName: 'Kopling',
    companyName: 'Kopling Corporation',
    country: 'Indonesia',
    province: 'Jawa Tengah',
    city: 'Semarang',
    subdistrict: 'Semarang Tengah',
    streetAddress: 'Jl. jalan-jalan',
    postcode: '0000',
})
</script>
<template>
    <Navbar />
    <div class="dashboard">
        <AccountSideNavigation class="navigation" />
        <section>

            <p class="p-0 m-0 info">Order <span class="highlight">#{{ order.id }}</span> was placed on <span
                    class="highlight">{{ order.date
                    }}</span>
                and is currently <span class="highlight">{{ order.status }}</span></p>
            <h2>Order details</h2>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(product, index) in order.products" :key="index">
                            <tr class="product">
                                <td class="product-data">

                                    <p>
                                        <router-link :to="product.slug">
                                            {{ product.name }}
                                        </router-link>
                                        <span class="highlight">x {{ product.quantity }}</span>
                                    </p>
                                    <p><span class="highlight">NIC:</span> {{ product.NIC }}</p>
                                </td>
                                <td class="price">
                                    {{ toRupiah(product.total) }}
                                </td>
                            </tr>
                        </template>
                        <tr>
                            <td>
                                <span class="highlight">
                                    Subtotal:
                                </span>
                            </td>
                            <td>
                                <span class="highlight">{{ toRupiah(order.subTotal) }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight">Shipping:</span>
                            </td>
                            <td>
                                <p>
                                    <span class="highlight">{{ toRupiah(order.shipping.fee) }}</span>
                                    via {{ order.shipping.courier }}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight">Payment method:</span>
                            </td>
                            <td>
                                <span class="highlight">{{ order.paymentMethod }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight">Total: </span>
                            </td>
                            <td>
                                <span class="highlight">{{ toRupiah(order.total) }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="addresses">
                <div class="address">
                    <h2>Billing Address</h2>
                    <div class="address-data">
                        <p>{{ billingAddress.firstName }} {{ shippingAddress.lastName }}</p>
                        <p>{{ billingAddress.companyName }}</p>
                        <p>{{ billingAddress.streetAddress }}</p>
                        <p>{{ billingAddress.subdistrict }}</p>
                        <p>{{ billingAddress.city }}</p>
                        <p>{{ billingAddress.province }}</p>
                        <p>{{ billingAddress.postcode }}</p>
                        <p>{{ billingAddress.phoneNumber }}</p>
                        <p class="email">{{ billingAddress.emailAddress }}</p>
                    </div>
                </div>
                <div class="address">
                    <h2>Shipping Address</h2>
                    <div class="address-data">
                        <p>{{ shippingAddress.firstName }} {{ shippingAddress.lastName }}</p>
                        <p>{{ shippingAddress.companyName }}</p>
                        <p>{{ shippingAddress.streetAddress }}</p>
                        <p>{{ shippingAddress.subdistrict }}</p>
                        <p>{{ shippingAddress.city }}</p>
                        <p>{{ shippingAddress.province }}</p>
                        <p>{{ shippingAddress.postcode }}</p>
                    </div>
                </div>
            </div>

            <div class="payment-info">
                <h2>Payment Info</h2>
                <div>
                    <span class="highlight">Payment Page</span>
                    <router-link :to="order.paymentPageUrl">{{ order.paymentPageUrl }}</router-link>
                </div>

            </div>
        </section>
    </div>
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
    width: 100%;
}


.dashboard a {
    color: #2ea3f2;
}

.table-container {
    margin-top: 1rem;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.table-container table,
.info,
.payment-info>div {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
}

table * a {
    text-decoration: none;
}


table thead tr th {
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 170%;
    color: #555555;
}

table thead tr,
table tbody tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

table tr td,
table tr th {
    padding: 0.5rem 0.75rem;
}

table tbody tr td .highlight,
.highlight {
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
}

table tbody .product .price {
    font-family: 'Open Sans';
    font-weight: 500;
}

table tbody tr td p {
    padding: 0;
    margin: 0;
}

.addresses {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

h2 {
    font-size: 1.25rem;
    line-height: 100%;
    color: #333333;
    font-weight: 400;
}

.address-data {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 170%;
    color: #666666;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
}

.address-data p {
    margin: 0;
}

.address-data p.email {
    word-break: break-all;
}

.payment-info {
    margin-top: 2rem;
}

.payment-info>div {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.payment-info>div a {
    color: #2ea3f2;
    text-decoration: none;
    word-break: break-all;
}

@media (min-width: 768px) {
    .dashboard {
        padding: 1.5rem 3.5rem;
    }

    .empty-order {
        display: block;
        gap: 0;
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

    .empty-order {
        font-size: 1.125rem;
    }

    .empty-order button {
        font-size: 1rem;
    }

    .addresses {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    h2 {
        font-size: 1.625rem;
    }
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>