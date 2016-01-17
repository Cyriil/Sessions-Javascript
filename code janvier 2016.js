<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;
var soins = 2;
var estMort = false;

function attaque() 
{
 
    
       if(PV-degats <= 0){
       		estMort = true;
       }
       if(estMort){
          PV = 0;
       }
       else{
         PV = PV-degats;
       }
        if(estMort)
        {
        	alert("Le monstre est mort ! :-)");
    	}
    	else
        {
        	alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    	}
}

function soigne()
{
    PV = PV+soins;
   if (PV >= 12){
   PV = 12;
 }
   if(PV > 0){ 
   	estMort = false;
   }
    
    if(PV >= 12){
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
     }
 }
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
