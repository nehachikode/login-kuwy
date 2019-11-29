# login-kuwy

* URL for Login: localhost:3000/users/login

> Input data: {"email": "nehachikode@gmail.com",
               "password": "neha123"}
            
> Output: {
    "message": "User logged in successfully!",
    "data": {
        "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZWhhY2hpa29kZUBnbWFpbC5jb20iLCJpYXQiOjE1NzQ5NDA1NDksImV4cCI6MTU3NDk0NDE0OX0.-WKvUOdGHyvz0xRe3YAeb31wI_qrdAAmg1bkoLV_J6NpphJv9r8oz98rcDUx6NpyGeR58zvAqyRsmTKeeGc7Xg"
    },
    "err": null
}


* URL for Loan page: localhost:3000/loan/show

> headers: {
authorization: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZWhhY2hpa29kZUBnbWFpbC5jb20iLCJpYXQiOjE1NzQ5NDA1NDksImV4cCI6MTU3NDk0NDE0OX0.-WKvUOdGHyvz0xRe3YAeb31wI_qrdAAmg1bkoLV_J6NpphJv9r8oz98rcDUx6NpyGeR58zvAqyRsmTKeeGc7Xg
}


> Output: {
    "message": "Info!",
    "data": {
        "title": "2017- Maruti Suzuki- Baleno- Delta 1.3- Chennai",
        "vehicle_price": "₹ 3,00,000",
        "loan": {
            "value": "₹ 2,50,000",
            "emi": "₹ 8,876",
            "down_payment": "₹ 50,000",
            "tenure": "36 months",
            "roi": "16.7%"
        },
        "kuwy_rating": {
            "loan": "Good",
            "vehicle": "Excellent",
            "customer": "Good",
            "customer_vehicle_match": "Excellent"
        }
    },
    "err": null
}

