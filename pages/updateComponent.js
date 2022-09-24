import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'


function hosLogin() {
  const [Email_Id, setEmail_Id] = useState();
  const [Component_available, setComponent_available] = useState();
  const router = useRouter()
  const submit = async (e) => {
    e.preventDefault();

    //console.log(newHospital)
    try {
      const hosLogin = { Email_Id, Component_available };

      await fetch("/api/hos/update", {


        method: "POST",


        body: JSON.stringify(hosLogin),


        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      router.push("/");
    } catch (err) {
      console.log(err)
    }


  }

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );




  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label className="other">Didn't Have Account ?</label>

      <Link href="/createhos"><a><div id="button" className="row">
        <button type="submit" >Create Record</button>
      </div></a></Link>



    </div>
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
          <FormHeader title="Update !" className="bd1" />
          <div>

            <form onSubmit={submit}>
              <div className="row">
                <label>Email_Id</label>
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail_Id(e.target.value)} />
              </div>
              <div className="row">
                <label>Components</label>
                <input type="text" placeholder="Available Component" onChange={(e) => setComponent_available(e.target.value)} />
              </div>
              <div id="button" className="row">
                <button type="submit" >Update !</button>
              </div>
            </form>

          </div>
          <OtherMethods />
          <br />
          <br />
        </div>

      </div>
    </>

  )
}






export default hosLogin