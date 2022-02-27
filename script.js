$("#add-unv").validate({
    rules: {
        name: {
            required: true,

        },
        university: {
            required: true,

        },
        batch: {
            required: true,
            number: true
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

function newUniversity(val) {
    if (val == 'other') {
        document.getElementById('universitySelect').remove()
        document.getElementById('universitySelectDiv').innerHTML =
            `
            <label class="form-label">Name of your Univeristiy</label> 
            <input name="university" class="form-control" placeholder="Enter the name of your university" required>
            `
    }
}