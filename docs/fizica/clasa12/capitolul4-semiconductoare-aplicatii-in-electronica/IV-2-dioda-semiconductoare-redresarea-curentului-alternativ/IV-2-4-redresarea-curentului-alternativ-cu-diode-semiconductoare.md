---
sidebar_position: 4
custom_edit_url: null
---

# IV.2.4.Redresarea curentului alternativ cu diode semiconductoare.





import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'


<div class="alert alert--primary" role="alert">

**Redresarea** constă în transformarea curentului alternativ în curent continuu.


</div>

<br></br>


<div class="alert alert--primary" role="alert">

**Redresorul** este un dispozitiv electronic care transformă curentul alternativ în curent continuu.

</div>


<br></br>



<div class="alert alert--info" role="alert">


Curentul electric produs de generatoarele electrice din cadrul centralelor electrice este curent alternativ. 

Transportul energiei electrice la distanță, de la centrale la consumatorii electrici, se realizează mai convenabil tot sub formă de curent alternativ. 

Majoritatea circuitelor electronice folosite în practică sunt alimentate cu curent continuu. Cele mai folosite redresoare sunt diodele semiconductoare.


**a) Redresorul monoalternanță** conține o singură diodă (D) care este alimentată la tensiunea alternativă a secundarului unui transformator (Tr). Dioda polarizată direct conduce pe perioada alternanțelor pozitive, când curentul și tensiunea aplicată au aceeași fază. Pe perioada alternanțelor negative dioda este blocată și curentul prin ea se anulează. Pentru micșorarea factorului de ondulație se leagă în paralel cu rezistorul (R) un condensator (C) de capacitate mare (zeci de microfarazi), denumit condensator de netezire. În momentul în care dioda conduce, condensatorul se încarcă rapid. În intervalul de timp dintre două alternanțe pozitive ale tensiunii U<sub>2</sub>, când dioda nu conduce, condensatorul se descarcă pe rezistorul de sarcină.

**În regimul de funcționare a redresorului cu condensator de netezire, tensiunea la bornele lui, care este și cea de la bornele rezistorului de sarcină, are o componentă continuă (U=) și o componentă alternativă de amplitudine mică (ΔU).**


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza1-schema-electronica-a-redresorului-monoalternanta.png" width="1000" height="433" lazy={false} />

<br></br>
<br></br>

Transformatorul reduce tensiunea de alimentare alternativă de la 220 V la o tensiune mai mică, necesară funcţionării montajului. 

Redresorul transformă tensiunea de intrare de curent alternativ într-o tensiune pulsatorie de curent continuu. 

Filtrul elimină fluctuaţiile tensiunii redresate, furnizând la ieşirea sa o tensiune de curent continuu relativ constantă.



</div>


<br></br>



<div class="alert alert--success" role="alert">

&#128064 **Experiment:Redresorul cu diodă semiconductoare monoalternanță**




<Video src="https://www.youtube.com/embed/jjN2No5pqzU" />


**Dioda semiconductoare** constă dintr-un semiconductor de tip p alăturat cu un semiconductor de tip n.


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza2_0-experiment-redresor-cu-dioda-monoalternanta.png" width="1000" height="134" lazy={false} />

<br></br>
<br></br>

**Deci, la polarizarea directă a diodei, aceasta conduce curentul electric.**


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza2_1-experiment-redresor-cu-dioda-monoalternanta.png" width="1000" height="267" lazy={false} />

<br></br>
<br></br>

<br></br>



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza2_2-experiment-redresor-cu-dioda-monoalternanta.png" width="1000" height="81" lazy={false} />

<br></br>
<br></br>

**Deci, în acest caz dioda nu conduce curentul electric.**




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza2_3-experiment-redresor-cu-dioda-monoalternanta.png" width="1000" height="245" lazy={false} />

<br></br>
<br></br>


**Dioda semiconductoare are rolul de a transforma curentul alternativ (c.a.) în curent continuu (c.c.), operație numită** ***redresare***. 



