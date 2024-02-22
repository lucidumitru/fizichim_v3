---
sidebar_position: 8
custom_edit_url: null
---

# II.8. Gruparea rezistoarelor.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'







<div class="alert alert--primary" role="alert">

Orice element de circuit (generator electric, bec, rezistor, motor, întrerupător) poate fi legat (grupat) cu un altul (de același fel sau diferit) în două moduri: 

- **În serie** și

- **În paralel.**

În viața de zi cu zi întâlnim grupări mixte de serie cu paralel.


</div>




<br></br>




<div class="alert alert--primary" role="alert">

Un grup de rezistoare se înlocuiește cu unul singur, denumit **rezistor echivalent.** Rezistența acestuia reprezintă echivalentul rezistențelor respectivei grupări.

</div>


<br></br>




<div class="alert alert--success" role="alert">

&#128064 **Experiment: Gruparea în serie a rezistoarelor**


<Video src="https://www.youtube.com/embed/SgMR7hyTODo" lazy={false} />



**Materiale necesare:**   
Baterie electrică, rezistoare de diferite valori ( 50 Ω, 100 Ω ), fire de legătură, ampermetru, voltmetru (multimetru).

<br></br>


**Descrierea experimentului:**
- Realizează următorul montaj legând în serie cele 2 rezistoare.



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza1-experiment-gruparea-in-serie-a-rezistoarelor-schema-circuit.png" width="1000" height="212" lazy={false} /> 


- Aplică o tensiune de la baterie și măsoară intensitatea curentului electric, tensiunea de la capetele grupării și tensiunea pe fiecare rezistor.
- Calculează raportul dintre tensiunea de la capetele grupării și intensitatea ce trece prin ele, adică rezistența electrică a grupării celor două rezistoare. În ce relație se află cele trei tensiuni măsurate, respectiv rezistența grupării cu rezistențele celor 2 rezistoare ?
  > Tensiunea dintre capetele grupării de rezistoare este egală în acest caz cu suma tensiunilor de la bornele celor două rezistoare.    
  > Se observă că suma rezistențelor celor două rezistoare este egală cu rezistența grupării de rezistoare.



**Concluzia experimentului:**   
Aplicând la capetele rezistorului echivalent aceeași tensiune ca la bornele grupării în serie, prin rezistorul echivalent circulă același curent ( I ) ca prin gruparea echivalată: U = U<sub>1</sub> + U<sub>2</sub> .

Se poate scrie:   
U<sub>1</sub> = IR<sub>1</sub>; U<sub>2</sub> = IR<sub>2</sub> ; U = IR<sub>s</sub> ;    
U = U<sub>1</sub> + U<sub>2</sub>   
IR<sub>s</sub> = IR<sub>1</sub> + IR<sub>2</sub>   
R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>




</div>



<br></br>


<div class="alert alert--primary" role="alert">

Rezistoarele prin care trece același curent și care se află pe aceeași latură a unui circuit formează o grupare în serie, fiind echivalate cu rezistorul R<sub>s</sub> .

**Rezistența echivalentă a unei grupări serie de rezistoare este egală cu suma rezistențelor fiecărui rezistor:**

**R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>** 



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza2-rezistenta-echivalenta-a-unei-grupari-serie.png" width="1000" height="117" lazy={false} /> 



</div>



<br></br>




<div class="alert alert--success" role="alert">

&#128064 **Experimentul 19: Gruparea în paralel a rezistoarelor**


<Video src="https://www.youtube.com/embed/KH4F7V-bha8" />



**Materiale necesare:**   
Baterie electrică, rezistoare de diferite valori ( 50 Ω, 100 Ω ), fire de legătură, ampermetru, voltmetru (multimetru).

<br></br>

**Descrierea experimentului:**
- Realizează următorul montaj legând în paralel cele două rezistoare.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza3-experiment-gruparea-in-paralel-a-rezistoarelor-schema-circuit.png" width="1000" height="232" /> 


