
function makeTable(array) {
    var table = document.createElement('table');

    //Table Header
    var head = document.createElement('tr');
    var head_cell1 = document.createElement('th');
    head_cell1.textContent = "Item";

    head.appendChild(head_cell1);
    var head_cell2 = document.createElement('th');
    head_cell2.textContent = "Price";
    head.appendChild(head_cell2);
    table.appendChild(head);

    //Table Content
    var totalAmount = 0;
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        var item= array[i];
				totalAmount = totalAmount + item[1];
				for (var j = 0; j < item.length; j++) {
            var cell = document.createElement('td');
            cell.textContent = item[j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    //Table Total rawS
    var total = document.createElement('tr');
    var total_cell1 = document.createElement('td');
    total_cell1.textContent = "Total";
    total.appendChild(total_cell1);
    var total_cell2 = document.createElement('td');
    total_cell2.textContent = totalAmount;
    total.appendChild(total_cell2);
    table.appendChild(total);

    //Add table to html div
	if (document.getElementById("cart").childNodes.length > 0){
		document.getElementById("cart").replaceChild(table, document.getElementById("cart").childNodes[0]);
	} else {
		document.getElementById("cart").appendChild(table);
	}
}
var cart = Array();
function addToCart(){

	if (document.getElementById("item").value
  		&& document.getElementById("price").value) {
      cart.push([document.getElementById("item").value,
				parseInt(document.getElementById("price").value)])
      }
      makeTable(cart);
}
