---
sidebar_position: 2
custom_edit_url: null
---

# II.11.2. Rezistența adițională a voltmetrului.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'





<div class="alert alert--primary" role="alert">

Pentru a mări domeniul de măsurare de n ori al unui voltmetru cu rezistența proprie R<sub>V</sub> și care poate măsura o tensiune maximă U<sub>V</sub>, se conectează în serie cu acesta o rezistență adițională cu rezistența R<sub>a</sub>.

Calibrele voltmetrului depind de rezistența adițională.




<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza1-calibrele-voltmetrului-depind-de-rezistenta-aditionala-schema-circuit.png" width="1000" height="222" lazy={false} /> 

<br></br>
<br></br>

Tensiunea maximă care poate fi măsurată este:   
U = n ∙ U<sub>V</sub> = U<sub>V</sub> + U<sub>a</sub>    
n ∙ U<sub>V</sub> = U<sub>V</sub> + U<sub>a</sub>    
U<sub>a</sub> = (n – 1) ∙ U<sub>V</sub> 



Pentru a afla rezistența adițională împărțim ultima expresie cu I<sub>V</sub>:


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza2-calibrele-voltmetrului-depind-de-rezistenta-aditionala-formula-calcul.png" width="1000" height="184" lazy={false} /> 

<br></br>
<br></br>


În funcție de valoarea rezistenței adiționale, voltmetrele au calibre diferite.



</div>

<br></br>




<div class="alert alert--warning" role="alert">

&#128275 **Problemă rezolvată**


**5. O sursă electrică cu t.e.m. de 12 V are o rezistență internă de 0,5 Ω. Ea este legată la un bec cu rezistența de 10 Ω. Se cere:**   
a)	Cât este intensitatea curentului ce trece prin bec dacă rezistența ampermetrului este de 0,001 Ω (considerăm că nu este un ampermetru ideal care are rezistența zero)?    
b)	Cât este intensitatea măsurată de ampermetru dacă scoatem becul din circuit ?    
c)	Cât este intensitatea curentului dacă la bornele becului legăm un voltmetru care nu este ideal, având o rezistență de 100000 Ω (voltmetrul ideal are rezistența care tinde spre infinit, pentru a nu permite trecerea curentului prin acesta și astfel se obține citirea corectă) ?    
d)	Dacă legăm direct voltmetrul la bornele sursei, cât este intensitatea curentului ?



**Rezolvare:**

_Scriem datele problemei:_   
E = 12 V   
r = 0,5 Ω   
R<sub>b</sub> = 10Ω   
R<sub>A</sub> = 0,001 Ω   
R<sub>V</sub> = 100000 Ω


a)


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza3-problema-rezolvata1-schema-circuit.png" width="1000" height="318" /> 


<br></br>
<br></br>


_Becul și rezistorul ampermetrului și rezistența sursei sunt în serie și au rezistența echivalentă:_




<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza4-problema-rezolvata1-rezolvare1.png" width="1000" height="163" /> 

<br></br>
<br></br>




b)




<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza5-problema-rezolvata1-schema-circuit2.png" width="1000" height="315" /> 

<br></br>
<br></br>



_Dacă ampermetrul ar fi fost unul ideal, cu rezistența 0, el ar fi scurtcircuitat sursa și ar fi măsurat curentul de scurtcircuit cu formula_



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza6-problema-rezolvata1-rezolvare2.png" width="1000" height="99" /> 

<br></br>
<br></br>

_Însă acest ampermetru nu are rezistența 0 și vom avea o intensitate:_



<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza7-problema-rezolvata1-rezolvare3.png" width="1000" height="115" /> 

<br></br>
<br></br>



c)


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza8-problema-rezolvata1-schema-circuit3.png" width="1000" height="321" /> 

<br></br>
<br></br>


_R<sub>b</sub> și R<sub>V</sub> sunt în paralel și le calculăm rezistența echivalentă R<sub>p</sub>:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza9-problema-rezolvata1-rezolvare4.png" width="1000" height="204" /> 

<br></br>
<br></br>


_R<sub>p</sub>, R<sub>A</sub> și r sunt în serie și au rezistența echivalentă:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza10-problema-rezolvata1-rezolvare5.png" width="1000" height="171" /> 

<br></br>
<br></br>




d)


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza11-problema-rezolvata1-schema-circuit4.png" width="1000" height="314" /> 

<br></br>
<br></br>



_Legând direct voltmetrul la sursă, r și R<sub>V</sub> vor fi în serie și intensitatea va deveni:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul2/II-11-2-rezistenta-aditionala-a-voltmetrului-poza12-problema-rezolvata1-rezolvare6.png" width="1000" height="105" /> 

<br></br>
<br></br>



**Dacă voltmetru ar fi fost unul ideal (cu rezistența infinită), intensitatea curentului ar fi fost zero.**




</div>

