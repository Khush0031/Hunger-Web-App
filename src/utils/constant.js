export const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6097528&lng=77.2024306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const createProxyRestaurantApiUrl = (
  lat,
  lng,
  is_seo_homepage_enabled = true,
  pageType = "DESKTOP_WEB_LISTING"
) =>
  `https://hunger-web-app-server.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=${is_seo_homepage_enabled}&page_type=${pageType}`;

export const createProxyMenuApiUrl = (
  lat,
  lng,
  resId,
  pageType = "REGULAR_MENU"
) =>
  `https://hunger-web-app-server.onrender.com/api/menu?page-type=${pageType}&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_IMG_GRAY =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/";

export const RES_CART_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/";

export const RES_MENU_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const HELP_API = "https://www.swiggy.com/dapi/support/issues/faq?";
