// ALARCON VICTOR ALEJANDRO
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	var estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(estadoCivil=="Soltero" && edad>=18)
		{
			alert("Es soltero y no es menor");
		}

}//FIN DE LA FUNCIÓN