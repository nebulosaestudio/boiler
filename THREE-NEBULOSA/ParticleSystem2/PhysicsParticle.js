function PhysicsParticle(posx, posy){

	this.t = '';
	this.count = 0;
	this.MAX_PARTICLES = 250;
	this.s = this.MAX_PARTICLES ;
	this.particles = [];
	
	this.eforce = 20;
	this.edrag = 0.99;
	
	//no particles array: forces,attractors,repellers
	this.pool = [];
	// the position of the particle
	this.pos = new Vector2( posx, posy ); 
	
	this.canvas = document.createElement("canvas");
	this.canvas.setAttribute("id","canvas");
	this.canvas.setAttribute("class","canvas");
	this.canvas.setAttribute('width',window.innerWidth+'px');
	this.canvas.setAttribute('height',window.innerHeight+'px');
	document.getElementById("warp").appendChild(this.canvas);
	
	this.addParticle = function(fini) {

		var particle = new Particula( this.pos.x , this.pos.y , this.s );
		//particle.applyForce(fini);
		particle.render("warp");
		particles.push(particle);	

	}
	
	this.addForce = function(f) {

		this.pool.push(f);
	}
	
	this.emit = function(id)
	{
			//this.eforce *= this.edrag;
			var fini = new Vector2(4, 0 );
			fini.rotate(Math.random()*250);
			
			var particle = new Particula( this.pos.x , this.pos.y , id);
			particle.applyForce(fini);
			//particle.c = 0.02 ;	
			//particle.mass = 2; 	 
			//particle.radio = 10;	
			//particle.acc = fini;
			particle.render("warp");
			this.particles.push(particle);
	}

	this.populate = function()
	{
		if ( this.count < this.MAX_PARTICLES )
		{	
		this.emit(this.count);
		this.count++;	
	 		this.t = setTimeout(function(){ps.populate();},20);							
		}else{
			clearTimeout(this.t);
		}
	}

	this.applyForce = function(f) {
		//!
		
		for ( var i = 0 ; i < this.particles.length ; i++ )
		{
			this.particles[i].applyForce(f);
		}
	} 	
	
	this.appPoolForces = function(p) {
		
		for ( var i = 0 ; i < this.pool.length ; i++ )
		{
			p.applyForce(this.pool[i].force);
		}
	}

	this.compararParticulas = function(){



		for ( var i = 0 ; i < this.particles.length ; i++)
		{
			var p1 = this.particles[i];

			//if ( i >= this.particles.length-1 ) continue;

			for ( var j = 0 ; j < this.particles.length ; j++ )
			{
				if ( j != i ){ 
				var p2 = this.particles[j];
				
				//FORCE
				//fuerza21 = - poolG * ((p1.mass * p2.mass ) /  var R21=vp2-p1 =  p1.pos - p2.pos ) * var E12=uvp1->p2 = unitario( inverso ( vp

				var dir1 = p2.pos.minusNew(p1.pos);
				var dir2 = p1.pos.minusNew(p2.pos);
								

				var d = dir1.magnitude();
			

				dir1.normalise();
				dir2.normalise();
				

				d = constrain(d,2,50);
				//d2 = constrain(d2,2,50);
				//dir2 = dir.inverse();		

				var fz1 = -0.1 * p2.mass * p1.mass /  (d*d) ;
				var fz2 = -0.1 * p1.mass * p2.mass / ( d*d );

				dir1.multiplyEq(fz1);
				dir2.multiplyEq(fz2);	

				p1.applyForce(dir1);
				p2.applyForce(dir2);				
				/*
				var r21 = p2.pos.minusNew(p1.pos);
				var e12 = p1.pos.minusNew(p2.pos);

				var dis = r21.magnitude();
				var dis_sq = Math.sqrt(dis);

				var eu = e12.magnitude();

				var force = new Vector2(0,0);
				force = r21.normalise().clone();
				//force = force.multiplyEq( ( p1.mass * p2.mass  * eu )  / dis_sq );
				//force = e12.multiplyEq(2);
				//force = force.divideEq(dis*dis);
				//force =  ( e12.normalise().multiplyEq(p1.mass * p2.mass). / r21.dot(r21);
 				//console.log("F:"+force.x+":"+force.y);
				//p1.applyForce(force.multiplyEq(dis));
				
				p2.applyForce(force.divideEq(dis).reverse());
				*/
				}
			}

		}

	}
	
	this.comparaParticula = function(id){


			console.log("compareParticula;");
			var p1 = this.particles[id];

			//if ( i >= this.particles.length-1 ) continue;

			for ( var j = 0 ; j < this.particles.length ; j++ )
			{
				if ( j != id ){ 
				var p2 = this.particles[j];
				
				//FORCE
				//fuerza21 = - poolG * ((p1.mass * p2.mass ) /  var R21=vp2-p1 =  p1.pos - p2.pos ) * var E12=uvp1->p2 = unitario( inverso ( vp

				var dir1 = p2.pos.minusNew(p1.pos);
				var dir2 = p1.pos.minusNew(p2.pos);
								

				var d = dir1.magnitude();
			

				dir1.normalise();
				dir2.normalise();
				

				d = constrain(d,2,50);
				
				var fz1 = -0.1 * p2.mass * p1.mass /  (d*d) ;
				var fz2 = -0.1 * p1.mass * p2.mass /  (d*d);

				dir1.multiplyEq(fz1);
				dir2.multiplyEq(fz2);	
			
				p1.applyForce(dir1);
				p2.applyForce(dir2);				
		
				console.log(dir1 + "v:" + p1 );
				}
			}
		}
	

	this.update = function() {
	
		//this.s--;
		this.compararParticulas();
		//this.comparaParticula(this.s);
		//clear canvas
		this.canvas.width = this.canvas.width;
		for ( var i = 0 ; i < this.particles.length ; i++)
		{
			for ( var j=0; j<this.pool.length ; j++)
			{
				
				var f = this.pool[j];
				this.particles[i].applyForce(f);				
			}
			this.particles[i].update();
		//	if ( i == 1 ) { console.log("X:" + this.particles[i].acc.magnitude() + " Y:" + this.particles[i].acc.y ) ; }
		//	console.log("p"+this.particles[i]._id + "  -> "+"X:" + this.particles[i].pos.x + "Y:"+ this.particles[i].pos.x );
		}
	//	if ( this.s == 0 ) { this.s = this.MAX_PARTICLES; }
		
	};
	
	this.render = function(c){
		
		// set the fill style to have the right alpha
		c.strokeStyle = "rgba(255,255,255,"+this.alpha+")";
		
		// draw a circle of the required size
		c.beginPath();
		c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2, true);
		c.closePath();
		
		// and fill it
		c.stroke();
	};



}

	

