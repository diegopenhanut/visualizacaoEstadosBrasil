      google.setOnLoadCallback(drawRegionsMap);

            function drawRegionsMap() {

		            var data = google.visualization.arrayToDataTable([
					              ['State', 'Popularity'],
						                ['Minas Gerais', 200],
								          ['Ceara', 100],
									            ['Sao Paulo', 400],
										              ['Rio de Janeiro', 500],
											                ['Para', 600],
													          ['Rio Grande do Norte', 700]
														          ]);

			            var options = {          
					              region: 'BR', // Brazil
						                colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
								          resolution: 'provinces',
									            backgroundColor: '#81d4fa',
										              datalessRegionColor: '#f8bbd0'
												              };

				            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

					            chart.draw(data, options);
						          }
