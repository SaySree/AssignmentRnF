import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component{
    componentWillMount(){
        console.log(this.props);
    }
  render() {
      return <Redirect to='/' />
  }
}

export default Logout;