var abc = "abcdefghijklmnñopqrstuvwxyz";
var palabra="";
var salto = 0;
var cifrado = false;
function Cifrar()
{
    if(cifrado == false)
    {
        salto = document.getElementById("salto").value;
        palabra = document.getElementById("palabraTxt").value;
        palabra = palabra.toLowerCase();
        var nuevaPalabra="";
        for(var i = 0;i<palabra.length;i++)
        {
            var caracter = palabra.charAt(i);
            for(var j=0;j<abc.length;j++)
            {
                if(caracter == abc.charAt(j))
                {  
                    caracter = abc.charAt((Number(j)+Number(salto))%27);
                    nuevaPalabra+=caracter;
                    break;
                }
            }
        }
        palabra = nuevaPalabra;
        document.getElementById("cifradoTxt").value = palabra;
        cifrado = true;
    }
    else
    {
        alert("La palabra ya está cifrada");
    }
}

function Descifrar()
{
    if(cifrado == true)
    {
        palabra = palabra.toLowerCase();
        var nuevaPalabra="";
        for(var i = 0;i<palabra.length;i++)
        {
            var caracter = palabra.charAt(i);
            for(var j=0;j<abc.length;j++)
            {
                if(caracter == abc.charAt(j))
                {
                    caracter = abc.charAt((Number(j)-Number(salto))%27);
                    nuevaPalabra +=caracter;
                }
            }
        }
        palabra = nuevaPalabra;
        document.getElementById("cifradoTxt").value = palabra;
        cifrado = false;
    }
    else
    {
        alert("La palabra ya está descifrada");
    }
}