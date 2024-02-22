---
sidebar_position: 4
custom_edit_url: null
---

# I.4. Principiul întâi al termodinamicii.



<ul class="table-of-contents table-of-contents__left-border"><li><a href="#i41-lucrul-mecanic" class="table-of-contents__link toc-highlight">I.4.1. Lucrul mecanic.</a></li><li><a href="#i42-energia-internă-a-gazului-perfect" class="table-of-contents__link toc-highlight">I.4.2. Energia internă a gazului perfect.</a></li><li><a href="#i43-căldura" class="table-of-contents__link toc-highlight">I.4.3. Căldura.</a></li><li><a href="#i44-principiul-întâi-al-termodinamicii-consecințe-ale-principiul-întâi-al-termodinamicii" class="table-of-contents__link toc-highlight">I.4.4. Principiul întâi al termodinamicii. Consecințe ale principiul întâi al termodinamicii.</a></li><li><a href="#i45-coeficienți-calorici-calorimetrie" class="table-of-contents__link toc-highlight table-of-contents__link--active">I.4.5. Coeficienți calorici. Calorimetrie.</a></li></ul>

import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




## I.4.1. Lucrul mecanic.


<div class="alert alert--primary" role="alert">

**Schimbul de energie** dintre un sistem termodinamic închis și mediul exterior poate avea loc în două moduri:

- Prin efectuare de lucru mecanic
- Prin transfer de căldură.

Măsura energiei transferate sistemului în condițiile interacțiunilor care au drept rezultat variația parametrilor de poziție sub acțiunea unor forțe se numește **lucru mecanic.**


</div>

<br></br>

<div class="alert alert--primary" role="alert">

Lucrul mecanic (L) al unei forțe constante este o mărime fizică scalară egală cu produsul dintre modulul forței (F) și deplasarea (d) a punctului de aplicație.

L = F ∙ d

Să calculăm lucrul mecanic al unei forțe exterioare constante ce acționează asupra pistonului unui cilindru în care se află un gaz (transformare cvasistatică). Deoarece presiunea exterioară (p<sub>e</sub>) este tot timpul egală cu presiunea gazului (p) din cilindru (se apasă încet asupra pistonului), gazul este comprimat de la volumul inițial (V<sub>1</sub>) la volumul final (V<sub>2</sub>) la presiune constantă.


L = F<sub>e</sub> ∙ d = F<sub>e</sub> ∙ (x<sub>1</sub> - x<sub>2</sub>)


Dar din formula presiunii:




<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-1-lucrul-mecanic-poza1-formula-de-calcul-a-presiunii-exterioare.png" width="1000" height="92" lazy={false} />



<br></br>
<br></br>


L<sub>e</sub> = pe ∙ S ∙ (x<sub>1</sub>- x<sub>2</sub>)

S = aria secțiunii transversale a cilindrului

Avem V<sub>2</sub> = S ∙ x<sub>2</sub> și V<sub>1</sub> = S ∙ x<sub>1</sub> 

ΔV = V<sub>2</sub> - V<sub>1</sub>


**Lucrul mecanic efectuat de forța exterioară Fe este :**

**L<sub>e</sub> = p<sub>e</sub> ∙ S ∙ (x<sub>1</sub> - x<sub>2</sub>) = - p<sub>e</sub> ∙ ΔV**



<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-1-lucrul-mecanic-poza2-lucru-mecanic-efectuat-de-o-forta-exterioara.png" width="1000" height="434" lazy={false} />


<br></br>
<br></br>



Dar forța (F) datorată presiunii gazului din interior este egală în modul, dar de sens opus cu forța exterioară (F<sub>e</sub>).



</div>


<br></br>


<div class="alert alert--primary" role="alert">

**Lucrul mecanic efectuat de sistemul termodinamic într-o transformare izobară este:**   

**L = p ∙ ΔV**

Convenții de semne pentru lucrul mecanic efectuat de sistemul termodinamic:

a) Dacă gazul se destinde (îi crește volumul), ΔV > 0, atunci L > 0 și sistemul efectuează lucru mecanic asupra mediului exterior (cedează L).

