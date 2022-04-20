const {Router} = require("express");
const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../contollers/products.controller");

const productRouter = Router();

productRouter.route("/")
.get(getAllProducts)
.post(createProduct)

productRouter
.route("/:productId")
.get(getSingleProduct)
.patch(updateProduct)
.delete(deleteProduct)

module.exports = productRouter;