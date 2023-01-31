let x = 0;
let y = 0;
let spacing 
let off = 0;
let amp
let cut
let speed
let startFrame = 0
function setup() {
  createCanvas(1000,1000);
  background(0);
  stroke(255);
  ampSlider = createSlider(0,0.01,0.005,0.00001);
  cutSlider = createSlider(1,3,2,0.00001);
  speedSlider =createSlider(0.001,1,0.05,0.00001)
  spaceSlider =createSlider(5,40,20,1) 
}

function draw() {
  
spacing =spaceSlider.value()
for (var x = 0; x < width; x+=spacing) {
  for (var y = 0; y < height; y+=spacing){
    var c = floor(noise(ampSlider.value() * x, ampSlider.value() * y,off)*cutSlider.value());
    var thres = map(c,0,1,0,255)
    if(thres){
      fill(0);
      noStroke();
      rect(x, y, x+spacing, y+spacing);
      stroke(255);
      line(x,y,x+spacing,y+spacing);
    }else{
      fill(0);
      noStroke();
      rect(x, y+spacing, x+spacing, y);
      stroke(255);
      line(x,y+spacing,x+spacing,y)
    }
   }
 }
off += speedSlider.value()
}
