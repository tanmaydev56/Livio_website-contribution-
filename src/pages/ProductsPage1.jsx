import { useState } from "react";
import "../styles/ProductsPage.css";
import ProductsPageSecond from "../components/ProductsPageSecond"
import ProductsPageLast from "../components/ProductsPageLast";
import Sofas from "../components/sofasArmcha";
import ProductPageCompo from "../components/ProductPageCompo";


const ProductsPage = () => {

  return (
    <><Sofas/>
      <ProductsPageSecond />
      <ProductPageCompo/>
      <ProductsPageLast/>
    </>
  );
};

export default ProductsPage;
