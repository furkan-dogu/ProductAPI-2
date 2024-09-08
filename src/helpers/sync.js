"use strict";

module.exports = async function () {
  // return null;

  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");

  // users
  const User = require("../models/user");

  await User.create({
    _id: "65343222b67e9681f937f001",
    password: process.env.ADMIN_PASSWORD,
    email: process.env.ADMIN_EMAIL,
    isActive: true,
    isAdmin: true,
  });

  await User.create({
    _id: "65343222b67e9681f937f002",
    password: "guest",
    email: "guest@site.com",
    isActive: true,
    isAdmin: false,
  });
  // users

  // categories
  const Category = require("../models/category");

  const categories = [
    { _id: "65343222b67e9681f937c001", name: "Beauty" },
    { _id: "65343222b67e9681f937c002", name: "Fragrances" },
    { _id: "65343222b67e9681f937c003", name: "Furniture" },
    { _id: "65343222b67e9681f937c004", name: "Groceries" },
    { _id: "65343222b67e9681f937c005", name: "Home Decoration" },
    { _id: "65343222b67e9681f937c006", name: "Kitchen Accessories" },
    { _id: "65343222b67e9681f937c007", name: "Laptops" },
    { _id: "65343222b67e9681f937c008", name: "Mens Shirts" },
    { _id: "65343222b67e9681f937c009", name: "Mens Shoes" },
    { _id: "65343222b67e9681f937c010", name: "Mens Watches" },
    { _id: "65343222b67e9681f937c011", name: "Mobile Accessories" },
    { _id: "65343222b67e9681f937c012", name: "Motorcycle" },
    { _id: "65343222b67e9681f937c013", name: "Skin Care" },
    { _id: "65343222b67e9681f937c014", name: "Smartphones" },
    { _id: "65343222b67e9681f937c015", name: "Sports Accessories" },
    { _id: "65343222b67e9681f937c016", name: "Sunglasses" },
    { _id: "65343222b67e9681f937c017", name: "Tablets" },
    { _id: "65343222b67e9681f937c018", name: "Tops" },
    { _id: "65343222b67e9681f937c019", name: "Vehicle" },
    { _id: "65343222b67e9681f937c020", name: "Womens Bags" },
    { _id: "65343222b67e9681f937c021", name: "Womens Dresses" },
    { _id: "65343222b67e9681f937c022", name: "Womens Jewellery" },
    { _id: "65343222b67e9681f937c023", name: "Womens Shoes" },
    { _id: "65343222b67e9681f937c024", name: "Womens Watches" },
  ];

  for (const category of categories) {
    await Category.create({
      _id: category._id,
      name: category.name,
    });
  }
  // categories

  // products
  const Product = require("../models/product");

  await Product.create({
    _id: "65343222b67e9681f937f001",
    category: "65343222b67e9681f937c001",
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
  });

  await Product.create({
    _id: "65343222b67e9681f937f002",
    category: "65343222b67e9681f937c001",
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
    brand: "Glamour Beauty",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f003",
    category: "65343222b67e9681f937c001",
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    brand: "Glamour Beauty",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f004",
    category: "65343222b67e9681f937c001",
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    price: 12.99,
    discountPercentage: 19.03,
    rating: 2.51,
    stock: 68,
    brand: "Chic Cosmetics",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f005",
    category: "65343222b67e9681f937c001",
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
    brand: "Nail Couture",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f006",
    category: "65343222b67e9681f937c002",
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    stock: 17,
    brand: "Calvin Klein",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f007",
    category: "65343222b67e9681f937c002",
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    price: 129.99,
    discountPercentage: 18.64,
    rating: 2.76,
    stock: 41,
    brand: "Chanel",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f008",
    category: "65343222b67e9681f937c002",
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
    brand: "Dior",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f009",
    category: "65343222b67e9681f937c002",
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    price: 69.99,
    discountPercentage: 11.47,
    rating: 2.68,
    stock: 3,
    brand: "Dolce & Gabbana",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f010",
    category: "65343222b67e9681f937c002",
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    price: 79.99,
    discountPercentage: 8.9,
    rating: 2.69,
    stock: 93,
    brand: "Gucci",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f011",
    category: "65343222b67e9681f937c003",
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    price: 1899.99,
    discountPercentage: 0.29,
    rating: 4.14,
    stock: 47,
    brand: "Annibale Colombo",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f012",
    category: "65343222b67e9681f937c003",
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    price: 2499.99,
    discountPercentage: 18.54,
    rating: 3.08,
    stock: 16,
    brand: "Annibale Colombo",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f013",
    category: "65343222b67e9681f937c003",
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    price: 299.99,
    discountPercentage: 9.58,
    rating: 4.48,
    stock: 16,
    brand: "Furniture Co.",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f014",
    category: "65343222b67e9681f937c003",
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    price: 499.99,
    discountPercentage: 15.23,
    rating: 4.11,
    stock: 47,
    brand: "Knoll",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f015",
    category: "65343222b67e9681f937c003",
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    price: 799.99,
    discountPercentage: 11.22,
    rating: 3.26,
    stock: 95,
    brand: "Bath Trends",
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f016",
    category: "65343222b67e9681f937c004",
    title: "Apple",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    price: 1.99,
    discountPercentage: 1.97,
    rating: 2.96,
    stock: 9,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f017",
    category: "65343222b67e9681f937c004",
    title: "Beef Steak",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    price: 12.99,
    discountPercentage: 17.99,
    rating: 2.83,
    stock: 96,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f018",
    category: "65343222b67e9681f937c004",
    title: "Cat Food",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    price: 8.99,
    discountPercentage: 9.57,
    rating: 2.88,
    stock: 13,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f019",
    category: "65343222b67e9681f937c004",
    title: "Chicken Meat",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    price: 9.99,
    discountPercentage: 10.46,
    rating: 4.61,
    stock: 69,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f020",
    category: "65343222b67e9681f937c004",
    title: "Cooking Oil",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    price: 4.99,
    discountPercentage: 18.89,
    rating: 4.01,
    stock: 22,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f021",
    category: "65343222b67e9681f937c004",
    title: "Cucumber",
    description:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    price: 1.49,
    discountPercentage: 11.44,
    rating: 4.71,
    stock: 22,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f022",
    category: "65343222b67e9681f937c004",
    title: "Dog Food",
    description:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    price: 10.99,
    discountPercentage: 18.15,
    rating: 2.74,
    stock: 40,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f023",
    category: "65343222b67e9681f937c004",
    title: "Eggs",
    description:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    price: 2.99,
    discountPercentage: 5.8,
    rating: 4.46,
    stock: 10,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f024",
    category: "65343222b67e9681f937c004",
    title: "Fish Steak",
    description:
      "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    price: 14.99,
    discountPercentage: 7,
    rating: 4.83,
    stock: 99,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f025",
    category: "65343222b67e9681f937c004",
    title: "Green Bell Pepper",
    description:
      "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    price: 1.29,
    discountPercentage: 15.5,
    rating: 4.28,
    stock: 89,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f026",
    category: "65343222b67e9681f937c004",
    title: "Green Chili Pepper",
    description:
      "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    price: 0.99,
    discountPercentage: 18.51,
    rating: 4.43,
    stock: 8,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f027",
    category: "65343222b67e9681f937c004",
    title: "Honey Jar",
    description:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    price: 6.99,
    discountPercentage: 1.91,
    rating: 3.5,
    stock: 25,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f028",
    category: "65343222b67e9681f937c004",
    title: "Ice Cream",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    price: 5.49,
    discountPercentage: 7.58,
    rating: 3.77,
    stock: 76,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f029",
    category: "65343222b67e9681f937c004",
    title: "Juice",
    description:
      "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    price: 3.99,
    discountPercentage: 5.45,
    rating: 3.41,
    stock: 99,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f030",
    category: "65343222b67e9681f937c004",
    title: "Kiwi",
    description:
      "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    price: 2.49,
    discountPercentage: 10.32,
    rating: 4.37,
    stock: 1,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f031",
    category: "65343222b67e9681f937c004",
    title: "Lemon",
    description:
      "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    price: 0.79,
    discountPercentage: 17.81,
    rating: 4.25,
    stock: 0,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f032",
    category: "65343222b67e9681f937c004",
    title: "Milk",
    description:
      "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    price: 3.49,
    discountPercentage: 15.09,
    rating: 3.14,
    stock: 57,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Milk/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f033",
    category: "65343222b67e9681f937c004",
    title: "Mulberry",
    description:
      "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    price: 4.99,
    discountPercentage: 16.35,
    rating: 3.19,
    stock: 79,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Mulberry/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f034",
    category: "65343222b67e9681f937c004",
    title: "Nescafe Coffee",
    description:
      "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    price: 7.99,
    discountPercentage: 11.65,
    rating: 2.54,
    stock: 22,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f035",
    category: "65343222b67e9681f937c004",
    title: "Potatoes",
    description:
      "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    price: 2.29,
    discountPercentage: 4.05,
    rating: 3.82,
    stock: 8,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Potatoes/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f036",
    category: "65343222b67e9681f937c004",
    title: "Protein Powder",
    description:
      "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    price: 19.99,
    discountPercentage: 1.58,
    rating: 3.91,
    stock: 65,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f037",
    category: "65343222b67e9681f937c004",
    title: "Red Onions",
    description:
      "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    price: 1.99,
    discountPercentage: 17.89,
    rating: 4.08,
    stock: 86,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f038",
    category: "65343222b67e9681f937c004",
    title: "Rice",
    description:
      "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    price: 5.99,
    discountPercentage: 12.02,
    rating: 3.94,
    stock: 49,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Rice/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f039",
    category: "65343222b67e9681f937c004",
    title: "Soft Drinks",
    description:
      "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    price: 1.99,
    discountPercentage: 1.88,
    rating: 4.59,
    stock: 78,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f040",
    category: "65343222b67e9681f937c004",
    title: "Strawberry",
    description:
      "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    price: 3.99,
    discountPercentage: 19.59,
    rating: 4.5,
    stock: 9,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f041",
    category: "65343222b67e9681f937c004",
    title: "Tissue Paper Box",
    description:
      "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    price: 2.49,
    discountPercentage: 15.44,
    rating: 4.55,
    stock: 97,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f042",
    category: "65343222b67e9681f937c004",
    title: "Water",
    description:
      "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    price: 0.99,
    discountPercentage: 13.71,
    rating: 2.93,
    stock: 95,
    images: ["https://cdn.dummyjson.com/products/images/groceries/Water/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f043",
    category: "65343222b67e9681f937c005",
    title: "Decoration Swing",
    description:
      "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    price: 59.99,
    discountPercentage: 0.65,
    rating: 3.56,
    stock: 62,
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f044",
    category: "65343222b67e9681f937c005",
    title: "Family Tree Photo Frame",
    description:
      "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    price: 29.99,
    discountPercentage: 1.53,
    rating: 3.84,
    stock: 34,
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f045",
    category: "65343222b67e9681f937c005",
    title: "House Showpiece Plant",
    description:
      "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    price: 39.99,
    discountPercentage: 19.45,
    rating: 3.61,
    stock: 89,
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f046",
    category: "65343222b67e9681f937c005",
    title: "Plant Pot",
    description:
      "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    price: 14.99,
    discountPercentage: 0.19,
    rating: 3.33,
    stock: 70,
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f047",
    category: "65343222b67e9681f937c005",
    title: "Table Lamp",
    description:
      "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    price: 49.99,
    discountPercentage: 0.59,
    rating: 4.56,
    stock: 84,
    images: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f048",
    category: "65343222b67e9681f937c006",
    title: "Bamboo Spatula",
    description:
      "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    price: 7.99,
    discountPercentage: 4.85,
    rating: 4.4,
    stock: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f049",
    category: "65343222b67e9681f937c006",
    title: "Black Aluminium Cup",
    description:
      "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    price: 5.99,
    discountPercentage: 9.22,
    rating: 3.62,
    stock: 42,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f050",
    category: "65343222b67e9681f937c006",
    title: "Black Whisk",
    description:
      "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    price: 9.99,
    discountPercentage: 16.87,
    rating: 2.88,
    stock: 17,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f051",
    category: "65343222b67e9681f937c006",
    title: "Boxed Blender",
    description:
      "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    price: 39.99,
    discountPercentage: 7.36,
    rating: 2.73,
    stock: 81,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f052",
    category: "65343222b67e9681f937c006",
    title: "Carbon Steel Wok",
    description:
      "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    price: 29.99,
    discountPercentage: 5.89,
    rating: 2.94,
    stock: 2,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f053",
    category: "65343222b67e9681f937c006",
    title: "Chopping Board",
    description:
      "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    price: 12.99,
    discountPercentage: 17.72,
    rating: 4.82,
    stock: 53,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f054",
    category: "65343222b67e9681f937c006",
    title: "Citrus Squeezer Yellow",
    description:
      "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    price: 8.99,
    discountPercentage: 12.35,
    rating: 4.18,
    stock: 59,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f055",
    category: "65343222b67e9681f937c006",
    title: "Egg Slicer",
    description:
      "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    price: 6.99,
    discountPercentage: 9.6,
    rating: 2.91,
    stock: 30,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f056",
    category: "65343222b67e9681f937c006",
    title: "Electric Stove",
    description:
      "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    price: 49.99,
    discountPercentage: 16.64,
    rating: 4.84,
    stock: 41,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f057",
    category: "65343222b67e9681f937c006",
    title: "Fine Mesh Strainer",
    description:
      "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    price: 9.99,
    discountPercentage: 2.56,
    rating: 3.7,
    stock: 13,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f058",
    category: "65343222b67e9681f937c006",
    title: "Fork",
    description:
      "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    price: 3.99,
    discountPercentage: 14.36,
    rating: 4.18,
    stock: 10,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f059",
    category: "65343222b67e9681f937c006",
    title: "Glass",
    description:
      "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    price: 4.99,
    discountPercentage: 7.38,
    rating: 3.06,
    stock: 68,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f060",
    category: "65343222b67e9681f937c006",
    title: "Grater Black",
    description:
      "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    price: 10.99,
    discountPercentage: 3.29,
    rating: 2.87,
    stock: 80,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f061",
    category: "65343222b67e9681f937c006",
    title: "Hand Blender",
    description:
      "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    price: 34.99,
    discountPercentage: 6.44,
    rating: 3.71,
    stock: 8,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f062",
    category: "65343222b67e9681f937c006",
    title: "Ice Cube Tray",
    description:
      "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    price: 5.99,
    discountPercentage: 0.95,
    rating: 3.27,
    stock: 81,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f063",
    category: "65343222b67e9681f937c006",
    title: "Kitchen Sieve",
    description:
      "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    price: 7.99,
    discountPercentage: 9.23,
    rating: 2.96,
    stock: 33,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f064",
    category: "65343222b67e9681f937c006",
    title: "Knife",
    description:
      "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    price: 14.99,
    discountPercentage: 19.95,
    rating: 4.31,
    stock: 59,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f065",
    category: "65343222b67e9681f937c006",
    title: "Lunch Box",
    description:
      "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    price: 12.99,
    discountPercentage: 15.33,
    rating: 2.84,
    stock: 26,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f066",
    category: "65343222b67e9681f937c006",
    title: "Microwave Oven",
    description:
      "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    price: 89.99,
    discountPercentage: 18.73,
    rating: 2.71,
    stock: 27,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f067",
    category: "65343222b67e9681f937c006",
    title: "Mug Tree Stand",
    description:
      "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    price: 15.99,
    discountPercentage: 15.21,
    rating: 4.34,
    stock: 93,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f068",
    category: "65343222b67e9681f937c006",
    title: "Pan",
    description:
      "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    price: 24.99,
    discountPercentage: 6.55,
    rating: 3.4,
    stock: 40,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f069",
    category: "65343222b67e9681f937c006",
    title: "Plate",
    description:
      "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    price: 3.99,
    discountPercentage: 13.03,
    rating: 3.07,
    stock: 30,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f070",
    category: "65343222b67e9681f937c006",
    title: "Red Tongs",
    description:
      "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    price: 6.99,
    discountPercentage: 18.24,
    rating: 3.22,
    stock: 15,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f071",
    category: "65343222b67e9681f937c006",
    title: "Silver Pot With Glass Cap",
    description:
      "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    price: 39.99,
    discountPercentage: 4.57,
    rating: 3.86,
    stock: 37,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f072",
    category: "65343222b67e9681f937c006",
    title: "Slotted Turner",
    description:
      "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    price: 8.99,
    discountPercentage: 7.24,
    rating: 3.77,
    stock: 36,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f073",
    category: "65343222b67e9681f937c006",
    title: "Spice Rack",
    description:
      "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    price: 19.99,
    discountPercentage: 13.78,
    rating: 4.05,
    stock: 24,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f074",
    category: "65343222b67e9681f937c006",
    title: "Spoon",
    description:
      "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    price: 4.99,
    discountPercentage: 0.93,
    rating: 3.98,
    stock: 51,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f075",
    category: "65343222b67e9681f937c006",
    title: "Tray",
    description:
      "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    price: 16.99,
    discountPercentage: 9.93,
    rating: 3.2,
    stock: 48,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f076",
    category: "65343222b67e9681f937c006",
    title: "Wooden Rolling Pin",
    description:
      "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    price: 11.99,
    discountPercentage: 16.94,
    rating: 4.99,
    stock: 80,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f077",
    category: "65343222b67e9681f937c006",
    title: "Yellow Peeler",
    description:
      "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    price: 5.99,
    discountPercentage: 17.09,
    rating: 4.41,
    stock: 86,
    images: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f078",
    category: "65343222b67e9681f937c007",
    title: "Apple MacBook Pro 14 Inch Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    price: 1999.99,
    discountPercentage: 9.25,
    rating: 3.13,
    stock: 39,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f079",
    category: "65343222b67e9681f937c007",
    title: "Asus Zenbook Pro Dual Screen Laptop",
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    price: 1799.99,
    discountPercentage: 9.21,
    rating: 3.14,
    stock: 38,
    brand: "Asus",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f080",
    category: "65343222b67e9681f937c007",
    title: "Huawei Matebook X Pro",
    description:
      "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    price: 1399.99,
    discountPercentage: 15.25,
    rating: 4.62,
    stock: 34,
    brand: "Huawei",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f081",
    category: "65343222b67e9681f937c007",
    title: "Lenovo Yoga 920",
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    price: 1099.99,
    discountPercentage: 7.77,
    rating: 2.98,
    stock: 71,
    brand: "Lenovo",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f082",
    category: "65343222b67e9681f937c007",
    title: "New DELL XPS 13 9300 Laptop",
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    price: 1499.99,
    discountPercentage: 11.7,
    rating: 2.98,
    stock: 18,
    brand: "Dell",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f083",
    category: "65343222b67e9681f937c008",
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    price: 29.99,
    discountPercentage: 1.41,
    rating: 4.19,
    stock: 44,
    brand: "Fashion Trends",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f084",
    category: "65343222b67e9681f937c008",
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    price: 24.99,
    discountPercentage: 12.6,
    rating: 4.95,
    stock: 64,
    brand: "Gigabyte",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f085",
    category: "65343222b67e9681f937c008",
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    price: 34.99,
    discountPercentage: 17.53,
    rating: 3.66,
    stock: 65,
    brand: "Classic Wear",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f086",
    category: "65343222b67e9681f937c008",
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    price: 19.99,
    discountPercentage: 8.65,
    rating: 4.62,
    stock: 20,
    brand: "Casual Comfort",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f087",
    category: "65343222b67e9681f937c008",
    title: "Men Check Shirt",
    description:
      "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    price: 27.99,
    discountPercentage: 14.21,
    rating: 2.9,
    stock: 69,
    brand: "Urban Chic",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f088",
    category: "65343222b67e9681f937c009",
    title: "Nike Air Jordan 1 Red And Black",
    description:
      "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    price: 149.99,
    discountPercentage: 15.82,
    rating: 2.77,
    stock: 15,
    brand: "Nike",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f089",
    category: "65343222b67e9681f937c009",
    title: "Nike Baseball Cleats",
    description:
      "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    price: 79.99,
    discountPercentage: 11.4,
    rating: 4.01,
    stock: 14,
    brand: "Nike",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f090",
    category: "65343222b67e9681f937c009",
    title: "Puma Future Rider Trainers",
    description:
      "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    price: 89.99,
    discountPercentage: 3.64,
    rating: 4.85,
    stock: 10,
    brand: "Puma",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f091",
    category: "65343222b67e9681f937c009",
    title: "Sports Sneakers Off White & Red",
    description:
      "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    price: 119.99,
    discountPercentage: 11.69,
    rating: 4.92,
    stock: 73,
    brand: "Off White",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f092",
    category: "65343222b67e9681f937c009",
    title: "Sports Sneakers Off White Red",
    description:
      "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    price: 109.99,
    discountPercentage: 17.22,
    rating: 2.95,
    stock: 75,
    brand: "Off White",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f093",
    category: "65343222b67e9681f937c010",
    title: "Brown Leather Belt Watch",
    description:
      "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    price: 89.99,
    discountPercentage: 15.01,
    rating: 4.47,
    stock: 69,
    tags: ["watches", "leather watches"],
    brand: "Fashion Timepieces",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f094",
    category: "65343222b67e9681f937c010",
    title: "Longines Master Collection",
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    price: 1499.99,
    discountPercentage: 0.64,
    rating: 2.64,
    stock: 65,
    brand: "Longines",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f095",
    category: "65343222b67e9681f937c010",
    title: "Rolex Cellini Date Black Dial",
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    price: 8999.99,
    discountPercentage: 14.28,
    rating: 3.61,
    stock: 84,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f096",
    category: "65343222b67e9681f937c010",
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    price: 12999.99,
    discountPercentage: 5.7,
    rating: 4.52,
    stock: 33,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f097",
    category: "65343222b67e9681f937c010",
    title: "Rolex Datejust",
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    price: 10999.99,
    discountPercentage: 9.69,
    rating: 4.94,
    stock: 11,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f098",
    category: "65343222b67e9681f937c010",
    title: "Rolex Submariner Watch",
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    price: 13999.99,
    discountPercentage: 0.82,
    rating: 2.97,
    stock: 35,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f099",
    category: "65343222b67e9681f937c011",
    title: "Amazon Echo Plus",
    description:
      "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    price: 99.99,
    discountPercentage: 16.3,
    rating: 3.52,
    stock: 50,
    brand: "Amazon",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f100",
    category: "65343222b67e9681f937c011",
    title: "Apple Airpods",
    description:
      "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    price: 129.99,
    discountPercentage: 4.82,
    rating: 4.38,
    stock: 93,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f101",
    category: "65343222b67e9681f937c011",
    title: "Apple AirPods Max Silver",
    description:
      "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    price: 549.99,
    discountPercentage: 11.7,
    rating: 3.11,
    stock: 7,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f102",
    category: "65343222b67e9681f937c011",
    title: "Apple Airpower Wireless Charger",
    description:
      "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    price: 79.99,
    discountPercentage: 6.54,
    rating: 4.51,
    stock: 78,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f103",
    category: "65343222b67e9681f937c011",
    title: "Apple HomePod Mini Cosmic Grey",
    description:
      "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    price: 99.99,
    discountPercentage: 3.7,
    rating: 4.51,
    stock: 65,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f104",
    category: "65343222b67e9681f937c011",
    title: "Apple iPhone Charger",
    description:
      "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    price: 19.99,
    discountPercentage: 1.01,
    rating: 3.03,
    stock: 4,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f105",
    category: "65343222b67e9681f937c011",
    title: "Apple MagSafe Battery Pack",
    description:
      "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    price: 99.99,
    discountPercentage: 10.27,
    rating: 2.61,
    stock: 80,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f106",
    category: "65343222b67e9681f937c011",
    title: "Apple Watch Series 4 Gold",
    description:
      "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    price: 349.99,
    discountPercentage: 5.14,
    rating: 4.42,
    stock: 68,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f107",
    category: "65343222b67e9681f937c011",
    title: "Beats Flex Wireless Earphones",
    description:
      "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    price: 49.99,
    discountPercentage: 8.27,
    rating: 4.17,
    stock: 49,
    brand: "Beats",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f108",
    category: "65343222b67e9681f937c011",
    title: "iPhone 12 Silicone Case with MagSafe Plum",
    description:
      "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    price: 29.99,
    discountPercentage: 14.35,
    rating: 4.41,
    stock: 51,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f109",
    category: "65343222b67e9681f937c011",
    title: "Monopod",
    description:
      "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    price: 19.99,
    discountPercentage: 11.62,
    rating: 2.99,
    stock: 96,
    brand: "TechGear",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f110",
    category: "65343222b67e9681f937c011",
    title: "Selfie Lamp with iPhone",
    description:
      "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    price: 14.99,
    discountPercentage: 13.86,
    rating: 2.84,
    stock: 89,
    brand: "GadgetMaster",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f111",
    category: "65343222b67e9681f937c011",
    title: "Selfie Stick Monopod",
    description:
      "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    price: 12.99,
    discountPercentage: 15.29,
    rating: 2.93,
    stock: 33,
    brand: "SnapTech",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f112",
    category: "65343222b67e9681f937c011",
    title: "TV Studio Camera Pedestal",
    description:
      "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    price: 499.99,
    discountPercentage: 10.28,
    rating: 4.05,
    stock: 45,
    brand: "ProVision",
    images: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f113",
    category: "65343222b67e9681f937c012",
    title: "Generic Motorcycle",
    description:
      "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
    price: 3999.99,
    discountPercentage: 2.89,
    rating: 4.85,
    stock: 63,
    brand: "Generic Motors",
    images: [
      "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/1.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/2.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/3.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f114",
    category: "65343222b67e9681f937c012",
    title: "Kawasaki Z800",
    description:
      "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    price: 8999.99,
    discountPercentage: 15.07,
    rating: 4.06,
    stock: 88,
    brand: "Kawasaki",
    images: [
      "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/1.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/2.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/3.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f115",
    category: "65343222b67e9681f937c012",
    title: "MotoGP CI.H1",
    description:
      "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
    price: 14999.99,
    discountPercentage: 17,
    rating: 4.15,
    stock: 85,
    brand: "MotoGP",
    images: [
      "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/1.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/2.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/3.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f116",
    category: "65343222b67e9681f937c012",
    title: "Scooter Motorcycle",
    description:
      "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
    price: 2999.99,
    discountPercentage: 19.19,
    rating: 3.33,
    stock: 11,
    brand: "ScootMaster",
    images: [
      "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/1.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/2.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/3.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f117",
    category: "65343222b67e9681f937c012",
    title: "Sportbike Motorcycle",
    description:
      "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    price: 7499.99,
    discountPercentage: 18.07,
    rating: 2.97,
    stock: 12,
    brand: "SpeedMaster",
    images: [
      "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/1.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/2.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/3.png",
      "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f118",
    category: "65343222b67e9681f937c013",
    title: "Attitude Super Leaves Hand Soap",
    description:
      "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    price: 8.99,
    discountPercentage: 17.42,
    rating: 4.68,
    stock: 98,
    brand: "Attitude",
    images: [
      "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/1.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/2.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f119",
    category: "65343222b67e9681f937c013",
    title: "Olay Ultra Moisture Shea Butter Body Wash",
    description:
      "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    price: 12.99,
    discountPercentage: 16.95,
    rating: 4.81,
    stock: 43,
    brand: "Olay",
    images: [
      "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/1.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/2.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f120",
    category: "65343222b67e9681f937c013",
    title: "Vaseline Men Body and Face Lotion",
    description:
      "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    price: 9.99,
    discountPercentage: 11.63,
    rating: 3.97,
    stock: 54,
    brand: "Vaseline",
    images: [
      "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/1.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/2.png",
      "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f121",
    category: "65343222b67e9681f937c014",
    title: "iPhone 5s",
    description:
      "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    price: 199.99,
    discountPercentage: 11.85,
    rating: 3.92,
    stock: 65,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f122",
    category: "65343222b67e9681f937c014",
    title: "iPhone 6",
    description:
      "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    price: 299.99,
    discountPercentage: 4.54,
    rating: 3.76,
    stock: 99,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f123",
    category: "65343222b67e9681f937c014",
    title: "iPhone 13 Pro",
    description:
      "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    price: 1099.99,
    discountPercentage: 18.3,
    rating: 3.42,
    stock: 26,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f124",
    category: "65343222b67e9681f937c014",
    title: "iPhone X",
    description:
      "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    price: 899.99,
    discountPercentage: 14.19,
    rating: 4.96,
    stock: 99,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f125",
    category: "65343222b67e9681f937c014",
    title: "Oppo A57",
    description:
      "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    price: 249.99,
    discountPercentage: 12.17,
    rating: 3.1,
    stock: 76,
    brand: "Oppo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f126",
    category: "65343222b67e9681f937c014",
    title: "Oppo F19 Pro Plus",
    description:
      "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    price: 399.99,
    discountPercentage: 15.62,
    rating: 2.57,
    stock: 92,
    brand: "Oppo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f127",
    category: "65343222b67e9681f937c014",
    title: "Oppo K1",
    description:
      "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    price: 299.99,
    discountPercentage: 14.58,
    rating: 3.39,
    stock: 61,
    brand: "Oppo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f128",
    category: "65343222b67e9681f937c014",
    title: "Realme C35",
    description:
      "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    price: 149.99,
    discountPercentage: 16.47,
    rating: 2.56,
    stock: 81,
    brand: "Realme",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f129",
    category: "65343222b67e9681f937c014",
    title: "Realme X",
    description:
      "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    price: 299.99,
    discountPercentage: 2.39,
    rating: 4.42,
    stock: 87,
    brand: "Realme",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f130",
    category: "65343222b67e9681f937c014",
    title: "Realme XT",
    description:
      "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    price: 349.99,
    discountPercentage: 3.03,
    rating: 4.14,
    stock: 53,
    brand: "Realme",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f131",
    category: "65343222b67e9681f937c014",
    title: "Samsung Galaxy S7",
    description:
      "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    price: 299.99,
    discountPercentage: 8.83,
    rating: 4.9,
    stock: 55,
    brand: "Samsung",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f132",
    category: "65343222b67e9681f937c014",
    title: "Samsung Galaxy S8",
    description:
      "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    price: 499.99,
    discountPercentage: 2.69,
    rating: 3.69,
    stock: 75,
    brand: "Samsung",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f133",
    category: "65343222b67e9681f937c014",
    title: "Samsung Galaxy S10",
    description:
      "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    price: 699.99,
    discountPercentage: 0.97,
    rating: 2.81,
    stock: 40,
    brand: "Samsung",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f134",
    category: "65343222b67e9681f937c014",
    title: "Vivo S1",
    description:
      "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    price: 249.99,
    discountPercentage: 4.25,
    rating: 2.83,
    stock: 13,
    brand: "Vivo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f135",
    category: "65343222b67e9681f937c014",
    title: "Vivo V9",
    description:
      "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    price: 299.99,
    discountPercentage: 14.57,
    rating: 3.1,
    stock: 19,
    brand: "Vivo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f136",
    category: "65343222b67e9681f937c014",
    title: "Vivo X21",
    description:
      "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    price: 499.99,
    discountPercentage: 7.32,
    rating: 2.75,
    stock: 0,
    brand: "Vivo",
    images: [
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f137",
    category: "65343222b67e9681f937c015",
    title: "American Football",
    description:
      "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    price: 19.99,
    discountPercentage: 10.28,
    rating: 3.78,
    stock: 48,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f138",
    category: "65343222b67e9681f937c015",
    title: "Baseball Ball",
    description:
      "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    price: 8.99,
    discountPercentage: 13.72,
    rating: 4.76,
    stock: 71,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f139",
    category: "65343222b67e9681f937c015",
    title: "Baseball Glove",
    description:
      "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    price: 24.99,
    discountPercentage: 16.27,
    rating: 2.72,
    stock: 43,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/1.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/2.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f140",
    category: "65343222b67e9681f937c015",
    title: "Basketball",
    description:
      "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    price: 14.99,
    discountPercentage: 18.05,
    rating: 4.15,
    stock: 100,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f141",
    category: "65343222b67e9681f937c015",
    title: "Basketball Rim",
    description:
      "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    price: 39.99,
    discountPercentage: 6.02,
    rating: 4.98,
    stock: 57,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f142",
    category: "65343222b67e9681f937c015",
    title: "Cricket Ball",
    description:
      "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    price: 12.99,
    discountPercentage: 12.93,
    rating: 4.43,
    stock: 42,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f143",
    category: "65343222b67e9681f937c015",
    title: "Cricket Bat",
    description:
      "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    price: 29.99,
    discountPercentage: 9.03,
    rating: 3.07,
    stock: 3,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f144",
    category: "65343222b67e9681f937c015",
    title: "Cricket Helmet",
    description:
      "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    price: 44.99,
    discountPercentage: 10.75,
    rating: 3.34,
    stock: 31,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/1.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/2.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/3.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f145",
    category: "65343222b67e9681f937c015",
    title: "Cricket Wicket",
    description:
      "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    price: 29.99,
    discountPercentage: 8.79,
    rating: 4.16,
    stock: 31,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f146",
    category: "65343222b67e9681f937c015",
    title: "Feather Shuttlecock",
    description:
      "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    price: 5.99,
    discountPercentage: 10.24,
    rating: 3.95,
    stock: 17,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f147",
    category: "65343222b67e9681f937c015",
    title: "Football",
    description:
      "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    price: 17.99,
    discountPercentage: 0.59,
    rating: 3.94,
    stock: 66,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Football/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Football/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f148",
    category: "65343222b67e9681f937c015",
    title: "Golf Ball",
    description:
      "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    price: 9.99,
    discountPercentage: 19.38,
    rating: 4.84,
    stock: 45,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f149",
    category: "65343222b67e9681f937c015",
    title: "Iron Golf",
    description:
      "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    price: 49.99,
    discountPercentage: 3.32,
    rating: 4.87,
    stock: 7,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f150",
    category: "65343222b67e9681f937c015",
    title: "Metal Baseball Bat",
    description:
      "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    price: 29.99,
    discountPercentage: 2.55,
    rating: 4.11,
    stock: 37,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f151",
    category: "65343222b67e9681f937c015",
    title: "Tennis Ball",
    description:
      "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
    price: 6.99,
    discountPercentage: 0.14,
    rating: 4.77,
    stock: 99,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f152",
    category: "65343222b67e9681f937c015",
    title: "Tennis Racket",
    description:
      "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
    price: 49.99,
    discountPercentage: 15.8,
    rating: 3.82,
    stock: 86,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f153",
    category: "65343222b67e9681f937c015",
    title: "Volleyball",
    description:
      "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
    price: 11.99,
    discountPercentage: 2.2,
    rating: 4.08,
    stock: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f154",
    category: "65343222b67e9681f937c016",
    title: "Black Sun Glasses",
    description:
      "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
    price: 29.99,
    discountPercentage: 14.22,
    rating: 3.23,
    stock: 100,
    brand: "Fashion Shades",
    images: [
      "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/1.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/2.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f155",
    category: "65343222b67e9681f937c016",
    title: "Classic Sun Glasses",
    description:
      "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
    price: 24.99,
    discountPercentage: 15.67,
    rating: 2.99,
    stock: 100,
    brand: "Fashion Shades",
    images: [
      "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/1.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/2.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f156",
    category: "65343222b67e9681f937c016",
    title: "Green and Black Glasses",
    description:
      "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
    price: 34.99,
    discountPercentage: 10.75,
    rating: 2.84,
    stock: 74,
    brand: "Fashion Shades",
    images: [
      "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/1.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/2.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f157",
    category: "65343222b67e9681f937c016",
    title: "Party Glasses",
    description:
      "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    price: 19.99,
    discountPercentage: 19.52,
    rating: 3.21,
    stock: 35,
    brand: "Fashion Fun",
    images: [
      "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/1.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/2.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f158",
    category: "65343222b67e9681f937c016",
    title: "Sunglasses",
    description:
      "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
    price: 22.99,
    discountPercentage: 4.87,
    rating: 2.58,
    stock: 59,
    brand: "Fashion Shades",
    images: [
      "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/1.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/2.png",
      "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f159",
    category: "65343222b67e9681f937c017",
    title: "iPad Mini 2021 Starlight",
    description:
      "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    price: 499.99,
    discountPercentage: 19.48,
    rating: 3.87,
    stock: 32,
    brand: "Apple",
    images: [
      "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png",
      "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png",
      "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png",
      "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f160",
    category: "65343222b67e9681f937c017",
    title: "Samsung Galaxy Tab S8 Plus Grey",
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    price: 599.99,
    discountPercentage: 8.11,
    rating: 3.43,
    stock: 76,
    brand: "Samsung",
    images: [
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f161",
    category: "65343222b67e9681f937c017",
    title: "Samsung Galaxy Tab White",
    description:
      "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
    price: 349.99,
    discountPercentage: 4.82,
    rating: 3.7,
    stock: 0,
    brand: "Samsung",
    images: [
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png",
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f162",
    category: "65343222b67e9681f937c018",
    title: "Blue Frock",
    description:
      "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
    price: 29.99,
    discountPercentage: 9.37,
    rating: 3.57,
    stock: 37,
    images: [
      "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/1.png",
      "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/2.png",
      "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/3.png",
      "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f163",
    category: "65343222b67e9681f937c018",
    title: "Girl Summer Dress",
    description:
      "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    price: 19.99,
    discountPercentage: 6.42,
    rating: 2.67,
    stock: 20,
    images: [
      "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/1.png",
      "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/2.png",
      "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/3.png",
      "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f164",
    category: "65343222b67e9681f937c018",
    title: "Gray Dress",
    description:
      "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
    price: 34.99,
    discountPercentage: 9.32,
    rating: 3.49,
    stock: 81,
    images: [
      "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/1.png",
      "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/2.png",
      "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/3.png",
      "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f165",
    category: "65343222b67e9681f937c018",
    title: "Short Frock",
    description:
      "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
    price: 24.99,
    discountPercentage: 9.47,
    rating: 4.63,
    stock: 19,
    images: [
      "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/1.png",
      "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/2.png",
      "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/3.png",
      "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f166",
    category: "65343222b67e9681f937c018",
    title: "Tartan Dress",
    description:
      "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
    price: 39.99,
    discountPercentage: 2.08,
    rating: 2.82,
    stock: 100,
    images: [
      "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/1.png",
      "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/2.png",
      "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/3.png",
      "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f167",
    category: "65343222b67e9681f937c019",
    title: "300 Touring",
    description:
      "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
    price: 28999.99,
    discountPercentage: 7.15,
    rating: 4.56,
    stock: 53,
    brand: "Chrysler",
    images: [
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png",
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/2.png",
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/3.png",
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/4.png",
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/5.png",
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/6.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f168",
    category: "65343222b67e9681f937c019",
    title: "Charger SXT RWD",
    description:
      "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
    price: 32999.99,
    discountPercentage: 2.27,
    rating: 2.92,
    stock: 85,
    brand: "Dodge",
    images: [
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/1.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/2.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/3.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/4.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/5.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/6.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f169",
    category: "65343222b67e9681f937c019",
    title: "Dodge Hornet GT Plus",
    description:
      "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
    price: 24999.99,
    discountPercentage: 14.26,
    rating: 3.93,
    stock: 81,
    brand: "Dodge",
    images: [
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/1.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/2.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/3.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/4.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/5.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/6.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f170",
    category: "65343222b67e9681f937c019",
    title: "Durango SXT RWD",
    description:
      "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
    price: 36999.99,
    discountPercentage: 9.21,
    rating: 3.47,
    stock: 0,
    brand: "Dodge",
    images: [
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/1.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/2.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/3.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/4.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/5.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/6.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f171",
    category: "65343222b67e9681f937c019",
    title: "Pacifica Touring",
    description:
      "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
    price: 31999.99,
    discountPercentage: 6.89,
    rating: 2.96,
    stock: 22,
    brand: "Chrysler",
    images: [
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/2.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/3.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/4.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/5.png",
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/6.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f172",
    category: "65343222b67e9681f937c020",
    title: "Blue Women's Handbag",
    description:
      "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    price: 49.99,
    discountPercentage: 5.24,
    rating: 3.37,
    stock: 76,
    brand: "Fashionista",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/1.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/2.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f173",
    category: "65343222b67e9681f937c020",
    title: "Heshe Women's Leather Bag",
    description:
      "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    price: 129.99,
    discountPercentage: 7.74,
    rating: 2.62,
    stock: 9,
    brand: "Heshe",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/1.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/2.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f174",
    category: "65343222b67e9681f937c020",
    title: "Prada Women Bag",
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    price: 599.99,
    discountPercentage: 18.3,
    rating: 3.52,
    stock: 43,
    brand: "Prada",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/2.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f175",
    category: "65343222b67e9681f937c020",
    title: "White Faux Leather Backpack",
    description:
      "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    price: 39.99,
    discountPercentage: 7.76,
    rating: 4.91,
    stock: 89,
    brand: "Urban Chic",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/1.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/2.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f176",
    category: "65343222b67e9681f937c020",
    title: "Women Handbag Black",
    description:
      "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    price: 59.99,
    discountPercentage: 3.08,
    rating: 4.94,
    stock: 24,
    brand: "Elegance Collection",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/1.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png",
      "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f177",
    category: "65343222b67e9681f937c021",
    title: "Black Women's Gown",
    description:
      "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    price: 129.99,
    discountPercentage: 5.86,
    rating: 4.77,
    stock: 59,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/2.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/3.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f178",
    category: "65343222b67e9681f937c021",
    title: "Corset Leather With Skirt",
    description:
      "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
    price: 89.99,
    discountPercentage: 19.26,
    rating: 2.52,
    stock: 59,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/2.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/3.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f179",
    category: "65343222b67e9681f937c021",
    title: "Corset With Black Skirt",
    description:
      "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
    price: 79.99,
    discountPercentage: 14.61,
    rating: 3,
    stock: 67,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/2.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/3.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f180",
    category: "65343222b67e9681f937c021",
    title: "Dress Pea",
    description:
      "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
    price: 49.99,
    discountPercentage: 9.81,
    rating: 2.92,
    stock: 29,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/2.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/3.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f181",
    category: "65343222b67e9681f937c021",
    title: "Marni Red & Black Suit",
    description:
      "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
    price: 179.99,
    discountPercentage: 15.4,
    rating: 4.17,
    stock: 15,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/2.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/3.png",
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f182",
    category: "65343222b67e9681f937c022",
    title: "Green Crystal Earring",
    description:
      "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
    price: 29.99,
    discountPercentage: 2.58,
    rating: 2.94,
    stock: 1,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/1.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/2.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f183",
    category: "65343222b67e9681f937c022",
    title: "Green Oval Earring",
    description:
      "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
    price: 24.99,
    discountPercentage: 0.64,
    rating: 2.54,
    stock: 89,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/1.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/2.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f184",
    category: "65343222b67e9681f937c022",
    title: "Tropical Earring",
    description:
      "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    price: 19.99,
    discountPercentage: 12.31,
    rating: 3.32,
    stock: 76,
    images: [
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/1.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/2.png",
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f185",
    category: "65343222b67e9681f937c023",
    title: "Black & Brown Slipper",
    description:
      "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
    price: 19.99,
    discountPercentage: 13.62,
    rating: 4.13,
    stock: 80,
    brand: "Comfort Trends",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/1.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/2.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/3.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f186",
    category: "65343222b67e9681f937c023",
    title: "Calvin Klein Heel Shoes",
    description:
      "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
    price: 79.99,
    discountPercentage: 11.39,
    rating: 4.06,
    stock: 99,
    brand: "Calvin Klein",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/1.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/2.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/3.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f187",
    category: "65343222b67e9681f937c023",
    title: "Golden Shoes Woman",
    description:
      "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
    price: 49.99,
    discountPercentage: 14.93,
    rating: 4.82,
    stock: 99,
    brand: "Fashion Diva",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/1.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/2.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/3.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f188",
    category: "65343222b67e9681f937c023",
    title: "Pampi Shoes",
    description:
      "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
    price: 29.99,
    discountPercentage: 0.3,
    rating: 3.01,
    stock: 36,
    brand: "Pampi",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/1.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/2.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/3.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f189",
    category: "65343222b67e9681f937c023",
    title: "Red Shoes",
    description:
      "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
    price: 34.99,
    discountPercentage: 0.01,
    rating: 4.23,
    stock: 53,
    brand: "Fashion Express",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/1.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/2.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/3.png",
      "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f190",
    title: "IWC Ingenieur Automatic Steel",
    category: "65343222b67e9681f937c024",
    description:
      "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
    price: 4999.99,
    discountPercentage: 5.76,
    rating: 2.58,
    stock: 85,
    brand: "IWC",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f191",
    category: "65343222b67e9681f937c024",
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
    price: 15999.99,
    discountPercentage: 18.76,
    rating: 3.41,
    stock: 66,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f192",
    category: "65343222b67e9681f937c024",
    title: "Rolex Datejust Women",
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    price: 10999.99,
    discountPercentage: 17.72,
    rating: 3.53,
    stock: 31,
    brand: "Rolex",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f193",
    category: "65343222b67e9681f937c024",
    title: "Watch Gold for Women",
    description:
      "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    price: 799.99,
    discountPercentage: 6.37,
    rating: 3.03,
    stock: 94,
    brand: "Fashion Gold",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png",
  });

  await Product.create({
    _id: "65343222b67e9681f937f194",
    category: "65343222b67e9681f937c024",
    title: "Women's Wrist Watch",
    description:
      "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    price: 129.99,
    discountPercentage: 17.34,
    rating: 2.93,
    stock: 55,
    brand: "Fashion Co.",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/thumbnail.png",
  });
  // products

  /* Finished */
  console.log("* Synchronized.");
};