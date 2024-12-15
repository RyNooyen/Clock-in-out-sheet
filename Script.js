// URL of your Google Apps Script web app
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqOJ6ZzOquvg4jUIzMM6Gnbhfq7whJJELGTtkOWnlCdke7fTG8bV4IRENULpbJ3qLNaA/exec';

// Function to send data to Google Sheets
function logAction(action) {
    const timestamp = new Date().toISOString();
    const data = { action, timestamp };

    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert(`${action} logged successfully!`);
        } else {
            alert('Error logging action.');
        }
    })
    .catch(error => console.error('Error:', error));
}

// Add event listeners to the buttons
document.getElementById('clockInButton').addEventListener('click', () => logAction('Clock In'));
document.getElementById('clockOutButton').addEventListener('click', () => logAction('Clock Out'));
