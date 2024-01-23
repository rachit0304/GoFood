const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.ywnh2y3.mongodb.net/gofoodmern`;

const mongoDB = async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser:true}, async(error,result)=>{
    console.log('Connected!');

    if (error) {
      console.error(error.message);
    }

    
    else {
       
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function(err, data) {
      const foodCategory = await mongoose.connection.db.collection("food_category");
      foodCategory.find({}).toArray(function(err, catData){
        if(err){
          console.log(err); 
        }

        
        global.food_items = data;  // food_items is a global variable now , we can use it in any file
        global.foodCategory = catData;
            
          
      })


      })

      const order_data = mongoose.connection.db.collection("users");
      order_data.find({}).toArray(function(err,data2){
        if(err){
          console.log(error)
        }
        global.order_items = data2;
      })

    } 
  });
    

     
    }

module.exports = mongoDB;