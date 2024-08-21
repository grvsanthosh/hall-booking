export const validBooking = (arr,date,strtTime,endTime,roomID)=>{  
    for (let i = 0; i < arr.length; i++){
      if((arr[i].room_id === roomID)&&(arr[i].Date === date)){
         //for checking time slot availablity
        if(((strtTime<arr[i].start_time)&&(endTime<arr[i].start_time))||((strtTime>arr[i].end_time)&&(endTime>arr[i].end_time))){
         return 1;         
        }
        break;
       }   
       if((arr[i].room_id!==roomID)||(arr[i].Date!==date)){
         if(i === arr.length-1){
            return 1;
         }
       }     
   }
   return 0;   
}