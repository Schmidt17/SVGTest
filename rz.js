// some parameters
var xOffset = -50; // where we start drawing
var yOffset = -50;
var nRows = 15;
var nCols = 15;
var margin = 1; // between the hexagons, in x and y direction

// the SVG 'canvas'
var r = new Rune({
  container: "body",
  width: 1300,
  height: 650,
  debug: false,
  frameRate: 24
});

// define two offset grids on top of each other to make the hexagonal lattice

// first one
var grid = r.grid({
  x: 0 + xOffset,
  y: 0 + yOffset,
  moduleWidth: 81,  // width ..
  moduleHeight: 65,  // .. and height of a grid cell
  gutterWidth: 49 + margin, // the horizontal spacing between the grid cells
  gutterHeight: margin,  // vertical spacing
  columns: nCols,
  rows: nRows
});

// second one with offset
var grid2 = r.grid({
  x: 65 + xOffset,
  y: 32 + yOffset,
  moduleWidth: 81,
  moduleHeight: 65,
  gutterWidth: 49 + margin,  // the horizontal spacing between the grid cells
  gutterHeight: margin,   // vertical spacing
  columns: nCols,
  rows: nRows
});

var nodes = [];  // array for all the DOM elements, for fast and easy manipulation later
var counter = 0;  // counter for the number of hexgons, also used for their IDs

for (let row=0;  row<grid.state.rows; row++) { // loop over rows
  for (let col=0; col<grid.state.columns; col++) { // loop over columns
    // Manually define the svg path (couldn't find a elegant way to import yet)
    var p = r.node('path',  {id: 'logo' + counter, fill: 'black', d: 'M 34.50,40.00\
           C 36.25,37.30 38.67,34.43 37.97,31.00\
             37.97,31.00 25.31,10.00 25.31,10.00\
             24.15,8.00 21.53,3.87 23.08,1.60\
             25.67,-2.21 30.33,1.68 32.03,4.11\
             34.94,8.29 47.11,27.13 48.08,31.00\
             48.97,34.57 46.81,37.12 45.06,40.00\
             41.65,45.61 37.68,51.01 35.00,57.00\
             41.18,56.68 43.04,51.80 46.14,47.00\
             47.77,44.49 54.64,34.82 54.71,32.58\
             54.78,29.94 50.99,25.24 49.52,23.00\
             45.73,17.27 38.69,6.50 38.00,0.00\
             40.36,0.01 43.56,-0.19 45.67,0.93\
             48.06,2.22 49.03,4.84 50.37,7.04\
             50.37,7.04 59.15,21.00 59.15,21.00\
             60.94,24.12 64.82,29.50 64.48,33.00\
             64.19,35.93 61.45,39.48 59.91,42.00\
             59.91,42.00 49.73,58.00 49.73,58.00\
             48.27,60.04 46.11,63.41 43.79,64.40\
             41.60,65.34 30.09,65.03 27.00,65.00\
             16.91,64.87 15.89,61.14 11.15,53.00\
             8.21,47.95 -0.66,36.43 0.32,31.00\
             0.94,27.56 6.23,20.26 8.31,17.00\
             10.08,14.21 13.04,7.63 16.81,7.61\
             19.33,7.59 21.06,11.16 22.20,13.00\
             24.99,17.51 33.26,28.99 32.25,34.00\
             30.42,43.11 20.38,46.45 24.00,57.00\
             24.00,57.00 34.50,40.00 34.50,40.00 Z\
           M 69.79,13.00\
           C 72.28,16.86 80.09,27.98 80.48,32.00\
             80.81,35.48 76.95,40.92 75.14,44.00\
             73.31,47.11 63.75,62.67 61.53,64.02\
             59.43,65.29 55.46,65.00 53.00,65.00\
             53.85,57.46 60.52,49.29 64.74,43.00\
             66.56,40.29 69.81,36.37 69.70,33.00\
             69.60,29.99 66.23,25.63 64.61,23.00\
             60.72,16.67 54.33,7.10 53.00,0.00\
             63.61,0.03 61.67,0.39 69.79,13.00 Z\
           M 17.00,43.00\
           C 24.74,32.05 24.46,32.20 17.00,21.00\
             8.95,27.44 6.46,37.43 17.00,43.00 Z'
           });
   grid.add(p, col+1, row+1); // add it in the desired grid cell. Counting starts at 1 ... 
   r.draw(); // actually create the element in the DOM
   nodes.push(document.getElementById('logo' + counter)); // keep a reference to the DOM node for later
   counter++;
  }
}

