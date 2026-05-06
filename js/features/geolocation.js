function initGeolocation() {
  const message = document.getElementById("message");

  message.textContent = "Fetching location...";

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      async function (position) {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );

          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "your area";

          message.textContent = `📍 You are browsing from ${city}`;

        } catch (error) {
          message.textContent = "Error fetching location name";
          console.error(error);
        }
      },

      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message.textContent = "Permission denied ❌";
            break;
          case error.POSITION_UNAVAILABLE:
            message.textContent = "Location unavailable ❌";
            break;
          case error.TIMEOUT:
            message.textContent = "Request timed out ⏳";
            break;
          default:
            message.textContent = "Unknown error ❌";
        }
      }
    );

  } else {
    message.textContent = "Geolocation not supported";
    
  }
}