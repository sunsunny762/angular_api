const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createProduct,
  createList,
  getList,
  deleteList,
  login,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
} = require("./user.controller");
router.get("/products", getProducts);
router.post("/product", createProduct);
router.get("/product/:id", getProductById);
router.post("/login", login);
router.patch("/product", updateProduct);
router.post("/addList", createList);
router.get("/getList/:id", getList);
router.post("/deleteList", deleteList);
router.delete("/product/:id", deleteProduct);

module.exports = router;
