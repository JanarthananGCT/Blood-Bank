import connectMongo from '../../../utils/connectMongo';
import Hospital from "../../../models/hosModel"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addHospital(req, res) {
    const { Hospital_Name, Email_Id, Contact_No, Password, Address, Postal_Code ,Component_available} = req.body

    try {
        const data = req.body
        //console.log("connecting")
        await connectMongo();
        //console.log("Connected")
        //console.log(req.body)




        if (data.Email_Id) {
            const hos = await Hospital.create(data);

            //console.log("Created Document");
            res.json(hos)
        }



    } catch (err) {
        res.json({ err })
    }
    

}