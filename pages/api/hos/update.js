import connectMongo from '../../../utils/connectMongo';
import Hospital from "../../../models/hosModel"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addHospital(req, res) {
    const { Email_Id, Component_available } = req.body

    try {
        

        await connectMongo();
        //console.log("Connected")
        const update=await Hospital.updateOne({Email_Id: Email_Id}, {$set:{Component_available: Component_available}})
        //console.log(update)
        //console.log("updated")
    } catch (err) {
        res.json({ err })
    }


}