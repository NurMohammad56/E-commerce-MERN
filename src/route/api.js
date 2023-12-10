const express = require("express");
const router = express.Router();
const {brandList, categoryList, sliderList,
    listByBrand, listByCategory, listBySimilar,
    listByKeyword, listByRemark,
    productDetails, productReviewList} = require("../controller/productContoller")

// Product
router.get("/brandList", brandList);
router.get("/categoryList", categoryList);
router.get("/sliderList", sliderList);
router.get("/listByBrand/:brandID", listByBrand);
router.get("/listByCategory/:categoryID", listByCategory);
router.get("/listBySimilar/:keyword", listBySimilar);
router.get("/listByKeyword/:keyword", listByKeyword);
router.get("/listByRemark/:remark", listByRemark);
router.get("/productDetails/:productID", productDetails);
router.get("/productReviewList/:productID", productReviewList);


module.exports = router;