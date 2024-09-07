/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createProxyMenuApiUrl } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [RestaurantMenuDetails, setRestaurantMenuDetails] = useState([]);
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
    fetchRestaurantMenu();
  }, [location]);

  const fetchRestaurantMenu = async () => {
    if (location.lat && location.lng) {
      const menuApiUrl = createProxyMenuApiUrl(
        location.lat,
        location.lng,
        resId
      );
      console.log(`Fetching data for Restaurant Menu from: ${menuApiUrl}`); // Log the API URL
      try {
        const response = await fetch(menuApiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const json = await response?.json();
          const ResInfo = json?.data?.cards?.find((card) =>
            card?.card?.card["@type"]?.includes("food.v2.Restaurant")
          );
          const ResMenu = json?.data?.cards?.find((card) =>
            card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((menu) =>
              menu?.card?.card["@type"]?.includes("food.v2.ItemCategory")
            )
          );
          setRestaurantMenuDetails({ ResInfo, ResMenu });
        }
      } catch (err) {
        console.log(err);
        setRestaurantMenuDetails(null);
      }
    }
  };

  return RestaurantMenuDetails;
};

export default useRestaurantMenu;
