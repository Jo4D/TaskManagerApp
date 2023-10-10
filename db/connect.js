const mongoose = require('mongoose');
const connectionString = '';
const connectToDb = (url)=>{
 return mongoose.connect(url,
    {
         useUnifiedTopology: true ,
         useNewUrlParser: true,
        // useCreateIndex:true,
       //  useFindAndModify:false
        }
        );
}
module.exports = connectToDb;
// .then(()=>console.log('connected to the db'))
// .catch((err)=>console.log(err));
