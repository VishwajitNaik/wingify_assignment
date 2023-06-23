function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("transactionsTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if(n === 4) {
          x = parseFloat(x.innerText.replace("USD", "").replace(",", "").replace(/\s/g,""));
          y = parseFloat(y.innerText.replace("USD", "").replace(",", "").replace(/\s/g,""));
        } else {
         x =  x.innerText.toLowerCase()
         y =  y.innerText.toLowerCase()
        }
        if (dir == "asc") {
          if (x > y) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x < y) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  
  
      //ad
      var urlParams = new URLSearchParams(window.location.search);
      if(urlParams.get("showAd") === "true") {
         document.getElementById("flashSale").style.display = "block";
        document.getElementById("flashSale2").style.display = "block";
        document.getElementById("totalBalance").style.display = "none";
        document.getElementById("creditAvailable").style.display = "none";
      }
  