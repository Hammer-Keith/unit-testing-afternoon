const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties:', function(){
test('check if cart is empty', () =>{
    expect(Array.isArray(cart.cart)).toEqual(true)
    expect( cart.cart.length).toEqual(0)
})

test('total should default to 0', function(){
    expect(cart.total).toEqual(0)
})
})

describe('Cart Methods:', function(){
    afterEach(function(){
        cart.cart = [];
        cart.total = 0;
    })

    test('cars should be added to cart', function(){
        cart.addToCart( cars[0]);
        cart.addToCart(cars[1])

        expect( cart.cart.length).toEqual(2);
        expect( cart.cart[0] ).toEqual(cars[0])
        expect( cart.cart[1] ).toEqual(cars[1])
    })

    test('addToCart() should increase the total', function(){
        cart.addToCart( cars[0]);
        cart.addToCart( cars[8]);
        cart.addToCart( cars[2]);

        expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price)
    })

    test('removefromcart() removes things from cart', function(){
        cart.addToCart( cars[0]);
        cart.addToCart( cars[8]);
        cart.addToCart( cars[2])

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[2].price);

        expect( cart.total).toEqual(cars[8].price);
    })

    test('checkout() should empty the cart array and set total to 0', function(){
        cart.addToCart( cars[0]);
        cart.addToCart( cars[1]);
        cart.addToCart( cars[2]);
        cart.addToCart( cars[4]);

        cart.checkout();

        expect( cart.cart.length).toEqual(0);
        expect( cart.total ).toEqual( 0 );
    })
})