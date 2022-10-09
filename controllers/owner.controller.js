const { Owner } = require("../models/owner");

const saveOwnerData = async (req, res) => {

    try {
        
        const { numberOfTable, numberOfChair, name } = req.body;
        
        const data = { numberOfTable, numberOfChair, name }
        const dataStore = new Owner(data);
        
        // saving of todo data
        const saveData = await dataStore.save();
        console.log(saveData, 'newLogisticsData')

        // console.log(saveLogisticsData,'saveLogisticsData')
        // if (!saveLogisticsData) return res.status(401).json("something went wrong, data has not been saved");
        // return res.status(201).json(saveLogisticsData)
    } catch (error) {
        console.log(error.message);
        // res.status(501).json(error)
    }
}

module.exports = { saveOwnerData };