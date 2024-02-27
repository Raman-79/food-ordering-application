|src/
  |app/
    │
    ├── pages/
    │   ├── index.js (Homepage)
    │   ├── user/
    │   │   ├── profile.js
    │   │   ├── login.js
    │   │   ├── signup.js
    │   │   ├── logout.js
    │   │   └── forgotpassword.js
    │   │
    │   ├── restaurant/
    │   │   ├── [restaurantId]/
    │   │   │   └── index.js (getRestaurant)
    │   │   │
    │   │   ├── [restaurantId]/menu/
    │   │   │   └── index.js (getMenu)
    │   │   │
    │   │   └── [restaurantId]/[itemId]/
    │   │       └── index.js (getItem)
    │   │
    │   ├── orders/
    │   │   ├── [id].js (getOrderDetails)
    │   │   ├── user/
    │   │   │   └── [userId].js (getUserOrders)
    │   │   └── restaurant/
    │   │       └── [restaurantId].js (getRestaurantOrders)
    │   │
    │   ├── review/
    │   │   ├── index.js (postReview)
    │   │   └── [id].js (getReview)
    │   │
    │   └── order/
    │       └── [orderId]/status.js (orderStatus)
    │
    ├── components/
    │   ├── Header.js
    │   ├── Footer.js
    │   └── ...
    │
    ├── contexts/
    │   ├── UserContext.js
    │   ├── ShoppingCartContext.js
    │   └── ...
    │
    ├── reducers/
    │   ├── userReducer.js
    │   ├── shoppingCartReducer.js
    │   └── ...
    │
    ├── actions/
    │   ├── userActions.js
    │   ├── shoppingCartActions.js
    │   └── ...
    │
    ├── store/
    │   └── index.js (Redux store setup)
    │
    ├── lib/
    │   ├── mongodb.js (Mongodb connection)
    │   ├── express.js (Express server setup)
    │   └── stripe.js (Stripe API integration)
    │
    └── public/
        └── ...
