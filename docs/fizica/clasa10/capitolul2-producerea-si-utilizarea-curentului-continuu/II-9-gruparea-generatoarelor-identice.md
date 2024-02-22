---
sidebar_position: 9
custom_edit_url: null
---

# II.9. Gruparea generatoarelor identice.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




<div class="alert alert--primary" role="alert">

Prin gruparea mai multor surse se obține o „sursă echivalentă“ cu o tensiune electromotoare echivalentă și o rezistență internă echivalentă.


</div>


<br></br>





<div class="alert alert--success" role="alert">

&#128064 **Experiment: Rezistența internă a unei baterii**



<Video src="https://www.youtube.com/embed/wnWxQOzvppc" lazy={false} />


**Materiale necesare:**     
Baterii electrice de diferite tensiuni electromotoare, rezistor, fire de legătură, ampermetru, voltmetru (multimetru).




<br></br>



**Descrierea experimentului:**
- Realizează următorul montaj legând în paralel bornele voltmetrului la bornele bateriei, pentru a-i determina tensiunea electromotoare, E. (pentru o baterie nouă apare înscrisă pe baterie).

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza1-experiment-cum-determinam-rezistenta-interna-a-unei-baterii-schema-circuit1_v2.png" width="1000" height="201" lazy={false} />

- Realizează circuitul din următorul montaj și notează indicațiile ampermetrului ( I ).

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza2-experiment-cum-determinam-rezistenta-interna-a-unei-baterii-schema-circuit2_v2.png" width="1000" height="257" lazy={false}  />

- Din expresia legii lui Ohm pentru întreg circuitul, scoatem  rezistența internă a bateriei :

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza3-experiment-cum-determinam-rezistenta-interna-a-unei-baterii-formula-intensitate_v2.png" width="1000" height="100" lazy={false} />


<br></br>
<br></br>



- Formula pentru rezistența internă:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza4-experiment-cum-determinam-rezistenta-interna-a-unei-baterii-formula-rezistenta-interna_v2.png" width="1000" height="106" />

<br></br>
<br></br>



- Repetă întreaga procedură pentru altă baterie cu tensiune electromotoare diferită și trece datele în următorul tabel :


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza4bis-experiment-cum-determinam-rezistenta-interna-a-unei-baterii-tabel-date.png" width="1000" height="97" />

<br></br>
<br></br>



**Concluzia experimentului:**     
Fiecare sursă electrică de o anumită tensiune electromotoare are o anumită rezistență internă.


**Observație:**
> Pe măsură ce bateria “îmbătrânește” și gradul de deteriorare a bateriei crește (chiar dacă aceasta nu este folosită), rezistența internă a bateriei crește.



</div>





<br></br>


<div class="alert alert--success" role="alert">

&#128064 **Experiment: Gruparea în serie a generatoarelor**



<Video src="https://www.youtube.com/embed/G606D_sLgEs" />



**Materiale necesare:**    
Două baterii cu parametrii determinați în montajul anterior, un voltmetru, fire de legătură.


<br></br>

**Descrierea experimentului:**

- Măsoară, pe rând, tensiunea electromotoare a fiecărei baterii, legând în paralel voltmetrul la bornele bateriei. Notează-le cu E<sub>1</sub>, E<sub>2</sub>.
- Grupează două baterii în serie, legând borna plus a uneia la borna minus a celeilalte.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza5-experiment-gruparea-in-serie-a-generatoarelor-schema-circuit1.png" width="1000" height="273" /> 



- Măsoară tensiunea electromotoare a grupării, E<sub>S</sub> (la mers în gol - fără să fie conectate în circuit).
- Compară E<sub>s</sub> cu E<sub>1</sub> + E<sub>2</sub>.




<br></br>

**Concluzia experimentului:**   
Tensiunea electromotoare echivalentă este suma tensiunilor electromotoare ale bateriilor din grupare.


Teorema a doua a lui Kirchhoff pentru circuitul analizat este:   
**E<sub>1</sub> + E<sub>2</sub> = I (R<sub>bec</sub> + r<sub>1</sub> + r<sub>2</sub>)**



Obținem legea lui Ohm pentru întregul circuit:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza6-experiment-gruparea-in-serie-a-generatoarelor-calcul.png" width="1000" height="175" /> 




</div>



<br></br>









<div class="alert alert--primary" role="alert">

**Pentru o grupare în serie de n surse identice: tensiunea electromotoare a grupării serie de generatoare electrice:**

**E<sub>s</sub> = n · E**





</div>


<br></br>





<div class="alert alert--primary" role="alert">

