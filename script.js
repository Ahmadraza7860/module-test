const apiUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

// Fetching data using .then
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Iterate over the data array and populate the table
    for (let i = 0; i < data.length; i++) {
      const crypto = data[i];
      document.getElementById(`name-${i}`).textContent = crypto.name;
      document.getElementById(`id-${i}`).textContent = crypto.id;
      document.getElementById(`image-${i}`).innerHTML = `<img src="${crypto.image}" alt="${crypto.name}" width="25">`;
      document.getElementById(`symbol-${i}`).textContent = crypto.symbol;
      document.getElementById(`price-${i}`).textContent = crypto.current_price;
      document.getElementById(`volume-${i}`).textContent = crypto.total_volume;
    }
  })
  .catch(error => console.error(error));
