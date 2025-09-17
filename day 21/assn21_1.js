let h2=document.querySelector('h2');
h2.style.textDecoration="underline"
h2.style.fontSize='20px';
h2.style.marginBottom='10px;'
const colors = ["pink", "green", "blue", "purple", "orange", "brown"];
  let year = document.querySelector('#year');
  setInterval(()=>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    year.style.color=randomColor;
  },1000)
year.style.fontSize='50px'
let li = document.querySelectorAll('li')

li.forEach(list=>{
    if (list.textContent.includes("Done")) {
    list.style.backgroundColor = "green";
  } else if (list.textContent.includes("Ongoing")) {
    list.style.backgroundColor = "yellow";
    
  } else {
    list.style.backgroundColor = "red";
  }
  list.style.color = "black"; 
})

const dateTimePara= document.querySelector(".date");
const now = new Date();

const options = {
  year: "numeric",
  month: "long", 
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};


dateTimePara.textContent =  now.toLocaleString("en-IN", options);
dateTimePara.style.border="1px,solid"

let index=0;
  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dateTimePara.style.backgroundColor= randomColor;
  }, 1000);
