import React, { Component } from 'react';
 import axios from 'axios';
import {  Link } from 'react-router-dom';
import Feedback from '../Feedback';


class Blog extends Component {
    state={
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get( 'https://assignment-fb5e2.firebaseio.com/submit.json' )
        .then( response => {
            const fetchOrders=[];
            for(let key in response.data) {
               fetchOrders.push({
                   ...response.data[key],
                   id: key
               });
            }
            this.setState( { loading: false,orders:fetchOrders } );
            //this.props.history.push( '/' );
            console.log(response.data);
        } )
        .catch( error => {
            this.setState( { loading: false } );
        } );
    }
    render () {
        return (
            <div>
          <ul style={{margin: '20px',height: '60px',fontSize: '25px',fontWeight: '800',padding: '0px'}}>
            <Link to="/">Home</Link>
          </ul>
          <ul style={{margin: '20px',height: '60px',fontSize: '25px',fontWeight: '800',padding: '0px'}}>
            <Link to="/logout">Log Out</Link>
          </ul>
          <div style={{textAlign: 'center'}}>
                <h2>Below are the Customer details submitted using Form</h2>  
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                
            </div>
            <div>
            {this.state.orders.map(order => (
                    <Feedback 
                        key={order.id}
                        firstname={order.Firstname}
                        lastname={order.Lastname}
                        street={order.street}
                        zipCode={order.zipCode}
                        country={order.country}
                        email={order.email}
                         />
                ))}
            </div>    
          </div>
            
        );
    }
}

export default Blog;