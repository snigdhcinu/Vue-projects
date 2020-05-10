
Vue.component('posts',{
	props:['data'],
	template : `
		<h1 @click="display">{{data}}</h1>

	`,
	data(){
		return {
			message:'Hello Snigdh'
		}
	},
	method:{
		display(){
			console.log("hello world");
		}
	}
})


let vm=new Vue({
	el:'#demo'
});