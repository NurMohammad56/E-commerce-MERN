import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get(`/api/v1/brandList`);
    if (res.data["status"] === "Success") {
      set({ BrandList: res.data["data"] });
    }
  },

  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get(`/api/v1/categoryList`);
    if (res.data["status"] === "Success") {
      set({ CategoryList: res.data["data"] });
    }
  },

  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get(`/api/v1/sliderList`);
    if (res.data["status"] === "Success") {
      set({ SliderList: res.data["data"] });
    }
  },

  ListByRemark: null,
  ListByRemarkRequest: async (Remark) => {
    set({ ListByRemark: null });
    let res = await axios.get(`/api/v1/listByRemark/${Remark}`);
    if (res.data["status"] === "Success") {
      set({ ListByRemark: res.data["data"] });
    }
  },

  ListProduct: null,
  ListByBrandRequest: async (BrandID) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/listByBrand/${BrandID}`);
    if (res.data["status"] === "Success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  ListByCategoryRequest: async (CategoryID) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/listByCategory/${CategoryID}`);
    if (res.data["status"] === "Success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  ListByKeywordRequest: async (Keyword) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/listByKeyword/${Keyword}`);
    if (res.data["status"] === "Success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  ListByFilterRequest: async (postBody) => {
    set({ ListProduct: null });
    let res = await axios.post(`/api/v1/listByFilter`, postBody);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => {
    set({ SearchKeyword: keyword });
  },

  ProductDetails: null,
  ProductDetailsRequest: async (id) => {
    set({ ProductDetails: null });
    let res = await axios.get(`/api/v1/productDetails/${id}`);
    set({ ProductDetails: res.data["data"] });
  },

  ReviewList: null,
  ReviewListRequest: async (id) => {
    let res = await axios.get(`/api/v1/productReviewList/${id}`);
    set({ ReviewList: res.data["data"] });
  },
}));

export default ProductStore;
