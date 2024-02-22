---
sidebar_position: 7
custom_edit_url: null
---

# II.7. Legile lui Kirchhoff.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'





<div class="alert alert--primary" role="alert">

Elementele rețelelor electrice (circuitelor ramificate):

**1. Nodul de circuit** reprezintă intersecția a cel puțin trei conductoare electrice.

**2. Latura de circuit** este porțiunea de circuit cuprinsă între două noduri succesive, astfel încât prin elementele ei să circule același curent electric.

**3. Ochiul de circuit** reprezintă porțiunea de circuit formată din cel puțin două laturi, conectate astfel încât să formeze un contur închis (linie poligonală închisă).


<br></br>

<Video src="https://www.youtube.com/embed/WTf_8i81rws" lazy={false} />



</div>

<br></br>


<div class="alert alert--warning" role="alert">

&#128275 **Cum se rezolvă o problemă cu rețea electrică:**


- Notează cu litere mari nodurile rețelei (punctele unde se intersectează și se ating cel puțin trei conductori).

- Notează laturile rețelei (porțiunile de circuit dintre două noduri succesive, prin care trece un singur curent). Stabilește arbitrar (cum dorești tu) câte un sens pentru fiecare curent și notează-i cu simboluri cu indici (I<sub>1</sub>, I<sub>2</sub>, ... etc). Ai grijă ca unii să intre în nod (vârful săgeții spre nod) și alții să iasă din nod (vârful săgeții opus nodului).

- Notează ochiurile simple ale rețelei (porțiunile de circuit care au un contur închis și formate din două laturi). Stabilește arbitrar (cum dorești tu) câte un sens de parcurs pentru fiecare ochi.




</div>

<br></br>






<div class="alert alert--primary" role="alert">

**Prima lege a lui Kirchhoff :**

**“Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este nulă“.**



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza1-prima-lege-a-lui-kirchhoff.png" width="1000" height="140" lazy={false} /> 



unde intensitățile I<sub>k</sub> pot fi pozitive sau negative, în funcție de modul în care trece curentul prin nod (intră în nod sau iese din nod).

O altă modalitate de enunțare a primei legi a lui Kirchhoff:

**“Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul de rețea“.**

Pentru n = nr. noduri, se scriu _(n-1)_ ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea.

De exemplu pentru nodul A aplicăm Teorema I a lui Kirchhoff:

I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza2-prima-lege-a-lui-kirchhoff-exemplu-de-aplicare.png" width="1000" height="308" lazy={false} /> 





</div>

<br></br>


<div class="alert alert--primary" role="alert">


**A doua lege a lui Kirchhoff:**

**“Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit“.**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza3-a-doua-lege-a-lui-kirchhoff.png" width="1000" height="136" /> 




unde termenii sumelor pot fi pozitivi sau negativi, în funcție de sensul tensiunii sau al intensității în raport cu sensul ales arbitrar pentru ochiul considerat.

Pentru m = nr. ochiuri simple, se scriu _m_ ecuații cu a doua teoremă a lui Kirchhoff.



</div>



<br></br>




<div class="alert alert--primary" role="alert">

**Convenții de semne**


a) Tensiunea electromotoare

- se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar : + E



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza4-conventii-de-semne-pentru-tensiunea-electromotoare-semnul-plus.png" width="1000" height="218" />

<br></br>
<br></br>

- se ia cu minus dacă sensul curentului electric prin sursă este opus cu cel al ochiului ales arbitrar : - E


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza5-conventii-de-semne-pentru-tensiunea-electromotoare-semnul-minus.png" width="1000" height="177" />

<br></br>
<br></br>


b)	Tensiunea electrică (produsul rezistenței laturii cu intensitatea din acea latură):


- se ia cu plus dacă sensul curentului electric este același cu cel al ochiului ales arbitrar (sens de referință): + I ∙ R


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza6-conventii-de-semne-pentru-tensiunea-electrica-semnul-plus.png" width="1000" height="189" />

<br></br>
<br></br>



- se ia cu minus dacă sensul curentului electric este opus cu cel al ochiului ales arbitrar (sens de referință): - I ∙ R


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza7-conventii-de-semne-pentru-tensiunea-electrica-semnul-minus.png" width="1000" height="186" />

<br></br>
<br></br>






</div>





<br></br>



<div class="alert alert--primary" role="alert">



<Video src="https://www.youtube.com/embed/Ce3tXMe5Eqw" />




</div>







<br></br>




<div class="alert alert--warning" role="alert">

&#128275 **Problemă rezolvată**


**1. Determină intensitățile curenților din următorul circuit ramificat:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza8-problema-rezolvata1-schema-circuit.png" width="1000" height="393" />

<br></br>
<br></br>




**Rezolvare:**



<Video src="https://www.youtube.com/embed/ogptDUHBeLQ" />

<br></br>


_Notăm cu litere mari nodurile rețelei (A și B)._



_Notăm laturile rețelei, stabilim arbitrar sensurile curenților de pe fiecare latură:_   
AE<sub>1</sub>B (I<sub>1</sub>)   
AE<sub>2</sub>B (I<sub>2</sub>)   
AR<sub>3</sub>B (I<sub>3</sub>)


_Notăm ochiurile simple ale rețelei. Stabilim arbitrar (cum dorim) câte un sens de parcurs pentru fiecare ochi (orar sau antiorar)._


_Aplicăm prima teoremă a lui Kirchhoff: “Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul respectiv“._



Pentru n = nr. noduri, se scriu (n-1) ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea, deci pentru un singur nod:   
I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub>



_Aplicăm a doua teoremă a lui Kirchhoff: “Suma algebrică a tensiunilor electromotoare pentru un ochi de circuit este egală cu suma algebrică a căderilor de tensiune din acel ochi de circuit“, pentru două ochiuri simple:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza9-problema-rezolvata1-rezolvare1.png" width="1000" height="136" />


<br></br>
<br></br>


_Facem un sistem de 3 ecuații și cu cele trei necunoscute I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza10-problema-rezolvata1-rezolvare2.png" width="1000" height="158" />



<br></br>
<br></br>


_Înlocuim datele numerice:_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza11-problema-rezolvata1-rezolvare3.png" width="1000" height="159" />


<br></br>
<br></br>


_Scoatem pe I<sub>1</sub> din prima ecuație: I<sub>1</sub> = I<sub>3</sub> – I<sub>2</sub> și îl înlocuim în a doua ecuație_   




<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-7-legile-lui-kirchhoff-poza12-problema-rezolvata1-rezolvare4.png" width="1000" height="447" />

Când un curent dă negativ, i se schimbă sensul ales arbitrar și se înlocuiește în celelalte ecuații cu minus.

<br></br>
<br></br>


_Se înlocuiește I<sub>2</sub> într-o ecuație cu I<sub>3</sub>:_   
3 ∙ (-4) + 2 I<sub>3</sub> = 8   
**I<sub>3</sub> = 10 A**


<br></br>


_Din prima ecuație îl aflăm pe I<sub>1</sub>:_   
**I<sub>1</sub> = 10 - (- 4) = 14 A**





</div>






