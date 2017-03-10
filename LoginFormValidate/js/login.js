var v;
$(function() {
	//设置插件默认选项
	//	$.validator.setDefaults({
	//		debug: true
	//	})

	//静态方法增加校验规则
	$.validator.addClassRules({
		txt: {
			required: true
		}
	})

	v = $("#demoForm").validate({

		//	debug: true,
		rules: {
			username: {
				required: true,
				//				minlength: 2,
				//				maxlength: 10
				rangelength: [2, 10]
			},
			password: {
				required: true,
				minlength: 2,
				maxlength: 16,
				remote: "check.jsp"
			},
			"confirm-password": {
				equalTo: "#password"
			},
			youbian:{
				postcode:"石城"
				//required:true
				//postcode:true
			}
			//			email: {
			//				required: true,
			//				email: true
			//			},
			//			date: {
			//				required: true,
			//				dateISO: true
			//			},
			//			digital: {
			//				required: true,
			//				digits: true
			//			}

		},
		messages: {
			username: {
				required: '请输入用户名*',
				minlength: '用户名不能小于2个字符*',
				maxlength: '用户名不能超过10个字符*',
				remote: '用户名不存在*'
			},
			password: {
				required: '请输入密码*',
				minlength: '密码不能小于2个字符*',
				maxlength: '密码不能超过16个字符*',
				remote: "远程校未验通过"
			},
			"confirm-password": {
				equalTo: "两次输入密码不一致*"
			},
			digital: {
				digits: "只能输入正整数"
			}
		},
		submitHandler: function(form) {
			console.log($(form).serialize())
		},
		invalidHandler: function(event, validator) {
			console.log("表单填写错误，不能提交");
		},
		ignore: "#email,#date,#digital",
		//		groups:{
		//			login:"username password confirm-password"
		//		},
		//		errorPlacement:function(error,element){
		//			$("#info").append(error);
		//		}
		//		errorClass:"wrongClass",
		//		validClass:"rightClass"
		//登陆操作不进行验证
		//		onsubmit:false
		//		出现错误是否焦点是否出现在第一个错误文本框
		//		focusInvalid:true,
		//获取焦点后是否清楚错误信息
		//		focusCleanup:true,
		//		errorContainer: "#info",
		//		errorLabelContainer: "#info",
		//		wrapper: "ul",
		//		errorElement: "li",

		highlight: function(element, errorClass, validClass) {
			$(element).addClass(errorClass).removeClass(validClass);
			$(element).fadeOut().fadeIn();
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).removeClass(errorClass).addClass(validClass);
		}

	});

	$("#checkBtn").bind("click", clickFun);

//增加新的校验方法
	$.validator.addMethod("postcode", function(value, element, params) {
		var postcode = /^[0-9]{6}$/;
		return this.optional(element) || (postcode.test(value));
	}, $.validator.format("请填写正确的{0}邮编！"));

})

function clickFun() {
	alert($("#demoForm").valid());
}