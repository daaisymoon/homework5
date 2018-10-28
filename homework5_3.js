const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const rand = function(num) {
            return Math.floor(Math.random() * num) ;
        }
        canvas.width = 1000;
        canvas.height = 700;

        const backGround = new Image();
        backGround.src = 'https://i.pinimg.com/originals/0b/b3/1e/0bb31eed0068f260aa069cad7a3c365a.jpg';

        const myHero = new Image();
        myHero.src = 'https://mbtskoudsalg.com/images/olaf-clipart-png-1.png?fbclid=IwAR1o6VrIwXq-dGTgaauv6mIMcOl5DLU2UE_ntGLN-8Do8_EBkgmkSBLLSP8';

        const cuteEvil = new Image();
        cuteEvil.src = 'https://cdn131.picsart.com/258749431019212.png?r1024x1024';
        const theVillains = function (count,canvasWidth,canvasHeight) {
            const arr = [];

            for (let i = 0; i < count; i++){

                const evilObj= {
                    width:60,
                    height:60,
                    x:rand(canvasWidth - 60),
                    y:rand(canvasHeight - 60),
                    xDelta:5,
                    yDelta:5,
                    image:cuteEvil,
                    
                    draw1: function () {
                        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
                       
                    },
                    update1: function () {
                        this.x += this.xDelta;
                        this.y += this.yDelta;
                        if (this.x + this.width>= canvasWidth || this.x <=0){this.xDelta = -1*(this.xDelta)}
                        if (this.y <= 0 || this.y + this.height >= canvasHeight) {this.yDelta = -1*(this.yDelta)}
                    }};
                arr[i]= evilObj;
            }
            return arr;
        };

        let countObj = theVillains(3,canvas.width,canvas.height);
        const draw1 = function () {
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(backGround,0,0,canvas.width,canvas.height);
            for (let i = 0; i < countObj.length; i++) {
              

                countObj[i].draw1();

            }
        }
        
        const checker = function () {
            for (let i = 0; i < countObj.length; i++ ) {
                if(countObj[i].x + countObj[i].width >= snowy.x && countObj[i].x <= snowy.x + snowy.width && countObj[i].y + countObj[i].height >= snowy.y && countObj[i].y <= snowy.y + snowy.height ){
                    alert("Game over !!!")
                }
            }
        }
        const update1 = function () {
            for (let i=0; i < countObj.length; i++){
                countObj[i].update1();
            }
        };
        const snowy = {
            x:0,
            y:588,
            width:115,
            height:115,
            xDelta:0,
            yDelta:0,
            image:myHero,
            draw: function () {
                ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
            },
            update: function () {
                this.x += this.xDelta;
                this.y += this.yDelta;
            },
        };

        const leftKey = 37;
        const upKey = 38;
        const rightKey = 39;
        const downKey = 40;
        document.addEventListener('keydown', function(event) {
            if(event.keyCode === rightKey) {
                snowy.xDelta = 4;
            } if (event.keyCode === leftKey) {
                snowy.xDelta = -4;
            };
        }, false);
        document.addEventListener('keydown', function(event) {
            if(event.keyCode === upKey) {
                snowy.yDelta = -4;
            } if (event.keyCode === downKey) {
                snowy.yDelta = 4;
            };
        }, false);
        document.addEventListener('keyup', function(event) {

            snowy.yDelta = 0;


        }, false);

        document.addEventListener('keyup', function(event) {

                snowy.xDelta = 0;


        }, false);

        const loop = function () {
          
            checker();
            
            draw1();
            update1();
            snowy.draw();
            snowy.update();
         
            requestAnimationFrame(loop);
        };
loop();