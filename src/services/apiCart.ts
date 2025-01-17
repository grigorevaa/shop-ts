import supabase from './supabase';

export const getCart = async (userId: string) => {
  const { data, error } = await supabase
    .from('cart')
    .select('*, cartItems(quantity, products(*))')
    .eq('userId', userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getCartItems = async (id: number) => {
  const { data, error } = await supabase
    .from('cartItems')
    .select('quantity, products(*)')
    .eq('cartId', id);

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
};

export const changeQuantityProduct = async (
  cartId: number,
  totalPrice: number,
  productId: number,
  productPrice: number,
  quantity: number,
) => {
  const { data: itemCart, error } = await supabase
    .from('cartItems')
    .select('*')
    .eq('cartId', cartId)
    .eq('productId', productId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  const returnedPrice = totalPrice + productPrice * quantity;

  if (!itemCart) {
    await supabase.from('cartItems').insert([{ cartId, productId, quantity }]);

    await supabase
      .from('cart')
      .update({ totalPrice: returnedPrice })
      .eq('id', cartId);

    const returnedQuantity = quantity;
    console.log(returnedQuantity);

    return { returnedPrice, returnedQuantity };
  } else {
    const returnedQuantity = itemCart.quantity + quantity;
    await supabase
      .from('cartItems')
      .update({ quantity: returnedQuantity })
      .eq('cartId', cartId)
      .eq('productId', productId);

    await supabase
      .from('cart')
      .update({ totalPrice: returnedPrice })
      .eq('id', cartId);

    return { returnedPrice, returnedQuantity };
  }
};

export const deleteProductFromCart = async (
  cartId: number,
  totalPrice: number,
  productId: number,
  productPrice: number,
  quantity: number,
) => {
  await supabase
    .from('cartItems')
    .delete()
    .eq('cartId', cartId)
    .eq('productId', productId);

  const returnedPrice = totalPrice - productPrice * quantity;
  await supabase
    .from('cart')
    .update({ totalPrice: returnedPrice })
    .eq('id', cartId);

  return returnedPrice;
};
