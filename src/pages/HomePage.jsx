import Loader from "../components/Loader";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Card from "../components/Card";

const HomePage = () => {
  const { products, category } = useContext(ProductContext);
  return (
    <>
      <h1 className="  text-capitalize  m-2 p-4 text-decoration-underline">
        {category && category}
      </h1>
      <div className="container d-flex mx-auto gap-3 gap-md-4 mt-5 flex-wrap justify-content-center ">
        {!products && <Loader />}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