- Aplică o tensiune de la baterie și măsoară intensitatea curentului electric ce trece atât prin fiecare rezistor, cât și prin circuitul cu sursa.
- Măsoară tensiunea electrică de la capetele grupării și tensiunea pe fiecare rezistor.
- Calculează rapoartele dintre intensitate și tensiune (adică inversele rezistențelor electrice dintre punctele de măsurare) pentru fiecare dintre cele trei măsurători.
- În ce relație se află cele trei intensități măsurate? Dar cele trei tensiuni măsurate?
  > Suma inverselor celor două rezistențe este egală cu inversul rezistenței circuitului. Intensitatea curentului ce intră în grupare este egală cu suma intensităților curenților ce trec prin cele două rezistoare, iar tensiunile măsurate sunt egale.


<br></br>

**Concluzia experimentului:**   
Aplicând la capetele rezistorului echivalent aceeași tensiune ca la bornele grupării în paralel, pe rezistorul echivalent va cădea aceeași tensiune ca pe fiecare dintre rezistoarele din grupare: U = U<sub>1</sub> = U<sub>2</sub>.

Se poate scrie:

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza4-experiment-gruparea-in-paralel-a-rezistoarelor-calculul-rezistentei-echivalente-paralel.png" width="1000" height="429" /> 



Simplificând pe U de la numărător obținem formula rezistenței echivalente paralel.



</div>





<br></br>


<div class="alert alert--primary" role="alert">


Rezistoarele care se află pe laturi diferite între aceleași două noduri ale unui circuit, având aceeași tensiune la capete formează o grupare în paralel, fiind echivalate cu rezistorul R<sub>p</sub>.


**Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu suma inverselor rezistențelor fiecărui rezistor:**

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza5-formula-de-calcul-a-rezistentei-echivalente-a-unei-grupari-paralel.png" width="1000" height="105" /> 



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza6-rezistenta-echivalenta-a-unei-grupari-paralel-schema-circuit.png" width="1000" height="244" /> 





</div>




<br></br>


<div class="alert alert--warning" role="alert">

&#128275 **Probleme rezolvate**


**1. Determină rezistenţa echivalentă a rezistoarelor din următoarea grupare mixtă:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza7-problema-rezolvata1-schema-circuit1.png" width="1000" height="397" /> 


<br></br>
<br></br>


**Rezolvare:**


<Video src="https://www.youtube.com/embed/SsLmO7mBFBQ" />



<br></br>
<br></br>



_Se notează pe rețea toate nodurile cu litere mari._

_Mergem pe conturul circuitului de la un nod la altul și echivalăm grupările de rezistoare cu rezistoarele echivalente, serie sau paralel:_   
Între nodul A și B avem 2 rezistoare pe aceeași latură, deci sunt în serie și le echivalăm cu R<sub>s1</sub>.    
Între nodul B și C avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p1</sub>.    
Între nodul A și E avem 1 rezistor pe care îl copiem.    
Între nodul E și F avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p2</sub>.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza8-problema-rezolvata1-schema-circuit2.png" width="1000" height="407" /> 


<br></br>
<br></br>




_Calculăm rezistențele echivalente:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza9-problema-rezolvata1-rezolvare1.png" width="1000" height="354" /> 


<br></br>
<br></br>

_Pe schema nouă, continuăm să echivalăm grupările de rezistoare:_   
Între nodul A și D, pe latura de sus, avem 2 rezistoare pe aceeași latură (R<sub>s1</sub> cu R<sub>p1</sub>), deci sunt în serie și le echivalăm cu R<sub>s2</sub> .    
Între nodul A și D, pe latura din mijloc, avem 2 rezistoare pe aceeași latură (R<sub>5</sub> cu R<sub>p2</sub>), deci sunt în serie și le echivalăm cu R<sub>s3</sub> .


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza10-problema-rezolvata1-schema-circuit3.png" width="1000" height="402" /> 


<br></br>
<br></br>

_Calculăm rezistențele echivalente:_   
R<sub>s2</sub> = R<sub>s1</sub> + R<sub>p1</sub> = 25 + 4 = 29Ω    
R<sub>s3</sub> = R<sub>5</sub> + R<sub>p2</sub> = 2 + 6 = 8Ω


<br></br>

_Pe schema nouă, continuăm să echivalăm grupările de rezistoare:_   
Între nodul A și D avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p3</sub>.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza11-problema-rezolvata1-schema-circuit4.png" width="1000" height="195" /> 


