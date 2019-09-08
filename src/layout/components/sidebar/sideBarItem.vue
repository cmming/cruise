<template>
  <ul class="menu-container">
    <router-link
      tag="li"
      class="sdidebar-menu"
      v-for="(menu,key) in dynamicMenu[0].children"
      :key="key"
      :to="menu.path"
      active-class="active"
    >

      <i
        class="sdidebar-icon-font"
        :class="menu.meta.icon"
      ></i>
      {{$t('layout.menu.'+menu.meta.title)}}
    </router-link>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dynamicMenu"])
  }
};
</script>

