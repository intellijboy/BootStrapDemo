	$(function() {
		$("#myform").validate({
			debug:true,
			rules:{
				name: {
                    required: true,
                    minlength: 2,
                    maxlength: 10
                },
                password1: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
                password2: {
                    equalTo: "#password1"
                },
                email:{
                	
                }
			}
		})
	})