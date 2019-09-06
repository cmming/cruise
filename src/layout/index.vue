<template>
  <div class="page-container">
    <v-header></v-header>
    <section class="page-section">
      <v-sidebar></v-sidebar>
      <div class="page-main">
        <router-view />
      </div>
    </section>
  </div>
</template>
<script>
import VSidebar from "./components/sidebar";
import VHeader from "./components/header";
export default {
  components: {
    VHeader,
    VSidebar
  }
};
</script>

