// Define the Student interface to structure student objects
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects using the Student interface
const firstStudent: Student = {
	firstName: "okello",
	lastName: "kevin",
	age: 20,
	location: "Nairobi"
}

const secondStudent: Student = {
	firstName: "Vincent",
	lastName: "Nelson",
	age: 30,
	location: "Kisumu"
}

// Create an array of student objects
const studentsList = [firstStudent, secondStudent];

// Get the table element by its ID
const table = document.getElementById('studentTable') as HTMLTableElement;

// Iterate over the studentsList array
// For each student, create a new row and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	// Set the text content of the cells to the student's first name and location
	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
