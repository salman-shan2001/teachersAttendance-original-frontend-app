import axios from 'axios'
import React, { useState } from 'react'

const SearchTeacher = () => {

    const [teacher, changeteacher] = useState(
        {
            "name": ""
        }
    )

    const [result, changereselt] = useState([
        {

            "name": "",
            "department": "",
            "subject": "",
            "password": ""
        }
    ]

    )


    const deleteCourse = (id) => {                                     //delete function
        let input = { "_id": id }
        axios.post("http://localhost:1003/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfuly deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }

    const inputHandler = (event) => {
        changeteacher({ ...teacher, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        console.log(teacher)
        axios.post("http://localhost:1003/search", teacher).then(
            (response) => {
                changereselt(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">

                        <center>
                            <h1>
                                Search Teachers
                            </h1>
                        </center>
                        <br></br><br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' value={teacher.name} onChange={inputHandler} />
                                </div>

                                <center>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-primary" onClick={readvalue}>SEARCH</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Sebject</th>
                                    <th scope="col">password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.department}</td>
                                                <td>{value.subject}</td>
                                                <td>{value.password}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => { deleteCourse(value._id) }}>DELETE</button>
                                                </td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchTeacher
