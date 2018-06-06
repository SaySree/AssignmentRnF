import React from 'react';



const feedback = ( props ) => {
    

    return (
        <div style={{margin:'20px auto',width:'80%',textAlign: 'center',boxShadow: '0 2px 3px #ccc',border:'1px solid #eee',padding:'10px'}}>
            <p><strong>Name :  </strong>{props.firstname} {props.lastname}</p>
            <p><strong>Address :  </strong>{props.street}</p>
            <p><strong>ZipCode :  </strong>{props.zipCode}</p>
            <p><strong>Country :  </strong>{props.country}</p>
            <p><strong>EmailId :  </strong>{props.email}</p>
        </div>
    );
};

export default feedback;