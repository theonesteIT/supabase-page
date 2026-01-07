import React,{useState} from "react";
import {supabase} from "./supabaseClient";

function FormSupabase() {

    const [formData,setFormData]= useState({
        Names:"",
        Email:""
    });

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

   async function handleSubmit(e) {
  e.preventDefault();

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        Names: formData.Names,
        Email: formData.Email
      }
    ]);

  if (error) {
    console.error("Supabase error:", error.message);
    alert("Error: " + error.message);
  } else {
    console.log("Inserted data:", data);
    alert("Data inserted successfully!");
    setFormData({ Names: "", Email: "" });
  }
}



    return(
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" name="Names" onChange={handleChange} value={formData.Names} placeholder="names"/>
            <input type="email" name="Email" onChange={handleChange} value={formData.Email} placeholder="email" />
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default FormSupabase;