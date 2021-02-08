// ALARCON VICTOR ALEJANDRO
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("Usted es un niño");	
	}
	else
	{
		if(edad>17)
	{
		alert("Usted es adulto");
	}	
	else
	{
		alert("Usted es adolescente");
	}	
    }

}//FIN DE LA FUNCIÓN