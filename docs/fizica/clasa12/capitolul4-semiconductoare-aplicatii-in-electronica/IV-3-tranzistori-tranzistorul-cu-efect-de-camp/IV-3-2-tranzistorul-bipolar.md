---
sidebar_position: 2
custom_edit_url: null
---

# IV.3.2.Tranzistorul bipolar.


<ul class="table-of-contents table-of-contents__left-border"><li><a href="#iv321tranzistorul-bipolar-generalități" class="table-of-contents__link toc-highlight table-of-contents__link--active">IV.3.2.1.Tranzistorul bipolar-Generalități.</a></li><li><a href="#iv322principiul-de-funcționare-a-tranzistorului" class="table-of-contents__link toc-highlight">IV.3.2.2.Principiul de funcționare a tranzistorului.</a></li><li><a href="#iv323caracteristica-curent-tensiune-pentru-un-tranzistorcurbele-caracteristice" class="table-of-contents__link toc-highlight">IV.3.2.3.Caracteristica curent-tensiune pentru un tranzistor.Curbele caracteristice.</a></li><li><a href="#iv324tranzistorul-ca-amplificator" class="table-of-contents__link toc-highlight">IV.3.2.4.Tranzistorul ca amplificator.</a></li><li><a href="#iv325aplicațiile-tranzistoarelor" class="table-of-contents__link toc-highlight">IV.3.2.5.Aplicațiile tranzistoarelor.</a></li></ul>




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'



## IV.3.2.1.Tranzistorul bipolar-Generalități.


<div class="alert alert--primary" role="alert">


**Tranzistorul** este un dispozitiv semiconductor format dintr-un monocristal de germaniu sau siliciu în care se creează prin impurificare trei regiuni dopate alternativ, numite _emitor_ și _colector_ cele de la extremități, respectiv _bază_, cea din mijloc. Cele două regiuni semiconducoare cu același tip de conductivitate, situate la extremități (emitorul și colectorul) sunt separate de o zonă subțire cu conductivitate de tip opus (baza).


**Tranzistorul bipolar poate fi de două feluri, în funcție de tipul conducției din cele trei regiuni:**

**- pnp**, cu emitorul și colectorul de tip ***p***, care are următoarea reprezentare și simbol:



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-1-tranzistorul-bipolar-generalitati-poza1-reprezentarea-si-simbolul-tranzistorului-p-n-p.png" width="1000" height="215" lazy={false} />

<br></br>
<br></br>

**- npn**, cu emitorul și colectorul de tip ***n***, care are următoarea reprezentare :


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-1-tranzistorul-bipolar-generalitati-poza2-reprezentarea-si-simbolul-tranzistorului-n-p-n.png" width="1000" height="254" lazy={false} />





</div>




<br></br>
<br></br>




## IV.3.2.2.Principiul de funcționare a tranzistorului.


<div class="alert alert--info" role="alert">


**Funcționarea tranzistorului:**

**În funcționare normală joncțiunea emitor–bază este polarizată direct, iar joncțiunea colector–bază este polarizată invers.**
- Emitorul este mult mai puternic dopat decât baza astfel încât curentul prin joncțiunea emitorului să fie determinat de purtătorii majoritari ai emitorului injectați în bază și injecția de purtători majoritari ai bazei în emitor să fie neglijabilă.
- Regiunea bazei este subțire și mai mică decât lungimea de difuzie astfel încât purtătorii injectați în bază să o traverseze fără recombinări majore. 
- Joncțiunea emitor–bază, fiind polarizată direct, este parcursă de un curent direct (curent de difuzie) I<sub>E</sub>, mare în raport cu curentul invers (rezidual) și, într-o plajă largă de curenți, U<sub>EB</sub> const, cu valori tipice de 0,6 - 0,7 V (Si) sau 0,2 -0,3V (Ge).
- Zona colectorului are lungimea mai mare decât cea a emitorului pentru a colecta curentul injectat de emitor. Colectorul este slab dopat față de bază și stratul de baraj are o lărgime mai mare pentru ca joncțiunea colectorului să suporte tensiuni inverse mari fără să se străpungă.
- Joncțiunea colector–bază, fiind polarizată invers, este caracterizată de un curent propriu, invers, foarte mic, de ordinul nanoamperilor pentru tranzistoarele de siliciu și de ordinul microamperilor pentru tranzistoarele de germaniu.
- Emitorul “emite” purtătorii mobili în bază, purtători care vor fi “colectați” de către colector.



