const reducer=(currentstate,action)=>{
    if(action==="Increment"){
        return {count:currentstate.count+1}
    }
    else if(action==="Decrement"){
        return {count:currentstate.count-1}
    }
    else if(action==="Reset"){
        return {
            count:0
        }
    }
}

export default reducer