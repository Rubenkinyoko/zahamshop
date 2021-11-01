var compteurimage=1;
var totalimage=10;

function slider(x){

var image=document.getElementById('img');
compteurimage=compteurimage + x ;
image.src="new folder"+compteurimage+".jpg";

if (compteurimage>=totalimage)
{
  compteurimage=1

}
if (compteurimage<1)
{
  compteurimage=totalimage;

} 

}