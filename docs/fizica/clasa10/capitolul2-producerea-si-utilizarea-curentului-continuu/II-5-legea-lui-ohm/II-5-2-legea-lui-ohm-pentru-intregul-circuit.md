---
sidebar_position: 2
custom_edit_url: null
---

# II.5.2. Legea lui Ohm pentru întregul circuit.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'









<div class="alert alert--success" role="alert">

&#128064 **Experiment: Legea lui Ohm pentru întreg circuitul**


<Video src="https://www.youtube.com/embed/XHSI4pFnkFU" lazy={false} />



**Materiale necesare:**    
Baterii electrice de diferite tensiuni electromotoare cu rezistență internă cunoscută (sursă de tensiune variabilă), rezistor de o anumită valoare (50 Ω), fire de legătură, ampermetru, voltmetru (multimetru).


<br></br>

**Descrierea experimentului:**
- Leagă în serie ampermetrul cu rezistorul de 50 Ω și cu o baterie cu tensiunea electromotoare de 1,5 V și rezistență internă de 21 Ω. Măsoară intensitatea curentului electric ce trece prin rezistor.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza0_1-experiment-legea-lui-ohm-pentru-intreg-circuitul-schema1.png" width="1000" height="254" lazy={false} />

<br></br>
<br></br>

- Leagă în serie ampermetrul cu rezistorul de 50 Ω și cu o baterie cu tensiunea electromotoare de 4,5 V și rezistență internă de 6,6 Ω. Măsoară intensitatea curentului electric ce trece prin rezistor.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza0_2-experiment-legea-lui-ohm-pentru-intreg-circuitul-schema2.png" width="1000" height="261" lazy={false} />

<br></br>
<br></br>


- Calculează pentru fiecare măsurătoare rezistența totală a circuitului, R + r.

- Trece datele experimentale în următorul tabel și calculează intensitatea curentului electric cu formula



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza0_3-experiment-legea-lui-ohm-pentru-intreg-circuitul-formula-intensitatii.png" width="1000" height="103" lazy={false} />

<br></br>
<br></br>



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza0_4-experiment-legea-lui-ohm-pentru-intreg-circuitul-tabel-date.png" width="1000" height="203" lazy={false} />

<br></br>
<br></br>



Observații:
> _Intensitatea curentului electric printr-un circuit crește odată cu creșterea tensiunii electromotoare a sursei (E)._
> _Intensitatea curentului electric printr-un circuit crește odată cu scăderea rezistenței totale a circuitului._



</div>


<br></br>








<div class="alert alert--primary" role="alert">



**Legea lui Ohm pentru întregul circuit:**

**“Intensitatea curentului electric printr-un circuit simplu este direct proporțională cu tensiunea electromotoare a sursei (E) și invers proporțională cu rezistența totală a circuitului (R+r).“**





<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza1-formula-legii-lui-ohm-pentru-intregul-circuit.png" width="1000" height="98" lazy={false} />

<br></br>
<br></br>




</div>




<br></br>


<div class="alert alert--primary" role="alert">


**1) Legea lui Ohm este valabilă în general pentru surse chimice deoarece au rezistența internă mică, dar poate fi particularizată și pentru alte surse.**

**2) Dacă rezistența exterioară (R) are valori foarte mici, obținută de exemplu prin scurtcircuitarea sursei cu un conductor scurt, adică dacă R = 0, intensitatea curentului debitat de sursă devine maximă:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza2-formula-intensitatii-curentului-de-scurtcircuit.png" width="1000" height="93" lazy={false} />


**Acest lucru nu este de dorit, deoarece curenții mari pot provoca daune, iar sursa se consumă rapid.**




</div>



<br></br>


<div class="alert alert--secondary" role="alert">

&#128294 **Observație**


În cazul unui circuit format dintr-un rezistor (ohmic) de rezistență R legat la o sursă electrică de t.e.m. E și rezistență internă r, avem următoarea caracteristică liniară:   
**I = f(U)**

Caracteristica unui generator intersectează axele în punctele de coordonate (I = 0, U = E) și (I<sub>sc</sub> = E/r, U = 0). 


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza3-graficul-ce-reprezinta-caracteristica-unui-generator.png" width="1000" height="375" lazy={false} />

<br></br>
<br></br>

Rezistența internă a sursei o putem determina din panta graficului:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza4-formula-de-calcul-a-rezistentei-interne-a-sursei.png" width="1000" height="105" />

<br></br>
<br></br>

Tensiunea la bornele rezistorului este mai mică decât tensiunea electromotoare (E) cu produsul dintre rezistența internă a generatorului (r) și intensitatea curentului (I) ce trece prin circuit:   
U<sub>R</sub> = E – r ∙ I


Dar, U<sub>R</sub> = R ∙ I și înlocuind în relația precedentă obținem legea lui Ohm pentru întreg circuitul:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza1-formula-legii-lui-ohm-pentru-intregul-circuit.png" width="1000" height="98" />

<br></br>
<br></br>


Tensiunea la bornele generatorului (U<sub>0</sub>) este egală cu tensiunea electromotoare (U<sub>0</sub> ≈ E) în cazul ideal când rezistența internă este zero (dacă r = 0 și r ∙ I = 0), independentă de intensitatea curentului debitat și vorbim în acest caz de un generator ideal.

T.e.m. a unui generator se măsoară la bornele lui, în circuit deschis (I = 0) cu un voltmetru cu rezistența foarte mare față de r. Spunem în acest caz că generatorul funcționează în gol.


</div>


<br></br>




<div class="alert alert--warning" role="alert">

&#128275 **Problemă rezolvată**


**1. Pe un bec de lanternă este scris 0,2 A și 6,3 V. Se leagă becul la o baterie de 9 V (becul este în condiții normale de funcționare). Determină:**   
a)	Rezistența electrică a filamentului becului.    
b)	Sarcina electrică ce trece prin filamentul becului timp de o oră.    
c)	Tensiunea internă a bateriei.    
d)	Rezistența internă a bateriei.    
e)	Intensitatea curentului de scurtcircuit.




**Rezolvare:**

_Notăm datele problemei:_   
I = 0,2 A    
U = 6,3 V    
E = 9 V    
t = 1h = 3600 s

**Calculăm necunoscutele:**

_a) Scriem formula rezistenței:_



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza5-problema-rezolvata1-rezolvare1.png" width="1000" height="100" />

<br></br>
<br></br>

<br></br>

_b)	Scriem formula intensității  și calculăm sarcina electrică ce trece prin filamentul becului timp de 3600 s:_ 



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza6-problema-rezolvata1-rezolvare2.png" width="1000" height="162" />

<br></br>
<br></br>

<br></br>


_c) Scriem ecuația bilanțului tensiunilor electrice:_   
E = U + u

Întrucât avem un singur consumator tensiunea la bornele circuitului exterior este chiar tensiunea la bornele becului.    
u = E – U = 9 V – 6,3 V = 2,7 V

<br></br>


_d)	Rezistența internă a bateriei este:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza7-problema-rezolvata1-rezolvare3.png" width="1000" height="90" />

<br></br>
<br></br>

<br></br>

_e) Intensitatea curentului de scurcircuit este:_



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-5-2-legea-lui-ohm-pentru-intregul-circuit-poza8-problema-rezolvata1-rezolvare4.png" width="1000" height="97" />





</div>






