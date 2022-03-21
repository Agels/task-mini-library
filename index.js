class Agels {
    constructor(colums, data) {
      this.colum = colums
      this.datax = data;
      this.thed = document.createElement("thead");
      this.tbody = document.createElement("tbody");
      this.trow = document.createElement('tr');
    }

    tabel(app){
      let mytable = document.createElement("table");
      let mythead = this.thed;
      let myTbody = this.tbody;
      let trow = this.trow;
      app.appendChild(mytable);

      mytable.setAttribute("class","table table-dark table-hover");
      document.getElementById("app").classList.add("col-lg-6");

      mytable.appendChild(mythead);
      mythead.appendChild(trow);
      mytable.appendChild(myTbody)
    }

    header(){
      const th = this.colum.colums;

      for(const tablehead of th){
        
        let myTh = document.createElement("th");
        myTh.innerHTML += tablehead;
        let data = document.body.appendChild(myTh);
    
        this.trow.appendChild(data)
  
      }
  
    }

    body(){
        // DATA DINAMIS
        const td = this.colum.data;
        td.forEach(el => {   
            
            const tr = document.createElement('tr');
            let myTbody = this.tbody;
              
          el.forEach(child => {
          
            let tdd = document.createElement("td");
            tr.appendChild(tdd)
            myTbody.appendChild(tr)
          
            tdd.innerHTML += child;
            let data = document.body.appendChild(tdd)
            
            tr.appendChild(data)
          })
             // DATA STATIS

          //       // const data = ` 
          //       //               <tr>
          //       //                   <td>${child[0]}</td>
          //       //                   <td>${child[1]}</td>
          //       //                   <td>${child[2]}</td>
          //       //               </tr>
          //       //             `;
          //       // this.tbody.innerHTML += data;
              
              });
           }
        }
      

    function show(){
      agels.header();
      agels.body();
    }

  const agels = new Agels({
    colums: ["Name", "Email", "Phone Number","City"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333","New York"],
      ["Takfor", "takfor@gmail.com", "(01) 22 888 4444","Las vegas"],
      ["Mark", "mark@gmail.com", "(01) 22 888 555","orlando"]
    ]
  });

  const id = document.getElementById('app');
  agels.tabel(app)
  show();
  
