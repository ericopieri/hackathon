<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- Criar um componente Footer -->
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: [Header]
};
</script>

<style></style>
