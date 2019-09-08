<template>
  <div
    id="app"
    :class="{'open':menuCollapse}"
  >
    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>
<script>
import "@/styles/index.scss";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["menuCollapse"])
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $--color-primary;
  font-size: 14px;
}
</style>
