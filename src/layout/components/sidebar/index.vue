<template>
  <div class="page-sidebar">
    <side-bar-item></side-bar-item>
    <!-- history -->
    <v-history></v-history>
  </div>
</template>
<script>
import SideBarItem from './sideBarItem'
import VHistory from './history'
export default {
  components:{
    VHistory,
    SideBarItem
  }
}
</script>
