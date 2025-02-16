"use server";

import bcrypt from "bcrypt"
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {

    const { email, password } = payload;

    const usersCollection = dbConnect(collectionNamesObj.usersCollection);
    const user = await usersCollection.findOne({ email })

    if (!user) return null
    const isPasswordOK = await bcrypt.compare(password, user.password);

    if (!isPasswordOK) return null

    return user;
}