**Tensiunea electromotoare a grupării serie de generatoare electrice este egală cu suma t.e.m. a generatoarelor:**



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza7-tensiunea-electromotoare-a-unei-grupari-serie-de-generatoare-electrice.png" width="1000" height="71" /> 





</div>




<br></br>





<div class="alert alert--primary" role="alert">


**Rezistența internă a grupării serie de generatoare electrice identice:**


**r<sub>s</sub> = n · r**



</div>



<br></br>






<div class="alert alert--primary" role="alert">


**Rezistența internă a grupării serie de generatoare electrice este egală cu suma rezistențelor interioare a generatoarelor:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza8-rezistenta-interna-a-unei-grupari-serie-de-generatoare-electrice.png" width="1000" height="66" /> 



</div>


<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**



Dacă avem mai multe baterii la dispoziție și avem nevoie de o tensiune mai mare decât a unei baterii, grupăm în serie bateriile.




</div>


<br></br>



<br></br>


<div class="alert alert--success" role="alert">

&#128064 **Experiment: O baterie din lămâi**


<Video src="https://www.youtube.com/embed/Xu9JAQnlpps" />



**Materiale necesare:**     
Lămâi, monede de 5 bani, agrafe de birou, fire de legătură, un voltmetru.

<br></br>

**Descrierea experimentului:**
- Introdu într-o lămâie într-o parte o monedă și în cealaltă parte agrafa de birou.
- Prinde câte un fir de legătură de monedă, respectiv de agrafă și conectează-le la un voltmetru în paralel. Notează tensiunea electromotoare a acesteia.
- Grupează în serie cu prima lămâie o altă lămâie, legând moneda uneia de agrafa celeilalte și leagă capetele acestei grupări la voltmetru în paralel. Notează tensiunea electromotoare a acestei grupări.
- Ce observi ?
  > Crește tensiunea electromotoare a grupării de lămâi.
- Dacă mai dispui de lămâi poți continua cu o grupare mai mare de baterii din lămâi.


<br></br>

**Concluzia experimentului:**   
Bateriile din lămâi generează curent electric ca și celelalte baterii, prin transformarea energiei chimice a reacțiilor care au loc între cele două metale diferite și sucul de lămâie în energie electrică.    
Prin legarea mai multor baterii în serie crește tensiunea electromotoare a grupării respective.




</div>



<br></br>


<div class="alert alert--success" role="alert">

&#128064 **Experiment: Gruparea în paralel a generatoarelor**



<Video src="https://www.youtube.com/embed/ZZ1arvfUIEI" />



**Materiale necesare:**    
Două baterii cu parametrii determinați în montajul anterior, un voltmetru, fire de legătură.

<br></br>

**Descrierea experimentului:**
- Măsoară, pe rând, tensiunea electromotoare a fiecărei baterii, legând în paralel voltmetrul la bornele bateriei. Notează-le cu E<sub>1</sub>, E<sub>2</sub>.
- Grupează două baterii în paralel, legând borna plus a uneia la borna plus a celeilalte și borna minus a uneia la borna minus a celeilalte.


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza9-experiment-gruparea-in-paralel-a-generatoarelor-schema-circuit.png" width="1000" height="325" /> 


- Măsoară tensiunea electromotoare la bornele grupării paralel la mers în gol, E<sub>p</sub>.


<br></br>




**Concluzia experimentului:**   
Pentru cazul particular în care cele două surse sunt identice se obține:   
E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub>




</div>



<br></br>




<div class="alert alert--primary" role="alert">

Pentru o grupare în paralel de n surse identice: tensiunea electromotoare a grupării paralel de generatoare electrice:

E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>


</div>




<br></br>




<div class="alert alert--primary" role="alert">

Pentru o grupare în paralel de n surse tensiunea electromotoare a grupării paralel  de generatoare electrice: 



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza10-tensiunea-electromotoare-a-unei-grupari-paralel-de-generatoare-electrice.png" width="1000" height="151" /> 



</div>


<br></br>



<div class="alert alert--primary" role="alert">


Rezistența internă a grupării serie de generatoare electrice identice:

<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza11-rezistenta-interna-a-unei-grupari-paralel-de-generatoare-electrice-identice.png" width="1000" height="90" /> 


</div>


<br></br>



<div class="alert alert--primary" role="alert">


Rezistența internă a grupării serie de generatoare electrice:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-9-gruparea-generatoarelor-identice-poza12-rezistenta-interna-a-unei-grupari-paralel-de-generatoare-electrice.png" width="1000" height="113" /> 


</div>

<br></br>



<div class="alert alert--secondary" role="alert">

&#128294 **Observație**



Dacă avem nevoie de un curent de o intensitate mai mare pentru un anumit circuit, grupăm bateriile în paralel.



</div>


