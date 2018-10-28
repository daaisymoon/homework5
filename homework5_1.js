//first
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const rand = function(num) {
        return Math.floor(Math.random() * num) ;
    };
    const colorArray = ["indigo", "green", "tan", "maroon"];
    const createBoxes = function (count,canvasWidth,canvasHeight) {
        const arr = [];
        for (let i = 0; i < count; i = i + 1){
            const obj = {
                x:rand(canvasWidth - 50),
                y:rand(canvasHeight - 50),
                width:50,
                height:50,
                xDelta:1,
                yDelta:1,
                color:colorArray[rand(colorArray.length) - 1],
                draw: function () {
                    context.fillStyle = this.color;
                    context.fillRect(this.x, this.y, this.width, this.height);
                },
                update: function () {
                    this.x += this.xDelta;
                    this.y += this.yDelta;
                }
            };
            arr[i]= obj;
        }
        return arr;
    };

    let countObj = createBoxes(6,canvas.width,canvas.height);
    const draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < countObj.length; i = i + 1 ) {
            countObj[i].draw();

        }
    }
    const update = function () {
        for (let i=0; i < countObj.length; i = i + 1){
            countObj[i].update();
        }
    }
    const animate = function () {
        requestAnimationFrame(animate);

        draw();
        update();
    }
    animate();
	
