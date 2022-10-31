<template>
	<div class="btns">
		<el-button-group class="modechangebatton">
		    <el-button type="primary" size="large" @click="onemodebtn" plain>I</el-button> <!--单页模式-->
		    <el-button type="primary" size="large"  @click="twomodebtn" plain>II</el-button> <!--双页模式-->
		</el-button-group>
	</div>
	<div class="mainbox">
		<div class="box1" :class="{'css1':onemode}"> <!--展示框1-->
			<Picture></Picture>
		</div>
		<div class="box2" :class="{'css2':twomode}"> <!--展示框2-->
			<Picture></Picture>
		</div>
	</div>
</template>
<script setup>
import Picture from "./Picture.vue" //图片缩放相关组件
</script>
<script>
export default {
	//默认及单页模式下，box1居中，box2在box1底下，overflow隐藏起来。双页模式下将box1和box2的css替换为css1和css2.
  name: 'modechangebatton',
  data () {
    return {
      onemode: false, //默认不显示
      towmode: false  //默认不显示
    }
  },
  methods: {
    onemodebtn () {
      this.onemode = false
      this.twomode = false
    },
    twomodebtn () {
      this.onemode = true //按II则将样式替换为.ccs1和.css2
      this.twomode = true
    }
  }
}
</script>
<style scoped>
	.btns{
		text-align: right;
		margin-right: 395px;
	}
	.mainbox{
		background-color: #555;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		margin-top: 12px;
		width: 1900px;
		height: 824px;
		overflow: hidden;
	}
	.box1{
		background-color: aliceblue;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		margin-top: 12px;
		width: 931px;
		height: 800px;
	}
	.box2{
		background-color: aliceblue;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		margin-top: 12px;
		width: 931px;
		height: 800px;
	}
	.css1{
		background-color: aliceblue;
		position: relative;
		margin-left: 12px;
		margin-right: auto;
		margin-top: 12px;
		width: 931px;
		height: 800px;
		display: inline;
		float: left;
	}
	.css2{
		background-color: aliceblue;
		position: relative;
		margin-left: auto;
		margin-right: 12px;
		margin-top: 12px;
		width: 931px;
		height: 800px;
		display: inline;
		float: right;
	}

</style>