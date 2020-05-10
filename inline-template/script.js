Vue.component('posts');
Vue.component('images',{
	data(){
		return {}
	},
	methods : {
		display(){
			console.log('displaying the images.')
		}
	}
});

let vm=new Vue({
	el:'#demo',
	data:{
		message:'hello world',
		number:21
	}
})