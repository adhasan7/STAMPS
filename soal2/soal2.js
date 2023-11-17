const apiKey = '3042e88cc6ffb84a47b5504cbe18e341'
const city = 'Jakarta';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

// Fungsi untuk mendapatkan tanggal setelah 5 hari dari hari ini
function getNext5Days() {

  const dates = [];
  for (let i = 1; i <= 5; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    dates.push(currentDate.toISOString().split('T')[0]);
  }
  return dates;
}

// Fungsi untuk mendapatkan ramalan cuaca dari API
async function getWeatherForecast() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== '200') {
      throw new Error(data.message);
    }

    const forecastList = data.list;
    console.log("Weather Forecast :");

    // Menampilkan suhu per hari untuk 5 hari ke depan
    const next5Days = getNext5Days();
    next5Days.forEach((date, index) => {
      const forecastForDay = forecastList.find(item =>
        item.dt_txt.includes(`${date} `)
      );
      var days = ['Sun,', 'Mon,', 'Tues,', 'Wed,', 'Thurs,', 'Fri,', 'Sat,'];
      var months = ['Jan', 'Feb', 'March', 'Aprl', 'May', 'Jun', 'Jul', 'Agst', 'Sept', 'Oct', 'Nov', 'Dec'];
      waktu = new Date(date);
      hari = waktu.getDay();
      tgl = waktu.getDate();
      bulan = waktu.getMonth();
      tahun = waktu.getFullYear();


      if (forecastForDay) {
        const temperature = forecastForDay.main.temp;

        console.log(`${days[hari]}  ${tgl + " " + months[bulan] + " " + tahun} : ${temperature}°C`);
      } else {
        console.log(`Tanggal: ${date}, Data tidak tersedia`);
      }
    });
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

// Panggil fungsi untuk mendapatkan ramalan cuaca
getWeatherForecast();