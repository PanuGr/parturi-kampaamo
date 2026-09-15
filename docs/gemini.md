Perinteinen kelluva "Voinko auttaa?" -chatbot jätettiin tietoisesti pois, koska:
1. **Luksusbrändin esteettisyys:** Kelluvat chat-kuplat rikkovat editorial-ilmeen ja tuntuvat usein halvalta asiakaspalvelubotilta.
2. **Konversio:** Kävijä harvoin haluaa "jutella botille" – hän haluaa vastauksen täsmäkysymykseen: *"Mitä tämä maksaa minulle, kauanko se kestää ja kuka osaa tehdä tämän?"*

Tässä suositukset järjestettynä **helpoimmasta ja nopeimmasta vaativimpaan**:

---

### 1. Helpoin: Sosiaalisen median julkaisukone (Idea 5)
*Sisäinen työkalu Lauran ja Sannan puhelimiin.*

* **Miksi helppo:** Ei vaadi kantaa, ei käyttäjien autentikointia eikä asiakasrajapintaa. Yksinkertainen lomake, johon kampaaja tiputtaa kuvan ja painaa nappia.
* **Miten toimii teknisesti:** Yksi yksinkertainen sivu/näkymä. Kuva lähetetään `gemini-1.5-flash` -mallille valmiilla promptilla (*"Toimi huippukampaamon somemanagerina, kirjoita rento ja houkutteleva IG-kuvateksti suomeksi..."*).
* **Toteutusaika:** n. 2–4 tuntia.
* **Kriittinen haaste:** Promptin hionta, jotta äänensävy ei kuulosta liian "tekoälymäiseltä" vaan salonkityyliltään luonnolliselta.

---

### 2. Helppo: Tyylikonsultaatio-avustaja / Quiz (Idea 3)
*Kevyt tekstipohjainen monivalinta laskeutumissivulla.*

* **Miksi suhteellisen helppo:** Ei kuvien käsittelyä. Käyttäjä klikkaa sivulla 3–4 valintaa (esim. hiuspituus, käytettävä aika aamuisin, toivottu fiilis).
* **Miten toimii teknisesti:** Selaimessa kerätyt vastaukset lähetetään yhdellä API-pyynnöllä (Astro endpoint tai Netlify function). Gemini palauttaa puhtaan JSON-vastauksen, joka renderöidään suoraan sivun kortteihin leikkaus- ja tekijäsuosituksineen.
* **Toteutusaika:** n. 1 työpäivä.
* **Kriittinen haaste:** Vastausten rajoittaminen vain kampaamon todelliseen palvelutarjoomaan (ettei tekoäly suosittele palvelua, jota Laura tai Sanna ei tee).

---

### 3. Keskivaikea: Yksilöllinen kotihoitoresepti käynnin jälkeen (Idea 2)
*Kampaajan nopea työkalu + asiakkaan saama brändätty sivu/viesti.*

* **Miksi keskivaikea:** Vaatii helpon käyttöliittymän kampaajalle (esim. nopea lomake puhelimessa) sekä tavan toimittaa lopputulos asiakkaalle (SMS/WhatsApp-linkki tai dynaaminen web-näkymä).
* **Miten toimii teknisesti:** Kampaajan syöttämät märkä-/värjäystiedot ajetaan Geminin läpi, joka tuottaa strukturoidun hoito-ohjeen. Resepti tallennetaan väliaikaiseen ID-linkkiin (esim. `kampaamo.fi/hoito/a8f92b`) tai luodaan suoraan valmis viestipohja kampaajan puhelimen WhatsApp/SMS-sovellukseen lähetettäväksi.
* **Toteutusaika:** n. 2–3 työpäivää.
* **Kriittinen haaste:** Kampaajan rutiini – työkalun on oltava niin nopea (max 15 sekuntia), että sitä jaksaa käyttää kiireisenäkin päivänä.

---

### 4. Vaativa: "Inspo-to-Booking" -kuva-analyysi (Idea 1)
*Asiakkaan lataaman kuvan vertailu ja suora palveluohjaus.*

* **Miksi vaativa:**
  - Asiakkaat lataavat hyvin erilaisia kuvia (epätarkkoja, huonossa valossa otettuja, pelkkiä meikkikuvia).
  - Vaatii kuvan koon pienentämisen selaimessa ennen lähetystä (jotta pyyntö on nopea eikä kuormita palvelinta).
  - Vastauksen täytyy osua tarkasti kampaamon oikeisiin palvelukategorioihin ja hintoihin.
* **Miten toimii teknisesti:** Gemini Multimodal (Vision) vertaa inspiraatiokuvaa kampaamon palveluhinnaston sääntöihin ja antaa suosituksen structured JSON -muodossa.
* **Toteutusaika:** n. 3–5 työpäivää (UI + virheenkäsittelyt + kuvien optimointi).
* **Kriittinen haaste:** Virheenkäsittely (esim. jos asiakas lataa kuvan koirastaan) ja hintahaarukan pitäminen rehellisenä, jotta kampaajalle ei tule paikan päällä riitatilanteita hinnoittelusta.

---

### 5. Vaativin: Tekijöiden oma puhesanelemari & Asiakaskortti (Idea 4)
*Audio-ohjattu asiakastietojen ja värireseptien arkistoija.*

* **Miksi vaativin:**
  - Vaatii puhelimen mikrofonin käyttöoikeudet selaimessa ja äänen luotettavan puskuroinnin.
  - **GDPR & Tietosuoja:** Terveys-/allergiatiedot ja asiakashistoria vaativat tietoturvallisen tietokannan (Supabase tms.) tai integraation kampaamon olemassa olevaan kassajärjestelmään (Timma/Phorest API), joihin ei aina ole suoraa rajapintaa.
* **Miten toimii teknisesti:** Äänitiedosto -> Geminin multimodaalinen äänentunnistus -> JSON-kenttien parsiminen -> Tallennus asiakasrekisteriin.
* **Toteutusaika:** n. 1–2 viikkoa.
* **Kriittinen haaste:** Integraatio valmiiseen kassajärjestelmään ja kampaamokohtaisen ammattisanaston (kuten tuote- ja sävykoodit "6.1", "10V", "Olaplex") tarkka tunnistus taustahälyssä.

---

### Tiivistetty suositus etenemiselle:
Jos haluat konkreettisen, laadukkaan lisän tälle sivulle ilman monimutkaista backend-infrastruktuuria:
👉 **Toteuta ensin Kohta 2 (Tyylikonsultaatio / Quiz)** suoraan sivun lomaan. Se on nopea toteuttaa, toimii 100 % luotettavasti eikä vaadi asiakkaalta tiedostojen latailua.