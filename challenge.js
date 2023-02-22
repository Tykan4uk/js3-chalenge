const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const tempArray = [];

    array.forEach(element => {
      tempArray.push(element[i])
    })

    result.push(tempArray);
  }

  console.log(result)
}

rotateMatrix(arr1);
rotateMatrix(arr2);

function dragonCurve(number = 1) {
  let array = [1];

  for (let i = 1; i < number; i++) {
    const reverseNegativeArray = array.map(item => +!item).reverse()
    array = array.concat(1, reverseNegativeArray);
  }

  return array;
}

function driveLine(array) {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "black";
  context.lineWidth = 2.0;
  context.beginPath();
  context.moveTo(500, 500);
  context.lineTo(500, 495);

  let direction = 0;
  let coordX = 500;
  let coordY = 495;

  array.forEach(element => {
    direction = ((direction + (element ? 1 : -1) + 4) % 4);

    switch (direction) {
      case 0:
        coordY -= 5;
        break;
      case 1:
        coordX -= 5;
        break;
      case 2:
        coordY += 5;
        break;
      default:
        coordX += 5;
        break;
    }

    context.lineTo(coordX, coordY);
  });

  context.stroke();
}