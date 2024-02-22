---
sidebar_position: 5
custom_edit_url: null
---

# III.7.5. Circuit serie RLC.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'






<div class="alert alert--primary" role="alert">


Studiul comportării unui circuit serie RLC se poate face realizând un circuit format dintr-un rezistor, o bobină, un condensator variabil, un ampermetru și o sursă de tensiune alternativă, toate legate în serie.



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza1-schema-circuit-rlc-rezistor-bobina-condensator.png" width="1000" height="311" lazy={false} />

<br></br>
<br></br>

<br></br>

- **Cu ajutorul ampermetrului se urmărește variația intensității curentului prin circuit, menținând inductanța L constantă și mărind capacitatea condensatorului (prin legarea în paralel a mai multor condensatori, se mărește capacitatea echivalentă, deoarece C = C<sub>1</sub> + C<sub>2</sub> +... + C<sub>n</sub>).  Se observă creșterea intensității curentului prin circuit până la un maxim, după care începe să scadă.**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza2-grafic-cu-variatia-intensitatii-curentului-prin-circuitul-rlc-in-functie-de-capacitatea-condensatorului.png" width="1000" height="214" lazy={false} />

<br></br>
<br></br>

<br></br>

- **Cu ajutorul ampermetrului se urmărește variația intensității curentului prin circuit, menținând capacitatea C constantă și mărind inductanța bobinei prin introducerea unor miezuri. Se observă creșterea intensității curentului prin circuit până la un maxim, după care începe să scadă.**

<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza3-grafic-cu-variatia-intensitatii-curentului-prin-circuitul-rlc-in-functie-de-inductanta-bobinei.png" width="1000" height="207" lazy={false} />

<br></br>
<br></br>

<br></br>

**Relația între tensiunile instantanee într-un circuit serie RLC, în curent alternativ este:**

<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza4-relatia-dintre-tensiunile-instantanee-intr-un-circuit-rlc-in-curent-alternativ.png" width="1000" height="446" lazy={false} />

<br></br>
<br></br>

<br></br>

**Valorile instantanee ale tensiunii și intensității curentului alternativ pot fi scrise sub forma:**



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza5-valorile-instantanee-ale-tensiunii-si-intensitatii-curentului-alternativ.png" width="1000" height="139" />


φ = defazajul între curent și tensiune    
φ {'>'} 0, când curentul este defazat în urma tensiunii    
φ {'<'} 0, când curentul este defazat înaintea tensiunii


</div>








<br></br>

<div class="alert alert--primary" role="alert">


**Cele trei regimuri de funcționare ale unui circuit serie RLC în curent alternativ sunt:**

**1. Dacă U<sub>L</sub> {'>'} U<sub>C</sub>, X<sub>L</sub> {'>'} X<sub>C</sub>, intensitatea curentului este defazată cu π/2 în urma tensiunii (φ {'>'} 0) și circuitul are un caracter inductiv.**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza6-diagrama-fazoriala-u-si-i-pentru-un-circuit-serie-rlc-in-curent-alternativ-cu-caracter-inductiv.png" width="1000" height="343" />

<br></br>
<br></br>

<br></br>

**2. Dacă U<sub>L</sub> {'<'} U<sub>C</sub>, X<sub>L</sub> {'<'} X<sub>C</sub>, intensitatea curentului este defazată cu π/2 înaintea tensiunii (φ {'<'} 0) și circuitul are un caracter capacitiv.**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza7-diagrama-fazoriala-u-si-i-pentru-un-circuit-serie-rlc-in-curent-alternativ-cu-caracter-capacitiv.png" width="1000" height="338" />

<br></br>
<br></br>

<br></br>

**3. Dacă U<sub>L</sub> = U<sub>C</sub>, X<sub>L</sub> = X<sub>C</sub>, intensitatea curentului este în fază cu tensiunea (φ = 0) și are loc rezonanța tensiunilor.**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza8-diagrama-fazoriala-u-si-i-pentru-un-circuit-serie-rlc-in-curent-alternativ-la-rezonanta-tensiunilor.png" width="1000" height="269" />





</div>




<br></br>


<div class="alert alert--primary" role="alert">

**Aplicând teorema lui Pitagora în triunghiul tensiunilor (caracter inductiv) obținem:**


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza9-teorema-lui-pitagora-in-triunghiul-tensiunilor-caracter-inductiv.png" width="1000" height="142" />

<br></br>
<br></br>

<br></br>

**Mărimea Z, numită impedanța circuitului serie RLC este definită de relația:**



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza10-formula-de-calcul-a-impedantei-circuitului-serie-rlc.png" width="1000" height="194" />

<br></br>
<br></br>

**Unitatea de măsură pentru impedanța electrică în SI este:**

**[Z]<sub>SI</sub> = Ω (ohm)**




</div>





<br></br>



<div class="alert alert--primary" role="alert">

Legea lui Ohm pentru valorile efective ale curentului alternativ, în cazul unui circuit serie RLC este:



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza11-legea-lui-ohm-pentru-valorile-efective-ale-curentului-alternativ-in-cazul-unui-circuit-serie-rlc.png" width="1000" height="132" />




</div>



<br></br>




<div class="alert alert--primary" role="alert">

Tot din triunghiul tensiunilor (caracter inductiv) se poate calcula defazajul φ între tensiunea la bornele circuitului serie RLC și intensitatea curentului alternativ:



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza12-defazajul-intre-tensiunea-la-bornele-circuitului-serie-rlc-si-intensitatea-curentului-alternativ.png" width="1000" height="108" />




</div>





<br></br>

<div class="alert alert--warning" role="alert">

&#128275 **Problemă rezolvată**

**1. Un circuit serie RLC de curent alternativ conține un rezistor ideal cu rezistența 60 Ω, o bobină ideală cu inductanța 1/π H și un condensator ideal cu capacitatea 1/4800π F. Tensiunea de alimentare este 110 V și frecvența de 60 Hz. Află:**   
a)	Impedanța circuitului    
b)	Intensitatea curentului    
c)	Defazajul între curent și tensiune.


**Rezolvare:**

**a)** 

_Calculăm reactanța inductivă și capacitivă:_


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza13-problema-rezolvata1-rezolvare1.png" width="1000" height="194" />

<br></br>
<br></br>


_Calculăm impedanța circuitului serie RLC:_



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza14-problema-rezolvata1-rezolvare2.png" width="1000" height="210" />

<br></br>
<br></br>

<br></br>

**b)** 

_Calculăm intensitatea curentului, aplicând legea lui Ohm:_



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza15-problema-rezolvata1-rezolvare3.png" width="1000" height="98" />

<br></br>
<br></br>

<br></br>

**c)**




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza16-problema-rezolvata1-rezolvare4.png" width="1000" height="193" />

<br></br>
<br></br>

Deoarece X<sub>L</sub> {'>'} X<sub>C</sub>, circuitul are caracter inductiv și intensitatea curentului este defazată în urma tensiunii (φ {'>'} 0).




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-7-5-circuit-serie-rlc-poza17-problema-rezolvata1-diagrama-fazoriala-caracter-inductiv.png" width="1000" height="249" />








</div>