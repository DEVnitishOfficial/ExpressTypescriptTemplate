import { Request, Response } from "express"
export const pingHandler = (req:Request,res:Response)=> {
    console.log('reqbodey',req.body);
    res.send('pong')
}