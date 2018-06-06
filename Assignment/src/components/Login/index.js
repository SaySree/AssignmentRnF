import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { login } from '../../actions/items';
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showError: false,
        errorMsg: '',
        loadMain: false,
      };
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onSubmit() {
      const { dispatch } = this.props;
      const username = this.refs.login.value;
      const password = this.refs.password.value;
      if (username && password) {
        dispatch(login(username, password));
      } else {
        this.setState({
          showError: true,
          errorMsg: 'Please Enter UserName/Paasword',
        });
      }
    }
  
    render() {
      let showError = this.state.showError;
      let errorMsg = this.state.errorMsg;
      if (this.props && this.props.loggedIn) {
        if (this.props.loggedIn === 'max') {
          showError = true;
          errorMsg = 'Reached maximum attempts';
        } else {
          this.props.history.push('/admin');
        }
      }
  
      return (
        <div>
          <ul>
                            <li><Link to="/">Home</Link></li>
          </ul>
          <div style={{ alignItems: 'center', marginLeft: '40%' }} className="container">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" ref="login" className="form-control" style={{ width: '250px' }} placeholder="user Name" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" ref="password" className="form-control" style={{ width: '250px' }} placeholder="Password" />
                  </div>
                  <button type="submit" onClick={this.onSubmit} className="btn btn-default">Login</button>
                  {showError && <div><label style={{ color: 'red' }} >{errorMsg}</label></div>}
                </form>
              </div>
        </div>  
        
      );
    }
  
  }
  
  function mapStateToProps(state) {
    return {
      auth: state.auth,
      loggedIn: state.validateLoginState,
    };
  }
  
  export default connect(mapStateToProps)(Login);