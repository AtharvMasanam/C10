var marks
var weight = [58,49,79,67,54];

function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background(51);

}

function average(){
  var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
  var avg = sum/weight.length;
  console.log(avg);
}