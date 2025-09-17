let isPrime=(n)=>{   
        for(let i=2;i<Math.sqrt(n);i++){
            if(n%i===0){
              return false;
            }
        }
            return true
    }

let div =document.querySelector('.main')

for (let i = 0; i <= 100; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.textContent = i;

      if (i % 2 === 0) {
        box.style.backgroundColor = 'green';   // even numbers
      } else if (isPrime(i)) {
        box.style.backgroundColor = 'red';     // prime numbers
      } else {
        box.style.backgroundColor = 'yellow';  // odd non-primes
      }

      div.appendChild(box);
    }