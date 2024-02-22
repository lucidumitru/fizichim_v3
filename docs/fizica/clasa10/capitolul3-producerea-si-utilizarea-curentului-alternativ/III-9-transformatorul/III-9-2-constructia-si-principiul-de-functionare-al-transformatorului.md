---
sidebar_position: 2
custom_edit_url: null
---

# III.9.2. Construcția și principiul de funcționare al transformatorului.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




<div class="alert alert--warning" role="alert">

**Transformatorul are următoarea construcție:**

- un miez de fier închis format din tole dintr-un aliaj de fier-siliciu, cu grosimea de 0,3-0,5 mm, izolate între ele pentru a împiedica formarea curenților turbionari.

- două bobine înfășurate pe miezul de fier :

**a) bobina primară, care are rolul de inductor** (prin care trece curentul care dorim să-l transformăm) și care se leagă la generatorul de curent alternativ. Numărul de spire al primarului îl notăm cu N<sub>1</sub>.

**b) bobina secundară, care are rolul de indus** (bobină în care va lua naştere prin inducţie curentul transformat) și care se leagă la consumator. Numărul de spire al secundarului îl notăm cu N<sub>2</sub>.




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza1-constructia-transformatorului.png" width="1000" height="365" lazy={false} />






</div>


<br></br>






<div class="alert alert--primary" role="alert">


**Principiul de funcționare al transformatorului are la bază fenomenul de inducție electromagnetică.**


- Când aplicăm bobinei primare o tensiune alternativă u<sub>1</sub> (de valoare efectivă U<sub>1</sub>), în primar apare un curent i<sub>1</sub> (de valoare efectivă I<sub>1</sub>) care dă naștere unui flux magnetic variabil.


- Fluxul magnetic variabil din primar determină apariția în cele N<sub>1</sub> spire ale primarului o **t.e.m. de autoinducție**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza2-formula-tensiunii-electromotoare-de-autoinductie-din-primarul-transformatorului.png" width="1000" height="108" lazy={false} />

<br></br>
<br></br>

<br></br>

- Fluxul magnetic variabil din primar determină apariția în cele N<sub>2</sub> spire ale secundarului o **t.e.m. de inducție**



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza3-formula-tensiunii-electromotoare-de-inductie-din-secundarul-transformatorului.png" width="1000" height="105" lazy={false} />

<br></br>
<br></br>

<br></br>

Prin împărțire obținem:



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza4-raportul-tensiunilor-electromotoare-din-primarul-si-secundarul-transformatorului.png" width="1000" height="108" lazy={false} />




</div>


<br></br>



<div class="alert alert--primary" role="alert">


Conform legii lui Ohm aplicată circuitului primar avem:

**u<sub>1</sub> + e<sub>1</sub> = R<sub>1</sub> ∙ i<sub>1</sub>**


Valoarea rezistenței primarului R<sub>1</sub> este foarte mică și produsul R<sub>1</sub> ∙ i<sub>1</sub> poate fi neglijat și astfel obținem:

**e<sub>1</sub> ≅ -u<sub>1</sub>**

Semnul minus arată că t.e.m. de autoinducție e<sub>1</sub> este în opoziție de fază cu tensiunea rețelei de alimentare a transformatorului u<sub>1</sub>.

La funcționarea în gol a transformatorului, t.e.m. de inducție e<sub>2</sub> este egală cu tensiunea u<sub>2</sub> de la bornele secundarului :

**e<sub>2</sub> = u<sub>2</sub>**



Prin împărțire obținem:



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza5-raportul-tensiunilor-electromotoare-din-primarul-si-secundarul-transformatorului2.png" width="1000" height="107" />







</div>

<br></br>



<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

T.e.m. e<sub>1</sub> și e<sub>2</sub> sunt în fază, iar tensiunile u<sub>1</sub> și u<sub>2</sub> sunt în opoziție de fază (semnul minus din fața raportului u<sub>1</sub>/u<sub>2</sub> indică o defazare de π radiani).


</div>


<br></br>

<div class="alert alert--primary" role="alert">

