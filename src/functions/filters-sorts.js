const getFilterByCategory = (allProducts,rings,bangles,necklace,earrings,pendants) => {
    const categoryFilteredList = []
   if(!rings && !bangles && !necklace && !earrings && !pendants)
   {
       return allProducts
   }
   if(rings)
   {
       let filteredList = allProducts.filter((item)=> item.category === "rings")
       categoryFilteredList.push(...filteredList)
   }
   
   if(bangles)
   {
      let filteredList = allProducts.filter((item)=> item.category === "bangles")
      categoryFilteredList.push(...filteredList)
   }
     
   if(necklace)
   {
        let filteredList = allProducts.filter((item)=> item.category === "necklace")
        categoryFilteredList.push(...filteredList)
   }
   
   if(earrings)
   {
     let filteredList = allProducts.filter((item)=> item.category === "earrings")
     categoryFilteredList.push(...filteredList)
   }
   
   if(pendants)
   {
       let filteredList = allProducts.filter((item)=> item.category === "pendents")
       categoryFilteredList.push(...filteredList)
   }
   return categoryFilteredList;
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
const getFilterByPrice = (allProducts,price) => {
    return allProducts.filter((pro)=>pro.price <= price)
}

export {getSortBy,getFilterByRating,getFilterByCategory,getFilterByPrice}