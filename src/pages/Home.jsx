import Homeimg from "../components/Homeimg";
import GridComponent from "../components/GridComponent";
import FeaturedProducts from "../components/FeaturedProducts";
import CardSlider from "../components/CardSlider.jsx";
import Explore from "../components/Explore";
import Custom from "../components/Custom";
import Categoriess from "../components/categories";
import Product from "../components/popularProduct.jsx";

function Home() {
  return (
    <div className="Categories">
      <Homeimg />
      <GridComponent />
      <FeaturedProducts />
      <CardSlider />
      <Product />
      <Explore />
      <Custom />
      <Categoriess />
    </div>
  );
}

export default Home;
