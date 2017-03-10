//验证规则
var userReg = /^[a-zA-Z_][a-zA-Z0-9_]{2,16}$/;
var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var ageReg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;

function validata(ele) {
	$("#" + ele).bind("focus", function() {
		$("#" + ele).removeClass("validata_error");
	});
	$("#" + ele).bind("blur", function() {
		var param = $("#" + ele).val();
		if (param == "") {
			$("#" + ele).addClass("validata_error");
			$("#" + ele + "Info").html("<span><font color='red'>不能为空</font></span>");
		} else {
			//用户名检测
			if (ele == "userName" && userReg.test(param)) {
				$("#" + ele).addClass("validata_sucess");
				$("#" + ele + "Info").html("<span><font color='green'>用户名合法有效</font></span>");
			} else if (ele == "userPass" && userReg.test(param)) {
				$("#" + ele).addClass("validata_sucess");
				$("#" + ele + "Info").html("<span><font color='green'>密码合法有效</font></span>");
			} else if(ele == "userAge" && ageReg.test(param)){
				$("#" + ele).addClass("validata_sucess");
				$("#" + ele + "Info").html("<span><font color='green'>年龄合法有效</font></span>");
			}else if(ele == "userEmail" && emailReg.test(param)){
				$("#" + ele).addClass("validata_sucess");
				$("#" + ele + "Info").html("<span><font color='green'>邮箱合法有效</font></span>");
			}else {
				$("#" + ele).addClass("validata_error");
				$("#" + ele + "Info").html("<span><font color='red'>格式不对</font></span>");
			}
			
		}
	});
}