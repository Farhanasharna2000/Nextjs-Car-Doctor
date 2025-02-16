import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';

export const GET=async(req,{params})=>{
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data) 
}