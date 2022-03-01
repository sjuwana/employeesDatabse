const mongoose = require('mongoose')

const Address = new mongoose.Schema ({
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true}
})

const Employee = new mongoose.Schema ({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    job_title: {type: String, required: true},
    address: Address   
}, 
{timestamps: true}
);

module.exports = mongoose.model('employees', Employee);
