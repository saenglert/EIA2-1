var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let crc3;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        crc2 = canvas.getContext("2d");
        createBackground();
        createTrees();
        drawChild1();
        drawChild2();
        createFlakes();
    }
    function createBackground() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 730);
        crc2.lineTo(360, 730);
        crc2.lineTo(360, 400);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#2ECCFA";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.lineTo(0, 0);
        crc2.lineTo(360, 0);
        crc2.lineTo(360, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#FFFF00";
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.beginPath;
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.beginPath;
        crc2.moveTo(70, 250);
        crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        crc2.bezierCurveTo(320, 350, 320, 320, 290, 300);
        crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function createFlakes() {
        for (let i = 0; i < 150; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFlake(x, y);
        }
    }
    function createTrees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath;
            crc2.moveTo(0, 650);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            if (crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    /**  function drawClouds() {
          crc2.fillStyle = "white";
          crc2.strokeStyle = "black";
          crc2.lineWidth = 1;
          crc2.beginPath
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
          crc2.stroke();
          crc2.fill();
          
              crc2.beginPath
        crc2.moveTo(70, 250);
        crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        crc2.bezierCurveTo(320, 350,320, 320, 290, 300);
        crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
        crc2.closePath();
          crc2.stroke();
          crc2.fill();
      }**/
    function drawTree(_x, _y) {
        crc2.lineWidth = 1;
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y);
        crc2.lineTo(_x - 10, _y + 40);
        crc2.lineTo(_x + 10, _y + 40);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x - 22.5, _y);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 22.5, _y);
        crc2.fill();
        crc2.stroke();
    }
    /** function drawSun() {
    
         crc2.fillStyle = "#FFFF00"
         crc2.beginPath();
         crc2.arc(250, 75, 50, 0, 2 * Math.PI);
         crc2.stroke();
         crc2.fill()
     }**/
    function drawLine() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 730);
        crc2.lineTo(360, 730);
        crc2.lineTo(360, 400);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSky() {
        crc2.fillStyle = "#2ECCFA";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.lineTo(0, 0);
        crc2.lineTo(360, 0);
        crc2.lineTo(360, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFlake(_x, _y) {
        crc2.strokeStyle = "#FFFFFF";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(_x, _y - 3);
        crc2.lineTo(_x, _y + 3);
        crc2.closePath();
        crc2.moveTo(_x + 3, _y);
        crc2.lineTo(_x - 3, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function drawChild2() {
        for (let i = 0; i < 2; i++) {
            let x = 85;
            let y = 50;
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((i * x + 200), (i * y + 500), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.moveTo(i * x + 202, i * y + 500);
            crc2.lineTo(i * x + 202, i * y + 530);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 202, i * y + 515);
            crc2.lineTo(i * x + 190, i * y + 505);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 202, i * y + 530);
            crc2.lineTo(i * x + 185, i * y + 536);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(i * x + 202, i * y + 530);
            crc2.lineTo(i * x + 185, i * y + 540);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 185, i * y + 540);
            crc2.lineTo(i * x + 195, i * y + 545);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 195, i * y + 545);
            crc2.lineTo(i * x + 210, i * y + 540);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 210, i * y + 540);
            crc2.lineTo(i * x + 202, i * y + 530);
            crc2.closePath();
            crc2.stroke();
        }
    }
    function drawChild1() {
        for (let i = 0; i < 2; i++) {
            let x = 80;
            let y = 60;
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((i * x + 200), (i * y + 600), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 600);
            crc2.lineTo(i * x + 200, i * y + 635);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 615);
            crc2.lineTo(i * x + 210, i * y + 610);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 615);
            crc2.lineTo(i * x + 190, i * y + 630);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 635);
            crc2.lineTo(i * x + 210, i * y + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 635);
            crc2.lineTo(i * x + 190, i * y + 642);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "red";
            crc2.beginPath();
            crc2.moveTo(i * x + 190, i * y + 630);
            ;
            crc2.lineTo(i * x + 180, i * y + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(i * x + 180, i * y + 640);
            ;
            crc2.lineTo(i * x + 180, i * y + 650);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 180, i * y + 650);
            ;
            crc2.lineTo(i * x + 160, i * y + 650);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 160, i * y + 650);
            crc2.lineTo(i * x + 160, i * y + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 160, i * y + 640);
            crc2.lineTo(i * x + 175, i * y + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 163, i * y + 640);
            crc2.lineTo(i * x + 163, i * y + 650);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 170, i * y + 640);
            crc2.lineTo(i * x + 170, i * y + 650);
            crc2.closePath();
            crc2.stroke();
            continue;
        }
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map