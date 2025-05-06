🛍️ Product Service
The Product Service is a microservice responsible for managing product-related operations in an e-commerce platform. Built with Node.js, Express, MongoDB, and Kafka, it handles product creation, retrieval, deletion, and updating.

🚀 Features
Product Management: Create, retrieve, update, and delete products.

Event-Driven Architecture: Publishes events to Kafka for inter-service communication.

Dockerized Deployment: Easily deployable using Docker and Docker Compose.

Authentication Middleware: Secures endpoints using JWT authentication.

🧱 Tech Stack
Node.js & Express: Backend framework.

MongoDB: Database for storing product information.

Kafka: Message broker for event-driven communication.

Docker & Docker Compose: Containerization and orchestration.

JWT: Authentication mechanism.

📁 Project Structure
plaintext
Copy
Edit
product-service/
├── controllers/
│   └── productController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── product.js
├── routes/
│   └── productRoutes.js
├── utils/
│   └── kafka.js
├── .env
├── app.js
├── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
⚙️ Getting Started
Prerequisites
Docker

Docker Compose

Node.js (for local development)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/DivyanjaliNalawade/product-service-repo.git
cd product-service-repo
Create a .env file:

env
Copy
Edit
PORT=3004
MONGO_URI=mongodb://mongo:27017/products
KAFKA_BROKER=kafka:9092
JWT_SECRET=your_jwt_secret
Start the services using Docker Compose:

bash
Copy
Edit
docker-compose up --build
This command will build and start the following services:

Product Service: Accessible at http://localhost:3004

MongoDB: Database service

Kafka & Zookeeper: Message broker services

📬 API Endpoints
Method	Endpoint	Description
POST	/api/products	Create a product
GET	/api/products	Retrieve products
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

yaml
Copy
Edit
:contentReference[oaicite:63]{index=63}

**Note**: :contentReference[oaicite:65]{index=65}:contentReference[oaicite:67]{index=67}

---

## 📦 Kafka Integration

- **Topic**: :contentReference[oaicite:69]{index=69}
- **Producer**: :contentReference[oaicite:72]{index=72}
- **Consumer**: :contentReference[oaicite:75]{index=75}:contentReference[oaicite:77]{index=77}

---

## 🐳 Docker Commands

- **Build the Docker image**:

  
```bash
  docker build -t product-service .
Run the Docker container:

bash
Copy
Edit
  docker run -d -p 3004:3004 --name product-service-container product-service
View logs:

bash
Copy
Edit
  docker logs -f product-service-container
🧪 Testing the Service
Use tools like Postman or cURL to test the API endpoints.

Example: Creating a new product using cURL

bash
Copy
Edit
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

Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start
Ensure that MongoDB and Kafka are running locally or adjust the .env file accordingly.

Notes:

The Product Service API should be running for authentication to work.

Token validation occurs before every request to ensure security.

For all protected routes, include the token like this:

bash
Copy
Edit
  -H "Authorization: Bearer <your_token>"
👤 Author
Divyanjali Nalawade
2023TM93629@wilp.bits-pilani.co.in
GitHub: https://github.com/DivyanjaliNalawade

📝 License
This project is intended for educational purposes only.
Built for the assignment submission for the course: Scalable Services (BITS Pilani WILP) 👨‍🏫
