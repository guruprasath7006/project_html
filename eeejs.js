// script.js

document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.querySelector('form');
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const departureDateInput = document.getElementById('departure-date');
    const returnDateInput = document.getElementById('return-date');
    const passengersInput = document.getElementById('passengers');
    const classInput = document.getElementById('class');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form
        if (fromInput.value.trim() === '' || toInput.value.trim() === '' || departureDateInput.value === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Check return date
        if (returnDateInput.value && new Date(returnDateInput.value) < new Date(departureDateInput.value)) {
            alert('Return date cannot be earlier than departure date.');
            return;
        }

        // Validate passengers
        if (passengersInput.value <= 0) {
            alert('Please enter a valid number of passengers.');
            return;
        }

        // Submit form
        bookingForm.submit();
    });
});
