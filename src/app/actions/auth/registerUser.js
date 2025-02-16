'use server'

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"
import bcrypt from 'bcrypt' //password hijibiji show kore actual na dekhaia
export const registerUser=async(payload)=>{
const usersCollection=dbConnect(collectionNamesObj.usersCollection)
const {email,password}=payload;
if (!email||!password) {
return null;
    
}
const user=await usersCollection.findOne({email:payload.email})
if (!user) {
    const hashPassword=await bcrypt.hash(password,10)
    payload.password=hashPassword
    const result=await usersCollection.insertOne(payload)
    result.insertedId=result.insertedId.toString()
    return result;
}
return null;

}