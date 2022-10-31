<template>
  <div class="imgbox">
    <!-- 組件的方式使用 -->
    <viewer :images="images">
      <img v-for="src in images" :key="src" :src="src" />
    </viewer>
  </div>
  
</template>
<script>
import { defineComponent } from "vue";
import u1 from "../assets/1.png";
import u2 from "../assets/2.png";
import u3 from "../assets/3.png";
import u4 from "../assets/4.png";
import u5 from "../assets/5.png";
import u6 from "../assets/6.png";
export default defineComponent({
	
  data() {
    return {
      images: [u1, u2, u3, u4, u5, u6],
    };
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      });
    },
  },
});
</script>

<style scoped>
	.imgbox{
		background-color: aliceblue;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		height: 800px;
		overflow: hidden;
	}
	img{
		display: none;
	}
</style>