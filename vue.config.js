module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/easy-crypto-rates/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
              @import "@/scss/_variables.scss";
              @import "@/scss/_mixins.scss";
            `
      }
    }
  }
};
