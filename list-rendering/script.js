let node=new Vue({
	el:'#demo',
	data:{
		message:'hello world',
		number:21,
		posts:[
			{id:1,title:'post-1',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'},
			{id:2,title:'post-2',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'},
			{id:3,title:'post-3',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'},
			{id:4,title:'post-4',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'},
			{id:5,title:'post-5',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'},
			{id:6,title:'post-6',body:'this is body of the title, lorem ipsum sans0 serif monserratbold'}
	],
	},
	methods:{
		sayHi(){
			console.log('hi');
		},
		sayHello:function(){
			console.log('hello')
		}
	}
})