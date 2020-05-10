let node=new Vue({
	el:'#demo',
	data:{
		message:'Hello world',
		number:21,
		fontSize:20
	},
	methods:{
		increaseFont(){
			this.fontSize+=2;
		},
		decreaseFont(){
			this.fontSize-=2;
		}
	}
})