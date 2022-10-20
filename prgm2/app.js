window.onload = function() {
    var items = [   		
        {item: 'boogie board', cost: 15.99, quantity: 3},   		
        {item: 'shark-tooth necklace', cost: 10.99, quantity: 1},   		
        {item: 'inflatable alligator', cost: 12.99, quantity: 2},   		
        {item: 'flip flops', cost: 16.99, quantity: 1},   		
        {item: 'beach towel', cost: 10.99, quantity: 2},    		
        {item: 'goggles', cost: 8.99, quantity: 2}   	
     ];


     document.getElementById('showData').onclick = function(){
        var tbl = document.createElement('table')
        tbl.setAttribute('class', 'table');
        var row = tbl.insertRow(-1)
        row.insertCell().innerHTML = "Item"
        row.insertCell().innerHTML = "Cost"
        row.insertCell().innerHTML = "Quantity"
        row.insertCell().innerHTML = "Subtotal"

        for(i=0; i < items.length; i++){
            total = (items[i].cost * items[i].quantity).toFixed(2);
            row = tbl.insertRow(-1)
            row.insertCell().innerHTML = items[i].item;
            row.insertCell().innerHTML = items[i].cost;
            row.insertCell().innerHTML = items[i].quantity;
            row.insertCell().innerHTML = total;
        }

        var display = document.getElementById('tableData');
        display.appendChild(tbl);
     };


}