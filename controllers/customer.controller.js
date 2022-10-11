
const {getAvailableTables} = require("../helper/getAvailableTables");
const { Table } = require("../models/table");

exports.customerData = async (req, res) => {

    try {

        const { headCount } = req.body;


       const data = await getAvailableTables(headCount);


       if (data.personsRemaining == 0) {

        var tables = await Table.find({available: true}).limit(data.tables).populate('chairs');

        tables.forEach( async table => {
          table.set({available:false})

          await table.save()
        //   table.chairs.set({available:false});
        //   await table.chairs.save()

        });


        return res.json(tables)
        
       }else {

        var tables = await Table.find({available: true}).limit(data.tables).populate('chairs');

        tables.forEach( async table => {
          table.set({available:false})

          await table.save()
        //   table.chairs.set({available:false});
        //   await table.chairs.save()

        });

        return res.json({tables, remainder: data.personsRemaining})


       }

       return res.json(data)


    } catch (error) {

        console.log(error.message);

        res.status(501).json(error)

    }
}