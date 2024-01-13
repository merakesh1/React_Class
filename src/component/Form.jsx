import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const submitForm = (e) => {
        e.preventDefault();
        if (email === "" || name === "" || password === "") {
            alert("please fill all the fields")
            return
        }
        const obj = { name, email, password }
        let myobj = JSON.stringify(obj)
        localStorage.setItem("myDetails", myobj)
        alert("form submitted successfully!")
    }

    const formChange = (e, n) => {
        if (n === "email") {
            setEmail(e.target.value)
        }
        else if (n === "userName") {
            setName(e.target.value)
        }
        else if (n === "password") {
            setPassword(e.target.value)
        }
    }
    return (
        <>
            <h1 className='text-center mt-5 mb-3' style={{ fontSize: "25px" }}>{"< Page />"}</h1>
            <div className='container-sm w-25 bg-light p-4 rounded border border-info'>
                <form onSubmit={submitForm}>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input className='form-control mb-3' value={email} id="email" type="email" onChange={(e) => formChange(e, "email")} />

                    <label className='form-label' htmlFor='userName'>UserName</label>
                    <input className='form-control mb-3' value={name} id="userName" type="text" onChange={(e) => formChange(e, "userName")} />
                    <label className='form-label' htmlFor='password'>Password</label>
                    <div className="input-group mb-3">
                        <input className='form-control' value={password} id="password" type="password" onChange={(e) => formChange(e, "password")} />
                        <div className="input-group-append">
                            <button onClick={() => {
                                let typee = document.getElementById("password").type
                                if (typee === "password") {
                                    document.getElementById("password").type = "text"
                                }
                                else {
                                    document.getElementById("password").type = "password"
                                }
                            }} className="btn btn-outline-secondary" type="button">Show Password</button>
                        </div>
                    </div>

                    <input className='btn btn-outline-primary btn-sm mt-3' type="submit" />
                </form>
            </div>
        </>
    )
}

export default Form
