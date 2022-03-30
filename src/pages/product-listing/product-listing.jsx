import "./product-listing.css";
import {useReducer} from "react";
import { productsList } from "../../back-end/products-db";
import {productListReducerFunc,getSortBy,getFilterByRating} from "../../functions/product-list-reducer.js"
const allProducts = productsList;
const ProductListing = () =>
{
    const [state,dispatch] = useReducer(productListReducerFunc,{
        rating:0,
        sortBy:""
    })
    console.log(state.sortBy)
    const sortList = getSortBy(allProducts,state.sortBy)
    const finalProducts = getFilterByRating(sortList,state.rating)

    return(
        <div className="prod-page">
            <div className="aside">
                <div className="filter">
                    <h3>Filters</h3>
                    <p>Clear</p>
                </div>
                <div className="filter-item price">
                    <h4>Price</h4>
                    <input type="range" id="price" name="price" step="100"
                    min="50" max="1000" />
                </div>
                <div className="filter-item category">
                    <h3>Category</h3>
                    <input type="checkbox" className="check-box" /><label for="rings">Rings</label><br />
                    <input type="checkbox" className="check-box" /><label for="bangles">Bangles</label><br />
                    <input type="checkbox" className="check-box" /><label for="necklace">Necklace</label><br />
                    <input type="checkbox" className="check-box" /><label for="earrings">Earrings</label><br />
                    <input type="checkbox" className="check-box" /><label for="pendants">Pendants</label> 
                </div>
                <div className="filter-item rating">
                    <h3>Rating</h3>
                    <input type="radio"
                            className="radio-btn"
                            name="rating" 
                            checked = {state.rating === 4}
                            onChange = {(e)=>dispatch({type:"RATING",value:4})}
                     /><label for="">4 Stars and above</label><br />
                    <input type="radio"
                            className="radio-btn"
                            name="rating"
                            checked = {state.rating === 3}
                            onChange = {(e)=>dispatch({type:"RATING",value:3})}
                     /><label for="">3 Stars and above</label><br />
                    <input type="radio" 
                            className="radio-btn" 
                            name="rating" 
                            checked={state.rating === 2}
                            onChange = {(e)=>dispatch({type:"RATING",value:2})}
                    /><label for="">2 Stars and above</label><br />
                    <input type="radio"
                            className="radio-btn"
                            name="rating"
                            checked={state.rating === 2}
                            onChange = {(e)=>dispatch({type:"RATING",value:1})}
                       /><label for="">1 Star and above</label><br />
                </div>
                <div className="filter-item sortby">
                    <h3>Sort by</h3>
                    <input type="radio"
                            className="radio-btn"
                            name="filter"
                            onChange = {(e)=>dispatch({type:"SORTBY",value:"lowToHigh"})}
                            checked={state.sortBy === "lowToHigh"}
                      /><label for="">Price-Low to High</label><br />
                    <input type="radio" 
                            className="radio-btn"
                            name="filter"
                            onChange = {(e)=>dispatch({type:"SORTBY",value:"highToLow"})}
                            checked={state.sortBy === "highToLow"}
                     /><label for="">Price-High to Low</label>
                </div>            
            </div>

            <main>
                <div className="products">
                    {
                        finalProducts.map((pro)=>(
                            <div className="card" key={pro._id}>
                                <img className="card-img" src={pro.image} alt="card_image" />
                                <span className="badge"><i className="fa fa-heart-o"></i></span>
                                <div className="card-info">
                                    <div className="title">
                                        <h3>{pro.name}</h3>
                                        <p className="desc">{pro.subText}</p>
                                    </div>
                                    <div className="price">Rs.{pro.price} <s className="price-off">Rs.25000</s><span className="rating-text">{pro.rating} <span class="fa fa-star rated"></span></span> </div>
                                    <div className="button-block">
                                        <button className="btn product-card-button">Add to cart <i className="fa fa-shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}
export {ProductListing}