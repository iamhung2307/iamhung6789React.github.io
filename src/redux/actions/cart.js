export const addToCart = (product = {}, order_quantity = 1,size = 'S') => {
  return { type: 'add_to_cart', product: { ...product, order_quantity,size } };
};

export const changeCartQuantity = (proId, order_quantity) => {
  return { type: 'change_cart_quantity', proId, order_quantity };
};

export const deleteCartProduct = (proId) => {
  return { type: 'remove_cart_product', proId };
};
