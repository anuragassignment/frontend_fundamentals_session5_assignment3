// Student Details Object

var StudentDetails = {
	StudentName : 'John Doe',
	DOB: '1/1/1980',
	Skills: ['Developer','Designer'],
	address: {
      state: 'Maharashtra',
      city: 'Mumbai',
      country: 'India',
      pincode: 443002
	},
	eyeColor: 'blue',
	motherName: 'Mary Doe'
}

//deleted eyeColor property from the object
delete StudentDetails.eyeColor;

//Displays object Details in console.
console.log(StudentDetails);