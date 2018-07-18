import { EventEmitter } from 'events';
import dispatcher from './Dispatcher';

class Account extends EventEmitter
{
	constructor()
	{
		super();
		this.account = [
			{
				id:1,
				username:"admin",
				password:"123456"
			}];
		this.login = {
			login:false,
  			name:"",
  			id:"",
		};
		this.username = '';
		this.email = '';
		this.input = false;
	}
	data()
	{
		return this.account;
	}
	loginstate(userdata)
	{
		this.login = {
			name:userdata.username,
			id:userdata.id,
			login:true
		}
		this.emit('change');
	}
	check(vals)
	{
		let {username, password } = vals;
		let test = this.account.some((e) => e.username === username && e.password === password);
		if(test)
		{
			let userdata = this.account.find((e) => e.username === username && e.password === password);
			this.loginstate(userdata);
		} else {
			alert("wrongs");
		}
	}
	createaccount(vals)
	{
		let val = {
			username:vals.username.value.toLocaleLowerCase(),
		    password:vals.password.value,
		    password2:vals.password2.value,
		    email:vals.email.value.toLocaleLowerCase()
		};
		let regcheck = {
			userreg: /\w{6}/gi,
			passreg:/\w{6}/gi,
			emailreg:/\w+@\w+\.\w+/gi
		};
		let {username,password,password2,email,userreg,passreg,emailreg} = {...val, ...regcheck};
		if(this.username === '' && this.email === '')
		{
			if(userreg.test(username) && passreg.test(password) && emailreg.test(email))
			{
				if(password === password2)
				{
					this.newAccount(val);
				} else {

					alert('password is wroing');
				}
			} else {
				alert('usome sing wroing');
			}
		} else {
			alert('username or email wroing');
		}
		
	}
	newAccount(obj)
	{
		this.account.push(obj);
		this.emit('change');
	}
	checkusername(val)
	{
		let testname = this.account.some((e) => e.username === val);
		if(testname)
		{
			this.username = 'action';
			this.emit('change');	
		} else {
			this.username = '';
			this.emit('change');	
		}
	}
	checkemail(email)
	{
		let testemail = this.account.some((e) => e.email === email);
		if(testemail)
		{
			this.email = 'action';
			this.emit('change');	
		} else {
			this.email = '';
			this.emit('change');	
		}
	}
	out()
	{
		this.login = {
			login:false,
  			name:"",
  			id:"",
		}
		this.emit('change');
	}
	handleActions(action)
	{
		switch(action.type)
		{
			case 'NEW_Account':
			this.createaccount(action.text);
			break;
			case 'check':
			this.check(action.text);
			break;
			case 'out':
			this.out();
			break;
			case 'USER_NAME':
			this.checkusername(action.text);
			break;
			case 'USER_EMAIL':
			this.checkemail(action.text);
			break;
			default:
			//console.log("account",action);
		}
	}
}
const account = new Account();
dispatcher.register(account.handleActions.bind(account));
window.account = account;
window.dispatcher = dispatcher;
export default account;