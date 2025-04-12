import express from "express"
import { pingHandler } from "../../controller/ping.controller"

const pingRouter = express.Router()

pingRouter.get('/',pingHandler);

pingRouter.get('/health',(req,res)=> {
    res.send('Your health is good')
})

export default pingRouter;