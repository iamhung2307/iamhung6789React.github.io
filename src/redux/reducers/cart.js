const initCart = [];

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case 'add_to_cart': {
      const oldCart = [...state];
      // trường hợp sản phẩm đã có trong giỏ hàng => tăng số lượng sản phẩm
      if (
        oldCart.find((productInCart) => productInCart.id === action.product?.id || productInCart.size == action.product?.size)
      ) {
        // tìm sản phẩm trong mảng
        const indexOfProduct = oldCart.findIndex(
          (productInCart) => productInCart.id === action.product?.id
        );
        // nếu tìm thấy
        if (indexOfProduct !== -1) {
          // tăng sl sản phẩm
          return [
            ...oldCart.slice(0, indexOfProduct),
            {
              ...oldCart[indexOfProduct],
              order_quantity:
                oldCart[indexOfProduct].order_quantity +
                action.product.order_quantity,
            },
            ...oldCart.slice(indexOfProduct + 1),
          ];
        }
        // không tìm thấy
        return state;
      }

      // trường hợp chưa có thì thêm vào
      oldCart.push(action.product);

      return oldCart;
    }
    case 'change_cart_quantity': {
      const oldCart = [...state];
      // tìm sản phẩm trong mảng
      const indexOfProduct = oldCart.findIndex(
        (productInCart) => productInCart.id === action.proId
      );
      console.log('run', indexOfProduct);
      // nếu tìm thấy
      if (indexOfProduct !== -1) {
        // đặt lại số lượng sản phẩm
        return [
          ...oldCart.slice(0, indexOfProduct),
          { ...oldCart[indexOfProduct], order_quantity: action.order_quantity },
          ...oldCart.slice(indexOfProduct + 1),
        ];
      }
      return state;
    }
    case 'remove_cart_product': {
      const oldCart = [...state];
      // tìm sản phẩm trong mảng
      const indexOfProduct = oldCart.findIndex(
        (productInCart) => productInCart.id === action.proId
      );
      // nếu tìm thấy
      if (indexOfProduct !== -1) {
        // đặt lại giỏ hàng
        return [
          ...oldCart.slice(0, indexOfProduct),
          ...oldCart.slice(indexOfProduct + 1),
        ];
      }
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
