---
sidebar_position: 3
custom_edit_url: null
---

# IV.3.3.Tranzistorul cu efect de câmp.


<ul class="table-of-contents table-of-contents__left-border"><li><a href="#iv331tranzistorul-cu-efect-de-câmp-generalități" class="table-of-contents__link toc-highlight">IV.3.3.1.Tranzistorul cu efect de câmp-Generalități.</a></li><li><a href="#iv332tranzistorul-cu-efect-de-câmp-cu-joncțiune-tec-j" class="table-of-contents__link toc-highlight">IV.3.3.2.Tranzistorul cu efect de câmp cu joncțiune TEC-J.</a></li><li><a href="#iv333tranzistorul-cu-efect-de-câmp-tec-mos-metal-oxid-semiconductor" class="table-of-contents__link toc-highlight">IV.3.3.3.Tranzistorul cu efect de câmp TEC-MOS (metal-oxid-semiconductor).</a></li></ul>




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'



## IV.3.3.1.Tranzistorul cu efect de câmp-Generalități.


<div class="alert alert--primary" role="alert">

**Tranzistoarele cu efect de câmp funcționează pe baza variației rezistenței electrice a unui strat de material semiconductor prin care trece curent electric, prin intermediul câmpului electric produs de semnalul de comandă. Prin variația rezistenței electrice se produce și variație intensității curentului electric datorată unui tip de purtători de sarcină electrică (electroni sau goluri).**

**Clasificarea tranzistoarelor cu efect de câmp :**   
**-** ***TEC-J*** **sunt tranzistoare cu joncțiune**    
**-** ***TEC-MOS (MOSFET)*** **cu structură metal- oxid-semiconductor**    
**- Tranzistoare cu pături subțiri.**

</div>




<br></br>
<br></br>




## IV.3.3.2.Tranzistorul cu efect de câmp cu joncțiune TEC-J.


<div class="alert alert--primary" role="alert">

Tranzistorul cu efect de câmp cu joncțiune TEC-J este format dintr-o pastilă semiconductoare, de tip n, la extremitățile căreia se depun două contacte ohmice : sursa S și drena D. Se aplică o polarizare astfel încât între sursă și drenă, în blocul central, să apară un curent de electroni (purtători majoritari), cu polul pozitiv pe poartă și cel negativ pe sursă.

Pe fiecare faţă a unei plăcuţe semiconductoare de tip n se realizează câte o zonă puternic dopată de tip p+. Pe cele două zone şi pe capetele plăcuţei semiconductoare se realizează patru contacte electrice. Cele două zone de tip p+ sunt conectate electric între ele formând grila sau poarta tranzistorului (G). Terminalele din capetele plăcuţei semiconductoare se numesc sursă (S) şi respectiv drenă (D).




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-3-2-tranzistorul-cu-efect-de-camp-cu-jonctiune-tec-j-poza1-schema-tranzistorului-cu-efect-de-camp-cu-jonctiune-tec-j.png" width="1000" height="308" lazy={false} />

<br></br>
<br></br>


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-3-2-tranzistorul-cu-efect-de-camp-cu-jonctiune-tec-j-poza2-simbol-tranzistor-tec-j-cu-canal-n.png" width="1000" height="153" lazy={false} />

<br></br>
<br></br>

Modul normal de funcţionare a unui TEC-J este cu poarta polarizată invers faţă de sursă şi drenă (în cazul unui TEC-J cu canal n, ea este polarizată negativ). Regiunea sărăcită de purtători de sarcină se extinde în dimensiuni odată cu creşterea polarizării inverse a joncţiunii pn. Conductibilitatea electrică a porţiunii din regiunea de tip n care este sărăcită de purtători de sarcină este foarte mică. Pentru o diferenţă de potenţial fixă între drenă şi sursă, cu cât este mai mare polarizarea inversă poartă-sursă cu atât regiunea sărăcită este mai mare, canalul este mai îngust şi curentul de drenă este mai mic. 


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-3-2-tranzistorul-cu-efect-de-camp-cu-jonctiune-tec-j-poza3-familia-de-caracteristici-id-egal-id.png" width="1000" height="439" lazy={false} />

<br></br>
<br></br>


