import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddTeacher = () => {

    const [Teacher, changeteacher] = useState(
        {
           "name": "",
        "department": "",
        "subject": "",
        "password": "",
        "confirmpassword":""


        }
    )

    const inputHandler = (event) => {
        changeteacher({ ...Teacher, [event.target.name]: event.target.value }

        )
    }

    const readValue=()=>{
        if(Teacher.password==Teacher.confirmpassword)
            {
                alert("password and confirm passwords are same")
                console.log(Teacher)
        axios.post("http://localhost:1003/",Teacher).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Successfully added")
                    }
                else{
                    alert("error")
                }
            }
        ).catch()
            }
            else{
                alert("incorrect password")
            }
        
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navbar/>
                    <center>
                        <h1> Add Teachers</h1>
                    </center>
                    <div class="card" >
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"> Name</label>
                                    <input type="text" className="form-control" name='name' value={Teacher.name} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Department</label>
                                    <input type="text" className="form-control" name='department' value={Teacher.department} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Subject</label>
                                    <input type="text" className="form-control" name='subject' value={Teacher.subject} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">password</label>
                                    <input type="password"  id="" className="form-control"  name='password' value={Teacher.password} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">confirm password</label>
                                    <input type="password"  id="" className="form-control" name='confirmpassword' value={Teacher.confirmpassword} onChange={inputHandler}  />
                                </div>
                                <center>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readValue} >ADD</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default AddTeacher
