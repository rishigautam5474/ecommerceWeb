# **Project Name**

E-commerce Website Backend

# Features

- **Products API**: Create, update, delete, and fetch product details.
- **Categories API**: Manage product categories.
- **MongoDB Integration**: Data persistence with MongoDB.
- **Environment Configuration**: `.env` support for secure variable management.

---

# Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone the project from the repository:

git clone https://github.com/rishigautam5474/ecommerceWeb.git

cd <repository_name>

### 2. Install Dependencies

Install the required packages using npm or yarn:

**_ Using npm _**

```
npm install
```

**_ OR using yarn _**

```
yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb+srv://your-username:your-password@cluster-url/your-database-name
```

### 4. Start the Server

Run the application using the following commands:

**_ Using npm _**

```
npm start
```

**_ OR using yarn _**

```
yarn start
```

### 5. Test the APIs

Use Postman, or a browser to test the API endpoints. Some sample routes include:

# Home

### -Fetch Home Page

GET http://localhost:5000/

res:
```
Welcome E-Commerce
```

# Products

### -Fetch all products

GET http://localhost:5000/api/admin/product

res:

```
{
    "status": "success",
    "message": "product founded successfully",
    "products": [
        {
            "_id": "673ebc3801226b8faa4477e0",
            "name": "Lipsticks",
            "price": 400,
            "stock": 30,
            "categoryId": "673ebbe901226b8faa4477db",
            "createdAt": "2024-11-21T04:51:04.957Z",
            "updatedAt": "2024-11-21T04:51:04.957Z",
            "__v": 0
        }
    ]
}
```

### -Fetch specific product By id

GET http://localhost:5000/api/admin/product/id

res:

```
{
    "status": "success",
    "product": {
        "_id": "673ebd6101226b8faa4477ef",
        "name": "The Alchemist",
        "price": 200,
        "stock": 30,
        "categoryId": "673ebc0201226b8faa4477dd",
        "createdAt": "2024-11-21T04:56:01.445Z",
        "updatedAt": "2024-11-21T04:56:01.445Z",
        "__v": 0
    }
}
```

### -Fetch specific product By categoryId

GET http://localhost:5000/api/admin/product/category/id

res:

```
{
    "status": "success",
    "message": "product founded Seccessfully",
    "product": [
        {
            "_id": "673ebd6101226b8faa4477ef",
            "name": "The Alchemist",
            "price": 200,
            "stock": 30,
            "categoryId": "673ebc0201226b8faa4477dd",
            "createdAt": "2024-11-21T04:56:01.445Z",
            "updatedAt": "2024-11-21T04:56:01.445Z",
            "__v": 0
        },
        {
            "_id": "673ed34f1f5af311d11f5419",
            "name": "Atomic Habits",
            "price": 200,
            "stock": 30,
            "categoryId": "673ebc0201226b8faa4477dd",
            "createdAt": "2024-11-21T06:29:35.996Z",
            "updatedAt": "2024-11-21T06:29:35.996Z",
            "__v": 0
        }
    ]
}
```

### -Create a new product

POST http://localhost:5000/api/admin/product/create

body:

```
{
    "name": "Atomic Habits",
    "price": 200,
    "stock": 30,
    "categoryId": "673ebc0201226b8faa4477dd"
}
```

res:

```
{
    "status": "success",
    "message": "create new product",
    "product": {
        "name": "Atomic Habits",
        "price": 200,
        "stock": 30,
        "categoryId": "673ebc0201226b8faa4477dd",
        "_id": "673ed34f1f5af311d11f5419",
        "createdAt": "2024-11-21T06:29:35.996Z",
        "updatedAt": "2024-11-21T06:29:35.996Z",
        "__v": 0
    }
}
```

### -Update specific product By id

PUT http://localhost:5000/api/admin/product/id

body:

```
{
    "name": "The Alchemist",
    "price": 300,
    "stock": 20,
    "categoryId": "673ebc0201226b8faa4477dd"
}
```

res:

```
{
    "status": "success",
    "product": {
        "_id": "673ebd6101226b8faa4477ef",
        "name": "The Alchemist",
        "price": 300,
        "stock": 20,
        "categoryId": "673ebc0201226b8faa4477dd",
        "createdAt": "2024-11-21T04:56:01.445Z",
        "updatedAt": "2024-11-21T06:33:57.663Z",
        "__v": 0
    }
}
```

### -Delete specific product By id

DELETE http://localhost:5000/api/admin/product/id

res:

```
{
    "status": "success",
    "message": "Deleted product"
}
```

# Categories

### -Fetch all categories

GET http://localhost:5000/api/admin/categories

res:

```
{
    "status": "success",
    "categories": [
        {
            "_id": "673ebbe901226b8faa4477db",
            "name": "Beauty & Personal Care",
            "description": "Pamper yourself with top-notch skincare, makeup, and grooming products. Discover beauty solutions tailored for every skin type and occasion.",
            "productId": [
                "673ebc3801226b8faa4477e0",
                "673ebc5c01226b8faa4477e3",
                "673ebc7201226b8faa4477e6"
            ],
            "createdAt": "2024-11-21T04:49:45.308Z",
            "updatedAt": "2024-11-21T04:52:02.747Z",
            "__v": 0
        },
        {
            "_id": "673ebc0201226b8faa4477dd",
            "name": "Books & Stationery",
            "description": "Dive into the world of knowledge and creativity. Shop books from every genre, along with notebooks, pens, and other stationery items for students and professionals.",
            "productId": [
                "673ebd6101226b8faa4477ef",
                "673ed34f1f5af311d11f5419"
            ],
            "createdAt": "2024-11-21T04:50:10.231Z",
            "updatedAt": "2024-11-21T06:35:43.320Z",
            "__v": 0
        }
    ]
}
```

### -Fetch all category By id

GET http://localhost:5000/api/admin/categories/id

res:

```
{
    "status": "success",
    "category": {
        "_id": "673ebbae01226b8faa4477d7",
        "name": "Travel & Luggage",
        "description": "Prepare for your next adventure with durable luggage, travel accessories, and outdoor gear. Designed to make your trips convenient and comfortable.",
        "productId": [],
        "createdAt": "2024-11-21T04:48:46.554Z",
        "updatedAt": "2024-11-21T04:48:46.554Z",
        "__v": 0
    }
}
```

### -Fetch all category By productId

GET http://localhost:5000/api/admin/categories/product/id

res:

```
{
    "status": "success",
    "message": "category founded Seccessfully",
    "data": [
        {
            "_id": "673ebbe901226b8faa4477db",
            "name": "Beauty & Personal Care",
            "description": "Pamper yourself with top-notch skincare, makeup, and grooming products. Discover beauty solutions tailored for every skin type and occasion.",
            "productId": [
                "673ebc3801226b8faa4477e0",
                "673ebc5c01226b8faa4477e3",
                "673ebc7201226b8faa4477e6"
            ],
            "createdAt": "2024-11-21T04:49:45.308Z",
            "updatedAt": "2024-11-21T04:52:02.747Z",
            "__v": 0
        }
    ]
}
```

### -Create a new category

POST http://localhost:5000/api/admin/categories/create

body:

```
{
    "name": "Furniture",
    "description": "Find high-quality furniture for every room in your home. From beds and sofas to office chairs and tables, we’ve got it all."
}
```

res:

```
{
    "status": "success",
    "message": "create new category",
    "category": {
        "name": "Furniture",
        "description": "Find high-quality furniture for every room in your home. From beds and sofas to office chairs and tables, we’ve got it all.",
        "productId": [],
        "_id": "673ed5fec814ba55b51e63d3",
        "createdAt": "2024-11-21T06:41:02.452Z",
        "updatedAt": "2024-11-21T06:41:02.452Z",
        "__v": 0
    }
}
```

### -Update a category

PUT http://localhost:5000/api/admin/categories/id

body:

```
{
    "name": "Furnitures",
    "description": "Find high-quality furniture for every room in your home. From beds and sofas to office chairs and tables, we’ve got it all."
}
```

res:

```
{
    "status": "success",
    "message": "category updated",
    "category": {
        "_id": "673ed5fec814ba55b51e63d3",
        "name": "Furnitures",
        "description": "Find high-quality furniture for every room in your home. From beds and sofas to office chairs and tables, we’ve got it all.",
        "productId": [],
        "createdAt": "2024-11-21T06:41:02.452Z",
        "updatedAt": "2024-11-21T06:42:11.920Z",
        "__v": 0
    }
}
```

### -Delete a category

DELETE http://localhost:5000/api/admin/categories/id

res:

```
{
    "status": "success",
    "message": "deleted Category"
}
```

# Schema Design

### Categories Table

```
id: Primary key
name: Category name (e.g., Electronics, Clothing)
description: (Optional) Description of the category
```

### Products Table

```
id: Primary key
name: Product name (e.g., Smartphone, Jeans)
description: Product description
price: Product price
category_id: Foreign key referencing the Categories table
```

# Relationships

### Categories and Products:

```
1. Each category can have multiple products (One-to-Many relationship).
    Example:
    Category: Electronics
        Products: Smartphone, Laptop
2. Products may also have a many-to-many relationship with features or tags in complex systems, using an intermediary table.
```