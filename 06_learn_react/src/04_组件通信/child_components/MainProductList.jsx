import React, { Component } from 'react'

export class MainProductList extends Component {
  constructor(props){
    super(props)

  }
  render() {
    const {productList} = this.props
    return (
      <div>
        <div>商品列表</div>
         <ul>
            {
              productList.map((item,index)=>{
                return (<li key={index}>{item}</li>)
              })
            }
         </ul>
      </div>

    )
  }
}

export default MainProductList