
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert to 12-hour format and set AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zeros to minutes and seconds
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the clock
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately on load
updateClock();

