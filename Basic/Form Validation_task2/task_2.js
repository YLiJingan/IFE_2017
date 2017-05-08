window.onload = function(){
	var username = document.getElementsByTagName('input')[0];
	var pwd = document.getElementsByTagName('input')[1];
	var repwd = document.getElementsByTagName('input')[2];
	var email = document.getElementsByTagName('input')[3];
	var phone = document.getElementsByTagName('input')[4];
	var btn = document.getElementsByTagName('input')[5];
	var mesg_name = document.getElementsByTagName("p")[0];
	var mesg_pwd = document.getElementsByTagName("p")[1];
	var mesg_repwd = document.getElementsByTagName("p")[2];
	var mesg_email = document.getElementsByTagName("p")[3];
	var mesg_phone = document.getElementsByTagName("p")[4];
	function nameFun(){
		if(username.value == ''){
			username.style.border = "1px red solid";
			mesg_name .innerHTML = '姓名不能为空';
			mesg_name .style.color = 'red';
		}else{
			var len = 0;
			for(var i=0;i<username.value.length;i++){
				var sum = username.value.charCodeAt(i);
				if(sum<0x00 || sum>0xFF){
					len +=2;                       /*中文为两个字符*/
				}else{
					len++;
				}
			}
			if(len<4 || len>16){
				username.style.border = "1px red solid";
				mesg_name .innerHTML = '长度为4-16个字符';
				mesg_name .style.color = 'red';
			}else{
				username.style.border = "1px green solid";
				mesg_name .innerHTML = '名称格式正确';
				mesg_name .style.color = 'green';
			}
		}
	}
	function pwdFun(){
		if(pwd.value == ''){
			pwd.style.border = "1px red solid";
			mesg_pwd.innerHTML = '密码不能为空';
			mesg_pwd.style.color = 'red';
		}else{
			let pattern = /^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$/;
			if(!pattern.test(pwd.value)){
				pwd.style.border = "1px red solid";
				mesg_pwd.innerHTML = '密码为6-20位字母与数字组合';
				mesg_pwd.style.color = 'red';
			}else{
				pwd.style.border = "1px green solid";
				mesg_pwd.innerHTML = '密码正确';
				mesg_pwd.style.color = 'green';
			}
		}
	}
	function repwdFun(){
		if(repwd.value == ''){
			repwd.style.border = "1px red solid";
			mesg_repwd.innerHTML = '密码不能为空';
			mesg_repwd.style.color = 'red';
		}else{
			if(repwd.value !== pwd.value){
				repwd.style.border = "1px red solid";
				mesg_repwd.innerHTML = '两次密码输入不一致';
				mesg_repwd.style.color = 'red';
			}else{
				pwd.style.border = "1px green solid";
				mesg_repwd.innerHTML = '密码正确';
				mesg_repwd.style.color = 'green';
			}			
		}
	}
	function emailFun(){
		if(email.value == ''){
			email.style.border = "1px red solid";
			mesg_email.innerHTML = '邮箱不能为空';
			mesg_email.style.color = 'red';
		}else{
			let pattern = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
			if(!pattern.test(email.value)){
				email.style.border = "1px red solid";
				mesg_email.innerHTML = '邮箱格式不正确';
				mesg_email.style.color = 'red';
			}else{
				email.style.border = "1px green solid";
				mesg_email.innerHTML = '邮箱正确';
				mesg_email.style.color = 'green';
			}
		}
	}
	function phoneFun(){
		if(phone.value == ''){
			phone.style.border = "1px red solid";
			mesg_phone.innerHTML = '手机号不能为空';
			mesg_phone.style.color = 'red';
		}else{
			let pattern = /^1(3|4|5|7|8)\d{9}$/;
			if(!pattern.test(phone.value)){
				phone.style.border = "1px red solid";
				mesg_phone.innerHTML = '手机号码格式不对';
				mesg_phone.style.color = 'red';
			}else{
				phone.style.border = "1px green solid";
				mesg_phone.innerHTML = '手机号正确';
				mesg_phone.style.color = 'green';
			}			
		}
	}
	username.onblur = function(){
		nameFun();
	}
	pwd.onblur = function(){
		pwdFun();
	}
	repwd.onblur = function(){
		repwdFun();
	}
	email.onblur = function(){
		emailFun();
	}
	phone.onblur = function(){
		phoneFun();
	}
	username.onfocus = function(){
		mesg_name.style.display = 'block';
	}
	pwd.onfocus = function(){
		mesg_pwd.style.display = 'block';
	}
	repwd.onfocus = function(){
		mesg_repwd.style.display = 'block';
	}
	email.onfocus = function(){
		mesg_email.style.display = 'block';
	}
	phone.onfocus = function(){
		mesg_phone.style.display = 'block';
	}
	btn.oncilck = function(){
		nameFun();
		pwdFun();
		repwdFun();
		emailFun();
		phoneFun();
	}
}