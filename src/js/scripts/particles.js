export default {

    particleController() {

        const canvas = document.querySelector('#particles-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let particlesArray;

        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height/130) * (canvas.width/130)
        }

        window.addEventListener('mousemove',
            function(e) {
                mouse.x = e.x;
                mouse.y = e.y;
            }
        )

        //create particle
        class Particle {
            constructor(x, y, directionX, directionY, size, color){
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            //method to draw individul particles
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#8C55n23';
                ctx.fill();
            }
            // check particle position, check mouse position, move the particle, re-draw the particle
            update(){
                // check if particle is still within canvas
                if(this.x > canvas.width || this.x < 0){
                    this.directionX = -this.directionX;
                }
                if(this.y > canvas.height || this.y < 0){
                    this.directionY = -this.directionY;
                }
            
                // check collision detection - mouse position / particle position - not on mobile
                if(window.innerWidth > 768) {
                    
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    if (distance < mouse.radius + this.size){
                        if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                            this.x += 10;
                        }
                        if (mouse.x > this.x && this.x > this.size * 10){
                            this.x -= 10;
                        }
                        if (mouse.y < this.y && this.y < canvas.height - this.size * 10){
                            this.y += 10;
                        }
                        if (mouse.y > this.y && this.y > this.size * 10){
                            this.y -= 10;
                        }
                    }
                }
                // move particle
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        // create particle array
        function init() {
            particlesArray = [];

            let numberofParticles = (canvas.height * canvas.width) / 9000;

            numberofParticles = (numberofParticles < 50) ? 50 : numberofParticles;

            for (let i = 0; i < numberofParticles; i++){
                let size = (Math.random() * 5) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 5) - 2.5;
                let directionY = (Math.random() * 5) - 2.5;
                let color = '#5A5C5B';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));

            }
        }

        // check if particles are close enough to draw line between them
        function connect(){
            let opacityValue = 1;
            for(let a = 0; a < particlesArray.length; a++){
                for(let b = a; b < particlesArray.length; b++){
                    let distance = ( ( particlesArray[a].x - particlesArray[b]. x) * ( particlesArray[a].x - particlesArray[b].x) )
                    + ( ( particlesArray[a].y - particlesArray[b].y ) * ( particlesArray[a].y - particlesArray[b].y ) );

                    if (distance < (canvas.width/7) * (canvas.height/7)){
                        opacityValue = 1 - (distance/20000);
                        ctx.strokeStyle = 'rgba(193,214,198,' + opacityValue + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function resetValues(){
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            mouse.radius = ((canvas.height/130) * (canvas.width/130));
        }

        // animation loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0,innerWidth,innerHeight);

            resetValues();

            for (let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
            }

            connect();
        }

        // resize event
        window.addEventListener('resize',
            function(){
                /*canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                mouse.radius = ((canvas.height/130) * (canvas.width/130));*/
                init();
            }
        );

        window.addEventListener('mouseout',
            function(){
                mouse.x = undefined;
                mouse.y = undefined;
            }
        );

        init();
        animate();
    }
}