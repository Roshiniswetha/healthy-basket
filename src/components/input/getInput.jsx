import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"

function GetInput() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    useEffect(()=>{
      fetch(`http://localhost:8080/basket/fruits`,{
        method:'GET',
        headers:{'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'},
      }).then(response=>response.json())
        .then((data)=>console.log(data[0].name))
        .catch(err=>console.log(err))
    },[])


    const onSubmit = (data) =>{
      console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    </div>
  )
}

export default GetInput