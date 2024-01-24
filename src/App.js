import React from "react";
import ContextFunction from "./context";
import HeaderContext from "./component/HeaderContext";
import Counter from "./component/Counter";

// import UseReducerHookExample from "./component/UseReducerHookExample";
/* import ShowButton from "./component/ShowButton";*/
/* import Heading from "./component/Heading";
import ShowCounter from "./component/ShowCounter"; */
const App=()=>{
 /* const [c1,setC1]=React.useState(0);
 const [c2,setC2]=React.useState(0); */

  /* var val=(function(){
    let i=0;
    while(i<1000000000){
      i++
    }
    console.log("function is executed")
    return c1*c1;
  })() */

  /* var val=React.useMemo(()=>{
    let i=0;
    while(i<1000000000){
      i++
    }
    console.log("function is executed")
    return c1*c1;
  },[c1])
  
  const handleClick1=()=>{
    setC1(c1+1);
  }

  const handleClick2=()=>{
    setC2(c2+1);
  } */
    return(
      <>
        {/* UseCallback usage */}
        {/* <Heading />
        <ShowCounter count1={c1} text="Counter 1"/>
        <ShowButton handleClick={handleClick1} text="button 1"/>
        <ShowCounter count1={c2} text="Counter 2"/>
        <ShowButton handleClick={handleClick2} text="button 2"/> */}

        {/* UseMemo usage */}
        {/* <Heading />
        <ShowCounter count1={c1} text="Counter 1"/>
        <p>{val}</p>
        <button onClick={handleClick1}>Click-1</button>
        <ShowCounter count1={c2} text="Counter 2"/>
        <button onClick={handleClick2}>Click-2</button> */}
        {/* <UseReducerHookExample/> */}
        <ContextFunction>
          <h1>hello</h1>
          <HeaderContext/>
        </ContextFunction>
.     </>
    );
}

export default App;

