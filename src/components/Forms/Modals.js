import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { Input, Form, DatePicker, Space, Select, Col, Table, Row } from 'antd';
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import axios from 'axios';

function Modals() {
  const { RangePicker } = DatePicker;
  const dateFormat = 'DD/MM/YYYY';
  const { Option } = Select;
  const [users, setUsers] = useState(JsonData.slice(0, 1000));
  const [pageNumber, setPageNumber] = useState(1);
  const usersPerPage = 25;
  const totalPage = pageNumber * usersPerPage;
  const [data, setData] = useState([]);


  function displayUsers() {
    return (

      <tr className='topics'>
        <td className='topics'>1</td>
        <td>{22}</td>
        <td><span class="badge badge-primary">1</span></td>
        <td><span class="badge badge-secondary">1</span></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td><span class="badge badge-success">1</span></td>
        <td>1</td>
        <td>1</td>
        <td><div class="dropdown">
          <button class="btn btn-secondary btn-xs dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            İŞLEMLER
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">YATIRIM DETAYI</a>
          </div>
        </div></td>

      </tr>
    )
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4988/api/Product', { params: { CategoryId: 1, page: pageNumber, PAGE_SIZE: 12 } });
      setData(response.data);

    }
    fetchData();
  }, [setData, pageNumber])
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  return (
    <div>
      <Helmet>
        <script src="js/examples/examples.modals.js"></script>
        <script src="vendor/popper/umd/popper.min.js"></script>
      </Helmet>
    <div className="card-body">
      <div class="jumbotron">
        <div class="row">

          <div className='col-sm-10'><b><h4>BAŞARILI İŞLEMLER</h4></b></div>
          <div className='col-sm-2'>
            <button type="button" class="btn btn-light btn-xs"><i class="fa fa-print"></i> YAZDIR</button>
            <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-file" aria-hidden="true"></i> EXCEL</button>
          </div>
        </div>
        <div class="border" style={{ padding: "2% 4% 2% 4%" }}>
          <div className="toggle-content">
            <form>
              <div class="row">
                <div className='col'>
                  TARİH ARALIĞI
                  <Space direction="vertical" size={24}>
                    <RangePicker

                      defaultValue={[moment(moment().format("DD-MM-YYYY"), dateFormat), moment(moment().format("DD-MM-YYYY hh:mm:ss"), dateFormat)]}
                      format={dateFormat} /></Space>
                </div>
                <div className='col'>
                  BÜRO <br />
                  <select class="form-select input-lg" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='col'>
                  İŞ YERİ REFERANS NUMARASI
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className='col'>
                  BÜRO REFERANS NUMARASI
                  <input type="text" class="form-control inp" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className='col'>
                  BANKA
                  <br />
                  <select class="form-select input-lg" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div className='col' style={{ paddingTop: "25px" }}>
                  <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">Kart No</span>
                    </div>
                    <input type="text" aria-label="İLK 4." class="form-control" placeholder="İLK 4." />
                    <input type="text" aria-label="SON 4." class="form-control" placeholder='SON 4.' />
                  </div>
                </div>

                <div className='col'>
                  KULLANICI ADI
                  <input type="text" class="form-control inp" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className='col'>
                  KULLANICI NO
                  <input type="text" class="form-control inp" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className='col'>
                  İŞLEM ID
                  <input type="text" class="form-control inp" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className='col' style={{ paddingTop: "25px" }}>
                  <button type="button" class="btn btn-success btn-xs">YENİLE</button>
                </div>
              </div>
            </form>

          </div>
        </div>

      </div>

      <div style={{ padding: "0% 3% 5% 3%" }} >

        <br />
        <div className='col-lg-12'>

          <div className="App">

            <table className="table table-bordered" id="datatable-editable">
              <thead>
                <tr>
                  <th style={{ height: "0px" }}>Id</th>
                  <th>ID</th>
                  <th>TARİH</th>
                  <th>POS</th>
                  <th>BÜRO</th>
                  <th>KULLANICI ADI</th>
                  <th>KULLANICI KODU</th>
                  <th>KART SAHİBİ</th>
                  <th>KART-1</th>
                  <th>KART-4</th>
                  <th>TUTAR</th>
                  <th>DURUM</th>
                  <th>SİPARİŞ KODU</th>
                  <th>DURUM NOTU</th>
                  <th>İŞLEM</th>
                </tr>
              </thead>
              {displayUsers()}
            </table>

            <br />
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


          </div>

        </div>
      </div>
    </div >

    </div>
  )
}

export default Modals;