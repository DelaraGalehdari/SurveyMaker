import React from 'react';


export default({input,lable,meta:{error,touched}})=>{
   
    return(
        <div style={{marginLeft:'2%',marginRight:'2%',padding:'1%'}}>
            <label>{lable}</label>
            <input {...input} style={{marginBottom:'5px'}} />
            <div className="red-text" style={{marginBottom:'20px'}}>
            {touched && error}
            </div>
            
        </div>
    )
}