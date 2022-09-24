import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"
import Head from "next/head";
import Link from "next/link";
function Available() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/hos/listHos')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                //console.log(data)


                setLoading(false)
            })
    },[])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <>
            <Head>
                <title>Donate Blood !</title>
            </Head>
            <div>
                <br />
                <br />
                <br />
                <br />


                <Container>
                    <div className="tble">
                        <tbody>
                            <tr>
                                <th>S.no</th>
                                <th>Email_Id</th>
                                <th>Hospital_Name</th>
                                <th>Contact No</th>
                                <th>Address</th>
                                <th>Postal_Code</th>
                                <th>Blood Component Available</th>
                                <th>Request Status</th>
                            </tr>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.Email_Id}</td>
                                    <td>{item.Hospital_Name}</td>
                                    <td>{item.Contact_No}</td>
                                    <td>{item.Address}</td>

                                    <td>{item.Postal_Code}</td>
                                    <td>{item.Component_available}</td>
                                    <td><Link href={`https://mail.google.com/mail/u/0/?fs=1&to=${item.Email_Id}.com&su=Request+For+Blood+Component&body=I+need+blood+component+if+you+have+kindly+contact+me&tf=cm`} ><a target="_blank"><button id="btn45" >Request</button></a></Link></td>
                                </tr>
                            ))}
                        </tbody>

                    </div>

                </Container>
            </div>
        </>

    )
}
export default Available


