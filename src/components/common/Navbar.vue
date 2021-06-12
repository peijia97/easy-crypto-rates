<template>
  <b-navbar class="is-dark">
    <template #brand>
      <b-image
        :src="require('/public/imgs/ec-logo.png')"
        class="logo is-align-self-center"
        alt="easy-crypto-logo"
      />
    </template>

    <template #end>
      <b-navbar-dropdown hoverable label="Buy & Sell">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="#">
        Rates
      </b-navbar-item>
      <b-navbar-item href="#">
        Tracker
      </b-navbar-item>
      <b-navbar-item href="#">
        About Us
      </b-navbar-item>
      <b-navbar-item href="#">
        Sign In
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a class="button is-light has-text-weight-bold">
          <strong>Sign up</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent !important;
  color: $white;

  ::v-deep a.navbar-item,
  ::v-deep a.navbar-item:hover {
    color: $white;
  }

  ::v-deep .navbar-menu.is-active {
    position: absolute;
    width: 100%;
  }

  ::v-deep .navbar-item:hover,
  ::v-deep .navbar-link:hover,
  ::v-deep .navbar-link:focus,
  ::v-deep .navbar-link {
    background: transparent !important;
    font-weight: bold;
  }

  @include until($desktop) {
    width: 95%;
    margin: auto;
    ::v-deep a.navbar-item,
    ::v-deep a.navbar-item:hover {
      color: $grey900;
    }
  }

  .logo {
    @include ec-logo();
  }

  ::v-deep .navbar-dropdown {
    background-color: $primary;
    @include until($desktop) {
      background-color: $white;
    }
  }
}
</style>