b) Dacă gazul se comprimă (îi scade volumul), ΔV < 0, atunci L < 0 și asupra sistemului se efectuează lucru mecanic (primește L).

c) Dacă între sistem și exterior nu are loc transfer de energie prin lucru mecanic (L = 0), atunci gazul nu își modifică volumul (ΔV=0).



</div>


<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

1. Lucrul mecanic este o mărime de proces și depinde de toate stările prin care trece sistemul.

2. Lucrul mecanic este o măsură a variației energiei sistemului prin mișcarea ordonată a moleculelor într-un proces.




</div>


<br></br>




<div class="alert alert--primary" role="alert">


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-1-lucrul-mecanic-poza3-semnificatia-geometrica-a-lucrului-mecanic-intr-o-destindere-izobara.png" width="1000" height="343" />

</div>

<br></br>
<br></br>

## I.4.2. Energia internă a gazului perfect.

<div class="alert alert--primary" role="alert">

Orice sistem termodinamic este format dintr-un număr foarte mare de particule care se mișcă continuu și dezordonat, ciocnindu-se elestic atât între ele, cât și cu pereții vasului.

Energia particulelor unui gaz real este dată:

- Energie externă este dată de suma energiei cinetică a sistemului ca întreg și energiei potențială a acestuia aflat într-un câmp de forțe.

- Energie internă (U) este dată de suma dintre energiile cinetice ale moleculelor (E<sub>c</sub>) și energiile potențiale de interacțiune dintre moleculele sistemului termodinamic (E<sub>p</sub>).

**U = E<sub>c</sub> + E<sub>p</sub>**


- Dar variația energiei interne (ΔU = U<sub>2</sub> – U<sub>1</sub>) este o mărime fizică de stare și nu depinde de stările intermediare prin care trece sistemul, ci numai de starea inițială (U<sub>1</sub>) și cea finală (U<sub>2</sub>).



</div>


<br></br>

<div class="alert alert--primary" role="alert">

Ecuația de stare termică ne spune că energia internă a gazului perfect depinde numai de temperatura sistemului (T) și ,implicit, numai de energia cinetică a particulelor:

**U = U(T)**


</div>




<br></br>
<br></br>


## I.4.3. Căldura.


<div class="alert alert--primary" role="alert">

**Căldura (Q)** este o mărime fizică care măsoară energia transferată, numai prin mișcarea dezordonată a moleculelor dintre două corpuri aflate în contact termic.


Fiind un transfer de energie, căldura aceeaşi unitate de măsură în Sistemul Internațional ca și energia și lucrul mecanic:

**[Q]<sub>SI</sub> = J(joule)**


O altă unitate de măsură tolerată pentru căldură este **caloria: 1cal = 4,18 J**



</div>

<br></br>

<div class="alert alert--primary" role="alert">

**Convenții de semne pentru căldură:**

a) Când sistemul primește căldură din exterior, atunci Q > 0.

b) Când sistemul cedează căldură în exterior, atunci Q < 0.

c) Când sistemul este izolat adiabatic (nu schimbă căldură cu exteriorul), atunci Q = 0.



</div>

<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

Căldura, ca și lucrul mecanic, este o mărime de proces și depinde de toate stările prin care trece sistemul.


</div>



<br></br>
<br></br>


## I.4.4. Principiul întâi al termodinamicii. Consecințe ale principiul întâi al termodinamicii.

<div class="alert alert--warning" role="alert">

Experimental s-a constatat că lucrul mecanic și căldura sunt singurele forme de transfer de energie între un sistem termodinamic și mediul exterior.

Principiul întâi al termodinamicii arată cum variază energia internă a unui sistem ce interacționează mecanic sau termic cu mediul exterior și reprezintă expresia matematică a conservării și transformării energiei.



</div>


<br></br>

<div class="alert alert--primary" role="alert">

**Enunțul principiul întâi al termodinamicii:**

**Variația energiei interne a unui sistem într-un proces oarecare este:** 

**ΔU = Q - L**


</div>

<br></br>

<div class="alert alert--primary" role="alert">

**Consecințe ale principiul întâi al termodinamicii:**

