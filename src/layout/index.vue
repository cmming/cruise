<template>
  <div class="page-container">
    <v-header></v-header>
    <section class="page-section">
      <v-sidebar></v-sidebar>
      <div class="page-main">
        <router-view />
      </div>
      <v-footer></v-footer>
    </section>
  </div>
</template>
<script>
import VSidebar from "./components/sidebar";
import VHeader from "./components/header";
import VFooter from "./components/footer";
export default {
  components: {
    VHeader,
    VSidebar,
    VFooter
  }
};
</script>