</div>


<br></br>



<div class="alert alert--primary" role="alert">

**Caracteristică tranzistorului este cuplarea electrică a celor două joncțiuni. Pentru aceasta trebuie satisfăcute două condiții:**    
**- joncțiunea emitorului să fie puternic asimetrică, adică impurificarea emitorului să fie mult mai puternică decât cea a bazei;**     
**- baza să fie foarte subțire, astfel încât fluxul de purtători majoritari din emitor să ajungă practic în totalitate în regiunea de trecere a colectorului**



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-2-principiul-de-functionare-a-tranzistorului-poza1-polarizarea-tranzistorului-bipolar-n-p-n-cu-baza-comuna.png" width="1000" height="322" lazy={false} />

<br></br>
<br></br>


**Ecuația fundamentală a tranzistorului bipolar** (Legea conservării sarcinii electrice conform teoremei I a lui Kirchhoff) :     
**I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub>**

Dar intensitatea curentului electric din bază este foarte mic :     
I<sub>B</sub> = (1–α) ∙ I<sub>E</sub> 

Intensitatea curentului electric din colector este :    
I<sub>C</sub> = α ∙ I<sub>E</sub>     
α este coeficientul de transfer de curent între emitor și colector, cu valori cuprinse între 0,96 și 0995, putând fi aproximat cu 1.

Deci, intensitatea curentului electric din colector este aproximativ egală cu intensitatea curentului electric din emitor:     
I<sub>C</sub> ≅ I<sub>E</sub>




</div>




<br></br>

<div class="alert alert--primary" role="alert">

**Intensitatea curentului electric din colector este :**



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-2-principiul-de-functionare-a-tranzistorului-poza2-formula-intensitatii-curentului-electric-din-colector.png" width="1000" height="107" />

<br></br>
<br></br>

**β este factorul de amplificare în curentul de bază în colector al tranzistorului, având valori cuprinse între 20 - 500.**


</div>


<br></br>



<div class="alert alert--primary" role="alert">

**Deoarece tranzistorul se comportă precum un regulator de curent, limitând curentul colectorului (IC) printr-o proporţie fixă faţă de curentul bazei (IB) , putem exprima această caracteristică standard a tranzistoarelor prin raportul IC/ IB, numit** ***factor de amplificare în curent*** **şi simbolizat prin litera grecească β:**


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-2-principiul-de-functionare-a-tranzistorului-poza3-formula-factorului-de-amplificare-in-curent.png" width="1000" height="109" />






</div>




<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

Factorul β al oricărui tranzistor este determinat de modul său de fabricare şi este o mărime ce nu poate fi modificată după confecţionarea acestuia. Factorul β nu rămâne constant pentru toate condiţiile de operare, putând varia în funcţie de valoarea curentului prin colector, temperatura tranzistorului, frecvenţa semnalului amplificat etc. Deşi teoretic vom considera β ca fiind constant pentru oricare tranzistor, în realitate acest lucru nu este valabil.


</div>




<br></br>



<div class="alert alert--primary" role="alert">

Curentul din colector, care este aproximativ egal cu cel din emitor, este comandat direct de tensiunea emitor-bază (U<sub>EB</sub>), care asigură polarizarea directă a joncțiunii emitor.

Tensiunea bază-emitor și curentul bazei fiind mici, tranzistorul produce o amplificare de putere.

**Deci, în regim normal de funcționare când joncțiunea emitor-bază este polarizată direct și joncțiunea colector-bază este polarizată invers, tranzistorul amplifică puterea.**

Pentru a exemplifica funcția de amplificare a unui tranzistor considerăm o celulă solară legată la un led. Ledul nu se va aprinde deoarece celula solară nu-i poate furniza ledului curentul necesar pentru a se aprinde. În schimb, dacă legăm celula solară între baza și emitorul tranzistorului se obține amplificarea curentului până la valoarea necesară ledului pentru a lumina.



</div>



<br></br>
<br></br>




## IV.3.2.3.Caracteristica curent-tensiune pentru un tranzistor.Curbele caracteristice.


<div class="alert alert--primary" role="alert">


**Zona activă de funcţionare a tranzistorului**

