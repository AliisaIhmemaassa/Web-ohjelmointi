# Suunnittelu
Sivusto on fiktiivisen yrityksen Abacab oy kotisivu. Koostuu kolmesta sivusta: etusivu, media sivu ja abacab sivu.

Staattiset ominaisuudet:
- Jokaisella sivulla on navigointi palkki, josta voi vaihtaa sivja.
- Etusivulla on otsikko ja tekstiä.
- Media sivulla on otsikko, tekstiä, taulukko, kuvia, video ja linkkejä. Kuvilla ja vieolla on alt teksti. Kuvilla on reunukset.
- Abacab sivulla on otsikko ja tekstiä.

Dynaamiset ominaisuudet:
- Sivuilla on nappi, josta voi vaihtaa teemaa tummaan tai vaaleaan. Teema valinta säilytetään localStorage:ssa.
- Etusivulla on interaktiivinen kuvapino, painalluksella tulee kuvia näkyviin. Riittävä määrä klikauksia soittaa audiota. Oikea klikkaus piilottaa kuvia ja pysäyttää audion.
- Abacab sivulla on dynaaminen kysely laatikko, jossa voi siirtyä seuraavaan tai edelliseen kysymykseen. Viimeisellä sivulla on "Valmis" nappi joka näyttää tuloksesi.

Etusivulta voi navikoda media sivulle ja abacab sivulle. Media sivulta ja abacab sivulta voi navikoida etusivulle ja toisilleen. Media sivulta voi avata neljä linkkiä uuteen välilehteen

Projektikansiossa on index.html ja kansiot media, pages, scripts ja styles. Media kansio sisältää kuvat ja videot, pages sisältää muut kuin etusivun, scripts sisältää java scriptit ja styles sisältää css tiedostot.
