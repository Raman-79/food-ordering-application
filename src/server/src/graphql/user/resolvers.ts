import prismaClient from "../../lib/db/db";

const queries = {}
const mutations={

    createUser:async(_:any,{}:{})=>{
        return 'id';
    //    await prismaClient.user.create({        
    //    })
    }
}

export const resolvers = {queries,mutations};