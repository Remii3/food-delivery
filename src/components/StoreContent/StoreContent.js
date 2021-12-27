import StoreFilterLook from "./StoreFilterLook";
import "../../../node_modules/hamburgers/dist/hamburgers.css";
import styles from "./StoreContent.module.css";
import StoreItem from "./StoreItem";
import { useEffect, useState } from "react";

const StoreContent = () => {
  const [itemsData, setItemsData] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpsError, setHttpError] = useState(null);

  const fetchItemsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/store.json"
      );
      const data = await response.json();
      let dummy_array = [];

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      for (const key in data) {
        dummy_array.push({
          key: key,
          id: key,
          name: data[key].name,
          summary: data[key].summary,
          price: data[key].price,
          type: data[key].type,
        });
      }

      setItemsData(dummy_array);
      setAvailableItems(dummy_array);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setHttpError(err.message);
    }
  };

  useEffect(() => {
    fetchItemsData();
  }, []);

  const filteredInputHandler = (letters) => {
    setAvailableItems(
      itemsData.filter((item) => {
        return item.name.toLowerCase().match(letters);
      })
    );
  };

  const filteredListHandler = (type) => {
    if (type === "All") {
      setAvailableItems(itemsData);
    } else {
      type = type.substring(0, type.length - 1);
      setAvailableItems(
        itemsData.filter((item) => {
          return item.type.match(type.toLowerCase());
        })
      );
    }
  };

  return (
    <div className={styles["shop-outer"]}>
      {httpsError && <div>{httpsError}</div>}
      {isLoading && !httpsError && <div>Loading...</div>}
      {!isLoading && !httpsError && (
        <>
          <StoreFilterLook
            onFilteredLetters={filteredInputHandler}
            onFilteredType={filteredListHandler}
          />
          <section className={styles["store-items-section"]}>
            {availableItems.map((item) => (
              <StoreItem key={item.id} item={item} />
            ))}
          </section>
        </>
      )}
    </div>
  );
};
export default StoreContent;
