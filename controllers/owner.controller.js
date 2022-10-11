const { Owner } = require("../models/owner");
const { Table } = require("../models/table");
const {generateTableNumber} = require("../helper/generateTableNumber")

exports.ownerData = async (req, res) => {

    try {

        const { numberOfTable, chairPerTable } = req.body;

        const dataStore = new Owner({ numberOfTable, chairPerTable });
        
        await dataStore.save();

        await generateTableNumber(numberOfTable, chairPerTable);
   
      const data = await Table.find({}).populate("chairs")

      res.json(data)
        
    } catch (error) {

        console.log(error.message);

        res.status(501).json(error)

    }
}