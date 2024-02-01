import React, { useEffect, useState } from "react";
/* import ContextFunction from "./context";
import HeaderContext from "./component/HeaderContext";
import Counter from "./component/Counter"; */
import Navbar from "./component/ThemeComponentsforMode/Navbar";
import Dashboard from "./component/ThemeComponentsforMode/Dashboard";
import ContextTheme from "./component/ThemeComponentsforMode/ContextTheme";
import useFetch from "./CustomHook";
import Counter27 from "./component/Counter27";
import MouseEvent27 from "./component/MouseEvent27";
import Hoc from "./component/Hoc";
import StyleImprovement from "./component/Hoc2";
import RenderProp from "./component/RenderProp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Navbar1 from "./component/Navbar1";

// import UseReducerHookExample from "./component/UseReducerHookExample";
/* import ShowButton from "./component/ShowButton";*/
/* import Heading from "./component/Heading";
import ShowCounter from "./component/ShowCounter"; */
const App = () => {
  /* let C1=Hoc(Counter27)
  let C2=Hoc(MouseEvent27) */
  let NewCounterComponent = StyleImprovement(Counter27);
  // const {data}=useFetch("https://jsonplaceholder.typicode.com/users");

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
  /* const getComponent=(a)=>{
    if(a==1){
      return <h1>Mern</h1>
    }
    else{
      return <h1>React</h1>
    }
  } */
  const [name, setName] = useState("no name")
  const abc = (name) => {
    if (name === "") {
      setName("no name")
    } else {
      setName(name)
    }
  }
  /* const c=()=>{
    let id=21;
    const d=()=>{
      console.log(id);
    }
    return d;
  }
  const d=c();
  d(); */
  return (
    <>
      <p>Name data from child is {name}</p>
      {/* {
      data.length==0 ? <p>Loading...</p> :
      data.map((item)=>
        (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
    } */}
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
      {/* <ContextFunction>
          <h1>hello</h1>
          <HeaderContext/>
        </ContextFunction> */}
      {/* <ContextTheme>
        {
          10>20 && <Navbar/>
        }
      </ContextTheme> */}
      {/* <C1 name="rakesh"/>
      <C2/>*/}
      {/* <NewCounterComponent/>
      <Counter27/> */}
      {/* <RenderProp abcFunction={abc} designFunction={(classInfo)=>{
        if(classInfo===""){
          return(
            <p>No page found</p>
          )
        }
        return classInfo==="Mern"?<p>Mern class is going on</p>:<p>Python class is going on</p>
      }}
      /> */}
      <BrowserRouter>
      <Navbar1/>
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>page not found</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;







