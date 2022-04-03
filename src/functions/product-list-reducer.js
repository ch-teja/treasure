const productListReducerFunc = (state,action) =>
{
    switch(action.type)
    {
        case "CLEAR-FILTER":
            return{
                ...state,
                rating:0,
                sortBy:"",
                categoryFilterBy:{
                    rings:false,
                    bangles:false,
                    necklace:false,
                    earrings:false,
                    pendants:false
                },
                price:25000,
            }
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
        case "CATEGORY-FILTER-RINGS":
            return{
                ...state,
                categoryFilterBy:{
                    ...state["categoryFilterBy"],
                    rings: !state.categoryFilterBy.rings
                }
            }
        case "CATEGORY-FILTER-BANGLES":
            return{
                ...state,
                categoryFilterBy:{
                    ...state["categoryFilterBy"],
                    bangles: !state.categoryFilterBy.bangles
                }
            }
        case "CATEGORY-FILTER-NECKLACE":
            return{
                ...state,
                categoryFilterBy:{
                    ...state["categoryFilterBy"],
                    necklace: !state.categoryFilterBy.necklace
                }
            }
        case "CATEGORY-FILTER-EARRINGS":
            return{
                ...state,
                categoryFilterBy:{
                    ...state["categoryFilterBy"],
                    earrings: !state.categoryFilterBy.earrings
                }
            }
        case "CATEGORY-FILTER-PENDANTS":
            return{
                ...state,
                categoryFilterBy:{
                    ...state["categoryFilterBy"],
                    pendants: !state.categoryFilterBy.pendants
                }
            }
        case "FILTER-BY-PRICE":
            return{
                ...state,
                price:action.value
            }
        default:
            return{
                ...state
            }
    }
}

export {productListReducerFunc}
