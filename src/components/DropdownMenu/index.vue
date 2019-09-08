<template>
  <ul class="dropdown-menu">
    <li class="dropdown-menu-item">
      <i class="icon-id-card"></i>
      Profile
    </li>
    <li class="dropdown-menu-item">
      <i class="icon-sign-in"></i>
      Sign Out
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.dropdown-menu {
  display: none;
  background: #fff;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  margin: 5px 0;
  &.show{
      display: block;
  }
  .dropdown-menu-item {
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #1f2d3d;
    cursor: pointer;
    outline: none;
  }
}
</style>
