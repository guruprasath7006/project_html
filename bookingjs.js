// bookingjs.js

document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting to a server

    // Get form values
    const fromCity = document.getElementById("from").value;
    const toCity = document.getElementById("to").value;
    const departureDate = document.getElementById("departureDate").value;
    const passengers = document.getElementById("passengers").value;

    // Basic validation checks
    if (!fromCity || !toCity || !departureDate || !passengers) {
      confirmationMessage.textContent = "Please fill in all fields.";
      confirmationMessage.style.color = "red";
      return;
    }

    // Display a confirmation message
    confirmationMessage.innerHTML = `
      <p>Flight booked successfully!</p>
      <p><strong>Details:</strong></p>
      <ul>
        <li>From: ${fromCity}</li>
        <li>To: ${toCity}</li>
        <li>Departure Date: ${departureDate}</li>
        <li>Number of Passengers: ${passengers}</li>
      </ul>
    `;
    confirmationMessage.style.color = "green";

    // Reset the form after submission
    bookingForm.reset();
  });
});
