import React, { Component } from 'react';
// import axios from 'axios';
import {  Link } from 'react-router-dom';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header style={{height: '250px'}}>
                    <nav >
                        <ul style={{display: 'inline-flex'}}>
                            <ul style={{margin: '20px',fontSize: '20px'}}><Link to="/">Home</Link></ul>
                            <ul style={{margin: '20px',fontSize: '20px'}}><Link to={{
                                pathname: '/login',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Log In</Link></ul>
                            <ul style={{margin: '20px',fontSize: '20px'}}><Link to= "/admin">Administration</Link></ul>
                            <ul style={{margin: '20px',fontSize: '20px'}}><Link to= "/forms">Form</Link></ul>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <div style={{textAlign : 'center'}}>
                    <h1>Welcome to RnF Technologies Private Limited</h1>
                </div>    
            </div>
        );
    }
}

export default Blog;