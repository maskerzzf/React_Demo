import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor(){
    super()
    this.state = {
      title:'歌曲',
      banners:['新歌曲','新专辑','新mv'],
      productList:['推荐商品','热门商品','折扣商品']
    }
  }
  render() {
    const {banners,productList,title} = this.state
    return (
      <div className='main'>
        <div>main</div>
        <MainBanner  banners={banners} title='歌曲'></MainBanner>
        <MainProductList  productList={productList}> </MainProductList>
      </div>
    )
  }
}

export default Main