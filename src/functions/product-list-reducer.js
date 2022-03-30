const productListReducerFunc = (state,action) =>
{
    switch(action.type)
    {
        case "RATING":
            return{
                ...state,
                rating:action.value
            }
        case "SORTBY":
            return{
                ...state,
                sortBy:action.value
            }
        default:
            return{
                ...state
            }
    }
}

const getSortBy = (allProducts,sortBy) =>
{
    if(sortBy === "lowToHigh")
    {
        return allProducts.sort((item1,item2) => item1.price-item2.price)
    }
    if(sortBy === "highToLow")
    {
        return allProducts.sort((item1,item2) => item2.price-item1.price)
    }
    console.log("something wrong")
    return allProducts
}
const getFilterByRating = (allProducts,rating) =>
{
    return allProducts.filter((pro) => pro.rating >= rating)
}

export {productListReducerFunc,getSortBy,getFilterByRating}