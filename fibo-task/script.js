Vue.component("input-container",{
	data(){
		return{
			message:" ",
			}
		},
			methods:
			{
			calculateCube()
				{
					this.cube=this.message*this.message*this.message;
					document.getElementById('result').innerHTML=this.cube;
		 		}
			}
	
});
document.getElementById('result').innerHTML=" ";
let vm=new Vue({
	el:'#demo',
	data:{
		
		cube:0
	}
});