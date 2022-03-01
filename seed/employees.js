const db = require('../db')
const Employee = require('../models/employee')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const employees = [
    {
        first_name: "Miguel",
        last_name: "Lo",
        email: "MiguelLo@YOLO.com",
        job_title: "Software Engineering Instructor",
        address: {
            street: "5th Ave",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    },
    
    {
        first_name: "David",
        last_name: "Torres",
        email: "DavidTorres@ymail.com",
        job_title: "AUTOCAD designer",
        address: {
            street: "3th Ave",
            city: "New York",
            state: "NY",
            zip: "10016"
        }
    },

    {
        first_name: "Bella",
        last_name: "Smith",
        email: "BellaSmith@aol.com",
        job_title: "Executive Assistant",
        address: {
            street: "6th Ave",
            city: "New York",
            state: "NY",
            zip: "10040"
        }
    },

    {
        first_name: "Jonathan",
        last_name: "Wong",
        email: "JonathanWong@yahoo.com",
        job_title: "Sushi Chef",
        address: {
            street: "8th Ave",
            city: "New York",
            state: "NY",
            zip: "10032"
        }
    },
    
    {
        first_name: "John",
        last_name: "Lennon",
        email: "JohnLennon@YOLO.com",
        job_title: "Concert Pianist",
        address: {
            street: "10th Ave",
            city: "New York",
            state: "NY",
            zip: "10036"
        }
    },
  ]

  await Employee.insertMany(employees);
   console.log("Created Employees!");
}
           


const run = async () => {
    await main();
    db.close();
}

run()
