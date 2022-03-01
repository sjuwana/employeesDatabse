const db = require('./db');
const Employee = require('./models/employee.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const findAllEmployees = async () => {

    const allEmployees = await Employee.find();
    console.log(allEmployees)
}

const createOneEmployee = async () => {
    const newEmployee = new Employee({
        first_name: "George", 
		last_name: "Lutz",
		email: "GeorgeLutz@gmail.com",
		job_title: "Security Analyst",
		address: {
			street: "4th Ave",
        	city: "New York",
        	state: "NY",
    		zip: "10026"
			}
    });
    await newEmployee.save();
    console.log("Created New Employee!");
}


const createManyEmployees = async () => {
    const manyEmployees = [
    {
        first_name: "Lady", 
		last_name: "Gaga",
		email: "LadyGaga@ymail.com",
		job_title: "Computer Analyst",
		address: {
			street: "5th Avenue",
        	city: "New York",
        	state: "NY",
    		zip: "10011"
			}
    },
    {
        first_name: "John",
        last_name: "Lennon",
        email: "JohnLennon@gmail.com",
        job_title: "Pianist",
        address: {
            street: "10th Street",
            city: "New York",
            state: "NY",
            zip: "10026"
        }
    },
    {
        first_name: "Demmy",
        last_name: "Hernandez",
        email: "DemmyHernandez@ymail.com",
        job_title: "Cyber Analyst",
        address: {
            street: "9th Street",
            city: "New York",
            state: "NY",
            zip: "10076"
        }
    },
]
  await Employee.insertMany(manyEmployees);
  console.log("Inserted Many New Employees!")
}
const updateEmployee = async () => {
    const updated = await Employee.updateOne({job_title: "Cyber Analyst"}, { job_title: "FBI Agent"});
    console.log(updated);
}
const deleteEmployee = async () => {
    const deleted = await Employee.deleteOne({first_name: "John"})
    console.log(deleted)

}
const employeeFullName = async () => {
    const employeeName = await Employee.find({}, {_id: 0, first_name: true, last_name: true});
    for(let i = 0; i < employeeName.length; i++){
    console.log((employeeName[i].first_name) +  ' ' + (employeeName[i].last_name));

    }
}

const run = async () => {
    // await findAllEmployees()
    await createOneEmployee()
    // await createManyEmployees()
    // await updateEmployee();
    // await deleteEmployee();
    // await createOneEmployee()
    await employeeFullName()
    db.close()
}
run()