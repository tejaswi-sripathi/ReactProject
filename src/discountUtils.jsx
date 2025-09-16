export function calculateTotal(cartItems){
   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
export function buttonDiscountCalculation(totalPrice, discountPercentage) {
    return (totalPrice * discountPercentage) / 100;
}
export function getcouponDiscount(totalPrice, couponCode) {
    let discountPercent = 0;
    switch(couponCode) {
        case "TEJU10":
            discountPercent = 10;
            break;
        case "TEJU20":
            discountPercent = 20;
            break;      
        case "TEJU30":
            discountPercent = 30;
            break;              
        default:
            discountPercent = 0;
    }           
    const discountAmount = (totalPrice * discountPercent) / 100;
    return {
        isvalid : discountPercent > 0,
        discountPercent,
        discountAmount
    };
}
