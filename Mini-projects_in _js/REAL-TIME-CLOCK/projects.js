
/* ============= CLOCK ANIMATION SETINTERVAL ============= */

// Create a function to update the clock
 function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
 
// This function styles the clock to look nice
function styleClock() {
    const clockElement = document.getElementById('clock');
    clockElement.style.fontSize = '3rem';
    clockElement.style.fontFamily = 'Arial, sans-serif';
    clockElement.style.textAlign = 'center';
    clockElement.style.justifyContent = 'center';
    clockElement.style.marginTop = '20%';
    clockElement.style.padding = '20px';
    clockElement.style.backgroundColor = '#333';
    clockElement.style.color = '#fff';
    clockElement.style.borderRadius = '10px';
    clockElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    clockElement.style.display = 'inline-block';
}

// Call the styleClock function to style the clock
styleClock();

// Set an interval to update the clock every second
 setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately on page load
