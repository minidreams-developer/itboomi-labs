let express = require("express");
let products = require("./data.js");

let app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to express-json");
});

// Need to get all the products
// /api/products

app.get("/api/products", (req, res) => {
  let newProducts = products.map(
    ({ id, title, description, price, category, image }) => {
      return {
        id,
        title,
        price,
        category,
        image,
        description,
      };
    },
  );

  // res.status(200).json(data)
  res.status(200).json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  let { id } = req.params;

  console.log("id===>", id);

  let singleProduct = products.find((product) => product.id === Number(id));

  console.log("singleProduct==>", singleProduct);

  if (!singleProduct) {
    return res.status(400).json({ message: "Product not found" });
  }

  res.status(200).json(singleProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} successfully`);
});
