// this code is for 
// 1. creating a room
import {validRoom} from '../Helper/ValidRoom.js'
export const rooms = [
    {
        id:1,
        amenities:{
            AC: "yes",
            TV: "yes",
            WIFI: "yes",
            Refrigirator: "no",
            Telephone: "yes",
            Bath_tub: "no"
        },
        seats_available: 3,
        price_per_hour: 590,
        room_id:101
    },
    {
        id:2,
        amenities:{
            AC: "yes",
            TV: "yes",
            WIFI: "no",
            Refrigirator: "no",
            Telephone: "yes",
            Bath_tub: "yes"
        },
        seats_available: 5,
        price_per_hour: 999,
        room_id:102

    },
    {
        id:3,
        amenities:{
            AC: "yes",
            TV: "yes",
            WIFI: "yes",
            Refrigirator: "yes",
            Telephone: "yes",
            Bath_tub: "yes"
        },
        seats_available: 4,
        price_per_hour: 1199,
        room_id:103

    }
];

export const roomService = (req,res)=>{
    try{
        
        let boolRoom = validRoom(rooms,req.body.room_id)
        if(boolRoom){
        req.body.id = rooms.length?rooms[rooms.length-1].id+1:1;
        rooms.push(req.body);
        res.status(201).send({
            message: 'Room created successfully',
            data: rooms
        })
    }
        else{
            res.status(403).send({
                message: 'Invalid room details. Make sure room ID is unique.'
            });
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send({
            message: 'internal server error'
        })
    }
}

