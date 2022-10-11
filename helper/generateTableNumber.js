const { Table } = require("../models/table");
const { Chair } = require("../models/chair");


const generateTableNumber = async (tables, chairs) => {

    for (let i = 1; i <= tables; i++) {
        
        let table = new Table({
            label: 'T' + i,
            available: true,
            chairs:[]
        })
        
        for (let j = 1; j <= chairs; j++) {

           let chair = new Chair({
              label: 'C'+ j,
              available: true,
              table: table
           })

         const savedChair = await chair.save();
         table.chairs.push(savedChair);

            
        }
        
       await table.save()
       
    }

       
   }


   module.exports = { generateTableNumber };