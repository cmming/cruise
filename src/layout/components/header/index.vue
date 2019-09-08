<template>
  <div class="page-header">
    <div class="page-header-container">
      <svg-icon iconClass="logo" className="header-logo"></svg-icon>
      <!-- avator -->
      <span class="avator-dropdown-link">
        <img class="avator" src="@/assets/avator.png" alt="">
        
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avator-dropdown-link{
  float: right;
  padding-top: 15px;
  .avator{
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
}
</style>