Să considerăm un circuit format dintr-un tranzistor de tip npn, alimentat de o baterie cu tensiunea U<sub>EB</sub>.



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-3-caracteristica-curent-tensiune-pentru-un-tranzistor-poza1-montaj-de-amplificare-cu-un-tranzistor-n-p-n-cu-baza-comuna.png" width="1000" height="284" />

<br></br>
<br></br>



Avem trei variabile: tensiunea emitor-bază (U<sub>EB</sub>), curentul de la colector (I<sub>C</sub>) şi curentul bazei (I<sub>B</sub>). 

Mai întâi vom seta la o valoare constantă a curentului de bază, I<sub>B</sub> = 20 µA şi vom varia tensiunea sursei (U<sub>EB</sub>) între 0 V şi 2 V. Apoi măsurăm curentul colectorului, adică I<sub>C</sub>.





<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-3-caracteristica-curent-tensiune-pentru-un-tranzistor-poza2-caracteristica-curent-tensiune-pentru-un-tranzistor-n-p-n-la-ib-const.png" width="1000" height="390" />

<br></br>
<br></br>

Când baza nu este polarizată, nu există curent între emitor şi colector, spunem că **tranzistorul este** ***blocat***. Regiunea Cutoff este utilizată în principal în comutare și circuite logice digitale.

În cazul în care curentul controlat este mai mare decât zero, dar este sub valoarea maximă admisă de sursă şi de circuit, tranzistorul va funcţiona între zonele de blocare şi saturare. În acest caz, spunem că **tranzistorul funcţionează în** ***zona activă***. În modul activ, tranzistorul este utilizat în general ca amplificator de curent. În modul activ, două joncțiuni sunt polarizate diferit, ceea ce înseamnă că joncțiunea emițător-bază este polarizată direct, în timp ce joncțiunea colector-bază este polarizată invers. În acest mod, fluxurile de curent între emițător și colector și cantitatea de curent este proporțională cu curentul de bază.

Când între emitor şi colector trece cantitatea maximă de curent permisă de colector şi de sursa de putere, spunem că **tranzistorul este** ***saturat***. Curentul circulă liber de la colector la emițător cu rezistență aproape nulă. Regiunea de saturare este, de asemenea, utilizată în principal în circuite de comutare și logice digitale.




</div>

<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

**Un curent de bază constant (I<sub>B</sub> = 20 µA) controlează un curent maxim de 2 mA prin colector, de exact 100 de ori mai mare decât I<sub>B</sub>. Pentru această valoare a curentului de bază, curentul prin colector nu poate creşte mai mult. Putem observa de pe grafic că forma curbei este plată în afară de prima porţiune, porţiune unde tensiunea bateriei creşte de la 0 V la 0,25 V. În acest interval, curentul prin colector creşte rapid de la 0 A la 2 mA.**


**Chiar dacă creștem valorile tensiunii U<sub>EB</sub> de la intervalul 0 - 2 V, la intervalul 0 - 50 V, menţinând un curent de bază constant de 20 µA, rezultatul este acelaşi. Curentul prin colector nu poate trece de 2 mA (de exact 100 de ori valoarea curentului bazei), cu toate că tensiunea bateriei (U<sub>EB</sub>) variază de la 0 V până la 50 V. Putem trage concluzia că tensiunea dintre colector şi emitor nu are niciun efect asupra curentului din colector, decât la valori foarte mici (puţin peste 0 volţi). Peste această tensiune „critică”, valoarea tensiunii nu mai are nicio importanţă pentru valoarea curentului colectorului. Tranzistorul se comportă în acest caz precum un regulator de curent, permiţând un curent de exact 2 mA prin colector şi nu mai mult.**




</div>

<br></br>


<div class="alert alert--primary" role="alert">


**Curbele caracteristice**

**În cazul rezistorului, curentul creşte liniar pe măsură ce căderea de tensiune la bornele sale creşte.**

**În cazul tranzistorului, curentul dinspre emitor spre colector are o valoare limită fixă, valoare peste care nu poate creşte, indiferent de căderea de tensiune dintre emitor şi colector.**

**O reprezentare a tuturor acestor curbe (variaţii) curent-tensiune pe un singur grafic, pentru un anumit tranzistor, poartă numele de** ***curbe caracteristice:***




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-3-caracteristica-curent-tensiune-pentru-un-tranzistor-poza3-curbe-caracteristice-pentru-un-tranzistor.png" width="1000" height="281" />

<br></br>
<br></br>

