const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnection = async()  => {
    
    const { env } = process;

    mongoose.connect(env.mongoDbUrlConnection, {
      
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      
    }).then(success => {

      const collections = mongoose.connection.collections;

   Promise.all(Object.values(collections).map(async (collection) => {
      await collection.deleteMany({}); // an empty mongodb selector object ({}) must be passed as the filter argument
  })).then();

        if (success) {
          
            console.log("mongodb connection has been established successfully");
            
        }
        
    })
    .catch(err => console.log(err.message));
}
