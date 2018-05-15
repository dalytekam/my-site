let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let mois = months[d.getMonth()];
let annee = d.getFullYear();
let jour= d.getDate();
document.getElementById("date").innerHTML = mois +" "+ jour +","+" "+ annee;