Pentru curentul maxim de bază, I<sub>B</sub> = 75 µA, curentul prin colector este tot de 100 de ori mai mare decât I<sub>B</sub>, adică I<sub>C</sub> = 7,5 mA. 

Pentru fiecare variaţie a curentului de bază, de la 5 µA până la 75 µA, vom avea o altă curbă caracteristică astfel încât pot exista o infinitate de curbe între aceste valori.

**În concluzie, factorul decisiv ce contribuie la valoarea curentului prin colector este curentul bazei. Tensiunea emitor-bază (U<sub>EB</sub>) este irelevantă atâta timp cât se situează peste o anumită valoare minimă.**

**Deci, comutarea și amplificarea sunt cele două domenii de aplicații ale tranzistoarelor.**


</div>





<br></br>
<br></br>




## IV.3.2.4.Tranzistorul ca amplificator.


<div class="alert alert--primary" role="alert">




<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-4-tranzistorul-ca-amplificator-poza1-montaj-cu-un-tranzistor-n-p-n-ca-amplificator-de-tensiune-alternativa.png" width="1000" height="284" />

<br></br>
<br></br>

În circuitul de intrare (circuitul emitorului) se introduce o sursă de tensiune alternativă e, care face ca nivelul polarizării joncțiunii emitorului să se modifice în timp. Peste componenta de curent continuu, prin introducerea sursei e, se suprapune , în tranzistor, o componentă de curent alternativ. Astfel ia naștere curentul alternativ de emitor i<sub>E</sub> care se divide în curentul i<sub>B</sub> prin bază și i<sub>C</sub> prin colector.

În circuitul de ieșire (circuitul colectorului) se introduce un rezistor de sarcină, R<sub>s</sub>.

Tensiunea sursei de alimentare (U<sub>BC</sub>) din circuitul colectorului trebuie să fie întotdeauna mai mare decât tensiunea maximă la bornele rezistorului R<sub>s</sub>, între 3 V și 30 V.

Căderea de tensiune efectivă pe rezistorul de sarcină este :     
U<sub>ieșire</sub> = R<sub>s</sub> ∙ I<sub>c</sub>

Căderea de tensiune efectivă pe rezistența circuitului de intrare (R<sub>i</sub>, care este de ordinul sutelor de ohmi) este:     
U<sub>intrare</sub> = R<sub>i</sub> ∙ I<sub>e</sub>

Deoarece I<sub>e</sub> ≈ I<sub>c</sub> avem următoarea egalitate:


<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-3-2-4-tranzistorul-ca-amplificator-poza2-raportul-dintre-tensiunea-de-iesire-si-tensiunea-de-intrare.png" width="1000" height="112" />

<br></br>
<br></br>

Cum R<sub>s</sub> = 10 kΩ ÷ 100 kΩ și R<sub>i</sub> = 100 Ω, rezultă o amplificare de tensiune foarte mare, care poate ajunge până la 1000.

Amplificarea tranzistorului apare deoarece curentul din emitor a fost transferat cu foarte mici pierderi dintr-un circuit cu rezistență mică într-un circuit cu rezistență mare. De aici și denumirea rezistorului de la termenul _“transfer-rezistor”_. Amplificarea în putere a semnalului (puterea suplimentară) obținută în circuitul colector este luată sub formă de putere de curent continuu de la sursa din circuitul colector și transformată în putere de curent alternativ.




</div>

<br></br>
<br></br>


## IV.3.2.5.Aplicațiile tranzistoarelor.


<div class="alert alert--warning" role="alert">

**Tranzistoarele pot fi folosite în echipamentele electronice, în funcție de puterea și frecvența acestora:**     
- în amplificatoare de semnal (în domeniul audio, video, radio),     
- amplificatoare de instrumentație,     
- oscilatoare,     
- modulatoare și demodulatoare,    
- filtre,    
- surse de alimentare liniare,    
- în comutație : comutatoare sau switch-uri,    
- în circuite integrate.




</div>

<br></br>

<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

Tranzistoare de mică sau mare putere sunt _tranzistoare de uz general_, având o frecvență maximă de lucru sub 2-3 MHz. Există şi _tranzistoare de înaltă frecvenţă (sau de radiofrecvenţă)_ care au frecvenţa maximă de lucru de cel puţin câteva sute de MHz. Acestea sunt folosite cel mai frecvent în radioelectronică (emiţătoare radio, amplificatoare radio, 


</div>


