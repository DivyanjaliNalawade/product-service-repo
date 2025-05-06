# 🛍️ Product Service

The Product Service is a microservice responsible for managing product-related operations in an e-commerce platform. Built with Node.js, Express, MongoDB, and Kafka, it handles product creation, retrieval, deletion, and updating.

## 🚀 Features

-   Product Management: Create, retrieve, update, and delete products.
-   Event-Driven Architecture: Publishes events to Kafka for inter-service communication.
-   Dockerized Deployment: Easily deployable using Docker and Docker Compose.
-   Authentication Middleware: Secures endpoints using JWT authentication.

## 🧱 Tech Stack

-   **Node.js & Express**: Backend framework.
-   **MongoDB**: Database for storing product information.
-   **Kafka**: Message broker for event-driven communication.
-   **Docker & Docker Compose**: Containerization and orchestration.
-   **JWT**: Authentication mechanism.

## 📁 Project Structure

```
product-service/
│-- controllers/
│   ├── productController.js
│-- config/
│   ├── db.js
│-- models/
│   ├── product.js
│-- k8s/
│   ├── product-deployment.yaml
│   ├── product-service.yaml
│-- middleware/
│   ├── authMiddleware.js
│-- routes/
│   ├── productRoutes.js
│-- utils/
│   ├── kafka.js
│-- app.js
│-- server.js
│-- .env
│-- package.json
│-- Dockerfile
│-- docker-compose.yml
│-- README.md
```

## ⚙️ Getting Started

### Prerequisites

-   [Docker](https://www.docker.com/)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [Node.js](https://nodejs.org/) (for local development)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DivyanjaliNalawade/product-service-repo.git](https://github.com/DivyanjaliNalawade/product-service-repo.git)
    cd product-service-repo
    ```

2.  **Create a `.env` file** in the root directory with the following environment variables:
    ```env
    PORT=3004
    MONGO_URI=mongodb://mongo:27017/products
    KAFKA_BROKER=kafka:9092
    JWT_SECRET=your_jwt_secret
    ```
    **Note**: Replace `your_jwt_secret` with a strong, secret key. Ensure your MongoDB and Kafka service addresses are correctly configured if they are running elsewhere.

3.  **Start the services using Docker Compose:**
    ```bash
    docker-compose up --build -d
    ```
    This command will build the Docker image and start the following services in detached mode:
    -   **Product Service**: Accessible at `http://localhost:3004`
    -   **MongoDB**: Database service
    -   **Kafka & Zookeeper**: Message broker services

## 📬 API Endpoints

| Method | Endpoint           | Description           |
| :----- | :----------------- | :-------------------- |
| `POST` | `/api/products`    | Create a product      |
| `GET`  | `/api/products`    | Retrieve products     |
| `PUT`  | `/api/products/:id` | Update a product      |
| `DELETE`| `/api/products/:id` | Delete a product      |

---

## 📦 Kafka Integration

-   **Topic**: Product-related events (e.g., `product.created`, `product.updated`, `product.deleted`) are published to Kafka.
-   **Producer**: The Product Service acts as a producer, emitting events whenever a product is created, updated, or deleted.
-   **Consumer**: Other microservices in the e-commerce platform can consume these events to maintain data consistency or trigger other workflows.

---

## 🐳 Docker Commands

-   **Build the Docker image**:
    ```bash
    docker build -t product-service .
    ```
-   **Run the Docker container**:
    ```bash
    docker run -d -p 3004:3004 --name product-service-container product-service
    ```
-   **View logs**:
    ```bash
    docker logs -f product-service-container
    ```
-   **Stop and remove the container**:
    ```bash
    docker stop product-service-container
    docker rm product-service-container
    ```

## 🧪 Testing the Service

Use tools like [Postman](https://www.postman.com/) or `cURL` to test the API endpoints.

**Example: Creating a new product using cURL**

```bash
curl -X POST http://localhost:3004/api/products \
    -H "Authorization: Bearer <your_jwt_token>" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Sample Product",
        "description": "A great product",
        "price": 99.99,
        "imageUrl": "[http://example.com/image.png](http://example.com/image.png)",
        "category": "electronics",
        "quantity": 10
    }'
```
## Note:

The Product Service API relies on JWT for authentication. Ensure you have a valid JWT token to access protected endpoints.
Token validation is implemented as middleware to secure the API routes.

For all protected routes, include the token in the Authorization header as a Bearer token:
```bash

 "Authorization: Bearer <your_token>"
```

## 🛠️ Development
For local development without Docker:

### Install dependencies:

```bash

npm install
```
Start the server:

```bash
npm start
```
Ensure that MongoDB and Kafka are running locally and are accessible at the URLs specified in your .env file.

## Notes

- The **Product Service API** should be running for authentication to work.
- Token validation occurs before every request to ensure security.
- For all protected routes, include token like this:

```bash
-H "Authorization: Bearer <your_token>"
```

##  Author

**Divyanjali Nalawade**  
2023TM93629@wilp.bits-pilani.co.in <br />


## 📝 License

This project is intended for educational purposes only.<br/>
Built for the assignment submission for the course:<br/>
**Scalable Services (BITS Pilani WILP)** 👨‍🏫
