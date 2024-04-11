import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RES_MENU_IMG } from "../../utils/constant";
import { useDispatch} from "react-redux";
import { addItem,} from "../../store/cartSlice";
import toast, { Toaster } from "react-hot-toast";


const RestaurantCategory = (props) => {
  const { title, itemCards, ShowItem, handleShowItem, } = props;
  const dispatch = useDispatch();
  
  const handleAccordionBody = () => {
    handleShowItem();
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.card.info.name} added to the cart!`);
  };

  return (
    <>
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between py-5 px-3 sm:p-6 shadow-md text-left"
        onClick={handleAccordionBody}
      >
        <h2 className="text-color-9 sm:text-lg font-ProximaNovaBold">
          {title} ({itemCards?.length})
        </h2>
        <div className="text-xl text-color-9">
          {ShowItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {/* Accordion Body */}
      {ShowItem && (
        <>
          <div className="accordion-body">
            {itemCards?.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="item flex items-start justify-between pb-8"
              >
                <div className="md:w-auto w-3/5">
                  {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                    ? "🟢"
                    : "🔴"}
                  <h4 className="text-base text-color-9 font-ProximaNovaMed">
                    {item?.card?.info?.name}
                  </h4>
                  {item?.card?.info?.price ? (
                    <span className="rupee text-color-9 text-sm font-ProximaNovaMed">
                      {item?.card?.info?.price / 100}
                    </span>
                  ) : (
                    <span className="rupee text-color-9 text-sm font-ProximaNovaMed">
                      {item?.card?.info?.defaultPrice / 100}
                    </span>
                  )}
                  {item?.card?.info?.description && (
                    <p className="text-color-10 mt-3 tracking-tight font-ProximaNovaThin text-sm md:w-3/4">
                      {item?.card?.info?.description}
                    </p>
                  )}
                </div>
                <div className="relative w-[118px] h-24">
                  {item?.card?.info?.imageId && (
                    <button className="cursor-pointer w-[118px] h-24 rounded-md">
                      <img
                        src={`${RES_MENU_IMG}${item?.card?.info?.imageId}`}
                        alt="menu-img"
                        className="rounded-md w-[118px] h-24 object-cover"
                      />
                    </button>
                  )}
                  <button
                    onClick={() => handleAddItem(item)}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-[1] w-24 h-9 shadow-md shadow-color-7 bg-white text-center inline-block rounded text-[#60b246] text-sm font-ProximaNovaSemiBold uppercase"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Toaster
        toastOptions={{
          className: "font-ProximaNovaSemiBold",
          // position: "top-center",
          position: "bottom-right",
          duration: 1800,
        }}
      />
    </>
  );
};

export default RestaurantCategory;
