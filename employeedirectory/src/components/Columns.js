export const Columns = [
    {
        Header: "Profile",
        accessor:"picture"
    },
    {
        Header: "Name",
        accessor:"name"
    }, {
        Header: "Phone",
        accessor: "phone"
    }, {
        Header: "Email",
        accessor: "email"
    }, {
        Header: "DOB",
        accessor: "dob"
    }
]

// Define the columns for the table data 
// Provide an Array for the Header for Each Column
//  Provide map of "accessor for the react table JSON data input" that matches the Axios Randomuser 