function BMI_calculator() {
 let weight= document.getElementById("weight").value;
 let age = document.getElementById("age").value;
 let height = document.getElementById("height").value;
let heightinmeter=height/100;
let bmi = weight/(heightinmeter*heightinmeter);
if (bmi < 18.5) {
   console.log("underweight");
}
else if (bmi < 25) {
    console.log("normal weight");
}
else if (bmi < 30) {
    console.log("overweight");
}
else {
   console.log("obesce");
}
    console.log(weight);
    console.log(height);

}
