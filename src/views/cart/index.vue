<script setup>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { ref, computed } from 'vue';
import { toRupiah } from '../../utils';

const cartItems = ref([
    {
        productId: 1,
        name: 'SCREWBACCO MENTHOL FREEBASE 60ML',
        NIC: '3MG',
        price: 240000,
        quantity: 1
    },
    {
        productId: 2,
        name: 'CASSADAGA CANNOLI BE NUTS 60ML',
        NIC: '3MG',
        price: 180000,
        quantity: 1
    }

])

const cartTotalPrice = computed(() => {
    if (!cartItems.value) return 0

    return cartItems.value.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0)
})
</script>

<template>
    <Navbar />
    <main id="cart">
        <h1>Cart</h1>
        <div class="cart-detail">
            <div class="wrapper-tabel">
                <div>
                    <table class="table">
                        <thead class="w-100">
                            <tr class="w-100" width="100%">
                                <th scope="col" width="10%"></th>
                                <th scope="col" width="10%"></th>
                                <th scope="col" width="35%">
                                    Product
                                </th>
                                <th scope="col" width="15%">
                                    Price
                                </th>
                                <th scope="col" width="15%">
                                    Quantity
                                </th>
                                <th scope="col" width="15%">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="item in cartItems" :key="item.id">
                                <tr class="table-row">
                                    <th scope="row" class="delete"><button><img
                                                src="@/assets/images/cart/close-icon-red.svg" alt=""></button>
                                    </th>
                                    <td class="image"><img
                                            src="@/assets/images/news-and-events/WhatsApp-Image-2022-03-14-at-11.24.12-819x1024.webp"
                                            alt=""></td>
                                    <td class="name"><span class="item-label">Product: </span><a href="">SCREWBACCO MENTHOL
                                            FREEBASE 60ML
                                            -
                                            3MG</a></td>
                                    <td class="price"><span class="item-label">Price: </span>{{ toRupiah(item.price) }}</td>
                                    <td>
                                        <div class="quantity">
                                            <span class="item-label">Quantity</span>
                                            <input type="number" id="quantity" name="quantity" min="0" max="2" value="1"
                                                title="Qty">
                                        </div>
                                    </td>
                                    <td class="subtotal"><span class="item-label">Subtotal:</span>{{ toRupiah(item.price) }}
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                    <div class="edit-cart">
                        <div class="coupon">
                            <input type="text" placeholder="Coupon code">
                            <button>Apply coupon
                                <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                            </button>
                        </div>
                        <div class="update-cart">
                            <button>Update cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total-wrapper">
                <h2>Cart totals</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>{{ toRupiah(cartTotalPrice) }}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>No shipping options were found for <span>DKI Jakarta</span>.
                                <router-link to="/my-account/edit-address/shipping">Enter a different address</router-link>
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td><span>{{ toRupiah(cartTotalPrice) }}</span></td>
                        </tr>
                    </tbody>
                </table>
                <router-link to="/checkout"><button>Proceed to checkout
                    <img src="@/assets/icons/arrow-right.svg" class="arrow-right">
                </button></router-link>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
main {
    min-height: 100vh;
    background-image: url('/src/assets/images/cart/abstract-space-wallpaper-background-dark-smoke-design-scaled.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1rem;
}

main h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 2rem;
    font-family: 'Quattrocento', Georgia, "Times New Roman", serif;
}

.cart-detail {
    background-color: #fff;
    padding: 4rem 1rem;
    border-radius: 1rem;
}

.cart-detail .table {
    margin-bottom: 0;
    border: 1px solid #ddd;
}

.cart-detail .table thead th {
    height: 50px;
    background-color: #00C0AB;
    vertical-align: middle;
}

.cart-detail .table thead th {
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    color: #fff;
    margin: 0;
    display: flex;
    align-items: center;
}

.cart-detail .table tbody tr {
    background-color: #C9F2ED;
}

.cart-detail .table tbody tr th {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C9F2ED;
    height: 75px;
}

.cart-detail .table tbody tr th button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.cart-detail .table tbody tr td {
    border: none;
    font-weight: 500;
    font-size: 14px;
    color: #666;
    background-color: #C9F2ED;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    vertical-align: middle;
}

.cart-detail .table tbody tr td a {
    color: #2ea3f2;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
}

.cart-detail .table tbody tr td img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
}

.cart-detail .table tbody tr td .quantity {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart-detail .table tbody tr td .quantity input {
    width: 60px;
    height: 60px;
    background-color: #eee;
    max-width: 100%;
    border-width: 0;
    border-radius: 0;
    color: #999;
    font-size: 14px;
    padding: 16px;
    line-height: 1.7em;
    border-style: solid;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
}

.cart-detail .wrapper-tabel .edit-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 1rem;
    background-color: #C9F2ED;
    border: 1px solid #ddd;
}

