var socket = io("http://" + window.location.hostname + ":8080");
var dbschema;
socket.on("dbschema", function (msg) {
  dbschema = msg;
  displaySchema();
  var toggler = document.getElementsByClassName("caret");
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
      if (i===0) 
        afficheRoot();
      else
        afficheDb(this.textContent)
    });
  }
  toggler = document.getElementsByClassName("selectable");
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        let parent=this.parentElement.previousSibling;
        afficheCol(parent.textContent, this.textContent)
    });
  }
});
socket.emit("dbschema", "");

function afficheRoot() {
  console.log("root");
}

function afficheDb(onedb) {
  console.log("db : "+onedb);
}

function afficheCol(onedb, onecol) {
  console.log(onedb+" -> "+onecol);
}

function displaySchema() {
  document.querySelector("#dbtree").innerHTML = "";
  let myUL = document.createElement("ul");
  myUL.id = "myUL";
  let thedb = document.createElement("li");
  let caret = document.createElement("span");
  caret.className = "caret";
  caret.textContent = dbschema.db;
  thedb.appendChild(caret);
  let uldb = document.createElement("ul");
  uldb.className = "nested";
  thedb.appendChild(uldb);
  for (let i = 0; i < dbschema.dbs.length; i++) {
    let li = document.createElement("li");
    let caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = dbschema.dbs[i].name;
    li.appendChild(caret);
    let ul = document.createElement("ul");
    ul.className = "nested";
    li.appendChild(ul);
    cols = dbschema.dbs[i].cols;
    for (let j = 0; j < cols.length; j++) {
      let lic = document.createElement("li");
      lic.className = "selectable";
      lic.textContent = cols[j].namecol;
      ul.appendChild(lic);
    }
    uldb.appendChild(li);
  }
  myUL.appendChild(thedb);
  document.querySelector("#dbtree").appendChild(myUL);
}