<br></br>
<br></br>

_Calculăm rezistența echivalentă:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza12-problema-rezolvata1-rezolvare2.png" width="1000" height="172" /> 



<br></br>
<br></br>


<br></br>
<br></br>


**2. Determină rezistenţa echivalentă a rezistoarelor din următoarea grupare mixtă:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza13-problema-rezolvata2-schema-circuit1.png" width="1000" height="326" />

<br></br>
<br></br>



**Rezolvare:**

<Video src="https://www.youtube.com/embed/L4Wx44G2-x8" />

<br></br>



_Notăm pe rețea toate nodurile cu litere mari._

_Mergem pe conturul circuitului de la un nod la altul și echivalăm grupările de rezistoare cu rezistoare echivalente, serie sau paralel:_   
Între nodul A și B, în partea stângă, avem 2 rezistoare pe aceeași latură (R<sub>1</sub> și R<sub>2</sub>), deci sunt în serie și le echivalăm cu R<sub>s1</sub>.    
Între nodul A și B avem 2 rezistoare pe aceeași latură (R<sub>4</sub> și R<sub>7</sub>), deci sunt în serie și le echivalăm cu R<sub>s2</sub>.    
Între nodul B și C avem 1 rezistor (R<sub>3</sub>), pe care îl copiem.    
Între nodul A și C avem 2 rezistoare pe aceeași latură (R<sub>5</sub> și R<sub>6</sub>), deci sunt în serie și le echivalăm cu R<sub>s3</sub>.    
Între nodul B și C avem sursa pe care o copiem.

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza14-problema-rezolvata2-schema-circuit2.png" width="1000" height="318" />

<br></br>
<br></br>


_Calculăm rezistențele echivalente:_   
R<sub>s1</sub> = R<sub>1</sub> + R<sub>2</sub> = 2 + 3 = 5Ω    
R<sub>s2</sub> = R<sub>4</sub> + R<sub>7</sub> = 7 + 13 = 20Ω    
R<sub>s3</sub> = R<sub>5</sub> + R<sub>6</sub> = 10 + 6 = 16Ω


<br></br>


_Pe schema nouă, continuăm să echivalăm grupările de rezistoare:_   
Între nodul A și B avem 2 rezistoare (R<sub>s1</sub> și R<sub>s2</sub>) pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p1</sub>. 


_Restul schemei o copiem._

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza15-problema-rezolvata2-schema-circuit3.png" width="1000" height="311" />

<br></br>
<br></br>




_Calculăm rezistența echivalentă:_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza16-problema-rezolvata2-rezolvare1.png" width="1000" height="153" />

<br></br>
<br></br>



_Pe schema nouă, continuăm să echivalăm grupările de rezistoare:_   
Între nodul B și C avem 2 rezistoare (R<sub>p1</sub> și R<sub>s3</sub>) pe aceeași latură, deci sunt în serie și le echivalăm cu R<sub>s4</sub>.

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza17-problema-rezolvata2-schema-circuit4.png" width="1000" height="323" />

<br></br>
<br></br>



_Calculăm rezistența echivalentă:_   
**R<sub>s4</sub> = R<sub>p1</sub> + R<sub>s3</sub> = 4 + 16 = 20Ω**

<br></br>




_Pe schema nouă, continuăm să echivalăm grupările de rezistoare:_   
Între nodul B și C avem 2 rezistoare (R<sub>s4</sub> și R<sub>3</sub>) pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p2</sub>.

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza18-problema-rezolvata2-schema-circuit5.png" width="1000" height="278" />

<br></br>
<br></br>


_Calculăm rezistența echivalentă a întregii grupări:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza19-problema-rezolvata2-rezolvare2.png" width="1000" height="154" />


<br></br>
<br></br>
<br></br>


**3. Determină intensitățile curenților din următorul circuit ramificat:**

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza20-problema-rezolvata3-schema-circuit1.png" width="1000" height="380" />

<br></br>
<br></br>



**Rezolvare:**


<Video src="https://www.youtube.com/embed/H1I5q7XgVo0" />


<br></br>





_Notăm cu litere mari nodurile rețelei (A și B)._

