// ALARCON VICTOR ALEJANDRO
function mostrar()
{
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;

	if(nota >= 9)
	{
		alert("Su nota es " + nota + ": EXCELENTE");
	}
	else
	{
		if(nota >=4 && nota <=8)
		{
			alert("Su nota es " + nota +": APROBO");
		}
		else
		{
			alert("Su nota es " + nota + ": LA PROXIMA SERA");
		}
	}
}

