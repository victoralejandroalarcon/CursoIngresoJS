// ALARCON VICTOR ALEJANDRO
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	var estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");	
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