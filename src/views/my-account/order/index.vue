<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import AccountSideNavigation from "../../../components/AccountSideNavigation.vue"
import { ref } from 'vue';
import { toRupiah } from '../../../utils';

const orders = ref([
    {
        id: 1,
        date: 'Desember 13, 2023',
        status: 'Pending payment',
        total: 390000,
        totalItems: 2,
    },
    {
        id: 2,
        date: 'Desember 13, 2023',
        status: 'Pending payment',
        total: 30000,
        totalItems: 2,
    }
])
</script>
<template>
    <Navbar />
    <main>
        <div class="dashboard">
            <AccountSideNavigation class="navigation" />
            <section>
                <div v-if="orders.length" class="orders">
                    <table class="order-table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th width="35%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(order, index) in orders" :key="index">
                                <tr>
                                    <td>
                                        <span class="item-label">
                                            Order:
                                        </span>
                                        <router-link :to="'/my-account/view-order/' + order.id">
                                            #{{ order.id }}
                                        </router-link>
                                    </td>
                                    <td>
                                        <span class="item-label">
                                            Date:
                                        </span>
                                        {{ order.date }}
                                    </td>
                                    <td>
                                        <span class="item-label">
                                            Status:
                                        </span>
                                        {{ order.status }}
                                    </td>
                                    <td>
                                        <span class="item-label">
                                            Total:
                                        </span>
                                        {{ toRupiah(order.total) }} of {{ order.totalItems }} items
                                    </td>
                                    <td class="d-flex gap-2">
                                        <span class="item-label">
                                            Actions:
                                        </span>
                                        <!-- action based on order status -->
                                        <!-- pay view cancel -->
                                        <div class="button-container">
                                            <button class="button"> <router-link to="#">Pay</router-link>
                                                <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                                            </button>
                                            <button class="button"> <router-link
                                                    :to="'/my-account/view-order/' + order.id">View</router-link>
                                                <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                                            </button>
                                            <button class="button"> <router-link to="#">Cancel</router-link>
                                                <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div v-else class="empty-order d-flex justify-content-between">
                    No order has been made yet
                    <div class="d-flex justify-content-end">
                        <button class="d-flex align-items-center justify-content-between">
                            <router-link to="/shop">Browse products</router-link>
                            <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                        </button>
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
    width: 100%;
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

.dashboard span.highlight {
    font-weight: 700 !important;
    color: #666666;
}

.empty-order {
    background-color: #00c0ab;
    padding: 1rem;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 140%;
    color: white;
    margin: 0;
}

.empty-order button {
    padding: 0.35rem 0.75rem;
    width: fit-content;
    font-size: 0.875rem;
    line-height: 185%;
    font-weight: 500;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.empty-order button:hover {
    background-color: #00B0BA;
}

.empty-order .arrow-right {
    opacity: 0;
    width: 0;
    margin-left: -0.5rem;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.empty-order button:hover .arrow-right {
    opacity: 1;
    width: fit-content;
    margin-left: 0;
}

.empty-order a {
    text-decoration: none;
    color: white;
}


.orders {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.order-table {
    width: 100%;
    border-collapse: collapse;
}

.order-table * {
    font-size: 0.75rem;
    line-height: 150%;
    font-family: 'Open Sans';
}

.order-table tbody tr td a {
    text-decoration: none;
}

.order-table thead tr th {
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    color: #555555;
}

.order-table thead tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.order-table tbody {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}


.order-table tbody tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.order-table tbody tr td {
    padding: 0.5rem 0.5rem;
    color: #666666;
}

.order-table tbody tr td button a {
    text-decoration: none;
    color: white;
    font-size: 0.875rem;
}

.order-table tbody tr td .button {
    border: none;
    background-color: #00C0AB;
    color: #fff;
    padding: 0.35rem 0.2rem 0.35rem 1rem;
    width: fit-content;
    font-size: 1rem;
    line-height: 185%;
    font-weight: 500;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 40px;
    cursor: pointer;
    font-size: 0.875rem;
    height: 30px;
}

.order-table tbody tr td .button:hover {
    background-color: #00B0BA;
    border-radius: 0;
}


.order-table tbody tr td .button .arrow-right {
    opacity: 0;
    width: fit-content;
    padding: 0;
    margin: 0;
    height: 100%;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.order-table tbody tr td .button:hover .arrow-right {
    opacity: 1;
    margin-left: 0;
}

.order-table tbody .item-label {
    display: none;
}

.order-table tbody td .button-container {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

@media (max-width: 767px) {
    .order-table thead {
        display: none;
    }

    .order-table tbody tr {
        border-bottom: none;
    }

    .order-table tbody td {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .order-table tbody .item-label {
        display: inline;
        padding: 0rem 0.5rem;
        font-weight: 700;
        color: #555555;
    }

    .order-table tbody td .button-container {
        display: flex;
        gap: 0.25rem;
        flex-wrap: wrap;
        width: fit-content;
    }

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
}

@media (min-width: 1366px) {
    .dashboard {
        padding: 7rem;
    }
}
</style>