Dacă la bornele secundarului se leagă un rezistor cu rezistența R, prin circuitul secundarului apare un curent alternativ.

Pierderile prin efect Joule sunt mici, astfel încât se poate considera că puterea P<sub>1</sub> din primar este aproximativ egală cu puterea P<sub>2</sub> din secundar.

**P<sub>1</sub> ≅ P<sub>2</sub>**  

**U<sub>1</sub> ∙ I<sub>1</sub> ≅ U<sub>2</sub> ∙ I<sub>2</sub>**



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza6-formula-raportului-de-transformare.png" width="1000" height="117" />






</div>



<br></br>

<div class="alert alert--primary" role="alert">


**În funcție de raportul de transformare K, transformatoarele pot fi:**


**1) Transformatoare ridicătoare de tensiune la care K {'<'} 1 și U<sub>1</sub> {'<'} U<sub>2</sub>.**


Transformatoarele ridicătoare de tensiune se folosesc la transportul la distanță mare a energiei electrice (linii de 250-400 kV), la posturile de televiziune, generatorul de raze X, osciloscop etc.

<br></br>

**2) Transformatoare coborâtoare de tensiune la care K {'>'} 1 și U<sub>1</sub> {'>'} U<sub>2</sub>.**

Transformatoarele coborâtoare de tensiune se folosesc la jucării electrice, epilatoare, aparate electrice folosite în laboratoarele școlare etc.

<br></br>

**3) transformatoare separatoare de tensiune la care K=1 și U<sub>1</sub> = U<sub>2</sub>, având rolul de a separa electric circuitele cuplate magnetic.**

Transformatoarele separatoare de tensiune se folosesc în radiotehnică. 




</div>



<br></br>


<div class="alert alert--primary" role="alert">

Un transformator are două borne la intrare și cel puțin două borne la ieșire.

**Transformatorul se reprezintă în schemele electrice prin unul din următoarele simboluri:**




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza7-simbolurile-de-reprezentare-a-transformatorului-in-circuitele-electrice.png" width="1000" height="121" />




</div>


<br></br>

<div class="alert alert--primary" role="alert">

Randamentul transformatorului (η) este cuprins între 90-99 %, întrucât nu are piese în mișcare, având pierderi de energie foarte mici. 


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza8-formula-randamentului-transformatorului.png" width="1000" height="104" />

<br></br>
<br></br>

unde:   
P<sub>2</sub> este puterea activă furnizată de secundar    
P<sub>1</sub> este puterea activă primită de către primar de la rețeaua de alimentare

Diferența P<sub>2</sub> – P<sub>1</sub> reprezintă puterea pierdută în transformator, ce se compune din pierderile prin efect Joule în bobinele transformatorului (pierderi în cupru, P<sub>Cu</sub> ) și pierderile prin curenți turbionari în miezul de fier (pierderi în fier, P<sub>Fe</sub>).


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-9-2-constructia-si-principiul-de-functionare-al-transformatorului-poza9-formula-randamentului-transformatorului2.png" width="1000" height="113" />



</div>

<br></br>


<div class="alert alert--secondary" role="alert">

&#128294 **Observație**


**Transformatorul funcționează la alimentarea de curent alternativ și nu poate funcționa cu curent continuu. Dacă tensiunea nominală de curent continuu este aplicată pe înfășurarea primară, un flux de magnetic constant va fi configurat în miezul transformatorului și prin urmare, nu va exista o generare de tensiune electromotoare autoindusă și nici indusă.**

**Cu toate acestea, s-au descoperit soluții pentru a se transforma o tensiune continuă în alta tot continuă.**

**Pentru transformatoarele ridicătoare de tensiune continuă se folosește un comutator cu semiconductor care se activează și se oprește foarte rapid (MOSFET, o diodă și un condensator).**

**Pentru transformatoarele coborâtoare de tensiune continuă se folosește un reductor scăzător de tensiune. Este un tip de convertor DC-DC, astfel încât îndeplinește sarcina de a reduce tensiunea folosind câteva tranzistoare și o bobină.** 




</div>
