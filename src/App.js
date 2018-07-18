//js files
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
//pages
import Login from './pages/login';
import Home from './pages/home';
import Loding from './pages/loding';
import Workflow from './pages/workflow';
//CSS
import './css/main.css';
import './css/style.css';
//fulx
import account from './flux/data';
import * as action from './flux/loginaction';
class App extends Component {
	constructor(props) {
  		super(props);
  		this.accountstate = this.AccountSTATE.bind(this);
  		this.state = {
  			login:account.login.login,
  			name:account.login.name,
  			id:account.login.id,
  			loding:false
  		}
	}
	AccountSTATE()
	{
		this.setState({
			login:account.login.login,
  			name:account.login.name,
  			id:account.login.id,
  			loding:false
		});
	}
	componentDidMount()
	{
		account.on('change', this.accountstate);
	}
	componentWillUnmount()
	{
		account.removeListener('change',this.accountstate);
	}
	check(val,event)
	{
		event.preventDefault();
		let vals = {
			username:val.username.value.toLocaleLowerCase(),
		    password:val.password.value.toLocaleLowerCase()
		};
		this.setState({
				loding:true
		});
		setTimeout(() => {
			action.check(vals);
				this.setState({
				loding:false
			});
		},100)

	}
	out()
	{
		action.OUT();
	}
  	render() {
    return (
    <Router>
	    <Switch>
	      	<Route path="/" exact render={() => {
	      		if(this.state.login)
	      		{
	      			return <Redirect to={`/${this.state.name}`} />
	      		}else if (this.state.loding) {
	      			return <Loding />;
	      		} else {
	      			return <Login check={this.check.bind(this)} />
	      		}
	      	}} />
	      	<Route path="/:user/" exact render={({match}) => this.state.login? <Redirect to={`/${match.params.user}/home`} /> : <Redirect to="/" />} />
	      	<Route path="/:user/home" exact render={({match}) => this.state.login? <Home id={this.state.id} user={match.params.user} out={this.out.bind(this)}/> : <Redirect to="/" />}/>
	      	<Route path="/:user/workflow" exact render={({match}) => this.state.login? <Workflow id={this.state.id} user={match.params.user} out={this.out.bind(this)} /> : <Redirect to="/" />}/>
	    </Switch>
      </Router>
    );
  }
}

export default App;