// one more time for the second grid ... we need new 'node' objects, they are not standard ...
for (let row=0;  row<grid.state.rows; row++) { // loop over rows
  for (let col=0; col<grid.state.columns; col++) { // loop over columns
    var p = r.node('path',  {id: 'logo' + counter, fill: 'black', d: 'M 34.50,40.00\
           C 36.25,37.30 38.67,34.43 37.97,31.00\
             37.97,31.00 25.31,10.00 25.31,10.00\
             24.15,8.00 21.53,3.87 23.08,1.60\
             25.67,-2.21 30.33,1.68 32.03,4.11\
             34.94,8.29 47.11,27.13 48.08,31.00\
             48.97,34.57 46.81,37.12 45.06,40.00\
             41.65,45.61 37.68,51.01 35.00,57.00\
             41.18,56.68 43.04,51.80 46.14,47.00\
             47.77,44.49 54.64,34.82 54.71,32.58\
             54.78,29.94 50.99,25.24 49.52,23.00\
             45.73,17.27 38.69,6.50 38.00,0.00\
             40.36,0.01 43.56,-0.19 45.67,0.93\
             48.06,2.22 49.03,4.84 50.37,7.04\
             50.37,7.04 59.15,21.00 59.15,21.00\
             60.94,24.12 64.82,29.50 64.48,33.00\
             64.19,35.93 61.45,39.48 59.91,42.00\
             59.91,42.00 49.73,58.00 49.73,58.00\
             48.27,60.04 46.11,63.41 43.79,64.40\
             41.60,65.34 30.09,65.03 27.00,65.00\
             16.91,64.87 15.89,61.14 11.15,53.00\
             8.21,47.95 -0.66,36.43 0.32,31.00\
             0.94,27.56 6.23,20.26 8.31,17.00\
             10.08,14.21 13.04,7.63 16.81,7.61\
             19.33,7.59 21.06,11.16 22.20,13.00\
             24.99,17.51 33.26,28.99 32.25,34.00\
             30.42,43.11 20.38,46.45 24.00,57.00\
             24.00,57.00 34.50,40.00 34.50,40.00 Z\
           M 69.79,13.00\
           C 72.28,16.86 80.09,27.98 80.48,32.00\
             80.81,35.48 76.95,40.92 75.14,44.00\
             73.31,47.11 63.75,62.67 61.53,64.02\
             59.43,65.29 55.46,65.00 53.00,65.00\
             53.85,57.46 60.52,49.29 64.74,43.00\
             66.56,40.29 69.81,36.37 69.70,33.00\
             69.60,29.99 66.23,25.63 64.61,23.00\
             60.72,16.67 54.33,7.10 53.00,0.00\
             63.61,0.03 61.67,0.39 69.79,13.00 Z\
           M 17.00,43.00\
           C 24.74,32.05 24.46,32.20 17.00,21.00\
             8.95,27.44 6.46,37.43 17.00,43.00 Z'
           });
   grid2.add(p, col+1, row+1); // add it in the desired grid cell of grid2. Counting starts at 1 ... 
   r.draw(); // actually create the element in the DOM
   nodes.push(document.getElementById('logo' + counter)); // keep a reference to the DOM node for later
   counter++;
  }
}

// this gets called on every frame
r.on('update', function() {
  // pick a random hexagon
  let idx = Math.floor(Math.random() * nodes.length);
  let elt = nodes[idx];
  // pick a random color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  elt.setAttribute('fill', 'rgb(' + r + ', ' + g + ', ' + b + ')');
});

// start the draw loop, frame rate set when defining r (above)
r.play();