import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCart = () => {
  const user = true;
  const product = {
    id: 1,
    seller: "Hamid",
    verified: "true",
    resalePrice: 100,
    originalPrice: 150,
    used: 9,
    location: "Chittagong",
    model: "HP Pavilion Plus 14",
    img: "https://m.media-amazon.com/images/I/715isFdkQVL._AC_SX679_.jpg",
    price: 100,
    description:
      "2022 Newest Upgraded HP Laptops for College Student & Business, 15.6 inch FHD ,11th Gen Intel Core i3-1115G4 , 32GB DDR4 RAM, 1TB PCIe SSD, Webcam, Wi-Fi, Bluetooth, Windows 11 , Silver ,ROKC MP",
    category: "hp",
  };
  return (
    <div>
      <div className="lg:flex gap-16 items-center bg-[#f5f5f5] p-10 rounded-lg">
        {/* <div className="">
          <Image
            className=" lg:mx-auto bg-[#eee9f4] rounded-lg"
            src={product.img}
            alt="product Image"
            width={600}
            height={200}
            unoptimized
          />
        </div> */}
        <div className=" text-left">
          <h1 className="lg:text-2xl text-lg">{product.model}</h1>
          <div className="flex items-center justify-start gap-2 py-2">
            <div className="rating w-16 pointer-events-none">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="text-sm text-center">(150 ratings)</span>
          </div>
          <div className="pb-1">
            <span>Category: </span>
            <span>{product.category}</span>
          </div>
          <div className="pb-2">
            <span>Seller: </span>
            <span>{product.seller}</span>
          </div>
          <div className="pb-2">
            <span>Verified:</span>
            {product?.verified === "true" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1c9cea"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-6 h-6 inline ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            )}
          </div>
          <hr />
          <h1 className="text-xl font-bold text-[#ff6801] pt-5">
            ${product.price}
          </h1>
          <span className="text-sm line-through  text-gray-400">
            ${product.price + 15}
          </span>
          <span className="text-sm pl-2  text-gray-800">-4%</span>

          <div className="flex items-center gap-2 py-5">
            <button>
              <label
                className="bg-[#2abbe8] p-3 cursor-pointer lg:px-16 px-6 rounded-sm text-white"
                htmlFor="buyModal"
              >
                Buy
              </label>
            </button>
              <button className="bg-[#2abbe8] p-3 lg:px-16 px-6 rounded-sm text-white">
                Remove From Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;