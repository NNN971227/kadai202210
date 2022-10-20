<template>
	<div class="box" id="bigimg" @mousewheel="bagimg($event)"> <!--显示区域-->
		<img id="img" border="0" src="../assets/img1.jpg"> <!--图片-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					zoomVal: 1,
					left: 0,
					top: 0,
					currentX: 0,
					currentY: 0,
					flag: false
				},
			}
		},
		mounted() {
			this.startDrag(document.getElementById("img"), document.getElementById("img"))
		},
		methods: {
			bagimg(e) {
				var e = document.getElementById('img')
				this.params.zoomVal += event.wheelDelta / 1200;
				if (this.params.zoomVal >= 0.2) {
					e.style.transform = "scale(" + this.params.zoomVal + ")";
				} else {
					this.params.zoomVal = 0.2;
					e.style.transform = "scale(" + this.params.zoomVal + ")";
					return false;
				}
			},
			getImgCss(e, key) {
				return e.currentStyle ? e.currentStyle[key] : document.defaultView.getComputedStyle(e, false)[key];
			},
			startDrag(bar, target, callback) {
				let that = this
				if (that.getImgCss(target, "left") !== "auto") {
					that.params.left = that.getImgCss(target, "left");
				}
				if (that.getImgCss(target, "top") !== "auto") {
					that.params.top = that.getImgCss(target, "top");
				}
				bar.onmousedown = function(event) {
					that.params.flag = true;
					if (!event) {
						event = window.event;
						bar.onselectstart = function() {
							return false;
						}
					}
					let e = event;
					that.params.currentX = e.clientX;
					that.params.currentY = e.clientY;
				};
				document.onmouseup = function() {
					that.params.flag = false;
					if (that.getImgCss(target, "left") !== "auto") {
						that.params.left = that.getImgCss(target, "left");
					}
					if (that.getImgCss(target, "top") !== "auto") {
						that.params.top = that.getImgCss(target, "top");
					}
				};
				document.onmousemove = function(event) {
					let e = event ? event : window.event;
					if (that.params.flag) {
						let nowX = e.clientX,
							nowY = e.clientY;
						let disX = nowX - that.params.currentX,
							disY = nowY - that.params.currentY;
						target.style.left = parseInt(that.params.left) + disX + "px";
						target.style.top = parseInt(that.params.top) + disY + "px";
						if (typeof callback == "function") {
							callback((parseInt(that.params.left) || 0) + disX, (parseInt(that.params.top) || 0) +
							disY);
						}
						if (event.preventDefault) {
							event.preventDefault();
						}
						return false;
					}
				}
			},
		}
	}
</script>

<style>
	#bigimg {
		border: 1px solid red;
		background-color: aliceblue;
		position: relative;
		width: 600px;
		height: 600px;
		margin: 30px auto;
		overflow: hidden;
	}

	#img {
		position: absolute;
		max-width: 100%;
		max-height: 100%;
		cursor: move;
	}
</style>
