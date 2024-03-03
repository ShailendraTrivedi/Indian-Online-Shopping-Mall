import React, { useState } from "react";
import {RatingStars} from ".";

const Filter = () => {
  const filter = [
    {
      folder: "Apparel and Fashion",
      files: [
        "Accessories",
        "Footwear",
        "Kid's Clothing",
        "Men's Clothing",
        "Women's Clothing",
      ],
    },
    {
      folder: "Art and Crafts",
      files: [
        "Art Prints",
        "Craft Supplies",
        "DIY Kits",
        "Paintings",
        "Sculptures",
      ],
    },
    {
      folder: "Automotive",
      files: [
        "Car Accessories",
        "Electronics for Cars",
        "Maintenance and Care",
        "Motorbike Gear",
        "Tires and Wheels",
      ],
    },
    {
      folder: "Beauty and Personal Care",
      files: [
        "Fragrances",
        "Haircare",
        "Makeup",
        "Personal Care Appliances",
        "Skincare",
      ],
    },
    {
      folder: "Books and Stationery",
      files: [
        "Educational Books",
        "Fiction",
        "Non-Fiction",
        "Notebooks and Journals",
        "Office Supplies",
      ],
    },
    {
      folder: "Electrical Appliances",
      files: [
        "Climate Control",
        "Home Appliances",
        "Kitchen Appliances",
        "Personal Care Appliances",
        "Smart Home Devices",
      ],
    },
    {
      folder: "Electronics",
      files: [
        "Audio and Headphones",
        "Cameras",
        "Laptops",
        "Smartphones",
        "Wearable Tech",
      ],
    },
    {
      folder: "Garden and Outdoor",
      files: [
        "BBQ and Grilling",
        "Gardening Tools",
        "Outdoor Furniture",
        "Outdoor Lighting",
        "Plants and Seeds",
      ],
    },
    {
      folder: "Gourmet and Food Items",
      files: [
        "Beverages",
        "Cooking Ingredients",
        "Meal Kits",
        "Snacks and Treats",
        "Specialty Foods",
      ],
    },
    {
      folder: "Health and Fitness",
      files: [
        "Fitness Equipment",
        "Fitness Trackers",
        "Nutrition and Supplements",
        "Outdoor Recreation",
        "Sports Apparel",
      ],
    },
    {
      folder: "Home and Living",
      files: [
        "Appliances",
        "Bedding and Linens",
        "Furniture",
        "Home Decor",
        "Kitchen and Dining",
      ],
    },
    {
      folder: "Jewelry and Watches",
      files: ["Bracelets", "Earrings", "Necklaces", "Rings", "Watches"],
    },
    {
      folder: "Pet Supplies",
      files: [
        "Beds and Furniture",
        "Grooming Tools",
        "Pet Care Products",
        "Pet Food",
        "Toys for Pets",
      ],
    },
    {
      folder: "Toys and Games",
      files: [
        "Board Games",
        "Educational Toys",
        "Outdoor Play",
        "Toys for Infants and Toddlers",
        "Video Games",
      ],
    },
    {
      folder: "Travel and Luggage",
      files: [
        "Backpacks",
        "Camping Equipment",
        "Luggage and Suitcases",
        "Outdoor Gear",
        "Travel Accessories",
      ],
    },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div>
      <h5 className="text-h5 font-semibold pb-[1rem]">Filter</h5>
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="font-semibold border-b-2 border-black50 w-full">
            Category
          </div>
          <ul className="p-2">
            <li className="flex gap-1">
              <input
                type="checkbox"
                name="category"
                id="all"
                onChange={() => handleCategoryChange(null)}
                checked={!selectedCategory}
              />
              All
            </li>
            {filter.map((item, index) => (
              <li key={index} className="flex gap-1">
                <input
                  type="checkbox"
                  name="category"
                  id={`category-${index}`}
                  onChange={() => handleCategoryChange(item)}
                  checked={selectedCategory?.folder === item?.folder}
                />
                {item.folder}
              </li>
            ))}
          </ul>
        </div>
        {selectedCategory && (
          <>
            <div className="">
              <div className="font-semibold border-b-2 border-black50 w-full">
                Sub Category
              </div>
              <ul className="p-2">
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="all" />
                  All
                </li>
                {selectedCategory.files.map((file, index) => (
                  <li key={index} className="flex gap-1">
                    <input
                      type="checkbox"
                      name="subcategory"
                      id={`subcategory-${index}`}
                    />
                    {file}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="font-semibold border-b-2 border-black50 w-full">
                Rating
              </div>
              <ul className="p-2">
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="all" />
                  All
                </li>
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="1star" />
                  <RatingStars productRating={1} />
                </li>
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="2star" />
                  <RatingStars productRating={2} />
                </li>
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="3star" />
                  <RatingStars productRating={3} />
                </li>
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="4star" />
                  <RatingStars productRating={4} />
                </li>
                <li className="flex gap-1">
                  <input type="checkbox" name="subcategory" id="5star" />
                  <RatingStars productRating={5} />
                </li>
              </ul>
            </div>
          </>
        )}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Filter;
