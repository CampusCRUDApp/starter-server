const { Campuses, Campus, Student, Students } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campuses.create({
		name: "Hunter College",
        address:"2323 Hunter Road Nj",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campuses.create({
		name: "Harvard",
		address:"2323 Harvard Road Nj",
        description: "This is a school in MA."
	});


    const dummy_students = await Students.create({
        firstname: "Joe",
        lastname: "Shmo",
    });


    const dummy_students2 = await Students.create({
        firstname: "April",
        lastname: "Mickheal"
    });


    const dummy_students3 = await Students.create({
		 firstname: "Jenna",
         lastname: "Mccormick",
		 gpa:"4.0",
		 email:"iloveme@me.com"
    });
    const dummy_students4 = await Students.create({
        firstname: "za",
        lastname: "lo",
        gpa:"4.0",
        email:"iloveme@me.com"
    });
    const dummy_students5 = await Students.create({
        firstname: "henry",
        lastname: "lo",
        gpa:"4.0",
        email:"iloveme@me.com"
    });
    console.log(dummy_campus2 + "   is");
    console.log(dummy_campus2 + "   is");

    await dummy_students.setCampus(dummy_campus2);
    await dummy_students2.setCampus(dummy_campus2);
    await dummy_students3.setCampus(dummy_campus2);
    await dummy_students4.setCampus(dummy_campus);
    await dummy_students5.setCampus(dummy_campus);


}

module.exports = seedDB;