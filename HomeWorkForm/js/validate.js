/*
 * 
 * 
 * 1.用户名正则表达式^[a-zA-Z_][a-zA-Z0-9_]{2,16}$
 * 2.邮箱正则表达式： reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 * 4.密码：(?-i)(?=^.{8,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))(?=(1)(?=.*\d)|.*[^A-Za-z0-9])^.*$
 * 5.日期： 	^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$
 * 6.手机号码：/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/
 * */
$(document).ready(function() {
	var userReg = /^[a-zA-Z]\w{3,15}$/;
	var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var dateRge = /^(([1-9])|(0[1-9])|(1[0-2]))\/(([0-9])|([0-2][0-9])|(3[0-1]))\/(([0-9][0-9])|([1-2][0,9][0-9][0-9]))$/;
	var userName = $("#userName").val();
	var telphone = $("#telphone").val();
	var email = $("#email").val();
	var dateTime = $("#date").val();
	var shirtStyle = $("#style").val();
	var confidence = $("#confidence").val();
	var note = $("#notes").val();
	var size = $("input[type=radio]:checked").val();

	$("#userName").bind("focus", function() {
		if ($("#userName").val() == "") {
			$("[data-toggle=tooltip]").tooltip({
				html: true,
				trigger: "focus",
				delay: {
					show: 200,
					hide: 50
				},
				placement: "top",
				title: "<h6>用户名必须含有字符和数字的组合<h6>",

			});
		}

	});


	$("#userName").bind("blur", function() {
		userName = $(this).val();
		if (userReg.test(userName)) {
			//alert("right");
			$("#userNameInfo").html("<font color='green'>用户名正确</font>");
		} else {
			//alert("wrong");
			$("#userNameInfo").html("<font color='red'>用户名填写错误</font>");
			//$("#userNameInfo").select();
		}
		//alert("当前值:"+$(this).val())
	});

	$("#telphone").bind("blur", function() {
		telphone = $(this).val();
		if (phoneReg.test(telphone)) {
			//alert("right");
			$("#phoneInfo").html("<font color='green'>电话正确</font>");
		} else {
			//alert("wrong");
			$("#phoneInfo").html("<font color='red'>电话填写错误</font>");
			//$("#userNameInfo").select();
		}
		//alert("当前值:"+$(this).val())
	});

	$("#email").bind("blur", function() {
		email = $(this).val();
		//alert("当前值:"+$(this).val())
	});

	$("#email").bind("blur", function() {
		email = $(this).val();
		if (emailReg.test(email)) {
			//alert("right");
			$("#emailInfo").html("<font color='green'>邮箱正确</font>");
		} else {
			//alert("wrong");
			$("#emailInfo").html("<font color='red'>邮箱填写错误</font>");
			//$("#userNameInfo").select();
		}
		//alert("当前值:"+$(this).val())
	});

	$("#date").bind("blur", function() {
		//alert("当前值:"+$(this).val())
		dateTime = $(this).val();
	});
	$("#date").bind("blur", function() {
		dateTime = $(this).val();
		//alert("date:"+dateTime +"result="+dateRge.test(dateTime));
		if (dateRge.test(dateTime)) {
			//alert("right");
			$("#dateInfo").html("<font color='green'>日期填写正确</font>");
		} else {
			//alert("wrong");
			$("#dateInfo").html("<font color='red'>日期填写错误</font>");
			//$("#userNameInfo").select();
		}
		//alert("当前值:"+$(this).val())
	});

	//单选按钮


	//
	$("#style").bind("blur", function() {
		//alert("当前值:"+$(this).val())
		shirtStyle = $(this).val();
	});


	$("input[type=radio]").bind("click", function() {
		$(this).each(function() {
			size = $(this).val();
		})
	});

	$("#confidence").bind("change", function() {
		$("#confidenceDisplay").html($(this).val() + "%");
		confidence = $(this).val();
	});


	$("#notes").bind("blur", function() {
		note = $(this).val();
		//alert("当前值:"+$(this).val())
	});

	$("#submitBtn").on("click", function() {
		//alert("userName:" + userName + "\n" + "telphone：" + telphone + "\n" + "email:" + email + "\n" + "dateTime:" + dateTime + "\n" + "stytle:" + shirtStyle + "\n" + "size=" + size + "\n" + "confidence:" + confidence + "%\n" + "note:" + note);
		$("#allMsg").append("<tr><td>UserName</td><td>" + userName + "</td></tr>");
		$("#allMsg").append("<tr><td>Telphone</td><td>" + telphone + "</td></tr>");
		$("#allMsg").append("<tr><td>Email</td><td>" + email + "</td></tr>");
		$("#allMsg").append("<tr><td>DateTime</td><td>" + dateTime + "</td></tr>");
		$("#allMsg").append("<tr><td>Style</td><td>" + shirtStyle + "</td></tr>");
		$("#allMsg").append("<tr><td>Size</td><td>" + size + "</td></tr>");
		$("#allMsg").append("<tr><td>Confidence</td><td>" + confidence + "%</td></tr>");
		$("#allMsg").append("<tr><td>Note</td><td>" + note + "</td></tr>");
	});



	/**
	 * 选中文本框全选所有元素
	 */
	$("input").on("click", function() {
		$(this).select();
	});

})