- Dacă **sistemul este izolat** (nu schimbă nici căldură și nici lucru mecanic cu exteriorul), atunci 

**Q = L = 0, ΔU = U<sub>2</sub> – U<sub>1</sub> = 0 și U<sub>1</sub> = U<sub>2</sub>, adică energia internă a unui sistem izolat se conservă.**  


- Ecuația principiul întâi al termodinamicii mai poate fi scrisă și sub forma definiției căldurii:

**Q = ΔU + L, adică căldura primită de un sistem servește atât la variația energiei interne a sistemului, cât și la efectuarea de lucru mecanic de către sistem.**


- Dacă **sistemul este izolat adiabatic** (nu schimbă căldură cu exteriorul), atunci 

**Q = 0 și L = –ΔU = –(U<sub>2</sub> – U<sub>1</sub>), adică un sistem izolat adiabatic schimbă lucru mecanic cu exteriorul numai pe seama variației energiei interne.**

- Dacă **sistemul nu schimbă lucru mecanic cu exteriorul** (L= 0), ci numai căldură atunci 

**ΔU = Q, adică căldura primită de sistem duce la creșterea energiei interne a sistemului.**  



- **Într-o transformare ciclică, ΔU = U<sub>2</sub> – U<sub>1</sub> = 0 și L = Q, adică sistemul poate efectua lucru mecanic numai dacă el primește căldură din exterior.**

**De aici rezultă și imposibilitatea existenței unui perpetuum mobile de speța întâi** (dispozitiv care să producă lucru mecanic fără să consume energie din exterior).



</div>


<br></br>
<br></br>


## I.4.5. Coeficienți calorici. Calorimetrie.



<div class="alert alert--success" role="alert">

&#128064 **Experiment:De cine depinde căldura absorbită de un corp?**   
&#128293 **Atenție!** când lucrezi cu surse de foc! 



<Video src="https://www.youtube.com/embed/a7OWO8CB2YM"  />


**Materiale necesare:**   
Două pahare Berzelius, apă rece de la robinet, spirtieră, sită de azbest, trepied, termometru, cronometru, ulei.

<br></br>


**A) Care masă de apă absorbe mai multă căldură, 50g sau 100g?**

<br></br>

**Descrierea experimentului:**

- Pune într-un pahar 50 g de apă și introdu în apă un termometru. Încălzește la flacăra unei spirtiere, apa prin intermediul sitei de azbest de pe trepied
- Cronometrează timpul în care masa de 50g apă și-a mărit temperatura cu 10°C
  > t<sub>1</sub> = 39 s.
- Pune într-un pahar o masă de 100 g de apă și introdu în apă un termometru. Încălzește apa la flacăra unei spirtiere, prin intermediul sitei de azbest de pe trepied. 
- Cronometrează timpul în care masa de100g apa și-a mărit temperatura cu 10 °C 
  > t<sub>2</sub> = 48,6 s.

Depinde căldura absorbită de masa corpului ?

Cu cât timpul de încălzire este mai mare, cu atât și căldura absorbită este mai mare.

**Observație:**   
O masă de 100 g apă absoarbe mai multă căldură decât o masă de 50 g apă.

**Concluzia experimentului:**   
Căldura primită/cedată de un corp în procesul de încălzire/răcire este direct proporțională cu masa corpului Q ~m.



<br></br>
<br></br>



**B) Depinde căldura absorbită de variația temperaturii?**

<br></br>

**Descrierea experimentului:**


- Cronometrează timpul în care o masă de100g apa și-a mărit temperatura cu 20°C:
  > t<sub>3</sub> = 2min 3s.
- Compară cu timpul în care aceeași masă de 100g apă și-a mărit temperatura cu 10°C.

Depinde căldura absorbită de variația temperaturii corpului?

**Observație:**   
O masă de 100 g apă absoarbe mai multă căldură pentru a-și mări temperatura cu 20°C, decât o masă de 100 g apă pentru a-și mări temperatura cu 10°C.

**Concluzia experimentului:**   
Căldura primită/cedată de un corp în procesul de încălzire/răcire este direct proporțională cu variația temperaturii corpului: Q ~ ΔT.



