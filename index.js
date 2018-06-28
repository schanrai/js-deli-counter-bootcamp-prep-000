var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var count=katzDeliLine.length;
  return (`Welcome, ${name}. You are number ${count} in line.`);
}


//takeANumber(katzDeliLine, "Ada");
//var katzDeliLane = [ 'Steven', 'Blake', 'Avi' ];

function nowServing(katzDeliline){
  
  if (katzDeliline.length > 0){
    var b = katzDeliline.shift();
    return `Currently serving ${b}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}