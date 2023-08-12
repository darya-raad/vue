
  var app = new Vue({
    el: "#app",
    data: {
      brand: "Vue Mastery",
      product: "Socks",
      description: "“A pair of warm, fuzzy socks”",
      imageAlt: "A pair of socks",
      selectedVariant: 0,
      linkHref:
        "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
      // inStock: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./image/socksgreen.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./image/socksblue.jpg",
          variantQuantity: 0,
        },
      ],
      sizes: ["Small", "Medium", "Large"],
      onSale: true,
      cart: 0,
    },
    methods: {
      addToCart: function () {
        this.cart += 1;
      },
      removeFromToCart: function () {
        this.cart -= 1;
      },
      updatePtoduct: function (index) {
        this.selectedVariant = index;
        console.log(index);
      },
    },
    computed: {
      title() {
        return this.brand + " " + this.product;
      },
      image() {
        return this.variants[this.selectedVariant].variantImage;
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuantity;
      },
      sale() {
        if (this.onSale) {
          return this.brand + " " + this.product + " are on sale!";
        }
        return this.brand + " " + this.product + " are not on sale";
      },
    },
  });
