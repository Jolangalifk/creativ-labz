<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';

const isAnimated = ref(true);

onMounted(() => {
  setInterval(() => {
    isAnimated.value = !isAnimated.value; // Toggle the class to restart the animation
  }, 10000);
});
</script>

<template>
  <RouterView />
  <div class="chat animated">
    <div>
      <p>Customer Service & Confirm Payment</p>
      <div class="icon-wrapper">
        <img src="@/assets/icons/whatsapp.svg" class="rotate">
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shake {

  0%,
  30%,
  100% {
    transform: scale(1) rotate(0);
  }

  4% {
    transform: scale(0.85) rotate(-15deg);
  }

  6%,
  10%,
  14%,
  18%,
  22%,
  26% {
    transform: scale(1.2) rotate(7deg);
  }

  8%,
  12%,
  16%,
  20%,
  24%,
  28% {
    transform: scale(1.2) rotate(-7deg);
  }
}

@keyframes rotate {

  0%,
  30%,
  100% {
    transform: scale(1) rotate(0);
  }

  4% {
    transform: scale(1) rotate(-15deg);
  }

  6%,
  10%,
  14%,
  18%,
  22%,
  26% {
    transform: scale(1) rotate(7deg);
  }

  8%,
  12%,
  16%,
  20%,
  24%,
  28% {
    transform: scale(1) rotate(-7deg);
  }
}

.rotate {
  animation: rotate 10s infinite;
  transform-origin: center;
}

.animated {
  animation: shake 10s infinite;
  transform-origin: right;
}

.chat {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 3000;
  cursor: pointer;
  transition: all 0.5s ease;
}

.chat:hover {
  filter: brightness(90%);
}

.chat>div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.chat img {
  display: block;
  width: 25px;
  height: 25px;
}

.chat .icon-wrapper {
  padding: 1rem;
  background-color: #25D366;
  border-radius: 100%;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

.chat p {
  background-color: #25D366;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.75rem;
  margin: 0;
}

@media (min-width: 1024px) {

  .chat {
    right: 40px;
    bottom: 40px;
  }

  .chat img {
    width: 30px;
    height: 30px;
  }

  .chat p {
    font-size: 0.875rem;
  }
}
</style>
