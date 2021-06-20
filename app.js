alert("welcome to jordan")

var customerAge = prompt("Please enter your age");
customerAge = parseInt(customerAge)


while (customerAge < 18) {
  alert("your age under 18 please enter yourage again")
  customerAge = prompt("Please enter your age");
  customerAge = parseInt(customerAge)
}

var numofvisits = 2;
numofvisits = prompt("Please number of visits to Jordan");
numofvisits = parseInt(customerAge)

var i;
for (i = 0; i <numofvisits ; i++) {document.write("<img src='jordan5.jpg' >")}



function visits() {
  var visits = prompt( "how many times did visit Joradn?")
  return parseInt(visits)

}

function rating(){
  varstarsNum= prompt("how many starts do you rate our website?")
  return parseInt(starsNum);
  

  }
var rate= rating()
for(var i=0;i<rate;i++){
    document.write("<img) src= 'star.jpg' >")}





  










