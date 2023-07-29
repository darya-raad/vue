
  var app = new Vue({
    el: "#app",
    data: {
      product: "Socks",
      description: "“A pair of warm, fuzzy socks”",
      imageAlt: "A pair of socks",
      image: "./image/socksgreen.jpg",
      linkHref:
        "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
      inStock: false,
      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./image/socksgreen.jpg",
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./image/socksblue.jpg",
        },
      ],
      sizes: ["Small", "Medium", "Large"],
    },
    methods: {
      updatePtoduct: function (variantImage) {
        this.image = variantImage;
      },
    },
  });
