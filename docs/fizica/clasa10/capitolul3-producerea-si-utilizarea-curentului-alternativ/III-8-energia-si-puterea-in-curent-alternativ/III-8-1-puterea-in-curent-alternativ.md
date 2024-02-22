---
sidebar_position: 1
custom_edit_url: null
---

# III.8.1. Puterea în curent alternativ.




import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'



<div class="alert alert--primary" role="alert">


Efectele curentului alternativ sunt diferite față de cele produse în curent continuu.

- Un condensator ideal într-un circuit de curent alternativ nu disipează energie.Când curentul trece într-un sens, armăturile condensatorului se încarcă cu sarcină electrică, ceea ce determină apariția unei tensiuni electrice între acestea. La schimbarea sensului curentului, condensatorul se descarcă și energia revine generatorului.

- O bobină ideală într-un circuit de curent alternativ nu disipează energie. Generatorul transmite energie bobinei. În intervalul următor, când curentul descrește, energia acumulată în câmpul magnetic al bobinei revine generatorului. T.e.m. datorată autoinducției în bobină determină întârzierea creșterii și scăderii intensității curentului electric din circuit.

- Un rezistor într-un circuit de curent alternativ disipează energie sub formă de căldură, prin efect Joule, ca și în curent continuu.





</div>

<br></br>





<div class="alert alert--primary" role="alert">


Într-un circuit serie RLC avem următoarea diagramă fazorială:


<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-8-1-puterea-in-curent-alternativ-poza1-diagrama-fazoriala-intr-un-circuit-serie-rlc.png" width="1000" height="193" lazy={false} />

<br></br>
<br></br>


Dacă înmulțim cu I relația U<sub>R</sub> = U ∙ cos φ, vom obține puterea activă, P<sub>a</sub>:

**P<sub>a</sub> = I ∙ U<sub>R</sub> = I ∙ U ∙ cos φ**


**Puterea activă P<sub>a</sub>** este egală cu puterea disipată prin efect Joule pe rezistor.


Factorul cos φ se numește factor de putere și arată ce fracțiune din putere este disipată prin efect Joule.



**Unitatea de măsură pentru puterea activă în SI este:**

**[P<sub>a</sub>]<sub>SI</sub> = W (watt)**



</div>





<br></br>



<div class="alert alert--primary" role="alert">

**Puterea aparentă P** este egală cu produsul U ∙ I și exprimă energia transferată unui circuit, în unitatea de timp, de către generatorul de curent alternativ.

**P = U ∙ I**

**Unitatea de măsură pentru puterea aparentă în SI este:**

**[P]<sub>SI</sub> = VA (voltamper)**



</div>



<br></br>


<div class="alert alert--primary" role="alert">


Din diagrama fazorială a tensiunilor se obține triunghiul puterilor:




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-8-1-puterea-in-curent-alternativ-poza2-triunghiul-puterilor.png" width="1000" height="199" />

<br></br>
<br></br>


**P<sub>r</sub> = P ∙ sin φ = U ∙ I ∙ sin φ = P<sub>a</sub> ∙ tg φ**


**Puterea reactivă P<sub>r</sub>** este puterea din bobină, datorată câmpului său magnetic și din condensator, datorată câmpului său electric.


**Unitatea de măsură pentru puterea reactivă în SI este:**

**[P<sub>r</sub>]<sub>SI</sub> = VAR (voltamper reactiv)**


**Relația între puterea aparentă, activă și reactivă este:**

**P<sup>2</sup> = P<sub>a</sub><sup>2</sup> + P<sub>r</sub><sup>2</sup>**




</div>




<br></br>



<div class="alert alert--secondary" role="alert">

&#128294 **Observație**

**Puterea reactivă** se scrie sub forma:

**P<sub>r</sub> = I<sup>2</sup> ∙ X**

unde:   
I este intensitatea efectivă a curentului   
X este reactanța circuitului




</div>



<br></br>



<div class="alert alert--primary" role="alert">


**Puterea instantanee este:**

**p = u ∙ i**

**u = U<sub>m</sub> ∙ sin ωt**

**i = I<sub>m</sub> ∙ sin (ωt – φ)**

**p = u ∙ i = U<sub>m</sub> ∙ I<sub>m</sub> ∙ sin ωt ∙ sin (ωt – φ)**


Transformăm produsul celor două funcții trigonometrice în sumă și obținem:



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-8-1-puterea-in-curent-alternativ-poza3-formula-puterii-instantanee.png" width="1000" height="175" />

<br></br>
<br></br>


**Puterea instantanee are expresia:**

**p = U ∙ I ∙ cos φ – U ∙ I ∙ cos (2ωt φ – φ)**


**Această relație are două componente :**

- O componentă constantă în timp: U ∙ I ∙ cos φ
- O componentă alternativă: U ∙ I ∙ cos (2ωt – φ)





</div>




<br></br>



<div class="alert alert--primary" role="alert">

Deoarece efectul termic este detectat prin valorile sale medii în timp, trebuie să determinăm valoarea medie a puterii primite de circuit de la generator.

**Valoarea medie a unei mărimi alternative în decurs de o perioadă este zero, avem:**

**U ∙ I ∙ cos (2ωt – φ) = 0** 


**Puterea medie are expresia:**

**p<sub>medie</sub> = U ∙ I ∙ cos φ** 




</div>


<br></br>


<div class="alert alert--secondary" role="alert">

&#128294 **Observații**



- puterea medie p<sub>medie</sub> transferată unei porțiuni de circuit este egală cu puterea activă:

**p<sub>medie</sub> = P<sub>a</sub> = I ∙ U<sub>R</sub> = I ∙ U ∙ cos φ**


- puterea instantanee, p = u ∙ i, este produsul a două mărimi oscilatorii armonice, dar ea nu reprezintă o mărime oscilatorie armonică

- puterea medie p<sub>medie</sub> se poate măsura direct cu wattmetrul.




<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-8-1-puterea-in-curent-alternativ-poza4-puterea-medie-se-poate-masura-cu-wattmetrul.png" width="1000" height="175" />




</div>



<br></br>


<div class="alert alert--primary" role="alert">



<Img className="img-responsive4" src="fizica/clasa10/capitolul3/III-8-1-puterea-in-curent-alternativ-poza5-tabel-cu-tipul-puterii-formula-si-unitatea-de-masura.png" width="1000" height="291" />


</div>




