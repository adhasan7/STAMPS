// Buat array dari 1 sampai 100
let array = Array.from({ length: 100 }, (_, index) => index + 1);

// Balikkan urutan array
array.reverse();

// Fungsi untuk mengecek apakah suatu angka adalah bilangan prima
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Cetak array setelah memenuhi peraturan
array.forEach((number) => {
  if (isPrime(number)) {
    // Jangan print angka bilangan prima
    return;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FooBar");
  } else if (number % 3 === 0) {
    console.log("Foo");
  } else if (number % 5 === 0) {
    console.log("Bar");
  } else {
    console.log(number);
  }
});
