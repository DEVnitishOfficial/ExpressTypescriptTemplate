import { NextFunction, Request,Response } from "express"
import { AnyZodObject } from "zod"


export const validateRequestBody = (schema:AnyZodObject) => {
    return async (req:Request,res:Response,next:NextFunction)=> {
        try{
            await schema.parseAsync(req.body)
            console.log('request body is validated succcessfully');
        }catch(error){
            res.status(400).json({
            success:false,
            message: "invalid schema",
            error:error
           })
        }
        next();
    }
}

export const validateQueryParams = (schema:AnyZodObject) => {
    return async (req:Request,res:Response,next:NextFunction)=> {
        try{
            await schema.parseAsync(req.query)
            console.log('Query params is validated succcessfully');
        }catch(error){
            res.status(400).json({
            success:false,
            message: "invalid schema",
            error:error
           })
        }
    }
}