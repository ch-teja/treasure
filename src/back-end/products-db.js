import { v4 as uuid } from "uuid";
import banglesCat from "../asserts/category-images/banglesCat.jpg";
import earringsCat from "../asserts/category-images/earringsCat.jpg";
import necklaceCat from "../asserts/category-images/necklaceCat.jpg";
import pendantCat from "../asserts/category-images/pendantCat.jpg";
import ringCat from "../asserts/category-images/ringCat.jpg";


const categoryList = [
    {"_id":uuid(),
    "categoryName":"Rings",
    "image":ringCat ,
    },
    {"_id":uuid(),
    "categoryName":"Necklace",
    "image":necklaceCat ,
    },
    {"_id":uuid(),
    "categoryName":"Earrings",
    "image":earringsCat ,
    },
    {"_id":uuid(),
    "categoryName":"Bangles",
    "image":banglesCat ,
    },
    {"_id":uuid(),
    "categoryName":"Pendants",
    "image":pendantCat ,
    },
    {"_id":uuid(),
    "categoryName":"Earrings",
    "image":earringsCat ,
    },  
]

const productsList = 
[
    {
        "_id":uuid(),
        "image":ringCat,
        "name":"Embrace Ring",
        "subText":"by GIVA jewellery",
        "rating":4.6,
        "price":10000,
        "category":"rings",  
    },
    {
        "_id":uuid(),
        "image":necklaceCat,
        "name":"Stoned Necklace",
        "subText":"by GIVA jewellery",
        "rating":3.5,
        "price":12000,
        "category":"necklace",  
    },
    {
        "_id":uuid(),
        "image":pendantCat,
        "name":"Drop pendant",
        "subText":"by yellow jewellery",
        "rating":4.8,
        "price":9999,
        "category":"pendents",  
    },
    {
        "_id":uuid(),
        "image":ringCat,
        "name":"Band Ring",
        "subText":"plated silver stone",
        "rating":3.8,
        "price":9500,
        "category":"rings",  
    },
    {
        "_id":uuid(),
        "image":necklaceCat,
        "name":"Classic necklace",
        "subText":"by yellow gold jewellery",
        "rating":2.5,
        "price":15000,
        "category":"necklace",  
    },
    {
        "_id":uuid(),
        "image":banglesCat,
        "name":"Stoned bangle",
        "subText":"by tej jewellery",
        "rating":4.5,
        "price":9000,
        "category":"bangles",  
    },
    {
        "_id":uuid(),
        "image":ringCat,
        "name":"Lettered Ring",
        "subText":"by yellow gold jewellery",
        "rating":3.5,
        "price":8000,
        "category":"rings",  
    },
    {
        "_id":uuid(),
        "image":pendantCat,
        "name":"Stoned pendant",
        "subText":"by ahalya jewellery",
        "rating":2.8,
        "price":7999,
        "category":"pendents",  
    },
    {
        "_id":uuid(),
        "image":earringsCat,
        "name":"Classic earrings",
        "subText":"by yellow jewellery",
        "rating":4.8,
        "price":10999,
        "category":"earrings",  
    },
    {
        "_id":uuid(),
        "image":banglesCat,
        "name":"stoned bangle",
        "subText":"by yellow jewellery",
        "rating":3.7,
        "price":7000,
        "category":"bangles",  
    },   
]

export {categoryList,productsList}