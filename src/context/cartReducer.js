export const CartReducer= (state,action) => {
    
    switch(action.type){
        case "ADD":
           const index = state.cartItems.findindex(x => x.id === action.payload.id)

           if(index === -1){
            state.cartItems.push({...action.payload, quantity: 1})
           }
           else{
            state.cartItems[index].quantity++;
           }
           return state;

        case "REMOVE":
            return state
        
        default: 
            return state
    }
}