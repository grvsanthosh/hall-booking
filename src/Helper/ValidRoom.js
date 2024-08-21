export const validRoom = (arr,val)=>{  
    
   for (let i = 0; i < arr.length; i++){
    if(arr[i].room_id === val){
        return 0;
        break;
    }
 }
 return 1;
   
}