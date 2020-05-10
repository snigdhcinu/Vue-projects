let node=new Vue({
	el:'#demo',
	data:{
		message:'hello'
	},
	computed:{
		reverseMessage(){
		return this.message.split('').reverse('').join('');
		}
	}
})
