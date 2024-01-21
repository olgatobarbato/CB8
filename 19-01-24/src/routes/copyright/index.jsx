import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function CopyrightPage() {
  return (
    <div className={styles.CopyrightPage}>
      <Link className={styles.link} to={"/"}>
        Homepage
      </Link>
      <h1 className={styles.title}>
        Condizioni e Termini d'Uso –
        <span className={styles.name}>
          <img
            className={styles.logo}
            src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_80041.jpg"
            alt="logo"
          />
          Readify
        </span>
      </h1>
      <p>
        Benvenuti su Readify! Vi preghiamo di leggere attentamente i seguenti
        termini e condizioni che regolano l'utilizzo di questo sito.
      </p>
      <h3>Dichiarazione di Copyright</h3>
      <p>
        Copyright © 2023 Readify. Tutti i diritti riservati. Il contenuto di
        questo sito, compresi testi, immagini, design e altri materiali, è
        protetto da copyright e da altre leggi sulla proprietà intellettuale.
        Ogni utilizzo non autorizzato del materiale presente su questo sito è
        vietato.
      </p>
      <h3>Termini d'Uso</h3>
      <p>
        <u>Uso Personale</u>: Il sito è destinato all'uso personale degli utenti
        a scopo informativo e di lettura. L'uso commerciale è consentito solo
        previa autorizzazione scritta.
      </p>{" "}
      <p>
        <u>Divieto di Copia e Incolla</u>: È vietato copiare, incollare o
        riprodurre qualsiasi contenuto presente su Readify senza
        l'autorizzazione scritta dei titolari del copyright.
      </p>
      <p>
        <u>Marchi Registrati</u>: Tutti i marchi e i loghi presenti su Readify
        sono di proprietà esclusiva di Readify e sono protetti dalle leggi sul
        marchio registrato.
      </p>
      <h3>Politica DMCA</h3>
      <p>
        Readify rispetta la Digital Millennium Copyright Act (DMCA). In caso di
        presunta violazione del copyright, inviare una notifica di reclamo
        conforme alla DMCA a <u>readify@readify.com</u>.
      </p>
      <h3>Contatti</h3>
      <p>
        Per domande o segnalazioni relative al copyright, si prega di contattare
        il nostro team legale via email all'indirizzo [Indirizzo Email] o
        compilando il nostro modulo di contatto online.
      </p>
      <h3>Data di Ultimo Aggiornamento</h3>
      <p>Questa pagina è stata aggiornata l'ultima volta il 19 gennaio 2024.</p>
      <h3>Avvertenza Legale</h3>
      <p>
        La violazione dei diritti d'autore può comportare azioni legali. Readify
        si riserva il diritto di perseguire ogni violazione della presente
        politica.
      </p>
    </div>
  );
}
