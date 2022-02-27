$("#add-unv").validate({
    rules: {
        name: {
            required: true,

        },
        university: {
            required: true,

        },
        course: {
            required: true,
        },
        courseDuration: {
            required: true,
            number: true
        },
        courseFee: {
            required: true,
            number: true
        },
        noOfIndStudents: {
            required: true,
            number: true
        },
        Accomodation: {
            required: true,
            number: true
        },
        food: {
            required: true,
            number: true
        },
        QSrank: {
            number: true,
            required: true
        },

    }
})

