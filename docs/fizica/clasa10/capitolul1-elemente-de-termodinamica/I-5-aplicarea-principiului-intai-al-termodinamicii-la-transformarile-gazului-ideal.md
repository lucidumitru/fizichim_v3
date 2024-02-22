---
sidebar_position: 5
custom_edit_url: null
---

# I.5. Aplicarea principiului întâi al termodinamicii la transformările gazului ideal.


<ul class="table-of-contents table-of-contents__left-border"><li><a href="#i51-coeficienții-calorici-ai-gazelor-ideale-grade-de-libertate-ale-moleculei" class="table-of-contents__link toc-highlight">I.5.1. Coeficienții calorici ai gazelor ideale. Grade de libertate ale moleculei.</a></li><li><a href="#i52-transformări-simple-ale-gazului-ideal" class="table-of-contents__link toc-highlight">I.5.2. Transformări simple ale gazului ideal.</a></li><li><a href="#i53-relația-lui-robert--mayer-extindere" class="table-of-contents__link toc-highlight table-of-contents__link--active">I.5.3. Relația lui Robert – Mayer. Extindere.</a></li></ul>


import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'



## I.5.1. Coeficienții calorici ai gazelor ideale. Grade de libertate ale moleculei.



<div class="alert alert--warning" role="alert">

În fizică un grad de libertate exprimă fiecare dintre mărimile scalare independente necesare pentru determinarea univocă a stării unui sistem. Numărul minim de parametri prin care se poate preciza starea sistemului reprezintă numărul de grade de libertate.

În mecanică, poziția unui punct material liber în spațiu (care nu face parte dintr-un sistem) se determină prin cele 3 coordonate carteziene x, y și z.

Poziția unui sistem format din două puncte materiale aflat în spațiu la o anumită distanță unul față de altul este dată de 5 coordonate și nu de 6 (câte 3 pentru fiecare punct). Acest lucru se întâmplă deoarece fiecare dependență bilaterală (în cazul nostru, expresia distanței dintre puncte) scade numărul gradelor de libertate cu o unitate.

Pentru un sistem format din 3 sau mai multe puncte materiale există 6 coordonate independente



</div>


<br></br>





<div class="alert alert--primary" role="alert">


Cum în termodinamică moleculele gazului ideal sunt considerate puncte materiale, coordonatele independente ce caracterizează sistemul termodinamic se numesc **grade de libertate.**


Dacă i = nr. grade de libertate ale moleculei gazului ideal, atunci vom avea :

- Pentru gazele monoatomice: i = 3


- Pentru gazele diatomice: i = 5


- Pentru gazele poliatomice: i = 6



**Căldura molară la volum constant este:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-1-coeficientii-calorici-ai-gazelor-ideale-poza1-formula-caldurii-molare-la-volum-constant.png" width="1000" height="93" lazy={false} />

<br></br>
<br></br>
<br></br>


**Căldura molară la presiune constantă este:**



<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-1-coeficientii-calorici-ai-gazelor-ideale-poza2-formula-caldurii-molare-la-presiune-constanta.png" width="1000" height="103" lazy={false} />



R = constanta universală a gazelor = 8,3143 ∙ 10<sup>3</sup> J/kmol ∙ K




</div>


<br></br>

<br></br>


## I.5.2. Transformări simple ale gazului ideal.


<div class="alert alert--primary" role="alert">

**A. În cazul transformării izocore (ν și V const.)** → ΔV = 0 → L<sub>V</sub> = p ∙ ΔV = 0. 

Avem două cazuri:

- Gazul închis într-un de volum constant este încălzit, absoarbe căldură → Q<sub>V</sub> > 0 și ΔU > 0 (crește energia internă a gazului).

- Gazul închis într-un de volum constant este răcit, cedează căldură → Q<sub>V</sub> < 0 și ΔU < 0 (scade energia internă a gazului).

**ΔU = Q<sub>V</sub> = ν ∙ C<sub>V</sub> ∙ ΔT**


ΔU = U – U<sub>0</sub> și ΔT = T – T<sub>0</sub>, pentru T<sub>0</sub> = 0 K → U<sub>0</sub> = 0


