import React, { Component } from 'react'
import Slider from './slider'

export default class App extends Component {

  render() {
    const { itemData } = this.props
		const data = itemData.CatalogEntryView[0]
		const title = data.title
    const image = data.Images[0].PrimaryImage[0].image
    const price = data.Offers[0].OfferPrice[0].formattedPriceValue
    const priceQualifier = data.Offers[0].OfferPrice[0].priceQualifier
    const purchasingChannelCode = data.purchasingChannelCode
    const showAddToCart = purchasingChannelCode === '0' || purchasingChannelCode === '1'
    const pickupInStore = purchasingChannelCode === '0' || purchasingChannelCode === '2'
    const carouselImages = data.Images[0].AlternateImages
    return (
      <div className="row">
        <div className="my-retail col-xs-12">
          <div className="my-retail-product col-xs-12 col-md-6">
            <div className="my-retail-title">{ title }</div>
            <div className="my-retail-product-image-wrapper">
              <img className="my-retail-product-image" src={ image } alt="product"/>
            </div>
            <div className="my-retail-image-carousel">
              <Slider images={ carouselImages } />
            </div>
          </div>
          <div className="my-retail-priceblock col-xs-12 col-md-6">
            <div className="my-retail-price">
              <span className="my-retail-offer-price">{ price }</span>
              <span className="my-retail-price-qualifier">{ priceQualifier }</span>
            </div>
            <div className="my-retail-promotions col-xs-12 col-md-6">
              <p>spend $50, ship free</p>
              <p>$25 gift card with purchase of a select Ninja blender</p>
            </div>
            <div className="my-retail-button-wrapper col-xs-12">
              { pickupInStore && <button className="btn btn-block btn-sm btn-primary btn-pickup">PICK UP IN STORE</button> }
              { showAddToCart && <button className="btn btn-block btn-sm btn-primary btn-add-to-cart">ADD TO CART</button> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