<br></br>
<br></br>



**C) Depinde căldura absorbită de substanța corpului?**

<br></br>

**Descrierea experimentului:**
- Pune o masă de 100 g ulei într-un pahar Berzelius și introdu termometrul în ulei. 
- Măsoară temperatura inițială a uleiului care trebuie să fie aceeași cu cea a apei (30°C).
- Cronometrează timpul în care uleiul și-a mărit temperatura cu 20°C:
  > t<sub>4</sub> = 46,55 s. 


Compară cu timpul în care o masă de 100g apă și-a mărit temperatura cu 20°C.

Depinde căldura absorbită de substanța din care este alcătuită corpul?


**Observație:**   
O masă de 100 g apă absoarbe mai multă căldură decât o masă de 100 g ulei, pentru a-și mări temperatura cu 20°C.

**Concluzia experimentului:**   
**Căldura primită/cedată de un corp în procesul de încălzire/răcire depinde de natura substanței. Deci se poate defini o constantă de material numită căldură specifică, notată cu c.**

Deci căldura primită/cedată de un corp la încălzire/răcire depinde direct proporțional de trei factori:   
- masa corpului,   
- variația temperaturii și   
- natura substanței corpului.




</div>


<br></br>












<div class="alert alert--primary" role="alert">

Coeficienții calorici reprezintă mărimile fizice care caracterizează schimbul de căldură dintre sistemele termodinamice. Printre cei mai importanți avem :


1) **Căldura specifică (c)** reprezintă mărimea fizică ce caracterizează căldura absorbită /cedată de 1kg de substanță pentru a-și mări /micșora temperatura cu un grad. Ea este o constantă de material și o găsim în tabelul cu constante de la sfârșitul acestui capitol.




<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-5-coeficienti-calorici-calorimetrie-poza1-formula-caldurii-specifice-si-unitatea-de-masura-a-caldurii-specifice.png" width="1000" height="178" />

<br></br>
<br></br>



**Căldura primită/ cedată de un corp (Q) în procesul de încălzire/ răcire are următoarea formulă:**

**Q = m ∙ c ∙ ΔT**

m = masa corpului	

c = căldura specifică (constantă de material, specifică fiecărei substanțe)

**ΔT = T<sub>finală</sub> – T<sub>inițială</sub>** ,variația temperaturii corpului (adică, cu cât crește/ scade temperatura lui)

Q<sub>primită</sub> > 0

Q<sub>cedată</sub> < 0


Ecuația calorimetrică : Q<sub>primită</sub> = | Q<sub>cedată</sub> |



</div>


<br></br>


<div class="alert alert--secondary" role="alert">

&#128294 **Observație**


Căldurile specifice pot avea valori diferite pentru aceași substanță dacă aceasta se găsește în stări de agregare diferite. 

**c<sub>apă</sub> ≠ c<sub>gheață</sub>**



<Video src="https://www.youtube.com/embed/UxFlAVvUCAg"  />






</div>


<br></br>


<div class="alert alert--primary" role="alert">

2) **Capacitatea calorică (C)** reprezintă mărimea fizică ce caracterizează cantitatea de căldură necesară sistemului termodinamic pentru a-și varia temperatura cu un grad.



<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-5-coeficienti-calorici-calorimetrie-poza2-formula-capacitatii-calorice-si-unitatea-de-masura-a-capacitatii-calorice.png" width="1000" height="231" />



</div>

<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

**Căldura specifică** este o mărime caracteristică **substanței** din sistemul termodinamic.

**Capacitatea calorică** este o mărime caracteristică **sistemului termodinamic.**

Sistemul termodinamic poate reprezenta un calorimetru, în care schimbul de căldură este permis doar între corpurile introduse. Capacitatea calorică a unui calorimetru este înscrisă pe vasul respectiv la fabricația acestuia.



</div>


<br></br>


<div class="alert alert--primary" role="alert">

**3) Căldura molară (C<sub>μ</sub>)** este căldura necesară pentru a modifica temperatura unui mol dintr-o substanță cu un grad.


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-5-coeficienti-calorici-calorimetrie-poza3-formula-caldurii-molare-si-unitatea-de-masura-a-caldurii-molare.png" width="1000" height="181" />





