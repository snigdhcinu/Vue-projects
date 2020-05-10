let node=new Vue({
	el:'#demo',
	data:{
		isActive:true,
		message:'hello world',
		number:21
	},
	methods:{
		sayHi:function(){
			console.log('Hi');
		},
		sayHello(){
			console.log('hello');
		}
	}
})