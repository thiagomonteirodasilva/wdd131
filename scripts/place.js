document.getElementById('currentyear').innerHTML = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = `Last modified: ${document.lastModified}`;

const temperature = document.getElementById('temperature').textContent;
const windSpeed = document.getElementById('wind-speed').textContent;

function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
  const result = calculateWindChill(temperature, windSpeed).toFixed(1);
  document.getElementById('wind-chill').textContent = result + ' °C';
} else {
  document.getElementById('wind-chill').textContent = 'N/A';
}