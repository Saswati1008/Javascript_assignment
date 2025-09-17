let main = document.getElementsByClassName("main")[0];

fetch("https://restcountries.com/v3.1/all?fields=name")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok " + res.statusText);
    return res.json();
  })
  .then(countries => {
    for (let i = 0; i < 100 && i < countries.length; i++) {
        const country = countries[i];
      const box = document.createElement("div");
      box.className = "box";
   box.textContent = country?.name?.common || "No Name";
      main.appendChild(box);
    }
  })
  .catch(err => console.error("Error fetching countries:", err));

