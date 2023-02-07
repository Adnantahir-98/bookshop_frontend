// import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {Container} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import '../style.css'


const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productslist-edit/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <AiFillDelete
              className="productListDelete h4 mt-1"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList my-5">
      <Container>
      <h1 className="productTitle">Products List ({products.length})</h1>
        <DataGrid
          style={{ height: "85vh" }}
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          checkboxSelection
        />
      </Container>
    </div>
  );
}

export default ProductList;
 