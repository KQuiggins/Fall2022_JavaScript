// Taxable income from      Up to but not including      Tax is
//        0 	            $27,050 	         15% of the income
//     $27,050 	            $65,550  /$4,057.50 + (27.5% of the amount over $27,050)
//     $65,550 	          $136,750 	/$14,654.00 + (30.5% of the amount over $65,550)
//    $136,750 	       $297,350    /$36,361.00 + (35.5% of the amount over $136,750)
//    $297,350 and up 	  	      / $93,374.00 + (39.1% of the amount over $297,350)

document.getElementById('btn').addEventListener('click', function(e) {
  e.preventDefault();
  var income;
  var total;
  income = document.taxForm.taxIncome.value;
  if ( income >= 0 && income < 27050) {
      total = income * 0.15;
  }
  else if ( income >= 27050 && income < 65550 ) {
      total = 4057.50 + (.275 * (income - 27050));
  }
  else if ( income >= 65550 && income < 136750 ) {
      total = 14654.00 + (.305 * (income - 65550));
  }
  else if ( income >= 136750 && income < 297350) {
      total = 36361.00 + (.355 * (income - 136750));
  }
  else {
      total = 9374.00 + (.391 * (income - 297350));
  }
  total = "$" + total.toFixed(2);
  document.taxForm.taxTotal.value = total;
  

});