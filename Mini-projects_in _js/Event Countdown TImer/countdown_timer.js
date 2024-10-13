
// Set the date of the future event
const eventDate = new Date("2024-08-14")

function updateCountdown(){

      // Get the current date and time
    const now = new Date()

    // Calculate the difference between the event date and now
    const timeDifference = eventDate.getTime() - now.getTime();

      // Calculate days, hours, minutes, and seconds

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60 ));
      const seconds = Math.floor((timeDifference % ( 1000 * 60)) / (1000));

       // Display the result
       document.getElementById('countdown').innerHTML = `
       <span>${days}d</span>
       <span>${hours}h</span>
       <span>${minutes}m</span>
       <span>${seconds}s</span>`;
       // Update the countdown every second

       setTimeout(updateCountdown, 1000);

    }

    // Start the countdown timer

    updateCountdown();




    

