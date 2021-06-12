export default {
  data() {
    return {
      window: {
        width: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  computed: {
    isMobile() {
      if (this.window.width <= 960) {
        return true;
      } else {
        return false;
      }
    }
  }
};
