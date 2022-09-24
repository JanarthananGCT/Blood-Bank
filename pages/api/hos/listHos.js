import connectMongo from '../../../utils/connectMongo';
import Hospital from "../../../models/hosModel"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addHospital(req, res) {
    const { Hospital_Name, Email_Id, Contact_No, Password, Address, Postal_Code } = req.body
    await connectMongo();
    
    const output = await Hospital.find()
    //console.log(output)
    return (res.json(output))

}