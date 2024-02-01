function StyleImprovement(Component){
    const NewComponent=()=>{
        return (
            <div style={{backgroundColor:"blue",color:"white",border:"2px solid black",textAlign:"center"}}>
                <Component/>
            </div>
        )
    }
    return NewComponent;
}

export default StyleImprovement;