**Energia internă a unui gaz ideal monoatomic este:**

**U = ν ∙ C<sub>V</sub> ∙ T = 3/2 ∙ ν ∙ R ∙ T**




</div>


<br></br>


<div class="alert alert--primary" role="alert">

**B. În cazul transformării izobare (ν și p const.)** dacă gazul este încălzit, absoarbe căldură → Q<sub>p</sub> > 0 și o parte din energie este folosită la creșterea energiei interne a gazului ΔU > 0 și cealaltă parte este lucrul mecanic efectuat de gaz asupra exteriorului, L > 0.

L = p ∙ ΔV

Q<sub>p</sub> = ν ∙ C<sub>p</sub> ∙ ΔT


**Variația energiei interne nu depinde de proces și putem scrie:**

**ΔU = ν ∙ C<sub>V</sub> ∙ ΔT**



</div>

<br></br>


<div class="alert alert--primary" role="alert">

**C. În cazul transformării izoterme (ν și T const.)** → U = const. și ΔU = 0. 

Când gazul este încălzit, absoarbe căldură → Q<sub>T</sub> > 0 și L > 0, fiind folosită integral pentru efectuarea de lucru mecanic asupra exteriorului.


Într-o transformare izotermă, presiunea este invers proporțională cu volumul gazului și atunci avem **lucrul mecanic:**




<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-2-transformari-simple-ale-gazului-ideal-poza1-formula-de-calcul-a-lucrului-mecanic-intr-o-transformare-izoterma.png" width="1000" height="434" />







</div>


<br></br>


<div class="alert alert--primary" role="alert">

**D. În cazul transformării adiabatice (ν const.) → Q<sub>ad</sub> = 0**


ΔU = - L<sub>ad</sub>

ΔU = ν ∙ C<sub>V</sub> ∙ΔT

L<sub>ad</sub> = - ν ∙ C<sub>V</sub> ∙ ΔT


**Ecuația procesului adiabatic se numește ecuația Poisson:**



<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-2-transformari-simple-ale-gazului-ideal-poza2-ecuatia-procesului-adiabatic-sau-ecuatia-poisson.png" width="1000" height="349" />





</div>


<br></br>


<div class="alert alert--primary" role="alert">


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-2-transformari-simple-ale-gazului-ideal-poza3-schema-mentala-procese-termodinamice-ale-gazului-ideal.png" width="1000" height="661" />




</div>




<br></br>

<br></br>


## I.5.3. Relația lui Robert – Mayer. Extindere.

<div class="alert alert--primary" role="alert">


În cazul **transformării izocore (ν și V const.)** → ΔV = 0 → L<sub>V</sub> = p ∙ ΔV = 0


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-3-relatia-lui-robert-mayer-poza1-relatia-lui-robert-mayer-in-cazul-transformarii-izocore.png" width="1000" height="179" />






</div>

<br></br>

<div class="alert alert--primary" role="alert">

În cazul **transformării izobare (ν și p const.)**


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-3-relatia-lui-robert-mayer-poza2-relatia-lui-robert-mayer-in-cazul-transformarii-izobare.png" width="1000" height="164" />






</div>






<br></br>

<div class="alert alert--primary" role="alert">

Combinând cele două relații ale lui C<sub>p</sub> și C<sub>V</sub> obținem


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-3-relatia-lui-robert-mayer-poza3-relatia-lui-robert-mayer-combinata.png" width="1000" height="93" />

<br></br>
<br></br>

Din ecuația termică de stare: 

**p ∙ ΔV = ν ∙ R ∙ ΔT**






</div>


<br></br>

<div class="alert alert--primary" role="alert">

**Relația lui Robert–Mayer stabilește relația între căldurile molare:**

**C<sub>p</sub> = C<sub>V</sub> + R**


</div>

<br></br>


<div class="alert alert--primary" role="alert">

Relația lui Robert–Mayer stabilește relația între căldurile specifice molare:


<Img className="img-responsive4" src="fizica/clasa10/capitolul1/I-5-3-relatia-lui-robert-mayer-poza4-relatia-dintre-caldurile-specifice-molare.png" width="1000" height="90" />




</div>