import mongoose from 'mongoose';

const connectMongo = async () =>mongoose.connect("mongodb+srv://Admin:jana1729J@barcodebillgenerator.h7ziz.mongodb.net/BillFields?retryWrites=true&w=majority")

export default connectMongo;