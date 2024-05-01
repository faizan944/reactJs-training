import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//This is javascript object

const AppLayout = () => {
  return (<div className="app">
    <Header />
    <Body />
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//   ]);
  
  //JSX
  
  // console.log(parent); // object
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // root.render(parent);