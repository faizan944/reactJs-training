import React from "react"
import ReactDOM  from "react-dom/client";

//This is javascript object
const styleCard = {
  backgroundColor: "#f0f0f0"
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="100px;" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = ({resName, cuisine}) => {
  //const {resName, cuisine} = props
  // Another destructuring example (swiggy api) but in laravel we also get in data
  // const {name, cuisine, cost} = resName?.data
  return (
    <div className="res-card" style={styleCard}>
        <img
          className="res-logo" 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          alt="logo"
        />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 Star</h4>
        <h4>Delivery Time: 45 min</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resName="Yumto Food" cuisine="Arbian Food" />
          <RestaurantCard resName="Pizza Max" cuisine="Fast Food" />
          <RestaurantCard resName="Cheezious" cuisine="Pizza Food" />
          <RestaurantCard resName="KFC" cuisine="Zinger Food" />
          <RestaurantCard resName="Yums Chinese" cuisine="Chinese Food" />
        </div>
    </div>
  )
}

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