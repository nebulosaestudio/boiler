function Particula(posx, posy, id){

	this._id = id;

	//handler
	this.over = false;
	this.growing = false;
	// the position of the particle
	this.pos = new Vector2(posx, posy); 
	
	//inipos if trail
	this.pos0 = new Vector2(posx, posy);
	this.trail = true;
	
	// the velocity
	this.vel = new Vector2(0,0); 
	this.acc = new Vector2(0,0);	
	this.fri = new Vector2(0,0);

	this.force = new Vector2(0,0); 
	
	// multiply the velocity by this every frame to create
	// drag. A number between 0 and 1, closer to one is 
	// more slippery, closer to 0 is more sticky. values
	// below 0.6 are pretty much stuck :) 
	this.drag = 0.996; 
	//es mas costoso pero funciona mejor applyFri
	this.c = 0.06;
		
	this.radio = 10; 
	this.radio0 = 10;	
	this.mass   = 2;
	this.den = 0.996;
	//constructor
	this.warp='';

	this.part_body = document.createElement("div");
	this.part_body.setAttribute("id","p"+this._id);
	this.part_body.setAttribute("class","particula");


	this.ctx = null;


	growRatio = function()
	{
		this.radio *= 1.2;
	}

	this.decrease = function(){
		//console.log(this.radio);
		this.radio *= 0.996;
		
		//e.target.setAttribute("style","width:"+this.radio+"px;height:"+this.radio+"px");
		this.part_body.setAttribute("style","width:"+this.radio+"px;height:"+this.radio+"px");

	}
	this.grow = function(){
		//console.log(this.radio);
		this.radio *= 1.06;
		//if ps		
		ps.comparaParticula(this._id);
		//this.pos.y -= (this.radio/2);
		//this.pos.x -= (this.radio/2);
		//e.target.setAttribute("style","width:"+this.radio+"px;height:"+this.radio+"px");
		this.part_body.setAttribute("style","width:"+this.radio+"px;height:"+this.radio+"px");
	}
/*
	this.apllyForces = function(){

		// simulate drag
		this.vel.multiplyEq(this.drag); 
		this.vel.plusEq(this.force); 
		
		// and the velocity to the position
		this.pos.plusEq(this.vel);
		this.force.reset(0,0); 
	}
*/
	this.applyFri = function(){
		this.fri = this.vel.clone();
		this.fri.multiplyEq(-1);
		this.fri.normalise();
		this.fri.multiplyEq(this.c);
		this.vel.add(this.fri);	
	}

	this.applyForce = function(f){
		this.force = f.divideNew(this.mass);
		//f.divideEq(this.mass);
		this.acc.add(this.force);
		//this.acc.multiplyEq(0);
		this.force.reset(0,0); 
	}

	this.update = function() {
	

		//this.mass = this.radio*this.den;
		//beahavior
		if (this.over) { if (this.radio < 100) {  this.grow(); }
		} else {  if (this.radio > 10) { this.decrease() } } 

		//this.acc= this.acc.multiplyNew(this.drag);
		//console.log(this.acc.x);
		// direct drag : this.vel = this.vel.add(this.acc.multiplyEq(this.drag));
		this.vel.add(this.acc);
		//this.vel.multiplyEq(this.drag);
		//this.acc.multiplyEq(0.9);
		this.pos.add(this.vel);
		//this.vel = this.vel.multiplyEq(0.99);
		this.applyFri();
		
		this.acc.reset(0,0);
		//bounds 
		// si colisiona se invierte el vector posicion.
		if (this.pos.x < 0  || this.pos.x > SCREEN_WIDTH) { this.vel.reversex(); }// this.part_body.style.display="none";}
		if (this.pos.y < 0  || this.pos.y > SCREEN_HEIGHT) { this.vel.reversey(); }// this.part_body.style.display="none"; }
		//console.log("part:"+this._id+" x> "+ this.pos.x +" y>" +this.pos.y );

		//this.part_body.setAttribute("style","top:"+this.pos.y+"px;left:"+this.pos.x+"px");	
		this.part_body.style.left = Math.floor(this.pos.x)+"px";
		this.part_body.style.top  = Math.floor(this.pos.y)+"px";
		if (this.trail) {this.renderTrail(); } 
			
	
		if (this.vel.magnitude() < 0.2) { this.vel.reset(0,0); }
	};
	

	this.renderTrail = function()
	{
			
			var p0x = this.pos0.x;
			var p0y = this.pos0.y;
			//var canvas = document.getElementById("c"+this._id);
			//var ctx = document.getElementById("c"+this._id).getContext('2d');
			if ( id == 1 ) { //console.log(this.ctx);
			 }
			this.ctx = document.getElementById("canvas").getContext('2d');
			//console.log(this.ctx);	
			//ctx ctx = this.canvas.getContext('2d');
 		     // var ctx = document.getElementById('c'+this.id).getContext('2d');
			this.ctx.fillStyle = 'rgba(255,255,255,1)';
  			this.ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  		

		     	this.ctx.beginPath();
			//ctx.moveTo(0,0)
			//ctx.lineTo(100,100);
		     	this.ctx.moveTo(p0x,p0y);
			// this.ctx.lineTo(this.pos.x,this.pos.y);
			var cx = this.pos0.x + ( (this.pos.x - this.pos0.x) / 3);
			var cy = this.pos0.y + ( (this.pos.y - this.pos0.y) / 6);
			//this.pos0.x = this.pos.x;
			//this.pos0.y = this.pos.y;
		      this.ctx.quadraticCurveTo( cx  , cy  , this.pos.x, this.pos.y);
		 	//this.ctx.quadraticCurveTo( cx  , cy  , p0x, p0y);
		      //ctx.lineTo(this.pos.x,this.pos.y);
     		      this.ctx.lineWidth = 2;	
			this.ctx.closePath();
		      this.ctx.stroke();
			this.ctx.fill();

			//this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			
	}


	this.render = function(warp){
		this.warp = warp;
		document.getElementById(warp).appendChild(this.part_body);
		this.part_body.addEventListener("mouseover",function(e){handleOver(e);}, false); 
		this.part_body.addEventListener("mouseout", function(e){handleOut(e);}, false); 
		//this.part_body.onmouseover = this.grow;

		if (this.trail) 
			{ 
			//document.getElementById(warp).appendChild(this.canvas);
			//this.ctx = this.canvas.getContext('2d');
			//this.canvas.style.left = this.pos.x+"px";
			//this.canvas.style.top  = this.pos.y+"px";

			}


	};


}


