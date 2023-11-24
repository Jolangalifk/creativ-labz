<script setup lang="ts">
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
</script>
<template>
  <Navbar />
  <section id="about-us">
    <div class="about-info">
      <div class="about">
        <h2>About Us</h2>
        <h1>Creativ Labz</h1>
        <p>
          PT Kreatif Vapelab Indonesia merupakan salah satu distributor terbesar Liquid USA . kami berpengalaman dari
          tahun
          2016 hingga sekarang.

          Sebagai perusahaan distributor berpengalaman dari 2016, kami memberikan harga yang sangat bersaing dengan
          kualitas
          terbaik.

          Contact Us
        </p>
        <button class="btn rounded-5 px-3">Contact Us</button>
      </div>
    </div>
    <div class="strenght mb-5">
      <h2 class="text-center mt-4 mb-5">Why Choose Us?</h2>
      <div class="row justify-content-center gap-4 gap-sm-0 p-3">
        <div class="col-12 col-md-4 strenght-item d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/about-us/truck-fast-solid.svg" width="96  " height="96">
          <h3 class="mt-2">Pengiriman Cepat</h3>
          <p class="text-center">Melayani pengiriman produk yang cepat</p>
        </div>
        <div class="col-12  col-md-4 strenght-item d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/about-us/wallet.svg" width="96" height="96">
          <h3 class="mt-2">Harga Terbaik</h3>
          <p class="text-center">Penjualan Prduk dengan harga terbaik</p>
        </div>
        <div class="col-12  col-md-4 strenght-item d-flex flex-column align-items-center justify-content-center">
          <img src="@/assets/images/about-us/medal.svg" width="96" height="96">
          <h3 class="mt-2">Produck Berkualitas</h3>
          <p class="text-center">Jaminan produk berkualitas</p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style scoped>
#about-us {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

.about-info {
  width: 100%;
  background-image: url('src/assets/images/about-us/baackground-cl-e1679853251444.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 4rem;
  padding: 2rem 1rem;
}

.about-info>.about {
  background-color: white;
  padding: 2rem 1rem;
  border-radius: 20px;
  width: 100%;
}

.about>h2 {
  color: #00c0ab;
  font-size: 0.9rem;
  line-height: 140%;
  font-weight: 600;
}

.about>h1 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 150%;
  color: #666666;
}

.about>p {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 118%;
  color: #666666;
}

.about>button {
  background-color: #00c0ab;
  color: white;
  font-size: 0.8rem;
  line-height: 170%;

}

.strenght {
  background-color: white;
}

.strenght>h2 {
  font-size: 1.125rem;
  line-height: 140%;
  font-weight: 700;
  color: #666666;
}

.strenght-item>h3 {
  font-weight: 500;
  font-size: 1rem;
  line-height: 118%;
  color: #333333;
  text-align: center;
}

.strenght-item>p {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666666;
  line-height: 170%;
}

@media (min-width: 768px) {
  .about-info {
    padding: 3rem;
  }

  .about-info>.about {
    padding: 2.5rem 1.5rem;
    border-radius: 20px;
    width: 75%;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .about-info {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }

  .about-info>.about {
    padding: 3rem 1.5rem;
    width: 50%;
    margin: 0;
    margin: 3% 0 0 3%;
  }
}

@media (min-width: 1200px) {
  .about-info {
    padding-bottom: 6rem;
  }

  .about-info>.about {
    padding: 3rem 1.5rem;
    width: 40%;
    margin: 4% 0 0 8%;
  }

  .about>h2 {
    font-size: 1.25rem;
  }

  .about>h1 {
    font-size: 4rem;
  }

  .about>p {
    font-size: 1.125rem;
  }

  .about>button {
    font-size: 1rem;
  }

  .strenght {
    background-color: white;
  }

  .strenght>h2 {
    font-size: 2.25rem;
  }

  .strenght-item>h3 {
    font-size: 1.125rem;
  }
}
</style>
