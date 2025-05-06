🛍️ Product Service

The Product Service is a microservice responsible for managing product-related operations in an e-commerce platform. Built with Node.js, Express, MongoDB, and Kafka, it handles product creation, retrieval, deletion and updation.

🚀 Features
-Product Management**: Create and retrieve products.
-Event-Driven Architecture**: Publishes events to Kafka for inter-service communication.
-Dockerized Deployment**: Easily deployable using Docker and Docker Compose.
-Authentication Middleware**: Secures endpoints using JWT authentication.

🧱 Tech Stack

-Node.js & Express: Backend framework.
-MongoDB: Database for storing product information.
-Kafka: Message broker for event-driven communication.
-Docker & Docker Compose: Containerization and orchestration.
-JWT: Authentication mechanism.

📁 Project Structure

product-service/
├── controllers/
│ └── productController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── product.js
├── routes/
│ └── productRoutes.js
├── utils/
│ └── kafka.js
├── .env
├── app.js
├── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md


⚙️ Getting Started

 Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (for local development)

Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DivyanjaliNalawade/product-service-repo.git
   cd product-service-repo
Create a .env file:

PORT=3004
MONGO_URI=mongodb://mongo:27017/products
KAFKA_BROKER=kafka:9092
JWT_SECRET=your_jwt_secret


Start the services using Docker Compose: docker-compose up --build
This command will build and start the following services:

Product Service: Accessible at http://localhost:3004
MongoDB: Database service
Kafka & Zookeeper: Message broker services


📬 API Endpoints
Method	Endpoint	Description
POST	/api/products	Create a product
GET	/api/products	Retrieve products

Note: Endpoints are secured using JWT. Include a valid token in the Authorization header as a Bearer token.

📦 Kafka Integration
Topic: product_created

Producer: Publishes events when a new product is created.

Consumer: Other services can subscribe to this topic to react to product creation events.

🐳 Docker Commands
Build the Docker image:

docker build -t product-service .
Run the Docker container:
docker run -d -p 3004:3004 --name product-service-container product-service

View logs:
docker logs -f product-service-container


🧪 Testing the Service
Use tools like Postman or cURL to test the API endpoints.

Example: Creating a new product using cURL
curl -X POST http://localhost:3004/api/products \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "description": "A great product",
    "price": 99.99,
    "imageUrl": "http://example.com/image.png",
    "category": "electronics",
    "quantity": 10
  }'

  
🛠️ Development
For local development without Docker:
Install dependencies: npm install
Start the server: npm start
Ensure that MongoDB and Kafka are running locally or adjust the .env file accordingly.

Notes
The Product Service API should be running for authentication to work.
Token validation occurs before every request to ensure security.
For all protected routes, include token like this:
-H "Authorization: Bearer <your_token>"

👤 Author
Divyanjali Nalawade
2023TM93629@wilp.bits-pilani.co.in

GitHub

📝 License
This project is intended for educational purposes only.
Built for the assignment submission for the course:
Scalable Services (BITS Pilani WILP) 👨‍🏫

 
