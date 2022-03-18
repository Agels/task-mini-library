class Agels {
    constructor(colums, data) {
      this.colum = colums
      this.datax = data;
      this.thed = document.createElement("thead");
      this.tbody = document.createElement("tbody");
      this.trow = document.createElement('tr');
    }

    tabel(){
      let mytable = document.createElement("table");
      let mythead = this.thed;
      let myTbody = this.tbody;
      let trow = this.trow;
      document.getElementById('app').appendChild(mytable);

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
        const td = this.colum.data;

        td.forEach(el => {
          let data = ` 
                        <tr>
                            <td>${el[0]}</td>
                            <td>${el[1]}</td>
                            <td>${el[2]}</td>
                        </tr>
                      `;
          this.tbody.innerHTML += data;
        });
      }
    }

    function show(){
      agels.tabel();
      agels.header();
      agels.body();
    }

  const agels = new Agels({
    colums: ["Name", "Email", "Phone Number"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Takfor", "takfor@gmail.com", "(01) 22 888 4444"],
      ["Mark", "mark@gmail.com", "(01) 22 888 555"]
    ]
  });

  show();
  
