// const session = require('../models/session')

// function getSessions(userID){
    
//     return new Promise((resolve, reject)=>{
//         session.find({}, (err, docs) =>{
//             console.log(docs);

//             for (const session of docs){

//                 console.log(session);
                
//                 if (JSON.parse(session.session).userID == userID) {
//                     resolve(true);
                    
//                 }
//             } 
//             resolve(false);
          
//         });
//     });
// }

// module.exports = getSessions;