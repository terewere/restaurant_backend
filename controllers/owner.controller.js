const { Owner } = require("../models/owner");

exports.saveOwnerData = async (req, res) => {

    try {
        const { numberOfTable, chairPerTable } = req.body;
                
        const dataStore = new Owner({ numberOfTable, chairPerTable });
        
        const saveData = await dataStore.save();

        console.log(saveData, 'bb');

        saveData ? res.status(201).json(saveData) :  res.status(401).json("something went wrong, data has not been saved");

    } catch (error) {

        console.log(error.message);

        res.status(501).json(error)

    }

}

// exports.getOwnerInfo = async (req, res) => {

//     const getData = await Owner.find();
//     console.log(getData);
// }