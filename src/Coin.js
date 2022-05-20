import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,volume,pricechange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="Crypto" />
                    <h1>{name}</h1>
                    <p className="Coin-Symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="Coin-Prices">Rs.{price}</p>
                    {pricechange<0 ? (
                        <p className="coin-percent red">fluctuation:{pricechange.toFixed(4)}%</p>
                    ):(
                        <p className="coin-percent green">fluctuation:{pricechange.toFixed(4)}%</p>
                    )
                }
                <p className="coin-marketvalue">
                    Mkt Capacity: Rs.{marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
