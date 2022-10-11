const { Owner } = require("../models/owner");


const getAvailableTables = async (headCount) => {

    const ownerData = await Owner.findOne({})
    const numberOfTable = ownerData.numberOfTable
    const chairPerTable = ownerData.chairPerTable

    const maxChairs = numberOfTable * chairPerTable;

    if (headCount > maxChairs ) {
       
        return 'error'
    }
     let tables = 0;

    const personsRemaining = headCount % chairPerTable;

    if (personsRemaining == 0 ) {

       tables = headCount / chairPerTable
        
    } else {

        tables = Math.trunc(headCount / chairPerTable)
    }


    return {
        tables, chairPerTable, personsRemaining
    };
       

   }


   module.exports = { getAvailableTables };