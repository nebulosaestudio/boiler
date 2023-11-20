/*
una fuerza es una particula 
que afecta a todo lo que esta a su alrededor 
en un radio dependiendo de la magnitud 
*/
function Fuerza(posx, posy){

	// the position of the particle
	this.pos = new Vector2(posx,posy); 
	
	// the velocity 
	this.vel = new Vector2(0, 0); 
	
	this.force = new Vector2(10,0); 
	
	this.magnitud = -100;
	
	this.radius = 30; 

	this.drag = 0.4;
	

	this.fuerza_body = document.createElement("div");
	this.fuerza_body.setAttribute("id","f");
	this.fuerza_body.setAttribute("class","fuerza");




	this.update = function() {
	
		// simulate drag
		this.vel.multiplyEq(this.drag); 
		
		this.vel.plusEq(this.force); 
		
		// and the velocity to the position
		this.pos.plusEq(this.vel);
	 
		this.force.reset(0,0); 

		this.fuerza_body.style.left = this.pos.x+"px";
		this.fuerza_body.style.top  = this.pos.y+"px";
	};
	
	this.render = function(warp){
		// set the fill style to have the right alpha

		document.getElementById(warp).appendChild(this.fuerza_body);

		this.fuerza_body.style.left = this.pos.x+"px";
		this.fuerza_body.style.top  = this.pos.y+"px";
	
	};


}
