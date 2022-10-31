import { createApp } from "vue";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.use(ElementPlus);
app.use(VueViewer);
VueViewer.setDefaults({
	'backdrop':true,
	'inline':true,//是否直接展示
	'title': false,//当前图片标题
	'rotatable': false, //是否可旋转
	'scalable': false, //是否可翻转
	'navbar':false,//是否显示缩略图
	'interval':1000,//播放速度（毫秒）
	'toolbar':{
		zoomIn:false,
		zoomOut:false,
		oneToOne:false,
		reset:{
			show:true,
			size:"large",
		},
		prev:{
			show:true,
			size:"large",
		},
		next:{
			show:true,
			size:"large",
		},
		play:{
			show:true,
			size:"large",
		},
	}
	
});
app.mount("#app");