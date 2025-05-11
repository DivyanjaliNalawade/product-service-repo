const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables
dotenv.config();

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');

  // Start Kafka Consumer AFTER DB connection is ready
  require('./utils/kafkaConsumer');

  const port = process.env.PORT || 3004;
  app.listen(port, () => {
    console.log(`🚀 Product Service running on port ${port}`);
  });
}).catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});
