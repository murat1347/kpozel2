import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productListAsync } from "../../redux/Products/productListService";
import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';
import Loading from "../Loading/loading";
import JsonData from "../Forms/MOCK_DATA.json";
import axios from "axios";
function Table() {
    const history = useNavigate();
    const productListSlice = useSelector((state) => state.productListSlice)
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [users, setUsers] = useState(JsonData.slice(0, 1000));
    const usersPerPage = 25;
    const pageCount = Math.ceil(users.length / usersPerPage);
    const [pageNumber, setPageNumber] = useState(0);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    useEffect(() => {
        var response = axios.get(
            `http://localhost:4988/api/Product`,{params:{CategoryId:1,PAGE_SIZE:{pageNumber}}}
          );
          console.log(response);
    }, [pageNumber]);

    function handleClick(path) {
        history("/product/" + path);
    }

    if (productListSlice.status === "pending") {
        return <div><Loading /></div>
    }


    return (

        <div>
            {productListSlice.status == "succeeded" ? (
                <section role="main" class="content-body">
                    <div class="row">
                        <div class="col">
                            <section class="card">
                                <header class="card-header">
                                    <div class="card-actions">
                                        <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                                        <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                                    </div>

                                    <h2 class="card-title">Ürün Tablosu</h2>
                                </header>
                                <div class="card-body">
                                    <table class="table table-bordered table-striped mb-0" id="datatable-tabletools">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th class="d-lg-none">Price</th>
                                                <th class="d-lg-none">Stock</th>
                                            </tr>
                                        </thead>
                                        {productListSlice.items[0].map((item) => (
                                            <tbody>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}
                                                    </td>
                                                    <td>{item.description}+</td>
                                                    <td class="center d-lg-none">{item.price}</td>
                                                    <td class="center d-lg-none">{item.stock}</td>
                                                    <td>
                                                        <Button onClick={() => handleClick(item.id)}>
                                                            Detay
                                                        </Button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </section>
            ) : <div> Server Error</div>}
        </div>
    )
}

export default Table