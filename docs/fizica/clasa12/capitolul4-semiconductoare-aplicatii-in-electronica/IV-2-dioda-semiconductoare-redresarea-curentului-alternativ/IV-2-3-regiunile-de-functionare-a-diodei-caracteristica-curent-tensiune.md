---
sidebar_position: 3
custom_edit_url: null
---

# IV.2.3.Regiunile de funcţionare a diodei.Caracteristica curent-tensiune.





import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




<div class="alert alert--primary" role="alert">

La terminalele diodei apar două mărimi electrice :   
- curentul prin diodă (i<sub>A</sub>), care prin convenţie are sensul de la anod spre catod,    
- tensiunea pe diodă (v<sub>A</sub>), care prin convenţie are sensul de la anod spre catod. 

Relaţia dintre mărimile de terminal ale diodei este descrisă grafic prin intermediul caracteristicii curent-tensiune a diodei, care furnizează informaţii despre modul în care curentul prin diodă i<sub>A</sub> variază în funcţie de tensiunea aplicată v<sub>A</sub> între terminalele sale. 



<Img className="img-responsive4" src="fizica/clasa12/capitolul4/IV-2-3-regiunile-de-functionare-a-diodei-poza1-caracteristica-curent-tensiune-a-diodei-semiconductoare.png" width="1000" height="313" lazy={false} />

<br></br>
<br></br>

***Interpretarea caracteristicii curent-tensiune a diodei semiconductoare***

- În regiunea de conducţie directă, se observă prezenţa unei _tensiuni de deschidere (sau de prag, notată V<sub>D</sub>_ în figură). Dacă valoarea tensiunii pe diodă este sub valoarea tensiunii de deschidere, atunci prin diodă valoarea curentului electric este neglijabilă (curentul electric are o valoarea foarte mică, putând fi aproximat cu 0 A). 

- După atingerea valorii tensiunii de prag, curentul prin diodă manifestă o creştere exponenţială, în funcţie de tensiunea pe diodă. În schimb, tensiunea la terminalele diodei rămâne la o valoare apropiată de valoarea de deschidere (V<sub>D</sub>). Pentru diodele cu siliciu tensiunea de prag are valoarea 0,6 V iar pentru cele cu germaniu are valoarea 0,2 V.

- În circuitele electronice se aproximează V<sub>D</sub> ≅ 0,6 V pentru tensiunea de deschidere.

- În regiunea de conducţie inversă, se observă o tensiune specifică a diodei, denumită _tensiune de străpungere (notată V<sub>BR</sub>_ în figură). Dacă valoarea în modul a tensiunii pe diodă este mai mică decât valoarea V<sub>BR</sub>, curentul electric nu trece prin diodă (este de ordinul nanoamperilor putând fi aproximat la 0 A). 

- Când valoarea tensiunii pe diodă atinge valoarea V<sub>BR</sub>, atunci prin diodă curentul electric creşte necontrolat, iar acest fenomen se numeşte _fenomen de străpungere al diodei sau_ ***străpungere Zenner***. În acest caz, se spune că dioda funcţionează în regiunea de străpungere, caz în care are loc distrugerea diodei. 




</div>


