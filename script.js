.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
  width: 400px;
  height: 290px;
}
  blockquote {
    font-style: italic;
  }   

.kursiv {
  font-style: italic;
}
.grid-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000; /* optional, for visibility */
  border: 1px solid #333;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-position: center;
  display: block;
}



body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

.visitenkarte {
  background: linear-gradient(to right, rgb(255, 255, 255), #0000007f);
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 10px 15px;
  width: 300px;
  /* Ändere text-align auf left für besseren Fluss */
  text-align: left;
  display: flex;            /* Flexbox aktivieren */
  align-items: center;      /* Vertikal zentrieren */
  justify-content: space-between; /* Abstand zwischen Bild und Text */
  gap: 20px;                /* Abstand zwischen Bild und Text */
}

.visitenkarte img {
  width: 100px;
  /*border-radius: 50%;*/
  order: 2; /* Bild rechts */
}

fieldset img {
  margin: 1px; /* Abstand um das Bild herum */
  padding: 1px;
}




.visitenkarte > div {
  flex: 1; /* Textbereich nimmt verfügbaren Platz ein */
  order: 1; /* Text links */
}

  .name {
    font-size: 1.0em;
    margin: 15px 0 5px 0;
  }
  .position {
    color: #777;
    font-size: 1em;
    margin-bottom: 15px;
  }
  .kontakt-info {

    font-size: 0.9em;
    margin: 5px 0;
    align-items: center;
    gap: 8px;
  }

  .kontakt-info img {
  display: flex;
  float: left;
  width: 10px; /* or any size you want */
  height: auto; /* maintains aspect ratio */
}

.kontakt-info::after {
  content: "";
  display: table;
  clear: both;
}

  .social-links a {
    margin: 0 8px;
    text-decoration: none;
    color: #444;
  }





.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  grid-template-rows: auto;
  grid-template-areas: "sidebar main";
  font-size: small;
}

fieldset, img {
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
}


.container2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  grid-template-rows: auto;
  grid-template-areas: "sidebar main";
  font-size: small;
}


table, th, td {
  border-style: hidden;
  border-collapse: collapse;
    border-collapse: separate; /* wichtig, damit border-spacing wirkt */
  border-spacing: 10px 15px;    /* 0 horizontal, 15px vertikal Abstand */
}


label img {
  margin-right: 8px;
  vertical-align: middle;
  width: 24px;
  height: auto;
}



.top-banner {
  position: fixed;       /* Fixiert den Banner oben im Fenster */
  top: 0;               /* Oben ansetzen */
  left: 0;              /* Links bündig */
  width: 100%;          /* Volle Breite */
  height: 60px;         /* Feste Höhe */
  background-color: #3366cc;  /* Hintergrundfarbe */
  color: white;         /* Schriftfarbe */
  display: flex;        /* Flexbox für Zentrierung */
  align-items: center;  /* Vertikale Zentrierung */
  justify-content: center; /* Horizontale Zentrierung */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* optionaler Schatten */
  z-index: 9999;        /* Oberste Ebene */
}

.banner-img {
  width: 100%;          /* passt zur Breite des Containers */
  height: 150px;        /* feste Höhe, passend zum Banner */
  object-fit: cover;    /* Bild füllt den Bereich, schneidet aber Teile ab, um das Seitenverhältnis zu wahren */
}
body {
  padding-top: 60px;    /* Verhindert Überlappung des Inhalts */
}




@media print {
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: visible; /* Overflow sichtbar machen */
  }

  /* Verhindere Seitenumbrüche */
  * {
    page-break-inside: avoid;
  }

  /* Passe alle Containerbreiten an, damit alles reinpasst */
  .container, .content {
    width: 100vw;  /* volle Druckbreite */
    max-height: 100vh; /* maximale Höhe */
  }

  /* Schriftgröße ggf. anpassen, damit Inhalt passt */
  body {
    font-size: 12pt;
  }
}



