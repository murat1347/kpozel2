import { Col, Row, Space } from 'antd'
import React from 'react'

function Home() {
  return (<div style={{ padding: "45px" }}>

    <Row>
      <Col className='col-sm-8'><b>HOŞGELDİNİZ</b></Col>
      <Col className='col-sm-4'>
        <div style={{float:"right"}}>
        <button type="button" class="btn btn-primary btn-sm"><i class="fa fa-envelope" aria-hidden="true"></i> EMAIL</button>
        <button type="button" class="btn btn-secondary btn-sm" style={{margin: "5px"}}><i class="fa fa-print"></i> PRINT</button>
        <button type="button" class="btn btn-success btn-sm"><i class="fa fa-file" aria-hidden="true"></i> GENERATE REPORT</button></div>
      </Col>
    </Row>
    <Row>
      <Col span={6} style={{ padding: '8px' }}>
        <section class="card card-featured-left card-featured-primary mb-3">
          <div class="card-body">
            <div class="widget-summary">
              <div class="widget-summary-col widget-summary-col-icon">

              </div>
              <div class="widget-summary-col">
                <div class="summary">
                  <h4 class="title">GÜNLÜK İSTEK SAYISI</h4>
                  <div class="info">
                    <strong class="amount">1281</strong>

                  </div>
                </div>
                <div class="summary-footer">
                  <a class="text-muted text-uppercase" href="#">(view all)</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Col>
      <Col span={6} style={{ padding: '8px' }}>
        <section class="card card-featured-left card-featured-secondary">
          <div class="card-body">
            <div class="widget-summary">
              <div class="widget-summary-col widget-summary-col-icon">

              </div>
              <div class="widget-summary-col">
                <div class="summary">
                  <h4 class="title">GÜNLÜK BAŞARILI YATIRIM</h4>
                  <div class="info">
                    <strong class="amount">0.00</strong>
                  </div>
                </div>
                <div class="summary-footer">
                  <a class="text-muted text-uppercase" href="#">(withdraw)</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Col>


      <Col span={6} style={{ padding: '8px' }}>
        <section class="card card-featured-left card-featured-tertiary mb-3">
          <div class="card-body">
            <div class="widget-summary">
              <div class="widget-summary-col widget-summary-col-icon">

              </div>
              <div class="widget-summary-col">
                <div class="summary">
                  <h4 class="title">AYLIK İSTEK SAYISI</h4>
                  <div class="info">
                    <strong class="amount">38</strong>
                  </div>
                </div>
                <div class="summary-footer">
                  <a class="text-muted text-uppercase" href="#">(statement)</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Col>
      <Col span={6} style={{ padding: '8px' }}>
        <section class="card card-featured-left card-featured-quaternary">
          <div class="card-body">
            <div class="widget-summary">
              <div class="widget-summary-col widget-summary-col-icon">

              </div>
              <div class="widget-summary-col">
                <div class="summary">
                  <h4 class="title">AYLIK BAŞARILI YATIRIM</h4>
                  <div class="info">
                    <strong class="amount">3765</strong>
                  </div>
                </div>
                <div class="summary-footer">
                  <a class="text-muted text-uppercase" href="#">(report)</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Col>
    </Row>


  </div>

  )
}

export default Home