"use server"

import User from "../models/user.model";
import { connectToDB } from "../mongoose"

export async function updatedUser(
    userId: string,
    username: string,
    name: string,
    ): Promise<void> {
    connectToDB();


    try {
        await User.findOneAndUpdate(
            { id: userId},
            { username: username.toLowerCase(), },
            { upsert: true }
            );
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
   
}