</div>


<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

1. Pentru ν = 1 mol, atunci m = μ (masa molară a substanței) și vom avea ecuația:

**C<sub>μ</sub> = μ ∙ c**

2. La gaze, căldura molară la presiune constantă este mai mare decât căldura molară la volum constant: 

**C<sub>p</sub> > C<sub>V</sub> sau c<sub>p</sub> > c<sub>V</sub>.** 


La solide și lichide, C<sub>p</sub> = C<sub>V</sub> sau c<sub>p</sub> = c<sub>V</sub> și de aceea nu se mai pun indici.



</div>



<br></br>



<div class="alert alert--success" role="alert">

&#128064 **Experiment:Calcularea căldurii specifice a unui corp solid**   
&#128293 **Atenție!** când lucrezi cu surse de foc! 



<Video src="https://www.youtube.com/embed/-CbMuZP8igA"  />



**Materiale necesare:**   
Apă rece de la robinet, sită de azbest, stativ, trepied, termometru, calorimetru (vas care izolează termic corpurile din interiorul său de cele din exterior), cilindru de cupru, pahar Berzelius, spirtieră, cârlig.


<br></br>


**Descrierea experimentului:**
- Măsoară cu cântarul masa apei: m<sub>1</sub> = 100 g = 0,1 kg.
- Măsoară cu termometrul temperatura apei: t<sub>1</sub> = 30°C .
- Măsoară cu cântarul masa cilindrului de cupru: m<sub>2</sub> = 78 g = 0,078 kg
- Încălzește apă într-un pahar Berzelius cu ajutorul spirtierei și a trepiedului cu sită.
- În apa caldă pune cilindrul de cupru și termometrul. Lasă-le câteva minute și apoi citește temperatura cilindrului de cupru încălzit: t<sub>2</sub> = 90°C.
- Pune în calorimetru apa rece cântărită.
- Cu cârligul metalic ia corpul din pahar și pune-l rapid în apa din calorimetru.
- Acoperă calorimetrul și agită ușor apa din el.
- Urmărește indicațiile termometrului până când temperatura nu se mai modifică. Aceasta este temperatura de echilibru, notată cu t<sub>e</sub> = 35°C, care reprezintă temperatura finală pentru toate corpurile aflate în contact termic.
  > Apa rece va  primi căldură, iar cilindrul de cupru este corpul cald, care cedează căldură.


Neglijăm capacitatea calorică a calorimetrului, pentru simplificarea calculelor.

Δt<sub>1</sub> = t<sub>e</sub> – t<sub>1</sub> = variația (creșterea) temperaturii apei (temperatura finală minus  cea inițială).

Δt<sub>2</sub> = t<sub>e</sub> – t<sub>2</sub> = variația (scăderea) temperaturii cilindrului (scădem temperatura inițială din cea finală, astfel încât variația temperaturii să fie tot timpul pozitivă).

**Scriem ecuația calorimetrică: | Q<sub>cedată</sub>| = Q<sub>primită</sub>**

| Q<sub>cedată</sub> | = m<sub>2</sub> ∙ c<sub>2</sub> ∙ Δt<sub>2</sub> = m<sub>2</sub> ∙ c<sub>2</sub> ∙ (t<sub>e</sub> – t<sub>2</sub>) 

Q<sub>primită</sub> = m<sub>1</sub> ∙ c<sub>1</sub> ∙ Δt<sub>1</sub> =  m<sub>1</sub> ∙ c<sub>1</sub> ∙ (t<sub>e</sub> – t<sub>1</sub>) 

| m<sub>2</sub> ∙ c<sub>2</sub> ∙ (t<sub>e</sub> – t<sub>2</sub>) |	=  m<sub>1</sub> ∙ c<sub>1</sub> ∙ (t<sub>e</sub> – t<sub>1</sub>) 


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-5-coeficienti-calorici-calorimetrie-poza4-experiment-calculul-caldurii-specifice-a-cuprului-formula1.png" width="1000" height="109" />

<br></br>
<br></br>