_Notăm laturile rețelei, stabilim arbitrar sensurile curenților de pe fiecare latură:_   
AE1B (I<sub>1</sub>)    
AE2B (I<sub>2</sub>)   
AR3B (I<sub>3</sub>)

_Notăm ochiurile simple ale rețelei. Stabilim arbitrar (cum dorim) câte un sens de parcurs pentru fiecare ochi (orar sau antiorar)._

_Aplicăm prima teoremă a lui Kirchhoff:_   
“Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul respectiv“.


_Pentru n = nr. noduri, se scriu _(n-1)_ ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea, în cazul nostru pentru un singur nod:_   
I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub>


_Aplicăm a doua teoremă a lui Kirchhoff:_   
“Suma algebrică a tensiunilor electromotoare pentru un ochi de circuit este egală cu suma algebrică a căderilor de tensiune din acel ochi de circuit“, pentru două ochiuri simple:

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza21-problema-rezolvata3-rezolvare1.png" width="1000" height="109" />

<br></br>
<br></br>


_Facem un sistem de 3 ecuații și cu cele trei necunoscute I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>._

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza22-problema-rezolvata3-rezolvare2.png" width="1000" height="158" />

<br></br>
<br></br>


_Înlocuim datele numerice:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza23-problema-rezolvata3-rezolvare3.png" width="1000" height="138" />

<br></br>
<br></br>

_Scoatem pe I<sub>1</sub> din prima ecuație:_   
I<sub>1</sub> = I<sub>3</sub> – I<sub>2</sub> și îl înlocuim în a doua ecuație    
12 = (I<sub>3</sub> – I<sub>2</sub>) ∙ 10 + I<sub>3</sub> ∙ 40 = I<sub>3</sub> ∙ 50 – I<sub>2</sub> ∙ 10 

<br></br>

_Rezolvăm sistemul cu 2 ecuații și 2 necunoscute, prin reducere:_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza24-problema-rezolvata3-rezolvare4.png" width="1000" height="397" />

<br></br>
<br></br>

_Înlocuim pe I<sub>3</sub> într-o ecuație cu I<sub>2</sub>:_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza25-problema-rezolvata3-rezolvare5.png" width="1000" height="128" />

<br></br>
<br></br>

_Schimbăm sensul curentului I<sub>2</sub> ales inițial, arbitrar, pe rețea:_

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza26-problema-rezolvata3-schema-circuit2.png" width="1000" height="364" />

<br></br>
<br></br>


_Din prima ecuație îl aflăm pe I<sub>1</sub>:_   
**I<sub>1</sub> = I<sub>3</sub> – I<sub>2</sub> = 0,2 – (–0,2) = 0,4 A**


<br></br>
<br></br>




**4. Becurile B<sub>2</sub> și B<sub>3</sub> au valorile nominale de 6 V și 0,1 A și funcționează normal. Ampermetrul indică 300 mA. Este identic becul B<sub>1</sub> cu becurile B<sub>2</sub> și B<sub>3</sub> ?**



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza27-problema-rezolvata4-schema-circuit1.png" width="1000" height="295" />

<br></br>
<br></br>


**Rezolvare:**

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-8-gruparea-rezistoarelor-poza28-problema-rezolvata4-schema-circuit2.png" width="1000" height="310" />

<br></br>
<br></br>

I = I<sub>1</sub> + I<sub>2</sub> = 0,3 A

I<sub>2</sub> = I<sub>3</sub> + I<sub>4</sub> = 0,2 A

I<sub>3</sub> = I<sub>4</sub> = 0,1 A

I<sub>1</sub> = 0,1 A


_Curentul din ramura principală cu sursa și cu ampermetrul se ramifică pe laturile becurilor B2 și B3, care fiind identice și legate în paralel, vor avea fiecare un curent de intensitate egală cu jumătate din curentul I<sub>2</sub>, adică 0,1 A._

_Becul B<sub>1</sub> are tensiunea nominală de 6 V și intensitatea nominală de I<sub>1</sub> = 0,1 A._

_Deci becul B<sub>1</sub> este identic cu becurile B<sub>2</sub> și B<sub>3</sub>._








</div>
