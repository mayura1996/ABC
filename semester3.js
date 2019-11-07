function sortTable3(n) { 
    var table3; 
    table3 = document.getElementById("table3"); 
    var rows3, i3, x3, y3, count3 = 0; 
    var switching3 = true; 

   
    var direction3 = "ascending"; 

    while (switching3) { 
        switching3 = false; 
        var rows3 = table3.rows; 

        for (i3 = 1; i3 < (rows3.length - 1); i3++) { 
            var Switch3 = false; 

        
            x3 = rows3[i3].getElementsByTagName("TD")[n]; 
            y3 = rows3[i3 + 1].getElementsByTagName("TD")[n]; 

            if (direction3 == "ascending") { 
           
   
                if (x3.innerHTML.toLowerCase() < y3.innerHTML.toLowerCase()) 
                    { 
  
                    Switch3 = true; 
                    break; 
                } 
            } else if (direction3 == "descending") { 
                 if (x3.innerHTML.toLowerCase() > y3.innerHTML.toLowerCase()) 
                    { 
           
                    Switch3 = true; 
                    break; 
                } 
            } 
        } 
        if (Switch3) {  
            rows3[i3].parentNode.insertBefore(rows3[i3 + 1], rows3[i3]); 
            switching3 = true; 

           
            count3++; 
        } else { 
         
            if (count3 == 0 && direction3 == "ascending") { 
                direction3 = "descending"; 
                switching3 = true; 
            } 
        } 
    } 
} 