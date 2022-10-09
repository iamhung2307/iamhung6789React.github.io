const initProducts = [];

const productsReducer = (state = initProducts, action) => {
  switch (action.type) {
    case 'set_products': {
      return action.products;
    }
    default:
      return state;
  }
};

export default productsReducer;
