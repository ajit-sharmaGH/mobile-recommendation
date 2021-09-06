import React, { useState } from "react";
import "./styles.css";

//LIST

const mobileItems = {
  Samsung: [
    {
      name: "Item: Samsung Galaxy S21 Ultra",
      rating: "Rating: 4.8/5",
      description:
        "Description: Galaxy S21 Ultra 5G. 6.8 inch edge Quad HD+ Dynamic AMOLED 2X Infinity-O Display (3200x1440) 515 ppi. HDR10+ certified."
    },
    {
      name: "Item: Samsung Galaxy Note 20 Ultra",
      rating: "Rating: 4.5/5",
      description:
        "Description: Galaxy Note20's screen size is 6.7 inch in the full rectangle and 6.6 inch with accounting for the rounded corners and Galaxy Note20 Ultra's screen size is 6.9 inch in the full rectangle and 6.8 inch with accounting for the rounded corners."
    },
    {
      name: "Item: Samsung Galaxy S21",
      rating: "Rating: 4/5",
      description:
        "Description: Galaxy S21 Ultra 5G. 6.8 inch edge Quad HD+ Dynamic AMOLED 2X Infinity-O Display (3200x1440) 515 ppi. HDR10+ certified. 120Hz refresh rate. *Infinity-O Display: a near bezel-less, full-frontal screen."
    }
  ],
  Vivo: [
    {
      name: "Item: Vivo X60 Pro Plus 5G",
      rating: "Rating: 4.5/5",
      description:
        "Description: X60 Pro+ is equipped with vivo standard charger (FlashCharge adapter 11V/5A), and supports up to 55W. The actual charging power is dynamically adjusted as the scene changes, and subject to actual use."
    },
    {
      name: "Item: Vivo X60 Pro 5G",
      rating: "Rating: 4.5/5",
      description:
        "Description: vivo X60 Pro Android smartphone. Announced Mar 2021. Features 6.56 inch display, Snapdragon 870 5G chipset, 4200 mAh battery, 256 GB storage, 12 GB RAM, Corning Gorilla Glass 6."
    },
    {
      name: "Item: Vivo X50 5G",
      rating: "Rating: 4.2/5",
      description:
        "Description: vivo X50 5G Android smartphone. Announced Jun 2020. Features 6.56 inch display, Snapdragon 765G 5G chipset, 4200 mAh battery, 256 GB storage, 8 GB RAM."
    }
  ],
  Oppo: [
    {
      name: "Item: OPPO A74 5G",
      rating: "Rating: 4.8/5",
      description:
        "Description: Oppo A74 5G Android smartphone. Announced Apr 2021. Features 6.5 inch display, Snapdragon 480 5G chipset, 5000 mAh battery, 128 GB storage, 6 GB RAM."
    },
    {
      name: "Item: Oppo A31",
      rating: "Rating: 4.4/5",
      description:
        "Description: The OPPO A31 features a 4.5-inch FWVGA display, Qualcomm Snapdragon 410 8916 SOC, with 1GB of RAM and 8GB of internal memory. "
    },
    {
      name: "Item: OPPO A15",
      rating: "Rating: 4/5",
      description:
        "Description: Oppo A15 has 32GB 2GB RAM of internal memory. This device has a Mediatek MT6765 Helio P35 (12nm) chipset."
    }
  ],
  Redmi: [
    {
      name: "Item: Redmi 9A",
      rating: "Rating: 4.3/5",
      description:
        "Description: Xiaomi Redmi 9A Android smartphone. Announced Jun 2020. Features 6.53 inch display, MediaTek Helio G25 chipset, 5000 mAh battery, 128 GB storage, 6 GB RAM."
    },
    {
      name: "Item: Redmi 9",
      rating: "Rating: 4.1/5",
      description:
        "Description: Xiaomi Redmi 9 Android smartphone. Announced Jun 2020. Features 6.53 inch display, Helio G80 chipset, 5020 mAh battery, 128 GB storage, 6 GB RAM, Corning Gorilla Glass 3."
    },
    {
      name: "Item: Redmi Note 10S",
      rating: "Rating: 4.3/5",
      description:
        "Description: Xiaomi Redmi Note 10S Android smartphone. Announced Mar 2021. Features 6.43inch display, Helio G95 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM, Corning Gorilla Glass 3."
    }
  ]
};

export default function App() {
  const [selectedMobile, setSelectedMobile] = useState("Samsung");
  const mobileItemsArray = Object.keys(mobileItems);
  function itemClickHandler(mobileCompany) {
    setSelectedMobile(mobileCompany);
  }

  return (
    <div className="App">
      <h1> 📱 Best Mobiles📱</h1>
      <h4>you can see some best phones of the following company</h4>

      <div id="container">
        {mobileItemsArray.map((mobileItem) => {
          return (
            <button
              onClick={() => itemClickHandler(mobileItem)}
              key={mobileItem}
            >
              {mobileItem}
            </button>
          );
        })}
        <hr />
        <ul>
          {mobileItems[selectedMobile].map((item) => (
            <li id="item" key={item.name}>
              <div id="name">{item.name}</div>{" "}
              <div id="rating">{item.rating}</div>
              <div id="description">{item.description}</div>
            </li>
          ))}
        </ul>
        <div>❤Made by AJIT SHARMA</div>
      </div>
    </div>
  );
}
