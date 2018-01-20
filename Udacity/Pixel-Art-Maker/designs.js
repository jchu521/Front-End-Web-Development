// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const gridHeight = document.getElementById('input_height')
const gridWidth = document.getElementById('input_width')
const table = document.getElementById('pixel_canvas')

document.getElementById('sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
})

const makeGrid = (e) => {

  if(checkGirdSize(gridHeight,gridWidth)){
    //alert('h: ' + gridHeight.value +',w: ' + gridWidth.value)
    for(let row=0; row < gridHeight.value; row++){
      const tableRow = table.insertRow(row);
      for(let col=0; col < gridWidth.value; col++){
        tableRow.insertCell(col);
      }
    }

    alert('h: ' + gridHeight.value +',w: ' + gridWidth.value)
  }else{
    alert("Height and Width must greater than 0")
  }

}

const checkGirdSize = (gridHeight, gridWidth) => {
  return (Number(gridWidth.value) > 0 && Number(gridWidth.value) > 0) ? true : false
}
