const countriesAPI = "https://restcountries.com/v3.1/all?fields=name,capital,languages,population,area";

fetch(countriesAPI)
  .then(res => res.json())
  .then(countries => {
    countries.forEach(c => {
      console.log("Country:", c.name.common);
      console.log("Capital:", c.capital ? c.capital[0] : "N/A");
      console.log("Languages:", c.languages ? Object.values(c.languages).join(", ") : "N/A");
      console.log("Population:", c.population);
      console.log("Area:", c.area, "sq.km");
      console.log("---------------------");
    });
  })
  .catch(err => console.error("Error:", err));

  const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(res => res.json())
  .then(breeds => {
    // Extract only the "name" field into an array
    const catNames = breeds.map(breed => breed.name);

    console.log("All Cat Names:", catNames);
  })
  .catch(err => console.error("Error:", err));

 

fetch(catsAPI)
  .then(res => res.json())
  .then(breeds => {
    let totalWeight = 0;
    let count = 0;

    breeds.forEach(breed => {
      if (breed.weight && breed.weight.metric) {
        const [min, max] = breed.weight.metric.split(" - ").map(Number);
        const avg = (min + max) / 2;
        totalWeight += avg;
        count++;
      }
    });

    const averageWeight = totalWeight / count;
    console.log("Average Cat Weight (metric):", averageWeight.toFixed(2), "kg");
  })
  .catch(err => console.error("Error:", err));

 const countriesAPI1 = 'https://restcountries.com/v3.1/all?fields=name,area';

fetch(countriesAPI1)
  .then(res => res.json())
  .then(countries => {
    const largest = countries
      .filter(c => c.area) // ensure area exists
      .sort((a, b) => b.area - a.area) // descending order
      .slice(0, 10);

    console.log("10 Largest Countries by Area:");
    largest.forEach(c => {
      console.log(`${c.name.common}: ${c.area.toLocaleString()} sq.km`);
    });
  })
  .catch(err => console.error("Error:", err));


  

const countriesAPI2 = 'https://restcountries.com/v3.1/all?fields=languages';

fetch(countriesAPI2)
  .then(res => res.json())
  .then(countries => {
    const allLanguages = new Set();

    countries.forEach(c => {
      if (c.languages) {
        Object.values(c.languages).forEach(lang => allLanguages.add(lang));
      }
    });

    console.log("Total Number of Official Languages:", allLanguages.size);
  })
  .catch(err => console.error("Error:", err));
