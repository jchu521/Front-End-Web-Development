// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const gridHeight = document.getElementById('input_height')
const gridWidth = document.getElementById('input_width')
const table = document.getElementById('pixel_canvas')
const colorPicker = document.getElementById('colorPicker')

document.getElementById('sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
})

const makeGrid = (e) => {
  // reset Table
  while(table.rows.length !== 0) {
    deleteTableRow();
  }
  //create table
  for(let row=0; row < gridHeight.value; row++){
    const tableRow = table.insertRow(row);
    for(let col=0; col < gridWidth.value; col++){
      const tableCol =tableRow.insertCell(col);
      tableCol.addEventListener('click', changeColColor);
    }
  }
}

//delete table
const deleteTableRow = () => {
  table.deleteRow(0);
}

//change color
const changeColColor = (e) => {
  e.target.style.backgroundColor = colorPicker.value;
}