Pentru experimentul meu, iată calculul determinării căldurii specifice a cuprului:


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-4-5-coeficienti-calorici-calorimetrie-poza5-experiment-calculul-caldurii-specifice-a-cuprului-formula2.png" width="1000" height="128" />



<br></br>
<br></br>


Comparăm cu căldura specifică a cuprului din tabel (385 J/(kg∙K)) și observăm că valoarea experimentală este destul de departe de valoarea reală. Ca surse de erori am descoperit : citiri neatente ale temperaturilor corpurilor, a durat cam mult timp până am închis capacul calorimetrului, am realizat decât o singură determinare, nu am luat în calcul și capacitatea calorimetrului.



</div>


<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**


În cazul sistemelor neomogene de corpuri, ca în cazul acestui experiment, este necesar să cunoaștem temperaturile inițiale ale corpurilor din sistem, masele lor și căldurile lor specifice. Astfel vom putea ști evoluția termică a acestui sistem de corpuri.




</div>


<br></br>


<div class="alert alert--warning" role="alert">

&#128275 **Probleme rezolvate**



**1. Într-o masă de 20g de glicerină se pune o masă de 50 g fier la temperatura de 90°C . Știind că temperatura de echilibru este de 50°C, află temperatura inițială a glicerinei.**

Se dă:

-căldura specifică a glicerinei de 2400 J/Kg∙K

-căldura specifică a fierului de 450 J/Kg∙K


<br></br>


**Rezolvare:**




_Înainte de a scrie datele problemei, se stabilește corpul rece, respectiv cel cald:_


Corp 1: glicerină : rece   =˃  primește căldură: Q<sub>primită</sub>

Corp 2: fier : cald       =˃  cedează căldură: Q<sub>cedată</sub>


_Scriem datele problemei, punând indice 1 la datele despre glicerină și indice 2 la datele despre fier. Transformăm mărimile din date în SI, cu excepția temperaturii, deoarece diferența dintre două temperaturi în grade Celsius este egală cu diferența temperaturilor în Kelvin._

m<sub>1</sub> = 20 g = 0,02 kg

c<sub>1</sub> = 2400 J/kg ∙ K

m<sub>2</sub> = 50 g = 0,05 kg

t<sub>2</sub> = 90 °C

c<sub>2</sub> = 450 J/kg ∙ K

t<sub>e</sub> = 50 °C

t<sub>1</sub> = ?


<br></br>


_Calculăm căldura cedată:_

Q<sub>cedată</sub> = m<sub>2</sub> ∙ c<sub>2</sub> ∙ Δ<sub>t2</sub> =  0,05 kg ∙ 450 J/kg∙K  ∙ (t<sub>e</sub> - t<sub>2</sub>) K = 0,05 ∙ 450 ∙ (50 – 90) J =  -900 J


<br></br>


_Calculăm căldura primită:_

Q<sub>primită</sub> = m<sub>1</sub> ∙ c<sub>1</sub> ∙ Δ<sub>t1</sub>  =  0,02kg ∙ 2400 J/kg∙K ∙ (t<sub>e</sub> – t<sub>1</sub>) K = 2 ∙ 24 ∙ (50 - t<sub>1</sub>)

<br></br>

_Scriem ecuația calorimetrică:_

| Q<sub>cedată</sub> | = Q<sub>primită</sub>

<br></br>


_Facem calculele matematice:_    

900 J = (48 ∙ 50 - 48 ∙ t<sub>1</sub>) J

48 ∙ t<sub>1</sub> = 2400 - 900

48 ∙ t<sub>1</sub> = 1500

t<sub>1</sub> = 31,25 °C



<br></br>
<br></br>


**2. Într-un calorimetru a cărui capacitate calorică este 80 J/kg, se pune o masă de 200g apă la temperatura de 10°C. În apa din calorimetru se introduce un corp de aluminiu care cântărește 100g,  cu temperatura de 100°C. Care este temperatura finală a celor două corpuri?** 

Se dă:

Căldura specifică a apei de 4185 J/kg∙K

Căldura specifică a aluminiului de 880 J/kg∙K.

