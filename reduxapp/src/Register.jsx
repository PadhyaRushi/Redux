import React from 'react';
import { useState } from 'react';

function Register(props) {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[phone,setphone]=useState('') 
    const[country,setcountry]=useState('')
    const NameHndl=(e)=>{
        setname(e.target.value)
    }
    const EmailHndl=(e)=>{
        setemail(e.target.value)
    }
    const PhoneHndl=(e)=>{
        setphone(e.target.value)
    }
    const CountryHndl=(e)=>{
        setcountry(e.target.value)
    }
    return (
      <>
        <div className="container mt-5">
            <table className='table'>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" id='name' className='form-contol'
                    onChange={(e)=>PhoneHndl(e)} /></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="text" id='email' className='form-contol'
                    onChange={(e)=>EmailHndl(e)} /></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text" id='phone' className='form-contol'
                    onChange={(e)=>PhoneHndl(e)} /></td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td><input type="text" id='country' className='form-contol'
                    onChange={(e)=>CountryHndl(e)} /></td>
                </tr>
                <tr>
                    <button className='btn btn-primary' type='button'>Submit</button>
                </tr>
            </table>

        </div>
      </>
    );
}

export default Register;