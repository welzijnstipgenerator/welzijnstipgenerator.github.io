
let quotes=[

           'Cava drinken.',
           'Regelmatig rechtstaan.',
           'Mediteren is echt een aanrader.',
           'Naar buiten gaan. Bewegen bij daglicht.',
           'Wandelen en bewegen!! Doet zoveel voor concentratie.',
           'Niet te streng zijn voor jezelf.',
           'Elke dag een wandeling maken ook bij minder goed weer.',
           'Een wandeling maken.',
           'Maak elke dag een wandelingetje, welk weer het ook is.',
           'Blijven bewegen.',
           'Neem voldoende rust.',
           'Een wandeling maken onder de middag.',
           'Probeer elke dag 1 uurtje vrij te maken voor een wandeling buiten. Doet wonderen om even een frisse neus te halen!',
           'Regelmatig joggen.',
           'Meer sociaal contact op de werkvloer.',
           'Wandeling maken in de natuur onder de middag op een thuiswerkdag.',
           'Neem op tijd je rust en geef dit ook aan bij je collega!',
           'Beweeg meer.',
           'Take a break.',
           'Ga af en toe in de natuur.',
           'Zelfzorg is belangrijk.',
           'Yogilates volgen maandagnamiddag 12 uur.',
           'Muziek keihard en gaan met die banaan totdat je je hart voelt bonken van inspanning en vrolijkheid.',
           'Af en toe eens iets geks doen!',
           'Op de middag eens een kleine wandeling maken dan kom je fris terug.',
           'Muziek luid en dansen!',
           'Probeer eens de fitometer (parcours met buitenfitness-oefeningen) in je buurt: buitenlucht en beweging voor het hele lichaam gecombineerd.',
           'Dagelijks een buitenactiviteit doen.',
           'Geef een complimentje.',
           'Single tasken.',
           'Tussen twee vergaderingen je lievelingsliedje opzetten.',
           'Privé en werk gescheiden houden. Tijdig afsluiten en focussen op privé.',
           'Zo weinig mogelijk stressmomenten.',
           'Een wandeling maken met iemand buiten je bubbel is goed voor lichaam en geest.',
           'Een kwartiertje yoga elke dag doet wonderen.',
           'Simpel maar effectief: tijdens een werkdag echt tijd nemen voor je lunchpauze.',
           'Ademhallingsoefeningen werken echt om stress te verlagen. De mindfulness sessies op dinsdag en woensdag zijn hiervoor een echte aanrader. Je zou verbaasd zijn wat een impact zo een half uurtje heeft op de rest van jouw werkdag.',
           'Elke ochtend 10-30 minuten de tijd nemen om even een boek te lezen. Helpt mij echt om rustig wakker te worden en zen aan de dag te beginnen!',
           'Nieuwe wandelroutes in de buurt ontdekken en een thermosje warme chocomelk meenemen voor onderweg!',
           'Maak eens iemand onverwacht blij.',
           'Blijven ademen.',
           'Plan regelmatig rusttijd in tijdens de werkuren en doe daarbij ademhalingsoefening of strekoefening.',
           'Elke dag 30 min wandelen zelfs tijdens dit rotweer. Neem een paraplu mee. Je zal het verschil merken!',
           'Ga eens wandelen, door de dag of in de avond genietend van de kerstverlichting.',
           'Investeer in het aankleden en inrichten van je werkruimte thuis zodat je in een aangename omgeving waar je je goed voelt, kan werken.',
           'Tijdens de werkdag zelf een korte wandeling maken om je hoofd efkes leeg te maken.',
           'Af en toe eens op je kop gaan staan om het eens vanuit een andere invalshoek te bekijken.',
           'Denk ook eens aan jezelf.',
           'Uit de opleiding Mindfulness... neem in de ochtend de tijd om heel bewust een tasje thee te drinken. Heel bewust opmerken wanneer je een slokje neemt. Kom je echt van tot rust.',
           'Alles.',
           'Wandelen.',
           'Neem af en toe voor jezelf.',
           'Stretch-oefeningen wanneer je even niets gaat halen.',
           'Muziek opzetten en eens goed uit de bol gaan.',
           'Als je vaak stress hebt door to-do-lijstjes. Herformuleer het ik moet in je hoofd dan eens naar ik wil.',
           'Een lekker geurtje opdoen of huisparfum spuiten of geurkaarsjes naast je bureau zetten en af en toe aan ruiken.',
           'Om tot rust te komen na of tijdens een drukke dag luister ik graag naar rustgevende muziek. Voor iederen anders vermoedelijk. Een aanrader om te googelen op: klankbad, gongbad of klankschalensessie. Éxtra dimensie vind ik.',
           'Koop eens een bloemetje.',
           'Online koffieklets doet zo deugd en geeft je energie om verder te doen.',
           'Als het eens minder gaat of je hebt frustraties, durf er over praten met je collega. Samen even dissen kan ook tof zijn.',
           'Op tijd relativeren: wat is het ergste dat kan gebeuren als...',
           'Meer aandacht voor elkaar, ongeacht leeftijd of niveau.'
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
   </div>

    `;
    div.innerHTML=quote;
    
}

