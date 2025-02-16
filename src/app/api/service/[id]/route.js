import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";
export const DELETE=async(req,{params})=>{
    const p=await params;
    const bookingsCollection=dbConnect(collectionNamesObj.bookingsCollection)
    const query={_id:new ObjectId(p.id)}
    //validation
    const session=await getServerSession(authOptions)
    const currentBooking=await bookingsCollection.findOne(query)
    const isOwnerOk=session?.user?.email==currentBooking?.email
    console.log(isOwnerOk);
    
    //delete user specific booking
  if (isOwnerOk) {
    const deleteResponse=await bookingsCollection.deleteOne(query)
    revalidatePath('/my-bookings')
    return NextResponse.json(deleteResponse)
  }
  else{
    return NextResponse.json({success:false,message:'Forbidden action'},{status:401})
  }
   
}
export const GET=async(req,{params})=>{
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data) 
}