- Dacă tensiunea poartă-sursă (U<sub>PS1</sub>) se menține constantă și se variază tensiunea drenă-sursă (U<sub>DS</sub>), dependența curentului de drenă (I<sub>D</sub>) se numește _caracteristică de ieșire_.    
- La tensiuni mici aplicate între sursă și drenă, tranzistorul se comportă ca o rezistență ohmică, curentul de drenă crescând linar.    
- La creșterea tensiunii sursă-drenă, curentul de drenă se menține aproximativ constant pentru un interval mare ale tensiunii U<sub>DS</sub>.    
- Pentru o valoare mai mare a tensiunii poartă-sursă (U<sub>PS2</sub>), care se menține constantă, observăm aceleași caracteristici ale curentului de drenă.     
- Cu cât căderea de tensiune între drenă şi sursă creşte, câmpul electric în direcţia longitudinală creşte (VG - VS < VG - VD), cauzând deformarea regiunii sărăcite. Datorită acestei deformări, la o anumită valoare a tensiunii U<sub>DS</sub>, numită tensiune drenă-sursă de saturaţie, U<sub>DSsat</sub>, canalul conductor se va îngusta atât de mult înspre drenă încât intensitatea curentului de drenă va fi limitată la valoarea de saturaţie. Aceasta corespunde porţiunii plate, aproape orizontale, a caracteristicii I<sub>D</sub> = I<sub>D</sub>(U<sub>DS</sub>).     
- La tensiuni de polarizare a canalului mai mari, poate avea loc străpungerea lui datorită multiplicării în avalanşă a purtătorilor de sarcină.

Aducerea tranzistorului în regim de saturaţie se poate face în două moduri:     
- menţinând constant potenţialul porţii şi crescând potenţialul drenei faţă de sursă    
- menţinând constant potenţialul drenei şi crescând negativarea porţii faţă de sursă.




</div>


<br></br>





## IV.3.3.3.Tranzistorul cu efect de câmp TEC-MOS (metal-oxid-semiconductor).


<div class="alert alert--primary" role="alert">


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-3-3-tranzistorul-cu-efect-de-camp-tec-mos-poza1-polarizarea-tranzistorului-tec-mos-cu-canal-n.png" width="1000" height="309" />

<br></br>
<br></br>

- Poarta (grila) este izolată de semiconductorul pn printr-un strat izolator de SiO<sub>2</sub>. Între sursă şi drenă (zone de tip n puternic dopate) există un canal conductor tot de tip n, astfel încât, chiar şi atunci când poarta nu este polarizată, la stabilirea unei diferenţe de potenţial între drenă şi sursă, prin canal va trece un curent nenul. Secţiunea transversală a canalului poate fi modificată prin aplicarea unui potenţial pe poartă. De regulă, terminalul conectat la substrat (care se numeşte bază) se conectează la terminalul sursei, astfel încât sursa şi substratul vor avea acelaşi potenţial. 

- Când se aplică o tensiune între poartă și sursă se creează un câmp electric ca într-un condensator plan care dirijează electronii către suprafață.

- Dacă diferenţa de potenţial dintre poartă şi sursă este negativă, atunci canalul se îngustează (electronii din el sunt “alungaţi” în substrat) şi rezistenţa lui creşte. Se spune despre tranzistor că lucrează în regim de “sărăcire”. 

- Dacă diferenţa de potenţial dintre poartă şi sursă este pozitivă, atunci canalul se lărgeşte (electroni din substrat sunt atraşi în canal) şi rezistenţa lui scade. Se spune despre tranzistor că lucrează în regim de “îmbogăţire”.

- Menținând tensiunea dintre drenă și sursă (U<sub>DS</sub>) constantă, curentul de drenă (I<sub>D</sub>) va crește odată cu Creșterea tensiunii UPS. 



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-3-3-tranzistorul-cu-efect-de-camp-tec-mos-poza2-simbol-tranzistor-tec-mos-cu-canal-n-si-p.png" width="1000" height="224" />

<br></br>
<br></br>


**Avantajele tranzistoarelor cu efect de câmp:**    
- dimensiuni reduse, fiind ușor de cuplat în circuite integrate;    
- pot fi comandate în tensiune;    
- necesită curent de intrare mic;    
- au impedanța de intrare mare;     
- lucrează la frecvențe foarte mari, de 10<sup>7</sup> - 10<sup>8</sup> Hz.

Tranzistoarelor cu efect de câmp au ca dezavantaj o mare fragilitate la apariția unor tensiuni accidentale pe poartă.




</div>

