import { useLocation } from "react-router";
import { useState } from "react";
import Products from "../../components/products/Products";
import "./productList.scss";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,] = useState({});
    const [sort,] = useState("newest");
  
/*     const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
 */
  return (
    <div className="container__productList">
      <h1 className="title__productList">{cat.replace('%20', ' ').toUpperCase()}</h1>
      <div className="filterContainer">
         {/*  <span className="filter__text">Filtros:</span>
        <div className="filters">
          <select name="color" className="selects" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>blanco</option>
            <option>negro</option>
          </select>
        </div>
        <div className="filters">
          <span className="filter__text">Max/Min</span>
          <select onChange={(e) => setSort(e.target.value)} className="selects">
            <option value="newest">Nuevos</option>
            <option value="asc">Precio (asc)</option>
            <option value="desc">Precio (desc)</option>
          </select>
        </div> */}
        </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