.cart-detail .wrapper-tabel .edit-cart .coupon {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

.cart-detail .wrapper-tabel .edit-cart .coupon input {
    height: 60px;
    background-color: #eee;
    border-width: 0;
    border-radius: 0;
    color: #999;
    font-size: 0.875rem;
    padding: 16px;
    line-height: 1.7em;
    border-style: solid;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    margin-right: 10px;
}

.cart-detail .wrapper-tabel .edit-cart .coupon button {
    height: 40px;
    border-radius: 10px;
    font-size: 0.875rem;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    border: none;
    background-color: #00C0AB;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border-radius: 50px;
    padding: 0.5rem 1rem;
}

.cart-detail .wrapper-tabel .edit-cart .coupon button:hover {
    border-radius: 0;
    background-color: #00B0BA;
    transition: all 200ms ease;
}

.coupon button:hover .arrow-right {
    opacity: 1;
    width: fit-content;
    transition: all 500ms ease;
}

.coupon .arrow-right {
    opacity: 0;
    width: 0;
    transition: all 500ms ease;
}

.cart-detail .wrapper-tabel .edit-cart .update-cart button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    border: none;
    color: #00C0AB;
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    border-radius: 50px;
}

.total-wrapper {
    margin-top: 2rem;
}

.total-wrapper h2 {
    font-weight: 500;
    font-size: 26px;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1em;
}

.total-wrapper table {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 3rem;
}

.total-wrapper table tr {
    border: 1px solid #ddd;
}

.total-wrapper table tr th {
    width: 50%;
    font-weight: 600;
    padding: 9px 12px;
    font-size: 14px;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    color: #666;
}

.total-wrapper table tr td {
    width: 50%;
    font-weight: 500;
    padding: 9px 12px;
    font-size: 0.875rem;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    color: #666;
}

.total-wrapper table tr td span {
    font-weight: 700;
    color: #666;
}

.total-wrapper table tr td a {
    color: #2ea3f2;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    display: block;
}

.total-wrapper button {
    width: 100%;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 500;
    border: none;
    background-color: #00C0AB;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
}

.total-wrapper button:hover {
    background-color: #00B0BA;
    border-radius: 0;
    transition: all 200ms ease;
}

.total-wrapper button:hover .arrow-right {
    opacity: 1;
    width: fit-content;
    transition: all 500ms ease;
}

.total-wrapper .arrow-right {
    opacity: 0;
    width: 0;
    transition: all 500ms ease;
}

.cart-detail .table tbody tr th {
    display: flex;
    justify-content: start;
}

.cart-detail .table tbody th,
.cart-detail .table tbody tr td {
    margin: 0 0.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.cart-detail .table tbody tr td {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}

.cart-detail .wrapper-tabel>div {
    overflow: hidden;
    border-radius: 10px;
}

.cart-detail .table tbody tr .item-label {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 150%;
    color: #666666;
}

input:focus {
    outline: none;
}

.cart-detail .table thead {
    display: none;
}

.cart-detail .table tbody .image {
    display: none;
}

@media (min-width: 425px) {
    main {
        padding: 2rem;
    }
}

@media (min-width: 540px) and (max-width: 768px) {
    main {
        padding: 5rem;
    }
}

@media (min-width: 768px) {

    .cart-detail {
        padding: 4rem 2.5rem;
    }

    .cart-detail .table thead {
        display: block;
        width: 100%;
    }

    .cart-detail .table thead tr {
        width: 100%;

    }

    .cart-detail .table tbody .table-row {
        display: flex;
        width: 100%;
    }

    .cart-detail .table thead tr {
        display: flex;
        width: 100%;
        align-items: center;

    }

    .cart-detail .table thead tr th * {
        vertical-align: middle;
    }

    .cart-detail .table tbody tr .item-label {
        display: none;
    }

    .cart-detail .wrapper-tabel .edit-cart {
        flex-direction: row;
    }


    .cart-detail .wrapper-tabel .edit-cart .coupon {
        flex-direction: row;
        align-items: center;
    }


    .cart-detail .wrapper-tabel .edit-cart .coupon input {
        width: 45%;
    }

    .cart-detail .table tbody th,
    .cart-detail .table tbody tr td {
        border: none;
    }

    .cart-detail .table tbody .table-row {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .cart-detail .table tbody .delete,
    .cart-detail .table tbody .image {
        display: block;
        width: 10%;
    }


    .cart-detail .table tbody .delete {
        display: flex;
        align-items: center;
    }

    .cart-detail .table tbody .name {
        width: 35%;
    }

    .cart-detail .table tbody .price,
    .cart-detail .table tbody .subtotal {
        width: 15%;
    }

    .cart-detail .wrapper-tabel>div {
        overflow: hidden;
        border-radius: 0;
    }
}

@media (min-width: 1024px) {
    main {
        padding: 7rem 6rem;
    }

    .cart-detail .table thead th {
        font-size: 1rem;
    }

    .cart-detail .wrapper-tabel .edit-cart .coupon input {
        width: 20%;
    }

    .cart-detail .wrapper-tabel .edit-cart .coupon button {
        font-size: 1rem;
    }

    .cart-detail .wrapper-tabel .edit-cart .update-cart button,
    .total-wrapper button {
        font-size: 1.25rem;
    }
}

@media (min-width: 1366px) {
    main {
        padding: 7rem 10rem;
    }
}
</style>
