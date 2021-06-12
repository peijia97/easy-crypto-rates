<template>
  <section class="footer">
    <div class="container footer-content">
      <b-image
        :src="require('/public/imgs/ec-logo.png')"
        class="logo"
        alt="easy-crypto-logo"
      />
      <span class="mt-5 has-text-left"
        >© 2021 Easy Crypto. All rights reserved.</span
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: { value: { type: String, default: "", required: true } }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $grey900 !important;
  color: $white !important;

  .logo {
    @include ec-logo();
  }

  .footer-content {
    @include flexbox();
    flex-direction: column;
  }

  .footer-end {
    @include flexbox();
    position: absolute;
    bottom: 0;
    justify-content: space-between;
  }
}
</style>
