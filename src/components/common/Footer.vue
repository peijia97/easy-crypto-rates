<template>
  <section class="footer">
    <div class="container footer-content">
      <div class="left-content">
        <b-image
          :src="require('/public/imgs/ec-logo.png')"
          class="logo"
          alt="easy-crypto-logo"
        />
        <p class="mt-5 has-text-left">
          Easy Crypto wants to make it easy for anyone to get into the crypto
          market - no matter how much they have to invest.
        </p>
        <p>
          See the full list of coins we trade.
        </p>
        <p>
          NZBN: 9429046530141<br />Registered Financial Services Provider:
          FSP691871
        </p>
        <p class="xs-text">© 2021 Easy Crypto. All rights reserved.</p>
        <div class="social-container">
          <Button iconOnly icon="facebook-f" iconPack="fab" />
          <Button iconOnly icon="twitter" iconPack="fab" />
          <Button iconOnly icon="linkedin-in" iconPack="fab" />
        </div>
      </div>

      <div class="right-content">
        <div>
          <h3>Start here</h3>
          <a href="#">Sign up</a>
          <a href="#">Buy & Sell</a>
          <a href="#">Our Rates</a>
          <a href="#">Portfolio Tracker</a>
        </div>

        <div>
          <h3>Useful Links</h3>
          <a href="#">Get Help</a>
          <a href="#">Learn About Crypto</a>
          <a href="#">Change Country</a>
        </div>

        <div>
          <h3>About Us</h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Stats</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "/src/components/common/Button.vue";

export default {
  name: "Footer",
  components: { Button }
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
    flex-direction: row;

    .left-content {
      flex: 0.4;

      p {
        text-align: left;
        margin-bottom: 0.5rem;
        color: $grey200;
        font-size: 0.9rem;
      }

      .xs-text {
        font-size: 0.8rem;
        margin-top: 0.8rem;
        color: $grey200;
      }

      .social-container {
        @include flexbox();
        margin-top: 1rem;
        width: 9rem;
        justify-content: space-between;
      }
    }

    .right-content {
      @include flexbox();
      flex: 0.6;
      padding-left: 10rem;
      flex-direction: row;
      text-align: left;
      div {
        flex: 1;
        h3 {
          margin-top: 1rem;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
        }
      }
      a,
      a:hover {
        display: block;
        margin-bottom: 0.3rem;
        font-size: 0.8rem;
        color: $white;
      }
      @include until($tablet) {
        flex-direction: column;
        padding-left: 0;
      }
    }

    @include until($tablet) {
      flex-direction: column;
    }
  }

  .footer-end {
    @include flexbox();
    position: absolute;
    bottom: 0;
    justify-content: space-between;
  }
}
</style>
