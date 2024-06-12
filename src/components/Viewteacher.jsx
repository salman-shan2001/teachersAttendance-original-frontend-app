import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewteacher = () => {

        const [teacher, changeteacher] = useState([])

        const fetchData = () => {
            axios.post("http://localhost:1003/view").then(
                (response) => {
                    changeteacher(response.data)
                }
            ).catch().finally()
        }

        useEffect(() => { fetchData() }, [])

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Navbar/>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">password</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        teacher.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.name}</th>
                                                    <td>{value.department}</td>
                                                    <td>{value.subject}</td>
                                                    <td>{value.password}</td>
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


export default Viewteacher;
