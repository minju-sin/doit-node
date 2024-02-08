// Get all contacts
// GET /contacts

const getAllContacts = async (req, res) => {
    try{
        res.send("Contacts Page");
    }catch(error){
        red.send(error);
    }
}

module.exports = getAllContacts;