<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Navbar />
    <main id="cart">
        <h1>Cart</h1>
        <div class="cart-detail">
            <div class="wrapper-tabel">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><p>Product</p></th>
                            <th scope="col"><p>Price</p></th>
                            <th scope="col"><p>Quantity</p></th>
                            <th scope="col"><p>Subtotal</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><button><img src="@/assets/images/cart/close-icon-red.svg" alt=""></button></th>
                            <td><img src="@/assets/images/news-and-events/WhatsApp-Image-2022-03-14-at-11.24.12-819x1024.webp"
                                    alt=""></td>
                            <td><a href="">SCREWBACCO MENTHOL FREEBASE 60ML - 3MG</a></td>
                            <td>Rp240.000</td>
                            <td>
                                <div class="quantity">
                                    <input type="number" id="quantity" name="quantity" min="0" max="2" value="1"
                                        title="Qty">
                                </div>
                            </td>
                            <td>Rp240.000</td>
                        </tr>
                    </tbody>
                </table>
                <div class="edit-cart">
                    <div class="coupon">
                        <input type="text" placeholder="Coupon code">
                        <button>Apply coupon</button>
                    </div>
                    <div class="update-cart">
                        <button>Update cart</button>
                    </div>
                </div>
            </div>
            <div class="total-wrapper">
                <h2>Cart totals</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>Rp240.000</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>No shipping options were found for <span>DKI Jakarta</span>.
                                <a href="">Enter a different address</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td><span>Rp240.000</span></td>
                        </tr>
                    </tbody>
                </table>
                <button>Proceed to checkout</button>
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
    padding: 10rem;
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
    padding: 4rem 2.5rem;
    border-radius: 1rem;
}

.cart-detail .table {
    margin-bottom: 0;
    border: 1px solid #ddd;
}

.cart-detail .table thead th {
    height: 60px;
    background-color: #00C0AB;
    vertical-align: middle;
}

.cart-detail .table thead th p {
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    margin: 0;
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
    display: flex;
    align-items: center;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #C9F2ED;
    border: 1px solid #ddd;
}

.cart-detail .wrapper-tabel .edit-cart .coupon {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-detail .wrapper-tabel .edit-cart .coupon input {
    width: 150px;
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
    margin-right: 10px;
}

.cart-detail .wrapper-tabel .edit-cart .coupon button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    border: none;
    background-color: #00C0AB;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border-radius: 50px;
}

.cart-detail .wrapper-tabel .edit-cart .update-cart button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
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
    font-size: 14px;
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
    font-size: 16px;
    font-weight: 500;
    display: block;
}

.total-wrapper button {
    width: 100%;
    padding: 10px 20px;
    font-size: 20px;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    font-weight: 500;
    border: none;
    background-color: #00C0AB;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
}

@media (max-width: 768px) {
    main {
        padding: 4rem;
    }

    .table thead th {
        display: block;
        width: 100%;
        text-align: left;
    }

    .table tbody tr {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .table tbody tr th,
    .table tbody tr td {
        width: 100%;
        text-align: center;
    }

    .table tbody tr th button {
        display: block;
        margin-bottom: 10px;
    }

}

@media (max-width: 980px) {
    main {
        padding: 6rem;
        padding-top: 4rem;
    }

    .table thead th p {
        display: none;
    }
}
</style>