<template>
  <div class="app-footer">
    {{$t('layout.footer')}}
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "transparent"
    }
  }
};
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
  z-index: 10;
  transition: all 0.4s;
  font-size: 12px;
  padding: 4px 20px;
  letter-spacing: 3px;
  text-align: center;
  background: #fff;
}
</style>

