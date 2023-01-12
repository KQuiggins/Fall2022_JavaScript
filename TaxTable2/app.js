// Taxable income from      Up to but not including      Tax is
//        0 	            $27,050 	         15% of the income
//     $27,050 	            $65,550  /$4,057.50 + (27.5% of the amount over $27,050)
//     $65,550 	          $136,750 	/$14,654.00 + (30.5% of the amount over $65,550)
//    $136,750 	       $297,350    /$36,361.00 + (35.5% of the amount over $136,750)
//    $297,350 and up 	  	      / $93,374.00 + (39.1% of the amount over $297,350)

function getTax() {

    let total;
    let income = document.getElementById("income").value;
    console.log(income);

    if (income <= 27050) {
        total = income * 0.15;
      } else if (income <= 65550) {
        total = 4057.5 + (income - 27050) * 0.275;
      } else if (income <= 136750) {
        total = 14654 + (income - 65550) * 0.305;
      } else if (income <= 297350) {
        total = 36361 + (income - 136750) * 0.355;
      } else {
        total = 93374 + (income - 297350) * 0.391;
      }

    
    document.getElementById("tax-output").innerHTML = total;


}