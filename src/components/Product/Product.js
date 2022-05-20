// import "./quote-detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { productsSelector } from "../../redux/Products/productListSlice";
import axios from "axios";
import $ from "jquery";
import printJS from "print-js";

const Product = () => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const items = useSelector(productsSelector);
  const [product, setProduct] = useState(null);
  const tableRef = useRef(null);
  useEffect(() => {

    const response = axios
      .get(`http://localhost:4988/api/Product/${product_id}`)
      .then((res) => res.data)
      .then((data) => setProduct(data))


  }, [items, product_id]);

  if (!product) {
    return <navigate to="/" />;
  }
  function printDiv() {
    printJS({
      printable: 'table',
      type: 'html',
      style: 'td { border: 1px solid #d9d9d9 !important;} th { border: 1px solid #d9d9d9 !important;}'
    });
}
  return (
    <div className="card-body">
      <div style={{ padding: "0% 5% 0% 5%" }}>

        <div class="row">

          <div className='col-sm-10'><b><h3>#415</h3></b></div>
          <div className='col-sm-2'>
            <button type="button" onClick={printDiv} class="btn btn-light btn-xs"><i class="fa fa-print"></i> YAZDIR</button>
            <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-file" aria-hidden="true"></i> EXCEL</button>
          </div>
        </div>

        <table class="table table-bordered" id="table">
          <tr>
            <th className="col-sm-5">Değer</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Oluşturulma Tarihi</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Güncelleme Tarihi</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Sağlayıcı</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">POS ID</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Banka Adı</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kayıtlı Benzersiz</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kullanıcı Adı</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kullanıcı Kodu</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kart ilk 4.</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kart Son 4.</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Kart Adı</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Tutar</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Referans No</th>
            <td className="col-sm-7"><span class="badge badge-primary">Primary</span></td>
          </tr>
          <tr>
            <th className="col-sm-5">Güvenlik Kod No</th>
            <td className="col-sm-7"><span class="badge badge-danger">Primary</span></td>
          </tr>
          <tr>
            <th className="col-sm-5">Sağlayıcı Sipariş No</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">Durumu</th>
            <td className="col-sm-7"><span class="badge badge-success">Primary</span></td>
          </tr>
          <tr>
            <th className="col-sm-5">Durumu Mesaj</th>
            <td className="col-sm-7">Veri</td>
          </tr>
          <tr>
            <th className="col-sm-5">LOG</th>
            <td className="col-sm-7">Veri</td>
          </tr>

        </table>
      </div></div>
  );
};

export default Product;