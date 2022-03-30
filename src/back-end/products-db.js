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

export {categoryList}