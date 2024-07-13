# Product API Endpoints

## Authentication

### Bearer Authentication
- **Type**: HTTP
- **Scheme**: Bearer
- **Bearer Format**: JWT

## Product Endpoints

### Get All Products
- **Endpoint**: `GET /products`
- **Description**: Retrieve a list of all products.
- **Query Parameters**:
  - `page` (integer, optional): Page number for pagination.
  - `limit` (integer, optional): Number of products per page.
  - `sort` (string, optional): Field to sort by (name, price, createdAt).
  - `order` (string, optional): Order of sorting (asc, desc).
  - `category` (string, optional): Filter by category.
  - `priceMin` (number, optional): Minimum price filter.
  - `priceMax` (number, optional): Maximum price filter.
- **Security**: Bearer Authentication

### Create a New Product
- **Endpoint**: `POST /products`
- **Description**: Create a new product.
- **Request Body**: Product object (name, description, price, categoryId, stock)
- **Security**: Bearer Authentication

### Get Product by ID
- **Endpoint**: `GET /products/{id}`
- **Description**: Retrieve a product by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the product.
- **Security**: Bearer Authentication

### Update a Product
- **Endpoint**: `PUT /products/{id}`
- **Description**: Update an existing product.
- **Path Parameters**:
  - `id` (number): The unique ID of the product.
- **Request Body**: Updated product object.
- **Security**: Bearer Authentication

### Delete a Product
- **Endpoint**: `DELETE /products/{id}`
- **Description**: Delete a product by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the product.
- **Security**: Bearer Authentication

## Category Endpoints

### Get All Categories
- **Endpoint**: `GET /categories`
- **Description**: Retrieve a list of all categories.
- **Security**: Bearer Authentication

### Create a New Category
- **Endpoint**: `POST /categories`
- **Description**: Create a new category.
- **Request Body**: Category object (name)
- **Security**: Bearer Authentication

### Get Category by ID
- **Endpoint**: `GET /categories/{id}`
- **Description**: Retrieve a category by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the category.
- **Security**: Bearer Authentication

### Update a Category
- **Endpoint**: `PUT /categories/{id}`
- **Description**: Update an existing category.
- **Path Parameters**:
  - `id` (number): The unique ID of the category.
- **Request Body**: Updated category object.
- **Security**: Bearer Authentication

### Delete a Category
- **Endpoint**: `DELETE /categories/{id}`
- **Description**: Delete a category by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the category.
- **Security**: Bearer Authentication

## Review Endpoints

### Get All Reviews
- **Endpoint**: `GET /reviews`
- **Description**: Retrieve a list of all reviews.
- **Security**: Bearer Authentication

### Create a New Review
- **Endpoint**: `POST /reviews`
- **Description**: Create a new review.
- **Request Body**: Review object (productId, rating, comment)
- **Security**: Bearer Authentication

### Get Review by ID
- **Endpoint**: `GET /reviews/{id}`
- **Description**: Retrieve a review by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the review.
- **Security**: Bearer Authentication

### Update a Review
- **Endpoint**: `PUT /reviews/{id}`
- **Description**: Update an existing review.
- **Path Parameters**:
  - `id` (number): The unique ID of the review.
- **Request Body**: Updated review object.
- **Security**: Bearer Authentication

### Delete a Review
- **Endpoint**: `DELETE /reviews/{id}`
- **Description**: Delete a review by its unique ID.
- **Path Parameters**:
  - `id` (number): The unique ID of the review.
- **Security**: Bearer Authentication
