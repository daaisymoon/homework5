//second
const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const rand = function(num) {
        return Math.floor(Math.random() * num) ;
    };
    const colorArray = ["indigo", "pink","beige","blush","peach"];
    const createBoxes = function (count,canvasWidth,canvasHeight) {
        const array = [];

        for (let i = 0; i < count; i = i + 1){

            const myObj = {
                x:rand(canvasWidth - 60),
                y:rand(canvasHeight - 60),
                width:55,
                height:55,
                xDelta:6,
                yDelta:6,
                color:colorArray[rand(colorArray.length)-1],
                draw: function () {
                    context.fillStyle = this.color;
                    context.fillRect(this.x, this.y, this.width, this.height);
                },
                update: function () {
                    this.x += this.xDelta; 
                    this.y += this.yDelta;
                    if (this.x + this.width>= canvasWidth || this.x <=0){this.xDelta = -1*(this.xDelta)}
                    if (this.y <= 0 || this.y + this.height >= canvasHeight) {this.yDelta = -1*(this.yDelta)}
                }};
            array[i]= myObj;
        }
        return array;
    };
    let countObj = createBoxes(7,canvas.width,canvas.height);  
    const draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < countObj.length; i = i + 1 ) {
            countObj[i].draw();
        }
    }
    const update = function () {
        for (let i=0; i < countObj.length; i++){
            countObj[i].update();
        }
    }
    const animate = function () {
        requestAnimationFrame(animate);

        draw();
        update();
    }
    animate();