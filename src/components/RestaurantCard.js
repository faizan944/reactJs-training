import { CDN_URL } from "../utils/constants"; // this is called named import

const RestaurantCard = ({resMenu}) => {
  const styleCard = {
    backgroundColor: "#f0f0f0"
  }
  const {restaurant_name, cuisine, restaurant_rating, delivery_time, restaurant_image} = resMenu;
    //const {resName, cuisine} = props
    // Another destructuring example (swiggy api) but in laravel we also get in data
    // const {name, cuisine, cost} = resName?.data
    return (
      <div className="res-card" style={styleCard}>
          <img
            className="res-logo" 
            src={restaurant_image}
            alt="logo"
          />
          <h3>{restaurant_name}</h3>
          <h4>{cuisine}</h4>
          <h4>{restaurant_rating} Star</h4>
          <h4>Delivery Time: {delivery_time} min</h4>
      </div>
    )
}

export default RestaurantCard;