Capacitatea calorică a calorimetrului este C = 80 J/kg.



<br></br>


**Rezolvare:**


_Înainte de a scrie datele problemei, se stabilește corpul rece, respectiv cel cald:_

Corp 1: apa și calorimetrul : rece =˃ primește căldură : Q<sub>primită</sub>

Corp 2: aluminiul : cald =˃ cedează căldură : Q<sub>cedată</sub>

<br></br>

_Scriem datele problemei, punând indice 1 la datele despre apă și indice 2 la datele despre aluminiu. Transformăm mărimile din date în SI, cu excepția temperaturii, deoarece diferența dintre două temperaturi în grade Celsius este egală cu diferența temperaturilor în Kelvin._

C = 80 J/K
m<sub>1</sub> = 200g = 0,2 kg
t<sub>1</sub> = 10°C
c<sub>1</sub> = 4185 J/kg∙K
m<sub>2</sub> = 100g = 0,1 kg
t<sub>2</sub> = 100°C
c<sub>2</sub> = 880 J/kg∙K
t<sub>e</sub> = ?

<br></br>

_Calculăm căldura primită:_

Q<sub>primită</sub> = m<sub>1</sub> ∙ c<sub>1</sub> ∙ Δ<sub>t1</sub> + C ∙ Δ<sub>t1</sub> = m<sub>1</sub> ∙ c<sub>1</sub> ∙ (t<sub>e</sub> – t<sub>1</sub>) + C ∙ (t<sub>e</sub> – t<sub>1</sub>)

<br></br>


_Calculăm căldura cedată:_

Q<sub>cedată</sub> = m<sub>2</sub> ∙ c<sub>2</sub> ∙ Δ<sub>t2</sub> =  m<sub>2</sub> ∙ c<sub>2</sub> ∙ (t<sub>e</sub> – t<sub>2</sub>) 


<br></br>

_Scriem ecuația calorimetrică:_

| Q<sub>cedată</sub> | = Q<sub>primită</sub>


| m<sub>2</sub> ∙ c<sub>2</sub> ∙ (t<sub>e</sub> – t<sub>2</sub>)| = m<sub>1</sub> ∙ c<sub>1</sub> ∙ (t<sub>e</sub> – t<sub>1</sub>) + C ∙ (t<sub>e</sub> – t<sub>1</sub>)


<br></br>

_Înlocuim datele problemei și facem calculele matematice:_
	

| 0,1kg ∙ 880 J/(kg∙K)∙ (t<sub>e</sub> – 100)K | = 0,2kg ∙ 4185J/(kg∙K) ∙ (t<sub>e</sub> – 10)K + 80 J/K∙(t<sub>e</sub> – 10) K


|88 ∙ (t<sub>e</sub> – 100) | = 0,2 ∙ 4185 ∙ t<sub>e</sub> – 0,2 ∙ 4185 ∙ 10 + 80 ∙ t<sub>e</sub> – 80 ∙ 10

|88 ∙ t<sub>e</sub> – 88 ∙ 100 | = 837 ∙ t<sub>e</sub> – 8370 + 80 ∙ t<sub>e</sub> – 800

|88 ∙ t<sub>e</sub> – 8800 | = 917 ∙ t<sub>e</sub> – 9170

<br></br>


_Pentru desfacerea modulului trebuie să determinăm dacă termenul din modul este pozitiv sau negativ._ 

_Temperatura de echilibru (t<sub>e</sub>) este întotdeauna cuprinsă între temperaturile inițiale ale celor două corpuri puse în contact termic._ 

_Ca atare, în cazul nostru 10°C < te < 100°C și din această cauză termenul din modul va fi întotdeauna negativ. La desfacerea modului se va schimba semnul termenului, respectiv se va înmulți cu (-1)._


(-1) ∙ (88 ∙ t<sub>e</sub> – 8800) = 917 ∙ t<sub>e</sub> – 9170

– 88 ∙ t<sub>e</sub> + 8800 = 917 ∙ t<sub>e</sub> – 9170

17970 = 1005 ∙ t<sub>e</sub>

t<sub>e</sub>  = 17970/1005 = 17,88 °C






</div>

