import { motion } from "framer-motion";

const Impressum = () => {
  const containerStyles = {
    margin: "10vh",
    backgroundColor: "rgba(135, 206, 235, 0.5)",
    padding: "35px",
    borderRadius: "25px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column", // Use column layout to enable scrolling
    color: "white",
    textDecoration: "none",
    textAlign: "center",
  };

  // Benutzerdefinierte CSS für die Scrollbar und Abstand zum Text
  const scrollbarStyles = {
    maxHeight: "610px", // Maximal 610px Höhe für das Textfeld
    overflowY: "auto", // Enable vertical scrollbar
    paddingRight: "15px", // Abstand zwischen Text und Scrollbar
  };

  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Monate beginnen bei 0 (Januar)
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <style>
        {`
          /* Benutzerdefinierte Scrollbar-Stile */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background-color: rgba(0,0,0,0.1);
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,0.3);
            border-radius: 5px;
          }

          /* Stile für Links (href) */
          a {
            color: white; // Setzt die Farbe der Links auf Weiß
            text-decoration: none; // Entfernt Unterstreichungen von Links
          }

          a:hover {
            text-decoration: underline; // Fügt eine Unterstreichung hinzu, wenn der Link gehovered wird
          }
        `}
      </style>
      <div id="root">
        <div className="welcome-section" style={containerStyles}>
          <div className="impressum-container" style={scrollbarStyles}>
            <div className="impressum-content">
              <h1>Impressum</h1>
              <br></br>
              <p>Angaben gemäß § 5 TMG</p>
              <p>
                Andreas Brühl <br />
                Schillerstraße 66
                <br />
                99096 Erfurt <br />
              </p>
              <br></br>
              <p>
                <strong>Vertreten durch:</strong>
                <br />
                Andreas Brühl
              </p>
              <br></br>
              <p>
                <strong>Kontakt:</strong>
                <br />
                Telefon: +49-017623184023
                <br />
                E-Mail:{" "}
                <a href="mailto:a.bruehl2019@gmail.com">
                  a.bruehl2019@gmail.com
                </a>
              </p>
              <br></br>
              <p>
                <strong>Haftungsausschluss:</strong>
              </p>
              <br></br>
              <p>
                <strong>Haftung für Inhalte</strong>
                <br />
                <br></br>
                Die Inhalte unserer Seiten wurden und werden mit größter
                Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr
                übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
              <br></br>
              <p>
                <strong>Haftung für Links</strong>
                <br />
                Unser Angebot enthält Links zu externen Webseiten Dritter oder
                kann diese enthalten, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
              <br></br>
              <p>
                <strong>Datenschutz</strong>
                <br />
                <br></br>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir
                weisen darauf hin, dass die Datenübertragung im Internet (z.B.
                bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich. Der Nutzung von im Rahmen der
                Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und
                Informationsmaterialien wird hiermit ausdrücklich widersprochen.
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
              <br></br>
              <p>
                Impressum vom {getCurrentDate()}
                <a href="https://www.impressum-generator.de">
                  {" "}
                  Impressum Generator
                </a>{" "}
                der{" "}
                <a
                  href="https://www.kanzlei-hasselbach.de/standorte/frankfurt/"
                  rel="nofollow"
                >
                  Kanzlei Hasselbach, Frankfurt
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Impressum;
