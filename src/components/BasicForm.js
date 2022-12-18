import React, { useState } from 'react'
import {useFormik} from "formik";
import { basicSchema } from '../schemas';




const BasicForm = () => {

    const [email, setEmail] = useState("")

    const onSubmit = async (values,actions)=>{
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();

    }


    const sendEmail = async(e) =>{
        e.preventDefault() ;
        const res = await fetch ("/register", {
            method : "POST",
            headers: {
                "Content-Type" :"application/json"
            }, body:JSON.stringify({
                email
            })
        });
        const data = await res.json();
        if(data.status === 401 || !data){
            console.log("error")
        } else{
            console.log("Email sent ")
            setEmail("")
        }
    }
    
    const {values,errors,touched,isSubmitting, handleBlur,handleChange, handleSubmit}= useFormik({
        initialValues :{
            email:"",
            age:"",
            password:"",
            confirmPassword:""
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    console.log(errors);
    
  return (
    <form onSubmit ={handleSubmit}autoComplete='off'>
        <label htmlFor='email'>Email</label>
        <input 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className ={errors.email && touched.email ? "input-error":""}
        id ="email" type="email" placeholder =" Enter Your email"></input>
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <label htmlFor='age'>Age</label>
        <input 
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className ={errors.age && touched.age ? "input-error":""}
        id ="age" type="number" placeholder =" Enter Your Age"></input>
        {errors.age && touched.age && <p className='error'>{errors.age}</p>}

        <label htmlFor='password'>Password</label>
        <input 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className ={errors.password && touched.password ? "input-error":""}
        id ="password" type="password" placeholder =" Enter Your Password"></input>
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input 
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className ={errors.confirmPassword && touched.confirmPassword ? "input-error":""}
        id ="confirmPassword" type="password" placeholder =" Confirm Your Password"></input>
        {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

        <button disabled={isSubmitting} type='submit' onClick={sendEmail}>Submit</button>

        


    </form>
  )
}

export default BasicForm