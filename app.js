function calculateBMI() {
    var inputheightfeet = document.getElementById("inputheightfeet").value;
    var inputheightinch = document.querySelector("#inputheightinch").value;
    // both method are true 

    var inputweight = document.querySelector("#inputweight").value;

    // inputheightfeet = parseInt();
    //Number(se bhi ker saktye hain) but humayen float mai chahiye abhi

    inputheightfeet = parseInt(inputheightfeet);
    inputheightinch = parseInt(inputheightinch);

    inputheightinch += inputheightfeet * 12;

    var heightInMeter = (inputheightinch * 2.54) / 100;  //1.52

    var heightInMeterSq = heightInMeter * heightInMeter;

    var bodyMassIndex = inputweight / heightInMeterSq;

    var idealWeight = 22 * heightInMeterSq;

    var suggestion = "You are";
    var weightToLose = (inputweight - idealWeight).toFixed(2);
    var weightToGain = (idealWeight - inputweight).toFixed(2);

    if (bodyMassIndex > 30) {
        suggestion += `Obese. You need to lose ${weightToLose}kg`;
    } else if (bodyMassIndex > 25) {
        suggestion += `Overweight. You need to lose ${weightToLose}kg`;
    }
    else if (bodyMassIndex > 18.5) {

        if (bodyMassIndex > 22) {
            suggestion += `Normal. but optionally you may lose ${weightToLose} indexes to become ideal fixed`;
        }else if(parseInt(bodyMassIndex === 22)){
            suggestion += `Perfectly Fit`;
        } else {
            suggestion += `Normal but optionally you may gain ${weightToGain}} indexes to become ideal fixed`;
        }
    }
    else {
        suggestion += `Underweight. You are supposed to gain ${weightToGain}kg indexes to become normal`;

    }

    console.log("index:", bodyMassIndex);
    console.log("title:", title);

    console.log("idealWeight: ", idealWeight)

    document.querySelector("#title").innerHTML = `Ideal Weight: ${(idealWeight).toFixed(2)}`;
    document.querySelector("#suggestion").innerHTML = suggestion;
}