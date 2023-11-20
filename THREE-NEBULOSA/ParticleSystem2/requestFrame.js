// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// usage:
// instead of setInterval(render, 16) ....
/*
(function animloop(){
  requestAnimFrame(animloop);
  render();
})();

*/

function constrain(val,minimo,maximo)
{
	if ( val < minimo ) val = minimo;
	if ( val > maximo ) val = maximo;
	
	return val;
}
