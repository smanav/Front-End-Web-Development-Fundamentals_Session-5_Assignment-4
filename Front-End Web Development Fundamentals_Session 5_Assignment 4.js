// Here is the script example using Array

var Employee1 = {
	            Name: "Sanjay Patel", 
	            Age:35, 
	            Salary: "7.5 LPA", 
	            Address: {
	            	City: "Pune",
	            	State: "Maharashtra",
	            	Pincode: 423203
	                     }
	            };

var Employee2 = {
	            Name: "Abhishek Kalantri", 
	            Age:32, 
	            Salary: "8.5 LPA", 
	            Address: {
	            	City: "Mumbai",
	            	State: "Maharashtra",
	            	Pincode: 420002
	                     }
	            };

var Employee3 = {
	            Name: "Akash Sharma", 
	            Age:33, 
	            Salary: "6.5 LPA", 
	            Address: {
	            	City: "Banglore",
	            	State: "Karnataka",
	            	Pincode: 350087
	                     }
	            };

var Employee4 = {
	            Name: "Rahul Bhansali", 
	            Age:31, 
	            Salary: "6.75 LPA", 
	            Address: {
	            	City: "Ahmedabad",
	            	State: "Gujarat",
	            	Pincode: 422879
	                     }
	            };

var Employee5 = {
	            Name: "Rajesh Rathod", 
	            Age:34, 
	            Salary: "8.0 LPA", 
	            Address: {
	            	City: "Hyderabad",
	            	State: "Andhra Pradesh",
	            	Pincode: 324056
	                     }
	            };

var Employee = [];

Employee.push(Employee1);
Employee.push(Employee2);
Employee.push(Employee3);
Employee.push(Employee4);
Employee.push(Employee5);

console.log(Employee[2].Name, Employee[2].Age, Employee[2].Salary, Employee[2].Address.City, Employee[2].Address.State, Employee[2].Address.Pincode);








