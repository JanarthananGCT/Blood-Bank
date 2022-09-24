import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
function Signup() {
  const [Email_Id, setEmail_Id] = useState();
  const [Password, setPassword] = useState();
  const [Hospital_Name, setHospital_Name] = useState();
  const [Contact_No, setContact_No] = useState();
  const [Address, setAddress] = useState();
  const [Postal_Code, setPostal_Code] = useState();
  const [Component_available, setComponent_available] = useState("none");
  const router = useRouter()
  const submit = async (e) => {
    e.preventDefault();

    //console.log(newHospital)
    try {
      const newHospital = { Email_Id, Password, Hospital_Name, Contact_No, Address, Postal_Code, Component_available };
      await fetch("/api/hos/addHos", {


        method: "POST",


        body: JSON.stringify(newHospital),


        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      /*
      const loginResponse = await fetch("http://localhost:5000/hospitals/login", {


        method: "POST",


        body: JSON.stringify({ Email_Id, Password }),


        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      localStorage.setItem("auth-token", loginResponse.data.token);
      */
      router.push("/updateComponent");
    } catch (err) {
      console.log(err)
    }


  }
  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label className="other">Already Have a record ?</label>

      <Link href="/updateComponent"><a><div id="button" className="row">
        <button type="submit" >Update Record</button>
      </div></a></Link>



    </div>
  );
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );
  return (
    <>
      <Head>
        <title>Donate Blood !</title>
        <meta name="description" content="Here you Doante , check and Request Blood component"></meta>
        <meta name="keywords" content="Blood bank, blood availablity,blood request, donate Blood"></meta>
      </Head>
      <div className=".home bdy">
        <div >
          <FormHeader title="Create record !" className="bd1" />
          <div>
            <form onSubmit={submit}>
              <div className="row">
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" name="Email" className="formin" onChange={(e) => setEmail_Id(e.target.value)} />
              </div>
              <div className="row">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="Password" className="formin" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="row">
                <label>Contact_Number</label>
                <input type="number" placeholder="contact" name="Contact_Number" className="formin" onChange={(e) => setContact_No(e.target.value)} />
              </div>
              <div className="row">
                <label>Hospital_Name</label>
                <input type="text" placeholder="Hospital Name" name="Hospital_Name" className="formin" onChange={(e) => setHospital_Name(e.target.value)} />
              </div>
              <div className="row">
                <label>Address</label>
                <input type="text" placeholder="123, West street , California" name="Address" className="formin" onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div className="row">
                <label>Postal_Code</label>
                <input type="number" placeholder="Postal code" name="Postal_Code" className="formin" onChange={(e) => setPostal_Code(e.target.value)} />
              </div>
              <div id="button" className="row">
                <button type="submit" name='signup'>Create Record</button>
              </div>
            </form>
          </div>
          <OtherMethods />

        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>

  )
}






export default Signup