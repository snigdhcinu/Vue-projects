	// Initialize a new vue object.
let vm = new Vue({
	el: '#text',	// Element selector
	data:{		// data object.
		message:'Hello World',
		number: 21,
		isActive:false
	}
})
vm.message='Edward'; // Manipulation of the vue object is possible through here.
vm.isActive=true;	// Can manipulate the property of data object from here.