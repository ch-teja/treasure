import "./home.css";
import {Link} from "react-router-dom";
import heroImg from "../../asserts/category-images/heroImg.jpg"
import { categoryList } from "../../back-end/products-db";

import pendantCat from "../../asserts/category-images/pendantCat.jpg"

const Home = () =>
{
    return(
        <div>
        <section id="page">
        <header className="cat">
          
        {
            categoryList.map((item) => (
            <span className= "img-text-center" key={item._id}>
                <img src={item.image} className="img-responsive" alt="catagory_image" />
                <p className="img-text"><b>{item.categoryName}</b></p>
            </span>
            ))
        }
        </header>
        <main className="img-btn-center">
            <img src={heroImg} className="img-responsive " alt="hero_img" />
            <button className="btn btn-img-right"><b><Link to="/productlist" className="no-decoration color-white">Start Shopping</Link></b></button>
        </main>
        <div className="block1">
            <div className="card-horizontal">
                <img className="card-img" src={pendantCat} alt="home_pg_image" />
                <div className="card-info">
                    <div className="title">
                        <p className="desc">NEW ARRIVALS</p>
                        <h3>Cool Collection</h3>
                    </div>
                    <p>Check out our new collection with{" "}  amazing offers waiting for you!</p>  
                </div>
            </div>
        </div>
        <div className="block2">
            <div className="card-horizontal">
                <img className="card-img" src={pendantCat} alt="card_image" />
                <div className="card-info">
                    <div className="title">
                        <p className="desc">NEW ARRIVALS</p>
                        <h3>Winter Collection</h3>
                    </div>
                   <p>Check out our new collection with amazing offers waiting for you!</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    )   
}

export {Home}