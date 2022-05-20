import React from 'react'
import { Spin } from 'antd';
function loading() {
    return (
     <div>
            <div className="example">
            <Spin />
            </div>
    </div>
    )
}

export default loading