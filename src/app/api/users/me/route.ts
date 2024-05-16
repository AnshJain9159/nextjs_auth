import {connect} from '@/dbConfig/dbCongig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from '@/helper/getDataFromToken'


connect()

export async function  POST(request:NextRequest){
    //extract data from token 
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id:userId}).select("-password")

    return NextResponse.json({
        message: "User Found",
        data: user
    }
    )
}