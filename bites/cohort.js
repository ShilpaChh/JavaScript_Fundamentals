// Ch - 10 Challenge

const cohort = {
    name: 'Feb2023Cohort',
    id: 1234,
    students: ["Shilpa", " Ray", " James", " Jay", " Jack"]
};

const message = (object) => {
    return `${object.id} - ${object.name} - ${object.students} students in this cohort`
}

console.log(message(cohort))