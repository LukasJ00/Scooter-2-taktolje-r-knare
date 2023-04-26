function calculateOil() {
    const oilPercentage = document.getElementById("procent").value;
    const litersOfGas = parseFloat(document.getElementById("liter").value);
    let oilNeeded = (litersOfGas * oilPercentage).toFixed(2);
    let unit = "liter";
    if (oilNeeded < 1) {
      oilNeeded*=10;
      unit = "deciliter";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Du behöver ${oilNeeded} ${unit} olja för ${litersOfGas} liter bensin.`;
  }

   