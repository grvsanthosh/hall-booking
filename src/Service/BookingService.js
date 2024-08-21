// this code is for 
// 1. list all rooms with booked data
// 2. list all customers with booked data
// 3. list how many times a customer has booked rooms
import {customers} from './CustomerService.js'


    
const roomBooked = ()=>{
    
   let data = customers.map((e)=>{
        return [{id:e.id,room_name:e.room_id,booked_status:true,customer_name:e.customer_name,date:e.Date,start_time:e.start_time,end_time:e.end_time}]
   
    })
    return data
}

const customerBooked = ()=>{
    let data = customers.map((e)=>{
        return [{id:e.id,customer_name:e.customer_name,room_name:e.room_id,date:e.Date,start_time:e.start_time,end_time:e.end_time}]
    })
    return data;
}


const customersBookingHistory = ()=>{
    const date = new Date();
    let dateval = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
    let data = customers.map((e)=>{
        return[{id:e.id,customer_name:e.customer_name,room_name:e.room_id,date:dateval,start_time:e.start_time,end_time:e.end_time,booking_id:`${e.customer_name}_${e.room_id}_${e.Date}`,booking_date:e.Date,booking_status:true}]
    })
    return data
}

const roombookedService = (req,res)=>{
    try{
        let data = roomBooked();
        
        res.status(200).send({message:"booking service", data:data});
    }
    catch(err){
        console.error(err);
    }
}

const customerService = (req,res)=>{
    try{
        let data = customerBooked();
        res.status(200).send({message:"customer service", data:data})
    }
    catch(err){
        console.error(err);
    }
}

const customerHistory = (req,res)=>{
    try{
        let data = customersBookingHistory();
        res.status(200).send({message:"customer history", data:data})
    }
    catch(err){
        console.error(err);
    }
}

export default {roombookedService,customerService,customerHistory}