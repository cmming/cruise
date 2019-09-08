<template>
  <div class="page-header">
    <div class="page-header-container">
      <span
        class="mobile-menu"
        @click="changeMenuStatus"
      >
        <i class="icon-navicon"></i>
      </span>
      <svg-icon
        iconClass="logo"
        className="header-logo"
      ></svg-icon>
      <!-- avator -->
      <span
        class="avator-dropdown-link"
        @click="showDropdownMenu"
      >
        <img
          class="avator"
          src="@/assets/avator.png"
          alt=""
        >
        <i class="icon-angle-down"></i>

        <ul
          class="dropdown-menu"
          :class="{'show':menuShow}"
        >
          <li class="dropdown-menu-item">
            <i class="icon-id-card"></i>
            {{$t('layout.header.Profile')}}
          </li>
          <li class="dropdown-menu-item">
            <i class="icon-sign-in"></i>
            {{$t('layout.header.Sign Out')}}
          </li>
        </ul>

      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
export default {
  components: {
    DropdownMenu
  },
  computed: {
    ...mapGetters(["menuCollapse"])
  },
  data() {
    return {
      menuShow: false
    };
  },
  methods: {
    changeMenuStatus() {
      this.$store.dispatch("setMenuCollapse", !this.menuCollapse);
    },
    showDropdownMenu(status) {
      this.menuShow = !this.menuShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.avator-dropdown-link {
  position: relative;
  z-index: 10;
  float: right;
  padding-top: 15px;
  margin-right: 30px;
  cursor: pointer;
  .avator {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  > i {
    display: inline-block;
    height: 40px;
    vertical-align: middle;
    padding-left: 10px;
  }
}

.dropdown-menu {
  display: none;
  position: absolute;
  right: -10px;
  background: #fff;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  margin: 5px 0;
  &.show {
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
    width: 120px;
    &:hover {
      background: #efefef;
    }
  }
}
</style>
