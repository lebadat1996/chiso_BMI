function CHISOBMI() {
    let height = parseInt(document.getElementById('Nhap height').value);
    let weight = parseInt(document.getElementById('Nhap weight').value);
    let bmi = weight/(height*2);
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0 && bmi >= 18.5)
        document.write("Normal");
    else if (bmi < 30.0 && bmi >= 25)
        document.write("Overweight");
    else if(bmi >= 30)
        document.write("Obese");
}