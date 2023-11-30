<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Navbar />
  <main class="bg-black" id="home">
    <div class="creativ-labz">
      <div class="information">
        <h1>Creativ Labz</h1>
        <p>PT Kreatif Vapelab Indonesia distributor terbesar Liquid USA . Berpengalaman sejak tahun 2016.</p>
        <div class="btn-app">
          <button class="btn rounded-5 px-3 py-2">Download App</button>
          <button class="btn-shop rounded-5 px-3 py-2">Shop Now</button>
        </div>
      </div>
    </div>
    <div class="product">
      <img src="@/assets/images/contact/natural-marble-pattern-background-1-scaled.jpg" class="background">
      <div class="wrapper-product">
        <div class="text-title d-flex flex-row">
          <p>SHOP PRODUCTS</p>
          <div class="line"></div>
        </div>
        <h2>Featured Products</h2>
        <div class="list-product">
          <div class="item-product">
            <div class="image-product">
              <img src="@/assets/images/home/WhatsApp-Image-2023-07-17-at-11.32.14-300x300.jpeg" alt="">
            </div>
            <h2>CASSADAGA CANNOLI BE NUTS 60ML</h2>
            <p>Rp180.000</p>
          </div>
          <div class="item-product">
            <div class="image-product">
              <img src="@/assets/images/home/79be5858-4b41-4fba-9ef0-d93f01e24116-300x300.jpg" alt="">
            </div>
            <h2>CASSADAGA CANNOLI BE NUTS 60ML</h2>
            <p>Rp180.000</p>
          </div>
          <div class="item-product">
            <div class="image-product">
              <img src="@/assets/images/home/b6bb296c-4a7c-49f5-a811-c70d81c871b9-300x300.jpg" alt="">
            </div>
            <h2>CASSADAGA CANNOLI BE NUTS 60ML</h2>
            <p>Rp180.000</p>
          </div>
          <div class="item-product">
            <div class="image-product">
              <img src="@/assets/images/home/97a3d517-adc9-490c-9deb-64baa8666a49-300x300.jpg" alt="">
            </div>
            <h2>CASSADAGA CANNOLI BE NUTS 60ML</h2>
            <p>Rp180.000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="privilege">
      <h1>Why Choose Us?</h1>
      <div class="privilege-wrapper">
        <div class="privilege-item bg-white rounded-4 d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/home/truck.svg" alt="">
          <h3>Pengiriman Cepat</h3>
          <p>Melayani pengiriman produk yang cepat</p>
        </div>
        <div class="privilege-item bg-white rounded-4 d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/home/payment.svg" alt="">
          <h3>Harga Terbaik</h3>
          <p>Penjualan Prduk dengan harga terbaik</p>
        </div>
        <div class="privilege-item bg-white rounded-4 d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/home/medal.svg" alt="">
          <h3>Produk Berkualitas</h3>
          <p>Jaminan produk berkualitas</p>
        </div>
      </div>
    </div>
    <div class="about-us">
      <img src="@/assets/images/contact/natural-marble-pattern-background-1-scaled.jpg" class="background">
      <div class="wrapper-about">
        <div class="d-flex flex-column">
          <span>About Us</span>
          <h1>Creativ Labz</h1>
          <p>PT Kreatif Vapelab Indonesia merupakan salah satu distributor terbesar Liquid USA . kami berpengalaman dari tahun 2016 hingga sekarang.</p>
          <p>Sebagai perusahaan distributor berpengalaman dari 2016, kami memberikan  harga yang sangat bersaing dengan kualitas terbaik.</p>
        </div>
        <div class="image-liquid">
          <img src="@/assets/images/home/image-13.png" alt="">
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
#home {
  padding-top: 4rem;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
}

