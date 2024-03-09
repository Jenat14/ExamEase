
let exams = [];

function addExam(subjectdata,datedata,timedata) {
    const subject = document.getElementById(subjectdata).value;
    const date = document.getElementById(datedata).value;
    const time = document.getElementById(timedata).value;

    // Validate date and time formats
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (subject && dateRegex.test(date) && timeRegex.test(time)) {
        exams.push({ title: subject, start: `${date}T${time}`, allDay: false, color:subjectdata=="subject" ?"#E8C872" :"#637A9F"});
$("#colorPicker").val()
        // Update the calendar
        $('#calendar').fullCalendar('destroy');
        initCalendar();

        // Add the exam to the list
        const examList = document.getElementById('examList');
        const listItem = document.createElement('li');
        listItem.textContent = `${subject} - Date: ${date}, Time: ${time}`;
        examList.appendChild(listItem);

        // Add the exam to the schedule table
        const scheduleTable = document.getElementById('scheduleTable');
        const scheduleBody = document.getElementById('scheduleBody');
        const scheduleRow = document.createElement('tr');
   
        scheduleRow.innerHTML = `<td style='background-color:"red"'>${subject}</td><td>${date}</td><td>${time}</td>`;
        scheduleBody.appendChild(scheduleRow);

        // Clear input fields
        document.getElementById('subject').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';

        // Clear error message
        document.getElementById('error-message').textContent = '';
    } else {
        document.getElementById('error-message').textContent = 'Please fill in all fields with valid data.';
    }
}

function initCalendar() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: exams
    });
}

// Initialize the calendar
initCalendar();
