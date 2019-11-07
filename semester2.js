
			function sortTable2(n) { 
				var table2; 
				table2 = document.getElementById("table2"); 
				var rows2, i2, x2, y2, count2 = 0; 
				var switching2 = true; 

				
				var direction2 = "ascending"; 

				while (switching2) { 
					switching2 = false; 
					var rows2 = table2.rows; 

		
					for (i2 = 1; i2 < (rows2.length - 1); i2++) { 
						var Switch2 = false; 

					
						x2 = rows2[i2].getElementsByTagName("TD")[n]; 
						y2 = rows2[i2 + 1].getElementsByTagName("TD")[n]; 

		
						if (direction2 == "ascending") { 

				
							if (x2.innerHTML.toLowerCase() > y2.innerHTML.toLowerCase()) 
								{ 
						
								Switch2 = true; 
								break; 
							} 
						} else if (direction2 == "descending") { 

						
							if (x2.innerHTML.toLowerCase() < y2.innerHTML.toLowerCase()) 
								{ 
							
								Switch2 = true; 
								break; 
							} 
						} 
					} 
					if (Switch2) { 
		
						rows2[i2].parentNode.insertBefore(rows2[i2 + 1], rows2[i2]); 
						switching2 = true; 

				
						count2++; 
					} else { 
				
						if (count2 == 0 && direction2 == "ascending") { 
							direction2 = "descending"; 
							switching2 = true; 
						} 
					} 
				} 
			} 