const {Router}= require('express');
const router = Router();
const Cart = require('../models/cart')
const Product = require('../models/products')
const User = require('../models/user');
const SessionModel = require('../models/session');

// const {addUser, getUsers} = require('../lib/mongo');

router.get('/users', async (req,res)=>{
    
    let data = await getUsers()
    res.send(data);
});

router.get('/add-to-cart/:type/:total', calcTotal, (req, res) => {
    console.log(req.session.cart);
    
})
 
let calcTotal = async (req, res) => {   
    let cart = cart 
    let total = 0;
          for (const i = 0; i < products.length; i++) {
            total += products[i].price * products[i].qty;
          }
          res.send(req.cart.total);
}

let hasSession = async (req, res, next) => {    
    let session = await SessionModel.findById(req.sessionID);

    if(session) {
        return next();
    }

    res.send({err: 'you need to login to perform this action'});
}

router.get('/add-to-cart/:type/:price', hasSession,  function(req, res){
    const cart = new Cart(req.session.cart.items || {});

    cart.addItem(req.params.type, req.params.price)
    
    req.session.cart = cart;
    
    console.log(req.session.cart.items);
    // let cart = {}

    // cart

    // req.session.cart[type] = {
    //     price: req.session.cart[type].price + ,
    //     qty: req.session.cart[type]++
    // }
    // console.log('--------------');
    
    // console.log(req.session);

    // }
    // productId.findById(productId, function(err, product){
    //     if (err){
    //         return res.redirect('/');
    //     }
    // cart.add(product, product.type);
    // req.session.cart = cart;
    // console.log(req.session.cart)
    res.send({success: ''})
    // });
});

router.post('/createUser', async(req, res)=>{
    let {username, email, password} = req.body;

    if(await User.exists(email)) {
        res.send({err: 'user already exists'});
        return;
    }

    let user = new User({
        username,
        email,
        password
    })

    user.save();

    req.session.cart = {}
    req.session.save();

    res.send('success')
});

router.post('/login', async (req,res) => {
    let {email, password} = req.body;

    if(await !User.exists(email)) {
        res.send({err: 'this email doesnt belong to a user'});
        return;
    }

    
    req.session.cart = {}

    req.session.save();

    res.send({success: 'message received'});
});

module.exports = router;