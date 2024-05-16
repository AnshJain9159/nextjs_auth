import {connect} from '@/dbConfig/dbCongig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'



connect()


export async function GET(){
    try {
        const response = NextResponse.json({
            message: "LogOut Successfully",
            success:true
        })

        response.cookies.set("token", "", {
            httpOnly:true,
            expires: new Date(0)
        },)
        return response; 
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})

    }
}