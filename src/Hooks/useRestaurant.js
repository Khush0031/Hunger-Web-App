import { useEffect, useState } from "react";
import { createProxyRestaurantApiUrl } from "../utils/constant";

const useRestaurant = () => {
  const [ImageCarousel, setImageCarousel] = useState([]);
  const [TopChains, setTopChains] = useState([]);
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });

  //Fetching lat and lng.
  useEffect(() => {
    const fetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude; // Fixed typo
            const lng = position.coords.longitude;
            setLocation({ lat, lng });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    fetLocation();
  }, []);

  useEffect(() => {
    fetchRestaurantData();
  },[location]);

  const fetchRestaurantData = async () => {
    if (location.lat && location.lng) {
      const resApiUrl = createProxyRestaurantApiUrl(location.lat, location.lng);
      console.log(`Fetching data for restaurant from: ${resApiUrl}`); // Log the API URL

      try {
        const response = await fetch(resApiUrl, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const json = await response?.json();

          const restaurants = json?.data?.cards?.find(
            (x) => x?.card?.card?.id === "restaurant_grid_listing"
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          const imgCarousel = json?.data?.cards?.find(
            (x) => x?.card?.card?.id === "whats_on_your_mind"
          )?.card?.card?.gridElements?.infoWithStyle?.info;

          const topChains = json?.data?.cards?.find(
            (x) => x?.card?.card?.id === "top_brands_for_you"
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          setImageCarousel(imgCarousel);
          setTopChains(topChains);
          setAllRestaurants(restaurants);
          setFilteredRestaurants(restaurants);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  // console.log(TopChains);

  return [
    ImageCarousel,
    TopChains,
    AllRestaurants,
    FilteredRestaurants,
    setFilteredRestaurants,
  ];
};

export default useRestaurant;
