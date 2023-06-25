export default {
    particleController() {

        const canvas = document.querySelector('#particles-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let particlesArray;

        //create particle
        class Particle {
            constructor(x, y, directionX, directionY, size, color){
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.count = 0;
            }
            //method to draw individul particles
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#E7FF64';
                ctx.shadowBlur = 10;
                ctx.shadowColor = "#FFCA64";
                ctx.fill();
            }
            // check particle position, move the particle, re-draw the particle
            update(){
                // check if particle is still within canvas
                if(this.x > canvas.width || this.x < 0){
                    this.x = (Math.random() * ((innerWidth - this.size * 2) - (this.size * 2)) + this.size);
                    this.y = innerHeight;
                }
                if(this.y < 0){
                    this.y = innerHeight;
                }
            
                // move particle
                if( this.count > 20) {
                    this.count = 0;
                    
                    if(Math.random() > .5) {
                        this.directionX = updateXDirection(this.directionX)
                    }
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.count++;
                this.draw();
            }
        }

        function updateXDirection(directionX){
            let newDirectionX = (Math.random() - .5);
            if(Math.abs(directionX) < .5)
            {
                directionX = directionX + Math.abs(newDirectionX)
            } else {
                directionX = directionX - Math.abs(newDirectionX)
            }
            return newDirectionX;
        }

        // create particle array
        function init() {
            particlesArray = [];

            let numberofParticles = (canvas.height * canvas.width) / 15000;

            numberofParticles = (numberofParticles < 25) ? 25 : numberofParticles;

            for (let i = 0; i < numberofParticles; i++){
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 5) - (size * 5)) + size * 5);
                let directionX = Math.random() - .5;
                let directionY = -Math.abs((Math.random() * 2) - 2.5);
                let color = '#E7FF64';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }
        
        function resetValues(){
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        // animation loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0,innerWidth,innerHeight);

            resetValues();

            for (let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
            }
        }
        
        init();
        animate();

    }

}