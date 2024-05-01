import RestaurantCard from "./RestaurantCard"
import { resData } from "../utils/mockData"
import { useState } from "react";

const Body = () => {
    
    const [listOfRes, setListOfRes] = useState(resData);
    return (
      <div className="body">
        <div className="search">
          <button onClick={() => {const filteredList = listOfRes.filter(res => res.restaurant_rating > 4)
          setListOfRes(filteredList)}} className="filter-btn">Top Rated Restaurant</button>
        </div>
          <div className="res-container">
            {listOfRes.map((data) => (
              <RestaurantCard key={data.id} resMenu={data} />
            ))}
            {/* <RestaurantCard resName="Yumto Food" cuisine="Arbian Food" />
            <RestaurantCard resName="Pizza Max" cuisine="Fast Food" />
            <RestaurantCard resName="Cheezious" cuisine="Pizza Food" />
            <RestaurantCard resName="KFC" cuisine="Zinger Food" />
            <RestaurantCard resName="Yums Chinese" cuisine="Chinese Food" /> */}
          </div>
      </div>
    )
}

export default Body