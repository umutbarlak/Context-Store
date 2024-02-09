import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";

const Header = () => {
  const { setCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);

  const [categories, setCategories] = useState([]);
  console.log(categories);

  const total = basket.reduce((total, product) => total + product.amount, 0);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <nav className="navbar navbar-dark bg-black sticky-top navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link " aria-current="page">
                  Anasayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link d-flex gap-2 " to={"/checkout"}>
                  <span>Sepet</span>
                  <span className="badge bg-danger">{total}</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to={"/"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategoriler
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <Link
                    to={"/"}
                    className=" text-decoration-none"
                    onClick={() => setCategory("all")}
                  >
                    <a className="dropdown-item" href="#">
                      Hepsi
                    </a>
                  </Link>
                  {categories?.map((cat) => (
                    <Link
                      to={`/`}
                      className=" text-decoration-none"
                      onClick={() => {
                        setCategory(cat);
                      }}
                      key={cat}
                    >
                      <a className="dropdown-item" href="#">
                        {cat}
                      </a>
                    </Link>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
