import React, { Component } from 'react'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'
export class MainBanner extends Component {
  constructor(props){
    super(props)
  }
  static defaultProps = {
      banners:[],
      title:"默认"
  }

  render() {
    const {banners,title} = this.props
    return (
      <div>
        <div>{title}</div>
        <ul>
          {
            banners.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
      
    )
  }
}
MainBanner.propTypes = {
  banners:PropTypes.array.isRequired,
  title:PropTypes.string
}
// MainBanner.defaultProps = {
//   banners:[],
//   title:"默认"
// }
export default MainBanner