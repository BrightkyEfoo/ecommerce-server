# ecom-test

A simple API for managing an E-commerce

this is just for test-purpose

made by [<i>@BrightkyEfoo</i>](https://github.com/BrightkyEfoo)

# 📁 Folder: Users

## End-point: login

### Method: POST

> ```
>/users/auth/login/
>```

### Body (**raw**)

```json
{
    "email": "",
    "password": ""
}
```

### 🔑 Authentication noauth

| Param | value | Type |
|-------|-------|------|

### Response: 200

```json
{
    "msg": "Succesfully logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFjMTc4ZWFkNjViMzJhZTEwMTM2MzkiLCJyYW5kb20iOiIwYTQwYmM3ZC1iYWRiLTRmNTItODYyOS0yZTRjZjljNjMwYjAiLCJhcHBOYW1lIjoiZWNvbW1lcmNlIiwicm9sZXMiOlsxLDIsM10sImlhdCI6MTcxMzE0MTk1NiwiZXhwIjoxNzEzMjI4MzU2fQ.gJrHxjwwzAXsbADNsMSUmPexfqJFDox6Fl68ttIz59w",
    "user": {
        "_id": "661c178ead65b32ae1013639",
        "firstName": "bright",
        "lastName": "efoo",
        "email": "brightefoo@gmail.com",
        "profilePicture": "http://localhost:9000/public/images/bright.jpeg",
        "roles": [
            1,
            2,
            3
        ],
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: register

Here data will be a formData.

The profile's data like email, password and other stuff like that should be passed inside a body value of the formdata.

Note that the value of that key should be a string representation of a JSON.

### Method: POST

> ```
>/users/auth/register/
>```

### Body formdata

| Param          | value                                                                                                | Type |
|----------------|------------------------------------------------------------------------------------------------------|------|
| body           | {"email":"brightkyefoo2@gmail.com","password":"brightkyefoo","firstName":"bright","lastName":"efoo"} | text |
| profilePicture | postman-cloud:///1eefa52c-c1e3-4ca0-981f-47d849a6d13b                                                | file |

### 🔑 Authentication noauth

| Param | value | Type |
|-------|-------|------|

### Response: 201

```json
{
    "msg": "successfully created a new user",
    "user": {
        "firstName": "bright",
        "lastName": "efoo",
        "email": "brightkyefoo2@gmail.com",
        "password": "$2b$10$/H0NR1NpOZX6RI5d4iIwTuhTd3Q/LQlSiYbm/o.QavyyRkcxdzru6",
        "profilePicture": "http://localhost:9000/public/images/1713141986251-capture-d'ecran-du-2024-04-13-18-47-40.png",
        "roles": [],
        "_id": "661c78e27fde5a8ad953b719",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: list carts of a user by it's id

### Method: GET

> ```
>/users//cart?page=2&limit=18
>```

### Query Params

| Param | value |
|-------|-------|
| page  | 2     |
| limit | 18    |

### Response: 200

```json
{
    "msg": "success",
    "carts": [
        {
            "_id": "661c397e65d396bd3e4b9633",
            "user": "661c178ead65b32ae1013639",
            "products": [
                {
                    "_id": "661bf9578add7ad2d38c9cc0",
                    "title": "Iphones 8",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "category": "Phone",
                    "thumbnail": "http://localhost:9000/public/images/1713109335932-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713109335915-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713109335929-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713109335931-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "quantity": 4
                },
                {
                    "_id": "661beb5637a238415277a562",
                    "title": "Iphones 9",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "thumbnail": "http://localhost:9000/public/images/1713116354462-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713116354445-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713116354458-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713116354461-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "category": "Phone",
                    "quantity": 2
                }
            ],
            "totalProducts": 2,
            "discountedTotal": 2374.3125,
            "total": 2713.5,
            "totalQuantity": 6,
            "__v": 0
        },
        {
            "_id": "661c398365d396bd3e4b9639",
            "user": "661c178ead65b32ae1013639",
            "products": [
                {
                    "_id": "661bf9578add7ad2d38c9cc0",
                    "title": "Iphones 8",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "category": "Phone",
                    "thumbnail": "http://localhost:9000/public/images/1713109335932-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713109335915-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713109335929-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713109335931-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "quantity": 4
                },
                {
                    "_id": "661beb5637a238415277a562",
                    "title": "Iphones 9",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "thumbnail": "http://localhost:9000/public/images/1713116354462-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713116354445-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713116354458-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713116354461-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "category": "Phone",
                    "quantity": 2
                }
            ],
            "totalProducts": 2,
            "discountedTotal": 2374.3125,
            "total": 2713.5,
            "totalQuantity": 6,
            "__v": 0
        },
        {
            "_id": "661c5e40092814d2d2449b3f",
            "user": "661c178ead65b32ae1013639",
            "products": [],
            "totalProducts": 0,
            "discountedTotal": 0,
            "total": 0,
            "totalQuantity": 0,
            "__v": 0
        },
        {
            "_id": "661c60d86c3977cc5f2795f7",
            "user": "661c178ead65b32ae1013639",
            "products": [
                {
                    "_id": "661c5cdc092814d2d2449b34",
                    "title": "Iphones 9",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "category": "Phone",
                    "thumbnail": "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713134812647-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713134812653-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "quantity": 6
                }
            ],
            "totalProducts": 1,
            "discountedTotal": 2374.3125,
            "total": 2713.5,
            "totalQuantity": 6,
            "__v": 0
        },
        {
            "_id": "661c60e96c3977cc5f279600",
            "user": "661c178ead65b32ae1013639",
            "products": [
                {
                    "_id": "661c5cdc092814d2d2449b34",
                    "title": "Iphones 9",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "category": "Phone",
                    "thumbnail": "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713134812647-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713134812653-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "quantity": 70
                }
            ],
            "totalProducts": 1,
            "discountedTotal": 27700.3125,
            "total": 31657.5,
            "totalQuantity": 70,
            "__v": 0
        },
        {
            "_id": "661c65b92305b713f9c1ec94",
            "user": "661c178ead65b32ae1013639",
            "products": [
                {
                    "_id": "661c63e79501cf97cac7acf1",
                    "title": "Iphones 9",
                    "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
                    "price": 452.25,
                    "discountPercentage": 12.5,
                    "rating": 4.8,
                    "stock": 75,
                    "brand": "Apple Iphone",
                    "category": "Computers8",
                    "thumbnail": "http://localhost:9000/public/images/1713136615769-capture-d'ecran-du-2024-04-13-17-52-46.png",
                    "images": [
                        "http://localhost:9000/public/images/1713136615751-capture-d'ecran-du-2024-04-13-11-46-12.png",
                        "http://localhost:9000/public/images/1713136615765-capture-d'ecran-du-2024-04-13-18-47-40.png",
                        "http://localhost:9000/public/images/1713136615767-capture-d'ecran-du-2024-04-13-11-48-52.png"
                    ],
                    "__v": 0,
                    "quantity": 70
                }
            ],
            "totalProducts": 1,
            "discountedTotal": 27700.3125,
            "total": 31657.5,
            "totalQuantity": 70,
            "__v": 0
        }
    ],
    "total": 6,
    "skip": 18,
    "limit": 18
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create a cart for a user by it's id

you shoud pass the id of the product at the produc property inside evry object of the array products, see the exemple
body down below

### Method: POST

> ```
>/users//cart
>```

### Body (**raw**)

```json
{
    "products": [
        {
            "quantity": 70,
            "product": ""
        }
    ]
}
```

### Response: 201

```json
{
    "msg": "success",
    "cart": {
        "user": "661c178ead65b32ae1013639",
        "products": [
            {
                "product": "661c797da1813aa5986b22eb",
                "quantity": 70,
                "_id": "661c7ab2a1813aa5986b2308"
            }
        ],
        "_id": "661c7ab2a1813aa5986b2307",
        "totalProducts": 0,
        "discountedTotal": 0,
        "total": 0,
        "totalQuantity": 0,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Products

## End-point: update a product

you should add images with formdata, each other fields you want update which is not a file or a group of file should be
passed inside an object to the body property of the formdata,

Notice that that object should have the property update at his root, and the final value you will append to the formdata
will be the string Representation of that object (using JSON.parse in js as example)

### Method: PUT

> ```
>/products/
>```

### Body formdata

| Param     | value                                                                                                                                                                                                                                                                  | Type |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| images    | postman-cloud:///1eefa52c-cf7a-4cb0-9a50-bbd0a1eacd88,postman-cloud:///1eefa52c-c1e3-4ca0-981f-47d849a6d13b,postman-cloud:///1eefa52c-c49b-4970-8387-326a1e6a2715                                                                                                      | file |
| thumbnail | postman-cloud:///1eefa52c-c396-45c0-8f83-24ed896a478b                                                                                                                                                                                                                  | file |
| body      | {"update":{"title":"Iphones 9","description":"A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE","price":452.25,"discountPercentage":12.5,"rating":4.8,"stock":75,"brand":"Apple Iphone","category":"Phone"}} | text |

### Response: 200

```json
{
    "msg": "successfully updated a product",
    "product": {
        "_id": "661c797da1813aa5986b22eb",
        "title": "Iphones 9",
        "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "price": 452.25,
        "discountPercentage": 12.5,
        "rating": 4.8,
        "stock": 75,
        "brand": "Apple Iphone",
        "category": "Phone",
        "thumbnail": "http://localhost:9000/public/images/1713142426207-capture-d'ecran-du-2024-04-13-17-52-46.png",
        "images": [
            "http://localhost:9000/public/images/1713142426165-capture-d'ecran-du-2024-04-13-11-46-12.png",
            "http://localhost:9000/public/images/1713142426191-capture-d'ecran-du-2024-04-13-18-47-40.png",
            "http://localhost:9000/public/images/1713142426194-capture-d'ecran-du-2024-04-13-11-48-52.png"
        ],
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete product

pass the id in params. The id you want delete like http://localhost:9000/api/v1/products/:id

### Method: DELETE

> ```
>/products/
>```

### Response: 200

```json
{
    "msg": "successfully deleted a product",
    "product": {
        "_id": "661c797da1813aa5986b22eb",
        "title": "Iphones 9",
        "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "price": 452.25,
        "discountPercentage": 12.5,
        "rating": 4.8,
        "stock": 75,
        "brand": "Apple Iphone",
        "category": "Phone",
        "thumbnail": "http://localhost:9000/public/images/1713142426207-capture-d'ecran-du-2024-04-13-17-52-46.png",
        "images": [
            "http://localhost:9000/public/images/1713142426165-capture-d'ecran-du-2024-04-13-11-46-12.png",
            "http://localhost:9000/public/images/1713142426191-capture-d'ecran-du-2024-04-13-18-47-40.png",
            "http://localhost:9000/public/images/1713142426194-capture-d'ecran-du-2024-04-13-11-48-52.png"
        ],
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create a product

you should add images with formdata, each other fields you want update which is not a file or a group of file should be
passed inside an object to the body property of the formdata,

Notice the final value you will append to the formdata will be the string Representation of that object (using
JSON.parse in js as example)

### Method: POST

> ```
>/products
>```

### Body formdata

| Param     | value                                                                                                                                                                                                                                                  | Type |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| images    | postman-cloud:///1eefa52c-cf7a-4cb0-9a50-bbd0a1eacd88,postman-cloud:///1eefa52c-c1e3-4ca0-981f-47d849a6d13b,postman-cloud:///1eefa52c-c49b-4970-8387-326a1e6a2715                                                                                      | file |
| thumbnail | postman-cloud:///1eefa52c-c396-45c0-8f83-24ed896a478b                                                                                                                                                                                                  | file |
| body      | {"title":"Iphones 9","description":"A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE","price":452.25,"discountPercentage":12.5,"rating":4.8,"stock":75,"brand":"Apple Iphone","category":""} | text |

### Response: 201

```json
{
    "msg": "successfully created a new product",
    "product": {
        "title": "Iphones 9",
        "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "price": 452.25,
        "discountPercentage": 12.5,
        "rating": 4.8,
        "stock": 75,
        "brand": "Apple Iphone",
        "category": "Compute",
        "thumbnail": "http://localhost:9000/public/images/1713142140973-capture-d'ecran-du-2024-04-13-17-52-46.png",
        "images": [
            "http://localhost:9000/public/images/1713142140944-capture-d'ecran-du-2024-04-13-11-46-12.png",
            "http://localhost:9000/public/images/1713142140961-capture-d'ecran-du-2024-04-13-18-47-40.png",
            "http://localhost:9000/public/images/1713142140968-capture-d'ecran-du-2024-04-13-11-48-52.png"
        ],
        "_id": "661c797da1813aa5986b22eb",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: list products

### Method: GET

> ```
>/products?page=2&limit=5
>```

### Query Params

| Param | value |
|-------|-------|
| page  | 2     |
| limit | 5     |

### Response: 200

```json
{
    "msg": "successfully founded products",
    "products": [
        {
            "_id": "661beb2637a238415277a560",
            "title": "Iphones 8",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "thumbnail": "http://localhost:9000/public/images/1713105702913-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713105702886-capture-d'ecran-du-2024-04-13-11-46-12.png"
            ],
            "__v": 0
        },
        {
            "_id": "661beb5637a238415277a562",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "thumbnail": "http://localhost:9000/public/images/1713116354462-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713116354445-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713116354458-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713116354461-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0,
            "category": "Phone"
        },
        {
            "_id": "661bf8c64a8b4d267e0307f9",
            "title": "Iphones 8",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "thumbnail": "http://localhost:9000/public/images/1713109190214-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713109190201-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713109190212-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713109190213-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661bf9578add7ad2d38c9cc0",
            "title": "Iphones 8",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Phone",
            "thumbnail": "http://localhost:9000/public/images/1713109335932-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713109335915-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713109335929-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713109335931-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661c4e74beb3922ad70bc8d1",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Phone",
            "thumbnail": "http://localhost:9000/public/images/1713131124745-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713131124712-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713131124738-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713131124743-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        }
    ],
    "skip": 5,
    "limit": 5,
    "total": 15
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: search products

### Method: GET

> ```
>/products/search?q=Iphones&page=1&limit=5
>```

### Query Params

| Param | value   |
|-------|---------|
| q     | Iphones |
| page  | 1       |
| limit | 5       |

### Response: 200

```json
{
    "msg": "Result of search in products for Iphones",
    "products": [
        {
            "_id": "661c797da1813aa5986b22eb",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Compute",
            "thumbnail": "http://localhost:9000/public/images/1713142140973-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713142140944-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713142140961-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713142140968-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661c6e446d4798e6668b4ed9",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Phone",
            "thumbnail": "http://localhost:9000/public/images/1713139273957-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713139273934-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713139273944-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713139273956-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661c63e79501cf97cac7acf1",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Computers8",
            "thumbnail": "http://localhost:9000/public/images/1713136615769-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713136615751-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713136615765-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713136615767-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661c5cdc092814d2d2449b34",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Phone",
            "thumbnail": "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713134812647-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713134812653-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713134812654-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        },
        {
            "_id": "661c5cc3092814d2d2449b31",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Phone",
            "thumbnail": "http://localhost:9000/public/images/1713134787091-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713134787074-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713134787087-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713134787091-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        }
    ],
    "skip": 0,
    "limit": 5,
    "total": 15
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get product by Id

### Method: GET

> ```
>/products/
>```

### Response: 200

```json
{
    "msg": "successfully founded a product",
    "product": {
        "_id": "661c797da1813aa5986b22eb",
        "title": "Iphones 9",
        "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "price": 452.25,
        "discountPercentage": 12.5,
        "rating": 4.8,
        "stock": 75,
        "brand": "Apple Iphone",
        "category": "Compute",
        "thumbnail": "http://localhost:9000/public/images/1713142140973-capture-d'ecran-du-2024-04-13-17-52-46.png",
        "images": [
            "http://localhost:9000/public/images/1713142140944-capture-d'ecran-du-2024-04-13-11-46-12.png",
            "http://localhost:9000/public/images/1713142140961-capture-d'ecran-du-2024-04-13-18-47-40.png",
            "http://localhost:9000/public/images/1713142140968-capture-d'ecran-du-2024-04-13-11-48-52.png"
        ],
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: Categories

## End-point: get all categories

### Method: GET

> ```
>/categories/?limit=1&page=1
>```

### Query Params

| Param | value |
|-------|-------|
| limit | 1     |
| page  | 1     |

### Response: 200

```json
{
    "msg": "successfully founded categories",
    "categories": [
        {
            "_id": "661c58b07a77f6ecd27277f7",
            "title": "Phone",
            "description": "JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "image": "http://localhost:9000/public/images/1713133744481-capture-d'ecran-du-2024-04-13-11-48-52.png",
            "__v": 0
        }
    ],
    "skip": 0,
    "limit": 1,
    "total": 7
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get a category by Id

### Method: GET

> ```
>/categories/
>```

### Response: 200

```json
{
    "msg": "success",
    "category": {
        "_id": "661c7977a1813aa5986b22e8",
        "title": "Compute",
        "description": "JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "image": "http://localhost:9000/public/images/1713142135519-capture-d'ecran-du-2024-04-13-11-48-52.png",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all products of a category by id

### Method: GET

> ```
>/categories//products?limit=2&page=1
>```

### Query Params

| Param | value |
|-------|-------|
| limit | 2     |
| page  | 1     |

### Response: 200

```json
{
    "msg": "successfully founded products for category Compute",
    "products": [
        {
            "_id": "661c797da1813aa5986b22eb",
            "title": "Iphones 9",
            "description": "A brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
            "price": 452.25,
            "discountPercentage": 12.5,
            "rating": 4.8,
            "stock": 75,
            "brand": "Apple Iphone",
            "category": "Compute",
            "thumbnail": "http://localhost:9000/public/images/1713142140973-capture-d'ecran-du-2024-04-13-17-52-46.png",
            "images": [
                "http://localhost:9000/public/images/1713142140944-capture-d'ecran-du-2024-04-13-11-46-12.png",
                "http://localhost:9000/public/images/1713142140961-capture-d'ecran-du-2024-04-13-18-47-40.png",
                "http://localhost:9000/public/images/1713142140968-capture-d'ecran-du-2024-04-13-11-48-52.png"
            ],
            "__v": 0
        }
    ],
    "skip": 0,
    "limit": 2,
    "total": 1
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update a category by Id

### Method: PUT

> ```
>/categories/
>```

### Body formdata

| Param | value                                                                                                                                                      | Type |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| body  | {"update":{"title":"Phone88","description":"JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE"}} | text |
| image | postman-cloud:///1eefa52c-c49b-4970-8387-326a1e6a2715                                                                                                      | file |

### Response: 200

```json
{
    "msg": "succesfully update category",
    "category": {
        "_id": "661c7977a1813aa5986b22e8",
        "title": "Phone88",
        "description": "JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "image": "http://localhost:9000/public/images/1713142255228-capture-d'ecran-du-2024-04-13-11-48-52.png",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create category

### Method: POST

> ```
>/categories
>```

### Body formdata

| Param | value                                                                                                                                           | Type |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------|------|
| body  | {"title":"Compute","description":"JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE"} | text |
| image | postman-cloud:///1eefa52c-c49b-4970-8387-326a1e6a2715                                                                                           | file |

### Response: 201

```json
{
    "msg": "successfully created a new category",
    "category": {
        "title": "Compute",
        "description": "JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "image": "http://localhost:9000/public/images/1713142135519-capture-d'ecran-du-2024-04-13-11-48-52.png",
        "_id": "661c7977a1813aa5986b22e8",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete a category by id

pass id at the end of route,
like [http://localhost:9000/api/v1/categories/:id,](http://localhost:9000/api/v1/categories/:id)

I don't know why postman is still kidding me, It doesn't want to add id inside my uri 'cause I use Collection Env
variable. It looks like an issue.

### Method: DELETE

> ```
>/categories/
>```

### Response: 200

```json
{
    "msg": "Succesfully delete",
    "count": {
        "_id": "661c7977a1813aa5986b22e8",
        "title": "Phone88",
        "description": "JA brand new Iphone with 3Gb of Ram, up to 32Gb of Rom! It uses new features of networking like 5G+ and LTE",
        "image": "http://localhost:9000/public/images/1713142255228-capture-d'ecran-du-2024-04-13-11-48-52.png",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: hello

A simple request. Like a hello world Request

### Method: GET

> ```
>
>```

### 🔑 Authentication noauth

| Param | value | Type |
|-------|-------|------|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
