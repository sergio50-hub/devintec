<template>
  <div id="app">
    <div class="product-info">
      <h1 style="font-size: 54px; font-family: monospace;">{{product}}</h1>
    </div>
    <div class="product">
      <div class="product image">
        <img
          v-bind:src="image"
          style="width: 300px; margin-left: 40%; height: 230px; border: solid 5px white;"
        />
      </div>

      <div class="product image2">
        <img
          v-bind:src="image2"
          style="width: 300px; height: 230px;margin-left: 40%;border: solid 5px white;"
        />
      </div>

      <div class="product image3">
        <img
          v-bind:src="image3"
          style="width: 300px;margin-left: 40%; height: 200px;border: solid 5px white;"
        />
        <br />
        <button v-on:click="changeImage" margin-left="50px">Change Image</button>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fefbd8;
}

.product-info {
  text-align: center;
}
</style>

<script>
let bool = true;
export default {
  name: "App",
  data() {
    return {
      product: "Family Images",
      image: "src/assets/fami1.jpg",
      image2: "src/assets/fami2.jpg",
      image3: "src/assets/fami3.jpg"
    };
  },
  methods: {
    changeImage: function() {
      if (bool === true) {
        this.image = "src/assets/fami2.jpg";
        this.image2 = "src/assets/fami3.jpg";
        this.image3 = "src/assets/fami1.jpg";
      } else {
        this.image = "src/assets/fami1.jpg";
        this.image2 = "src/assets/fami2.jpg";
        this.image3 = "src/assets/fami3.jpg";
      }
      bool = !bool;
    }
  }
};
</script>





