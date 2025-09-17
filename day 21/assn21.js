let firstPara = document.querySelector("p");
    console.log("First Paragraph:", firstPara.textContent);

    let p1 = document.querySelector("#para1");
    let p2 = document.querySelector("#para2");
    let p3 = document.querySelector("#para3");
    let p4 = document.querySelector("#para4");

    console.log("Paragraph 1:", p1.textContent);
    console.log("Paragraph 2:", p2.textContent);
    console.log("Paragraph 3:", p3.textContent);
    console.log("Paragraph 4:", p4.textContent);

    
    let paras = document.querySelectorAll("p");

  
    for(p of paras  ) {
      console.log(p.textContent);
    }

    
    p4.textContent = "Fourth Paragraph";

 
    p1.setAttribute("class", "para-class1");

    p2.id = "second-para";
    p2.className = "para-class2";

 
    p3.id = "third-para";
    p3.classList.add("para-class3");

    p4.setAttribute("id", "fourth-para");
    p4.setAttribute("class", "para-class4");

    console.log("Updated IDs and Classes:");
    paras.forEach(para => {
      console.log(`id: ${para.id}, class: ${para.className}`);
    });

    for(p of paras){
        p.style.color="yellow"
        p.style.backgroundColor = "pink";
         p.style.border = "2px solid black";
             p.style.fontSize = "18px";
      p.style.fontFamily = "Arial, sans-serif";
    }
    for(let i=0; i< paras.length;i++){
        if(i%2==0){
            paras[i].style.color="red" 
        }else{
             paras[i].style.color="green"
        }
       
    }