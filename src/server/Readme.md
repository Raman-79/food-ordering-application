//Spinup express server

//Mongodb connection 

//Routes
    User
        - Profile 
        - Login 
        - Signup 
        - Logut
        - Forgot password
    Restaurant
       - getAllRestaurant(Homepage)
       - getRestaurent/:restaurentId
       - getMenu/:restaurentId
       - getItem/:restaurentId/:item-id
    Order processing
       - Post an order
       - /orders/:id - GET: Retrieve details of a specific order.
       - /orders/user/:userId - GET: Fetch orders associated with a user.
       - /orders/restaurant/:restaurantId - GET: Fetch orders associated with a restaurent 
    Payment handling (Stripe API)
       - Resarch left  
    Reviews
     - /review - POST a review about a restaurant
     - /review/:id -  GET review of a restaurant by id 
    Real-Time Ordering 
    - /order/:orderId/status