.creativ-labz {
  background-image: url('@/assets/images/home/bg-liquid.png'), linear-gradient(136deg, #0a0a0a 33%, #00c4a6 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  height: 100vh;
  width: 100%;
  padding: 12rem 10rem;
}

.information {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.information h1 {
  font-family: 'Quattrocento', 'Times New Roman', Times, serif;
  color: white;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.information p {
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.information .btn {
  background-color: #00c0ab;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
}

.information .btn-shop {
  color: #00c0ab;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border: 2px solid #00c0ab;
  background-color: transparent;
}

.information .btn-app {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.product {
  position: relative;
  transform-style: preserve-3d;
  z-index: -1;
  padding: 8rem 10rem;
  padding-top: 3rem;
}

.background {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  transform: translateZ(-5px) scale(2);
}

.wrapper-product {
  width: 100%;
  color: white;
}

.wrapper-product h2 {
  font-family: 'Quattrocento',Georgia,"Times New Roman",serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 3rem;
  color: white;
}

.text-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
}

.text-title p {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.text-title .line {
  width: 25%;
  height: 2.5px;
  background-color: #00c0ab;
  margin-left: 3rem;
}

.list-product {
  display: flex;
  padding: 0;
  justify-content: space-between;
}

.item-product {
  width: 100%;
  max-width: 250px;
  word-wrap: break-word;
  position: relative;
}

.item-product img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 1rem;
}

.item-product h2 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.3em;
  color: white;
  margin-bottom: 0.5rem;
}

.item-product p {
  font-size: 20px;
  font-weight: 500;
  color: #00c0ab;
}

.privilege {
  background-image: url('@/assets/images/home/baackground-cl-e1679853251444.png'), linear-gradient(136deg, #727272 33%, #00c4a6 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  padding: 3rem 10rem;
}

.privilege h1 {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  color: white;
}

.privilege-wrapper {
  display: flex;
  margin-bottom: 3.5rem;
  gap: 4rem;
}

.privilege-item {
  width: 100%;
  max-width: 550px;
  padding: 2rem 0;
  padding-bottom: 1rem;
  margin: 0 auto;
  word-wrap: break-word;
  position: relative;
}

.privilege-item img {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

.privilege-item h3 {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
}

.privilege-item p {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #666;
}

.about-us {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  z-index: -1;
  overflow: hidden;
}

.wrapper-about {
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  margin: 8rem 12rem;
  gap: 12rem;
}

.wrapper-about span {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #00c0ab;
}

.wrapper-about h1 {
  font-family: 'Quattrocento', 'Times New Roman', Times, serif;
  color: white;
  font-size: 65px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.wrapper-about p {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.4em;
}

.image-liquid {
  width: 100%;
  position: relative;
}

.image-liquid img {
  width: 80%;
  object-fit: contain;
}

@media only screen and (max-width: 767px) {
  .creativ-labz {
    padding: 4rem 2.5rem;
  }

  .information {
    width: 100%;
  }

  .information h1 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 46px;
  }

  .information p {
    font-size: 15px;
  }

  .information .btn-app {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .product {
    padding: 4rem 2.5rem;
  }

  .wrapper-product {
    padding: 0;
  }

  .wrapper-product h2 {
    font-size: 34px;
    margin-bottom: 2rem;
  }

  .text-title {
    margin-bottom: 1rem;
  }

  .text-title .line {
    display: none;
  }

  .list-product {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
  }

  .item-product {
    width: 100%;
    margin-bottom: 0;
  }

  .item-product img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .item-product h2 {
    font-family: 'poppins';
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.3em;
    color: white;
    margin-bottom: 0.5rem;
  }

  .item-product p {
    font-size: 20px;
    font-weight: 500;
    color: #00c0ab;
  }

  .privilege {
    padding: 2rem 2.5rem;
  }

  .privilege h1 {
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .privilege-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .privilege-item {
    padding: 1.5rem 1rem;
  }

  .wrapper-about {
    margin: 4rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .wrapper-about h1 {
    font-size: 46px;
    margin-bottom: 1rem;
  }

  .wrapper-about p {
    font-size: 15px;
    margin-bottom: 1rem;
  }

  .image-liquid {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-liquid img {
    width: 100%;
    object-fit: contain;
  }

}

@media (max-width: 980px) {
  .creativ-labz {
    padding: 8rem 5rem;
  }

  .information {
    width: 100%;
  }

  .information h1 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 65px;
  }

  .information p {
    font-size: 18px;
  }

  .product {
    padding: 8rem 5rem;
  }

  .wrapper-product {
    padding: 0;
  }

  .wrapper-product h2 {
    font-size: 34px;
    margin-bottom: 3rem;
  }

  .text-title {
    margin-bottom: 2rem;
    justify-content: space-between;
  }

  .text-title .line {
    width: 65%;
  }

  .list-product {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
  }

  .item-product {
    width: 100%;
    margin-bottom: 0;
  }

  .item-product img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .item-product h2 {
    font-family: 'poppins';
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.3em;
    color: white;
    margin-bottom: 0.5rem;
  }

  .item-product p {
    font-size: 20px;
    font-weight: 500;
    color: #00c0ab;
  }

  .privilege {
    padding: 2rem 2.5rem;
  }

  .privilege h1 {
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .privilege-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .privilege-item {
    padding: 1.5rem 1rem;
  }

  .wrapper-about {
    margin: 8rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .wrapper-about h1 {
    font-size: 65px;
    margin-bottom: 1rem;
  }

  .wrapper-about p {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .image-liquid {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-liquid img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
