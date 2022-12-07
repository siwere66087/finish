


// let products = JSON.parse(localStorage.getItem('products ')) ?
// JSON.parse(localStorage.getItem('products ')) : [
//     {
//         id: 1,
//         productName: ""
//     }
// ];

let products = {
    productList :{
        id:1,
        pname:"cat shoe",
        pdescription:"cat sneaker",
        pPrice:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg"
    
    
    
    },

    2:{
        id:2,
        pname:"cat sneaker",
        pdescription:"jogging sneaker",
        pPrice:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp"
    
    
    
     },
     3 : {
        id:3,
        pname:"sneaker",
        pdescription:"formal shoe",
        pPrice:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg"
    
    
    
    },
     4:{
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg"
    
    
    
    },

}


  draw /*there is(:) that i removed*/ () => {
    
    let wrapper = document.getElementsByClassName("productContainer");

    for (let pid in products.productList) {
      
      let p = products.productList[pid],
          pdt = document.createElement("div"),
          segment;

      // PRODUCT SEGMENT
      pdt.className = "pwrap";
      pdt.onclick = () => { cart.add(pid); };
      wrapper.appendChild(pdt);

      // IMAGE
      segment = document.createElement("img");
      segment.className = "pimg";
      segment.src = "images/" + p.img;
      pdt.appendChild(segment);

      // NAME
      segment = document.createElement("div");
      segment.className = "pname";
      segment.innerHTML = p.name;
      pdt.appendChild(segment);

      // PRICE
      segment = document.createElement("div");
      segment.className = "pprice";
      segment.innerHTML = "$" + p.price;
      pdt.appendChild(segment);
    }
  };
window.addEventListener("DOMContentLoaded", products.draw);




















