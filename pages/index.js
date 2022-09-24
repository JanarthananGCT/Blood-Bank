import Head from "next/head"
import Link from 'next/link'
import React from "react";

export default function index() {
 /* const [data, setData] = useState()
  const [isLoading, setLoading] = useState(false)
  const location = useGeoLocation();

  const arr = [];
  const lati2 = location.coordinates.lat
  const longi2 = location.coordinates.lng
  
  const handleClick = () => {
    //console.log(location.coordinates)
  }
  function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") { dist = dist * 1.609344 }
      if (unit == "N") { dist = dist * 0.8684 }

      return dist;
    }
  }

  useEffect(() => {

    setLoading(true)

    fetch('https://livingatlas.esri.in/server1/rest/services/Health/IN_BloodBankDirectory_2017/MapServer/0/query?where=1%3D1&outFields=latitude,longitude&outSR=4326&f=json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        const dd = data.features

        dd.map((n) => {
          const lati1 = n.attributes.latitude
          const longi1 = n.attributes.longitude
          



          arr.push({ "lat": lati1, "long": longi1, "dis": distance(lati1, longi1, lati2, longi2, "K") })


        })

        const min = Math.min(...arr.map((n) => n.dis));
        console.log(min)
        setLoading(false)

        //dd.map((n) => console.log(n.attributes))


      })
  }, [])



  /* arr.map((n)=>{
     if (n.dis === min)
     {
       console.log(n.lat + n.long)
     }
   })
   arr.sort() */

  return (
    <div>


      <Head>
        <title>Donate Blood !</title>
        <meta name="description" content="Here you Doante , check and Request Blood component"></meta>
        <meta name="keywords" content="Blood bank, blood availablity,blood request, donate Blood"></meta>
      </Head>
      <div className="home">
        <br />
        <br />
        <br />

        <div className="m1">
          <h1 className="head1">Donate <span id="bld">Blood  :)</span>  !</h1>
          <br />
          <label className="cont1">Keep Blood Bank shelves full. You may need Blood someday. Someone is needing Blood somewhere. Life of some patients is resting on a fraction of hope in quest of your gift of love.We appreciate your donation! Your contribution will help us change lives  literally! Someone who would have lost their life was spared because you gave us your blood. Someones quality of life was improved because you gave us your blood.</label>
          <br />
          <br />
          <div id="button" className="row btbt">
            <Link href="https://www.google.com/maps/search/donate+blood+near+me" ><a target="_blank"><button>Donate Now !</button></a></Link>

          </div>


          <div id="button" className="row btbt">
            <Link href="/Available"><a><button>Availablity !</button></a></Link>

          </div>
        </div>
      </div>


    </div>
  )
}
