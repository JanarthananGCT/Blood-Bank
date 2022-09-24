import { Schema,model,models } from "mongoose";

const hosSchema = new Schema({
    Hospital_Name: { type: String, required: true},
    Email_Id: { type: String, required: true},
    Contact_No: { type: Number, required: true},
    Password: { type: String, required: true},
    Address: { type: String, required: true},
    Postal_Code: { type: Number, required: true},
    Component_available: {type: String,required: true}
  });

  const Hospital = models.Hospital || model("Hospital",hosSchema);

  export default Hospital;