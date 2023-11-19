import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import prisma from "@/libs/prismadb";

export async function Session() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession()

    if(!session?.user?.email){
      return null
    }
      
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if(!currentUser){
      return null
    }

    return{
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updateAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toString() || null   
    }


  }catch(error: any){
    return null
  }
}