**Materiale necesare:**    
Sursă de c.a. de 6 V, diodă semiconductoare (1N4003), rezistor, osciloscop, conductori de legătură.

<br></br>

**Descrierea experimentului:**     
- Pentru vizualizarea tensiunii alternative pe ecranul osciloscopului aplică un semnal de la sursa de c.a. pe plăcile de deflexie verticală. Spotul va descrie o sinusoidă.




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza2-experiment-tensiunea-sinusoidala.png" width="1000" height="196" lazy={false} />

<br></br>
<br></br>


- Aplică pe plăcile de deflexie verticală tensiunea redresată de dioda semiconductoare. Spotul va arăta ca în următoarea imagine.




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza3-experiment-tensiune-redresata-monoalternanta.png" width="1000" height="202" lazy={false} />

<br></br>
<br></br>



**Concluzia experimentului:**     
***Dioda polarizată direct conduce pe perioada alternanțelor pozitive ale tensiunii alternative aplicată la bornele ei, când anodul diodei se află la un potențial ‘’mai pozitiv’’ decât catodul. Pe perioada alternanțelor negative dioda este blocată și curentul prin ea se anulează. Deci, dioda este un element de circuit neliniar, care permite trecerea curentului electric într-un singur sens.***


***La redresarea monoalternanță:***      
***• Când dioda este polarizată direct avem partea pulsatorie pozitivă.***        
***• Când este polarizată invers avem tensiunea zero, fiind eliminată partea pulsatorie negativă a tensiunii.***




</div>


<br></br>


<div class="alert alert--info" role="alert">

**b) Redresorul bialternanță** cu punte de diode are patru diode pe brațele unei punți alimentate în curent alternativ printr-o diagonală. Pe cealaltă diagonală se află rezistorul de sarcină la bornele căruia se culege tensiunea redresată. 

Pentru semialternanţa pozitivă a tensiunii de intrare diodele D<sub>1</sub> şi D<sub>3</sub> sunt polarizate direct, prin D<sub>1</sub> trece (+), iar prin D<sub>3</sub> trece (-). Diodele D<sub>2</sub> şi D<sub>4</sub> sunt polarizate invers.

Pentru semialternanţa negativă a tensiunii de intrare diodele D<sub>2</sub> şi D<sub>4</sub> sunt polarizate direct, prin D<sub>2</sub> trece (-), iar prin D<sub>4</sub> trece (+). Diodele D<sub>1</sub> şi D<sub>3</sub> sunt polarizate invers. 

Deci, în timpul alternanței pozitive conduc două dintre diode aflate pe laturi opuse și polarizate direct, iar în timpul alternanței negative conduc celelalte două diode care vor fi polarizate direct.



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza4-redresor-bialternanta-cu-puncte-de-diode.png" width="1000" height="259" />

<br></br>
<br></br>



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza5-tensiune-redresata-bialternanta.png" width="1000" height="258" />



</div>

<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

O poartă este formată din două terminale opuse ale punţii. Dacă puntea are terminalele liniare, cele de pe margini reprezintă o poartă, iar cele din interior altă poartă. 
- Pe poarta de intrare ( ≈ ) multimetrul digital indică în ambele sensuri rezistenţă foarte mare.
- Pe poarte de ieşire (+; - ) multimetrul indică într-un sens rezistenţă foarte mare, iar în celălalt sens rezistenţă mică. 
- Pentru a identifica terminalul (+) şi terminalul (-) al porţii de ieşire , se conectează multimetrul la poarta de ieşire în sensul în care indică rezistenţă mică. În această situaţie tasta (+) a multimetrului se află pe terminalul (-) al porţii de ieşire, iar tasta (-) a multimetrului se află pe terminalul (+) al porţii de ieşire. 
- La redresorul bialternanţă valoarea tensiunii de ieşire este dublă faţă de valoarea tensiunii de ieşire de la redresorul monoalternanţă.



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-4-redresarea-curentului-alternativ-cu-diode-semiconductoare-poza6-punte-redresoare-monobloc.png" width="1000" height="194" />


</div>