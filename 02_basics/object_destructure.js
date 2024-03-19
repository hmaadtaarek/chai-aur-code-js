// Dectructuring of Objects.

const course = {
    name: "Javascript",
    price : "999",
    courseInstructor: "Hitesh Choudhary"
}

// suppose if we want to take a key value pair again and agian like (course.name) (course.price) (course.courseInstructor) so instead of calling this again and again we use destructuring method.

const {courseInstructor} = course

console.log(courseInstructor)

// we can also give our own names:

const {courseInstructor: instructor} = course
console.log(instructor)
