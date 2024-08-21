// this code is for 
// 1. booking a room
import {validBooking} from "../Helper/ValidateBooking.js"
export const customers = [
    {
        id:1,
        customer_name: "Ragav",
        Date: "22-09-2024",
        start_time:6,
        end_time:8,
        room_id:101
    },
    {
        id:2,
        customer_name: "Ragav",
        Date: "22-09-2024",
        start_time:6,
        end_time:8,
        room_id:102
    }
]


export const customerService = (req,res)=>{
    try{
        let boolBooking = validBooking(customers,req.body.Date,req.body.start_time,req.body.end_time,req.body.room_id);
        if(boolBooking){
            req.body.id = customers.length?customers[customers.length-1].id+1:1;
            customers.push(req.body);
        res.status(201).send({
            message: "Customer room booked successfully" ,
            data: customers
        })
        }
        else{
            res.status(403).send({
                message: 'Booking already exists'
            });
        }
}
    catch(err){
        res.status(500).send({
            message: "internal error"
        });
    }
    
}