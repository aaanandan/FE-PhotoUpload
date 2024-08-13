import logo from "./logo.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Header() {
  return (
    <>
      <title>File upload</title>
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta charSet="UTF-8" />
      <link
        rel="icon"
        type="image/png"
        href="resource/kailaasa-favicon-32x32.png"
      />
      <link rel="stylesheet" href="assets/styles.css" type="text/css" />
      <link rel="stylesheet" href="assets/menu.css" type="text/css" />
      <link
        rel="stylesheet"
        href="assets/flatpickr-4.6.9.min.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="assets/select2-4.0.13.min.css"
        type="text/css"
      />
    </>
  );
}

function footer() {}

function App() {
  let [isLoading, setLoading] = useState(false);

  let [email, setEmail] = useState(null);
  let [startDate, setStartDate] = useState(new Date());
  let [place, setPlace] = useState("Adikailasa AK");
  let [presidentialBriefing, setPresidentialBriefing] = useState(null);
  let [eventType, setEventType] = useState("Daily Rituals (Nithyotsavam)");
  let [eventName, setEventName] = useState(null);
  let [activityType, setActivityType] = useState([]);
  let [volunteerCount, setVolunteerCount] = useState(null);
  let [livesEnriched, setLivesEnriched] = useState(null);
  let [description, setDescription] = useState(null);
  let [files, setFiles] = useState(null);

  const handleClick = (e) => {
    // let target = e.target;
    // let data = { email, startDate, place, presidentialBriefing, eventType, eventName, activityType, volunteerCount, livesEnriched, description }

    if (
      email != null &&
      startDate != null &&
      description != null &&
      files != null
    ) {
      setLoading(true);
      let data = new FormData();
      data.append("email", email);
      data.append("startDate", startDate);
      data.append("place", place);

      data.append("presidentialBriefing", presidentialBriefing);
      data.append("eventType", eventType);
      data.append("eventName", eventName);
      data.append("activityType", activityType);
      data.append("volunteerCount", volunteerCount);
      data.append("livesEnriched", livesEnriched);
      data.append("description", description);

      let input = document.querySelector('input[type="file"]');
      console.log("files...", input.files, files);
      for (let i = 0; i < files.length; i++) {
        data.append(`files`, files[i], files[i].name);
      }
      ////http://localhost:3000
      //https://npediaimg.koogle.sk
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          alert(JSON.stringify(data));
          setLoading(false);
        })
        .catch((err) => {
          alert(JSON.stringify(err));
          setLoading(false);
        });
    } else {
      alert("Please fill all the mandatory fields");
    }
  };
  return (
    <>
      <Header />
      <title>Kailasapedia Form</title>
      <div className="menu">
        <div className="menu_content">
          <img className="menu_logo_img" src="assets/kailasa-logo.png" />
          <span>Kailasapedia Form</span>
          <img className="menu_logo_img" src="assets/swamiji.png" />
        </div>
      </div>
      {isLoading ? (
        <center>
          <br></br>
          <br></br>
          <HashLoader color="orange" size={600} />
          <br></br>Uploading
        </center>
      ) : (
        <form id="upload">
          <div className="email_id input_container">
            <label htmlFor="email_id">Email id</label>
            <input
              type="email"
              id="email_id"
              name="email_id"
              required
              inputMode="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span id="email_id_helptext" className="helptext">
              Email id of the person or Kailasa entity submitting this form.
              Please enter a valid email,{" "}
              <strong>which you have access to</strong>. Please note, later if
              you register an account with this email id, you will be able to
              find all images you uploaded with this email id. Ex. -
              arsjp@kailaasa.org, newjerseysatsangcenter@gmail.com,
              nithyagautama@yahoo.com etc.
            </span>
            <span className="denote_required">
              This input field is mandatory.
            </span>
          </div>
          <div>
            <label htmlFor="date">Date of Images</label>
            <DatePicker
              id="date"
              name="date"
              selected={startDate}
              onChange={(startDate) => setStartDate(startDate)}
            />
            <span id="date_helptext" className="helptext">
              Select the actual date when this event took place, and the
              photographs/images were captured.
            </span>
            <span className="denote_required">
              This input field is mandatory.
            </span>
          </div>
          <div className="entity">
            <label htmlFor="entity">Place</label>
            <select
              id="entity"
              name="entity"
              data-select2-id="entity"
              tabIndex={-1}
              className="select2-accessible"
              aria-hidden="true"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            >
              <option
                value="ADIKAILASA"
                data-select2-id={2}
                selected="selected"
              >
                ADIKAILASA
              </option>
              <option value="KAILASA SALEM">KAILASA SALEM</option>
              <option value="APATH SANYASI - MALE">APATH SANYASI - MALE</option>
              <option value="APATH SANYASI - FEMALE">
                APATH SANYASI - FEMALE
              </option>
              <option value="KAILASA AMERSFOORT, NETHERLANDS">
                KAILASA AMERSFOORT, NETHERLANDS
              </option>
              <option value="KAILASA ARACAJU-SE NORDESTE, BRASIL">
                KAILASA ARACAJU-SE NORDESTE, BRASIL
              </option>
              <option value="KAILASA ARAUCARIA - PARANA, BRASIL">
                KAILASA ARAUCARIA - PARANA, BRASIL
              </option>
              <option value="KAILASA ATLANTA, USA">KAILASA ATLANTA, USA</option>
              <option value="KAILASA AUCKLAND, NZ">KAILASA AUCKLAND, NZ</option>
              <option value="KAILASA AUSTIN, USA">KAILASA AUSTIN, USA</option>
              <option value="KAILASA BADEN, SWITZERLAND">
                KAILASA BADEN, SWITZERLAND
              </option>
              <option value="KAILASA BAHIA SAO PAULO BRASIL">
                KAILASA BAHIA SAO PAULO BRASIL
              </option>
              <option value="KAILASA BAHRAIN">KAILASA BAHRAIN</option>
              <option value="KAILASA BAIE MAHAULT, GUADELOUPE">
                KAILASA BAIE MAHAULT, GUADELOUPE
              </option>
              <option value="KAILASA BANDRA MUMBAI, INDIA">
                KAILASA BANDRA MUMBAI, INDIA
              </option>
              <option value="KAILASA BANDRA, INDIA">
                KAILASA BANDRA, INDIA
              </option>
              <option value="KAILASA BARCELONA ESPANA">
                KAILASA BARCELONA ESPANA
              </option>
              <option value="KAILASA BARRACKPORE, TRINIDAD & TOBAGO">
                KAILASA BARRACKPORE, TRINIDAD & TOBAGO
              </option>
              <option value="KAILASA BASAVANAGUDI BANGALORE, INDIA">
                KAILASA BASAVANAGUDI BANGALORE, INDIA
              </option>
              <option value="KAILASA BAUDHA, NEPAL">
                KAILASA BAUDHA, NEPAL
              </option>
              <option value="KAILASA BAURU SP, BRASIL">
                KAILASA BAURU SP, BRASIL
              </option>
              <option value="KAILASA BELGIUM">KAILASA BELGIUM</option>
              <option value="KAILASA BHANASHANKARI, INDIA">
                KAILASA BHANASHANKARI, INDIA
              </option>
              <option value="KAILASA BOTAFOGO, RIO DE JANEIRO BRASIL">
                KAILASA BOTAFOGO, RIO DE JANEIRO BRASIL
              </option>
              <option value="KAILASA BRATISLAVA, SLOVAKIA">
                KAILASA BRATISLAVA, SLOVAKIA
              </option>
              <option value="KAILASA BRNO, CZECH REPUBLIC">
                KAILASA BRNO, CZECH REPUBLIC
              </option>
              <option value="KAILASA CALGARY, CANADA">
                KAILASA CALGARY, CANADA
              </option>
              <option value="KAILASA CASANARE VILLANUEVA, COLOMBIA">
                KAILASA CASANARE VILLANUEVA, COLOMBIA
              </option>
              <option value="KAILASA CHAPALA MEXICO">
                KAILASA CHAPALA MEXICO
              </option>
              <option value="KAILASA CHARLOTTE, USA">
                KAILASA CHARLOTTE, USA
              </option>
              <option value="KAILASA CHRISTCHURCH, NZ">
                KAILASA CHRISTCHURCH, NZ
              </option>
              <option value="KAILASA CIUDAD AUTONOMA DE BUENOS AIRES, ARGENTINA">
                KAILASA CIUDAD AUTONOMA DE BUENOS AIRES, ARGENTINA
              </option>
              <option value="KAILASA CIUDAD DE MEXICO, MEXICO">
                KAILASA CIUDAD DE MEXICO, MEXICO
              </option>
              <option value="KAILASA COAHULIA, SALTILLO, MEXICO">
                KAILASA COAHULIA, SALTILLO, MEXICO
              </option>
              <option value="KAILASA COMPASSVALE, SINGAPORE">
                KAILASA COMPASSVALE, SINGAPORE
              </option>
              <option value="KAILASA CONNECTICUT, USA">
                KAILASA CONNECTICUT, USA
              </option>
              <option value="KAILASA COSTA VERDE, BRASIL">
                KAILASA COSTA VERDE, BRASIL
              </option>
              <option value="KAILASA CROATIA">KAILASA CROATIA</option>
              <option value="KAILASA CURITIBA-LESTE, BRASIL">
                KAILASA CURITIBA-LESTE, BRASIL
              </option>
              <option value="KAILASA DALLAS, USA">KAILASA DALLAS, USA</option>
              <option value="KAILASA DANVILLE CALIFORNIA, USA">
                KAILASA DANVILLE CALIFORNIA, USA
              </option>
              <option value="KAILASA DHUMBARAI, NEPAL">
                KAILASA DHUMBARAI, NEPAL
              </option>
              <option value="KAILASA DUBAI">KAILASA DUBAI</option>
              <option value="KAILASA EL SALADO VENEZUELA">
                KAILASA EL SALADO VENEZUELA
              </option>
              <option value="KAILASA ESPANOL en LAS VEGAS, USA">
                KAILASA ESPANOL en LAS VEGAS, USA
              </option>
              <option value="KAILASA ESSEX, UK">KAILASA ESSEX, UK</option>
              <option value="KAILASA FAMILIA PORTUGUESA, PORTUGAL">
                KAILASA FAMILIA PORTUGUESA, PORTUGAL
              </option>
              <option value="KAILASA GAROPABA SANTA CATARINA, BRASIL">
                KAILASA GAROPABA SANTA CATARINA, BRASIL
              </option>
              <option value="KAILASA GAUTENG, SOUTH AFRICA">
                KAILASA GAUTENG, SOUTH AFRICA
              </option>
              <option value="KAILASA GENOVA, ITALY">
                KAILASA GENOVA, ITALY
              </option>
              <option value="KAILASA GOIANIA GOIAS BRASIL">
                KAILASA GOIANIA GOIAS BRASIL
              </option>
              <option value="KAILASA GOIANIA, CITY IN BRASIL">
                KAILASA GOIANIA, CITY IN BRASIL
              </option>
              <option value="KAILASA GOTHENBURG, SWEDEN">
                KAILASA GOTHENBURG, SWEDEN
              </option>
              <option value="KAILASA GOYAVE, GUADELOUPE">
                KAILASA GOYAVE, GUADELOUPE
              </option>
              <option value="KAILASA GRASSE, FRANCE">
                KAILASA GRASSE, FRANCE
              </option>
              <option value="KAILASA GUAYAQUILL, ECUADOR">
                KAILASA GUAYAQUILL, ECUADOR
              </option>
              <option value="KAILASA GUPTAKASHI, HYDERABAD">
                KAILASA GUPTAKASHI, HYDERABAD
              </option>
              <option value="KAILASA HOUSTON, USA">KAILASA HOUSTON, USA</option>
              <option value="KAILASA HUNTERSVILLE, USA">
                KAILASA HUNTERSVILLE, USA
              </option>
              <option value="KAILASA HYDERABAD, INDIA">
                KAILASA HYDERABAD, INDIA
              </option>
              <option value="KAILASA INDIANAPOLIS, USA">
                KAILASA INDIANAPOLIS, USA
              </option>
              <option value="KAILASA INDRANAGAR BANGALORE, INDIA">
                KAILASA INDRANAGAR BANGALORE, INDIA
              </option>
              <option value="KAILASA IPIRANGA SAO PAULO BRASIL">
                KAILASA IPIRANGA SAO PAULO BRASIL
              </option>
              <option value="KAILASA IRAQ">KAILASA IRAQ</option>
              <option value="KAILASA ITAJAI SC SANTA CATARINA, BRASIL">
                KAILASA ITAJAI SC SANTA CATARINA, BRASIL
              </option>
              <option value="KAILASA JERSEY CITY, USA">
                KAILASA JERSEY CITY, USA
              </option>
              <option value="KAILASA JOHN'S CREEK GEORGIA, USA">
                KAILASA JOHN'S CREEK GEORGIA, USA
              </option>
              <option value="KAILASA JORPATI, NEPAL">
                KAILASA JORPATI, NEPAL
              </option>
              <option value="KAILASA JUTLAND, DENMARK">
                KAILASA JUTLAND, DENMARK
              </option>
              <option value="KAILASA KANNUR, INDIA">
                KAILASA KANNUR, INDIA
              </option>
              <option value="KAILASA KASAVANAHALLI BANGALORE, INDIA">
                KAILASA KASAVANAHALLI BANGALORE, INDIA
              </option>
              <option value="KAILASA KENT, UK">KAILASA KENT, UK</option>
              <option value="KAILASA KILAMBA KIAXI, LUANDA ANGOLA, AFRICA IN PORTUGUES">
                KAILASA KILAMBA KIAXI, LUANDA ANGOLA, AFRICA IN PORTUGUES
              </option>
              <option value="KAILASA KOSICE, SLOVAKIA">
                KAILASA KOSICE, SLOVAKIA
              </option>
              <option value="KAILASA KOZHIKODE, INDIA">
                KAILASA KOZHIKODE, INDIA
              </option>
              <option value="KAILASA KUALA LUMPUR, MALAYSIA">
                KAILASA KUALA LUMPUR, MALAYSIA
              </option>
              <option value="KAILASA KULIM, MALAYSIA">
                KAILASA KULIM, MALAYSIA
              </option>
              <option value="KAILASA LAMENTIN, GUADELOUPE">
                KAILASA LAMENTIN, GUADELOUPE
              </option>
              <option value="KAILASA LATIN AMERICA">
                KAILASA LATIN AMERICA
              </option>
              <option value="KAILASA LATIN AMERICA YATRA, USA">
                KAILASA LATIN AMERICA YATRA, USA
              </option>
              <option value="KAILASA LE GOSIER, GUADELOUPE">
                KAILASA LE GOSIER, GUADELOUPE
              </option>
              <option value="KAILASA LEBANON">KAILASA LEBANON</option>
              <option value="KAILASA LONG ISLAND CITY, NEW YORK, USA">
                KAILASA LONG ISLAND CITY, NEW YORK, USA
              </option>
              <option value="KAILASA LONG ISLAND CITY, USA">
                KAILASA LONG ISLAND CITY, USA
              </option>
              <option value="KAILASA LOS ANGELES ESPANOL, USA">
                KAILASA LOS ANGELES ESPANOL, USA
              </option>
              <option value="KAILASA LOS ANGELES, USA">
                KAILASA LOS ANGELES, USA
              </option>
              <option value="KAILASA LUXEMBOURG">KAILASA LUXEMBOURG</option>
              <option value="KAILASA MACAPA- AMAPA, BRAZIL">
                KAILASA MACAPA- AMAPA, BRAZIL
              </option>
              <option value="KAILASA MADRID ESPANA">
                KAILASA MADRID ESPANA
              </option>
              <option value="KAILASA MASSACHUSSETTS, USA">
                KAILASA MASSACHUSSETTS, USA
              </option>
              <option value="KAILASA MAURITIUS">KAILASA MAURITIUS</option>
              <option value="KAILASA MELBOURNE, AUSTRALIA">
                KAILASA MELBOURNE, AUSTRALIA
              </option>
              <option value="KAILASA MERCED CALIFORNIA, USA">
                KAILASA MERCED CALIFORNIA, USA
              </option>
              <option value="KAILASA MIAMI, USA">KAILASA MIAMI, USA</option>
              <option value="KAILASA MICHIGAN, USA">
                KAILASA MICHIGAN, USA
              </option>
              <option value="KAILASA MOGI DAS CRUZES SP, BRASIL">
                KAILASA MOGI DAS CRUZES SP, BRASIL
              </option>
              <option value="KAILASA MONTES CLAROS, BRASIL">
                KAILASA MONTES CLAROS, BRASIL
              </option>
              <option value="KAILASA MULHEIM, GERMANY">
                KAILASA MULHEIM, GERMANY
              </option>
              <option value="KAILASA MUSCAT">KAILASA MUSCAT</option>
              <option value="KAILASA NAGPUR, INDIA">
                KAILASA NAGPUR, INDIA
              </option>
              <option value="KAILASA NANTES, FRANCE">
                KAILASA NANTES, FRANCE
              </option>
              <option value="KAILASA NAPIER, NZ">KAILASA NAPIER, NZ</option>
              <option value="KAILASA NAUCALPAN, ESTADO DE MEXICO, MEXICO">
                KAILASA NAUCALPAN, ESTADO DE MEXICO, MEXICO
              </option>
              <option value="KAILASA NAVI MUMBAI, INDIA">
                KAILASA NAVI MUMBAI, INDIA
              </option>
              <option value="KAILASA NAYANAPANAHALLI BANGALORE, INDIA">
                KAILASA NAYANAPANAHALLI BANGALORE, INDIA
              </option>
              <option value="KAILASA NEW HYDE PARK, NEW YORK, USA">
                KAILASA NEW HYDE PARK, NEW YORK, USA
              </option>
              <option value="KAILASA NEW HYDE PARK, USA">
                KAILASA NEW HYDE PARK, USA
              </option>
              <option value="KAILASA NEW JERSEY, USA">
                KAILASA NEW JERSEY, USA
              </option>
              <option value="KAILASA NEW YORK, USA">
                KAILASA NEW YORK, USA
              </option>
              <option value="KAILASA NORTH LONDON, UK">
                KAILASA NORTH LONDON, UK
              </option>
              <option value="KAILASA NOVENA, SINGAPORE">
                KAILASA NOVENA, SINGAPORE
              </option>
              <option value="KAILASA OHIO, USA">KAILASA OHIO, USA</option>
              <option value="KAILASA OKLAHOMA, USA">
                KAILASA OKLAHOMA, USA
              </option>
              <option value="KAILASA OMAN">KAILASA OMAN</option>
              <option value="KAILASA ORANJESTAD, ARUBA, CARIBBEAN">
                KAILASA ORANJESTAD, ARUBA, CARIBBEAN
              </option>
              <option value="KAILASA PHILADELPHIA, USA">
                KAILASA PHILADELPHIA, USA
              </option>
              <option value="KAILASA PITTSBURGH, USA">
                KAILASA PITTSBURGH, USA
              </option>
              <option value="KAILASA PLZEN, CZECH REPUBLIC">
                KAILASA PLZEN, CZECH REPUBLIC
              </option>
              <option value="KAILASA PONCA CITY, USA">
                KAILASA PONCA CITY, USA
              </option>
              <option value="KAILASA POPRAD, SLOVAKIA">
                KAILASA POPRAD, SLOVAKIA
              </option>
              <option value="KAILASA POVAZSKA BYSTRICA, SLOVAKIA">
                KAILASA POVAZSKA BYSTRICA, SLOVAKIA
              </option>
              <option value="KAILASA PRAGUE, CZECH REPUBLIC">
                KAILASA PRAGUE, CZECH REPUBLIC
              </option>
              <option value="KAILASA PRAIA GRANDE, BRASIL">
                KAILASA PRAIA GRANDE, BRASIL
              </option>
              <option value="KAILASA PRESIDENTE PRUDENTE SP, BRASIL">
                KAILASA PRESIDENTE PRUDENTE SP, BRASIL
              </option>
              <option value="KAILASA PUGLIA, ITALY">
                KAILASA PUGLIA, ITALY
              </option>
              <option value="KAILASA PUNE, INDIA">KAILASA PUNE, INDIA</option>
              <option value="KAILASA QUEENS NEW YORK, USA">
                KAILASA QUEENS NEW YORK, USA
              </option>
              <option value="KAILASA RANCAGUA, CHILE">
                KAILASA RANCAGUA, CHILE
              </option>
              <option value="KAILASA RAVINE DES CABRIS REUNION ISLAND, FRANCE">
                KAILASA RAVINE DES CABRIS REUNION ISLAND, FRANCE
              </option>
              <option value="KAILASA RESERVA NATURAL DE, MEXICO">
                KAILASA RESERVA NATURAL DE, MEXICO
              </option>
              <option value="KAILASA RIO DE JANEIRO NORTE RICHUELO CENTRO, BRASIL">
                KAILASA RIO DE JANEIRO NORTE RICHUELO CENTRO, BRASIL
              </option>
              <option value="KAILASA RIO GRANDE DO SUL, BRAZIL">
                KAILASA RIO GRANDE DO SUL, BRAZIL
              </option>
              <option value="KAILASA ROMANIA">KAILASA ROMANIA</option>
              <option value="KAILASA ROTORUA, NZ">KAILASA ROTORUA, NZ</option>
              <option value="KAILASA SAN ANTONIO TEXAS, USA">
                KAILASA SAN ANTONIO TEXAS, USA
              </option>
              <option value="KAILASA SAN DIEGO, USA">
                KAILASA SAN DIEGO, USA
              </option>
              <option value="KAILASA SAN FERNANDO, TRINIDAD & TOBAGO">
                KAILASA SAN FERNANDO, TRINIDAD & TOBAGO
              </option>
              <option value="KAILASA SAN JOSE, USA">
                KAILASA SAN JOSE, USA
              </option>
              <option value="KAILASA SAN MIGUEL NICOLAS, MEXICO">
                KAILASA SAN MIGUEL NICOLAS, MEXICO
              </option>
              <option value="KAILASA SANTA MARIA, BRAZIL">
                KAILASA SANTA MARIA, BRAZIL
              </option>
              <option value="KAILASA SANTA ROSA DE VITERBO, BRASIL">
                KAILASA SANTA ROSA DE VITERBO, BRASIL
              </option>
              <option value="KAILASA SANTOS PRAIA SAO PAULO, BRASIL">
                KAILASA SANTOS PRAIA SAO PAULO, BRASIL
              </option>
              <option value="KAILASA SAO PAULO A CAPITAL, BRASIL">
                KAILASA SAO PAULO A CAPITAL, BRASIL
              </option>
              <option value="KAILASA SAO PAULO BRASIL">
                KAILASA SAO PAULO BRASIL
              </option>
              <option value="KAILASA SAO PAULO, SANTOS, BRASIL">
                KAILASA SAO PAULO, SANTOS, BRASIL
              </option>
              <option value="KAILASA SC AMERICANA / SAO PAULO BRASIL">
                KAILASA SC AMERICANA / SAO PAULO BRASIL
              </option>
              <option value="KAILASA SC BARREIRAS BA, BRASIL">
                KAILASA SC BARREIRAS BA, BRASIL
              </option>
              <option value="KAILASA SC IPATINGA MG BRASIL">
                KAILASA SC IPATINGA MG BRASIL
              </option>
              <option value="KAILASA SCOTLAND UNITED KINGDOM">
                KAILASA SCOTLAND UNITED KINGDOM
              </option>
              <option value="KAILASA SCOTLAND, UNITED KINGDOM">
                KAILASA SCOTLAND, UNITED KINGDOM
              </option>
              <option value="KAILASA SEATTLE, USA">KAILASA SEATTLE, USA</option>
              <option value="KAILASA SELAYANG, MALAYSIA">
                KAILASA SELAYANG, MALAYSIA
              </option>
              <option value="KAILASA SEREMBAN, MALAYSIA">
                KAILASA SEREMBAN, MALAYSIA
              </option>
              <option value="KAILASA SERGIPE, BRAZIL">
                KAILASA SERGIPE, BRAZIL
              </option>
              <option value="KAILASA SINGAPORE">KAILASA SINGAPORE</option>
              <option value="KAILASA SINTRA PORTUGAL">
                KAILASA SINTRA PORTUGAL
              </option>
              <option value="KAILASA SION, INDIA">KAILASA SION, INDIA</option>
              <option value="KAILASA SOUTH AUCKLAND NZ">
                KAILASA SOUTH AUCKLAND NZ
              </option>
              <option value="KAILASA ST. LOUIS, USA">
                KAILASA ST. LOUIS, USA
              </option>
              <option value="KAILASA SUVA, FIJI">KAILASA SUVA, FIJI</option>
              <option value="KAILASA SYDNEY, AUSTRALIA">
                KAILASA SYDNEY, AUSTRALIA
              </option>
              <option value="KAILASA TENERIFE, ESPANA">
                KAILASA TENERIFE, ESPANA
              </option>
              <option value="KAILASA TERESINA, PIAUI, BRASIL">
                KAILASA TERESINA, PIAUI, BRASIL
              </option>
              <option value="KAILASA THANE, INDIA">KAILASA THANE, INDIA</option>
              <option value="KAILASA THE HAGUE, NETHERLANDS">
                KAILASA THE HAGUE, NETHERLANDS
              </option>
              <option value="KAILASA TORONTO, CANADA">
                KAILASA TORONTO, CANADA
              </option>
              <option value="KAILASA TUMKUR, INDIA">
                KAILASA TUMKUR, INDIA
              </option>
              <option value="KAILASA TURKEY">KAILASA TURKEY</option>
              <option value="KAILASA UAE">KAILASA UAE</option>
              <option value="KAILASA UNITED KINGDOM">
                KAILASA UNITED KINGDOM
              </option>
              <option value="KAILASA UTRECHT, NETHERLANDS">
                KAILASA UTRECHT, NETHERLANDS
              </option>
              <option value="KAILASA VADODARA, INDIA">
                KAILASA VADODARA, INDIA
              </option>
              <option value="KAILASA VALAIS, CH">KAILASA VALAIS, CH</option>
              <option value="KAILASA VALASSKE MEZIRICI, CZECH REPUBLIC">
                KAILASA VALASSKE MEZIRICI, CZECH REPUBLIC
              </option>
              <option value="KAILASA VALLE DEL CAUCA, COLOMBIA">
                KAILASA VALLE DEL CAUCA, COLOMBIA
              </option>
              <option value="KAILASA VALPARAISO, CHILE">
                KAILASA VALPARAISO, CHILE
              </option>
              <option value="KAILASA VANCOUVER, USA">
                KAILASA VANCOUVER, USA
              </option>
              <option value="KAILASA VARC, INDIA">KAILASA VARC, INDIA</option>
              <option value="KAILASA VILLENEUVE, FRANCE">
                KAILASA VILLENEUVE, FRANCE
              </option>
              <option value="KAILASA VOGHERA, ITALY">
                KAILASA VOGHERA, ITALY
              </option>
              <option value="KAILASA WELLINGTON, NZ">
                KAILASA WELLINGTON, NZ
              </option>
              <option value="KAILASA WICIEJOW, POLAND">
                KAILASA WICIEJOW, POLAND
              </option>
              <option value="KAILASA YSTAD, SWEDEN">
                KAILASA YSTAD, SWEDEN
              </option>
              <option value="KAILASA ZURICH, SWITZERLAND">
                KAILASA ZURICH, SWITZERLAND
              </option>
              <option value="OTHER - I DO NOT BELONG TO ANY KAILASA">
                OTHER - I DO NOT BELONG TO ANY KAILASA
              </option>
              <option value="OTHER - MY KAILASA IS NOT IN THIS LIST">
                OTHER - MY KAILASA IS NOT IN THIS LIST
              </option>
              <option value="KASHI SARVAJNAPEETAM">KASHI SARVAJNAPEETAM</option>
              <option value="SHYAMALAPEETA SARVAJNAPEETAM">
                SHYAMALAPEETA SARVAJNAPEETAM
              </option>
              <option value="SURYA VAMSA SURANGI SAMRAJYA SARVAJNAPEETAM">
                SURYA VAMSA SURANGI SAMRAJYA SARVAJNAPEETAM
              </option>
              <option value="KAILASA PHOENIX, USA">KAILASA PHOENIX, USA</option>
            </select>
            {/* <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1"
          style="width: 628.85px;"><span class="selection"><span
                  class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
                  aria-expanded="false" tabindex="0" aria-disabled="false"
                  aria-labelledby="select2-entity-container"><span class="select2-selection__rendered"
                      id="select2-entity-container" role="textbox" aria-readonly="true"
                      title="Adikailasa AK">Adikailasa AK</span><span class="select2-selection__arrow"
                      role="presentation"><b role="presentation"></b></span></span></span><span
              class="dropdown-wrapper" aria-hidden="true"></span></span> */}
            <span id="entity_helptext" className="helptext">
              Please select the KAILASA entity for which you are submitting
              these images. If your KAILASA entity is not in the list, please
              contact NPedia/KPedia team.{" "}
            </span>
          </div>

          <div className="event_type">
            <label htmlFor="event_type">Event Type</label>
            <select
              id="event_type"
              name="event_type"
              className=""
              aria-hidden="true"
              onChange={(e) => {
                setEventType(e.target.value);
              }}
            >
              <option value="nithyotsavam" selected="selected">
                Daily Rituals (Nithyotsavam)
              </option>
              <option value="utsavam">Festivals / Utsava</option>
              <option value="brahmotsavam">Brahmotsavam</option>
              <option value="seva">Special Ritual</option>
              <option value="yoga">Yoga Session</option>
              <option value="pm">Power Manifestation Session</option>
              <option value="enriching">Enriching Session</option>
              <option value="causing">Causing Session</option>
              <option value="program">Program or Jnana classes</option>
              <option value="darshan">Darshan of the SPH</option>
              <option value="annadaan">Aushadha Anna daan</option>
              <option value="anniversary">Anniversary</option>
              <option value="inauguration">Inaugration</option>
              <option value="sangha">Sangha meeting</option>
              <option value="dr">
                Diplomatic Meeting, outreach or recognition
              </option>
              <option value="cultural">Cultural Event or gathering</option>
              <option value="secular">
                National or state event or holiday
              </option>
              <option value="work">General work</option>
              <option value="humanitarian">
                Humanitarian services or disaster relief work
              </option>
              <option value="persecution">Persecution or attack</option>
              <option value="emergency">Emergency or natural calamity</option>
              <option value="media">Media positive coverage</option>
            </select>
          </div>
          <div className="event_name input_container">
            <label htmlFor="event_name">Event Name</label>
            <input
              type="text"
              id="event_name"
              name="event_name"
              inputMode="text"
              onChange={(e) => {
                setEventName(e.target.value);
              }}
            />
            <span id="event_name_helptext" className="helptext">
              Type the name of the event, example : Padapuja, Gurupurnima, etc.
              Allowed characters : alphabets, numbers, space, underscore, dash,
              fullstop, comma, brackets, hashsymbol
            </span>
          </div>
          <div className="activity_type">
            <label htmlFor="activity_type">Activity Type</label>
            <select
              id="activity_type"
              name="activity_type"
              multiple="multiple"
              data-select2-id="activity_type"
              tabIndex={-1}
              className=""
              aria-hidden="true"
              onChange={(e) => {
                console.log(activityType);
                setActivityType(
                  Array.from(e.target.selectedOptions).map((v) => v.value)
                );
              }}
            >
              <option value="ritual">Puja and Rituals</option>
              <option value="offering">Offering Services or Sevas</option>
              <option value="session">Jnana Session</option>
              <option value="meeting">Meeting</option>
              <option value="yoga">Yoga Session</option>
              <option value="healing">Spiritual Healing</option>
              <option value="medical">Medical services</option>
              <option value="cleaning">Cleaning</option>
              <option value="construction">Construction or fabrication</option>
              <option value="maintenance">Maintenance</option>
              <option value="horticulture">
                Gardening, Agriculture, Horticulture
              </option>
              <option value="firesaftey">Fire prevention work</option>
              <option value="emergency">Emergency Activity</option>
              <option value="organizing">Organizing or Inventory</option>
              <option value="verification">Accounts verification</option>
              <option value="dance">Traditional Dance</option>
              <option value="arts">Traditional Arts</option>
              <option value="cooking">Cooking</option>
              <option value="gaushala">Gaushala Seva</option>
              <option value="feeding">Serving or offering food</option>
              <option value="crowd">Gatherings or crowd</option>
              <option value="waiting">Waiting devotees</option>
              <option value="swamiji">Swamiji the SPH</option>
              <option value="pm">Power Manifestation</option>
              <option value="office">Office work</option>
              <option value="physical">Physical work</option>
              <option value="decoration">Decoration work</option>
              <option value="alankaram">Deity Alankaram</option>
              <option value="preparation">Preparation</option>
              <option value="parayanam">Parayanam chanting</option>
              <option value="enriching_outreach">
                Enriching &amp; Outreach Activities
              </option>
              <option value="dr_outreach">Diplomatic outreach</option>
              <option value="dr_treaty">Diplomatic Treaty Signing</option>
              <option value="fundraising">Causing or Fundraising</option>
              <option value="procession">Procession</option>
              <option value="pada_yatra">Pada Yatra</option>
              <option value="minutes4peace">Meditation for peace</option>
              <option value="security">Security</option>
            </select>

            <span id="activity_type_helptext" className="helptext">
              Multiple activities may be selected.
            </span>
          </div>
          <div className="volunteer_count input_container">
            <label htmlFor="volunteer_count">Volunteer count</label>
            <input
              type="number"
              id="volunteer_count"
              name="volunteer_count"
              min={0}
              step={1}
              defaultValue={0}
              required
              onChange={(e) => {
                setVolunteerCount(e.target.value);
              }}
            />
            <span id="volunteer_count_helptext" className="helptext">
              Enter here the total number of volunteers/monks who directly
              worked for this event
            </span>
          </div>
          <div className="lives_enriched input_container">
            <label htmlFor="lives_enriched">Lives enriched</label>
            <input
              type="number"
              id="lives_enriched"
              name="lives_enriched"
              min={0}
              step={1}
              defaultValue={0}
              required
              onChange={(e) => {
                setLivesEnriched(e.target.value);
              }}
            />
            <span id="lives_enriched_helptext" className="helptext">
              Enter here the total number of people amongst the general public
              who were benefited/enriched during this event
            </span>
          </div>
          <div className="description textarea_container">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              cols={50}
              required
              defaultValue={""}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <span id="pd_brief_helptext" className="helptext">
              <p>
                <strong>Description</strong> is a concise reports providing
                significant and publicly reportable achievements of your KAILASA
                entity to Swamiji - the SPH JGM HDH Bhagavan Nithyananda
                Paramashivam and KAILASA. These will be used as input for
                newsletters and other publications. Please submit these reports
                per the latest format, and usually it is mandatory to include
                numbers and statistics, some examples:
              </p>
              <ul>
                <li>
                  200 people were served anna daan, including 10 policemen, and
                  5 public healthcare workers.
                </li>
                <li>1008 Naivedyams offered on the occasion of Guru Purnima</li>
              </ul>
            </span>
            <span id="description_helptext" className="helptext">
              Give a complete description of the event, in as few words as
              possible.
            </span>
            <span className="denote_required">
              This input field is mandatory.
            </span>
          </div>
          <div className="filesselect">
            <label htmlFor="files">Select files</label>
            <input
              type="file"
              id="files"
              name="files"
              accept=".jpg, .jpeg, .png, .webp"
              multiple
              required
              onChange={(e) => {
                setFiles(e.target.files);
              }}
            />
            <span id="files_helptext" className="helptext">
              Select images files and photographs of the event to upload
            </span>
            <span className="denote_required">
              This input field is mandatory.
            </span>
          </div>

          <button
            onClick={handleClick}
            disabled={isLoading}
            className={isLoading ? "disabled" : ""}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      )}
      <grammarly-desktop-integration data-grammarly-shadow-root="true" />
    </>
  );
}

export default App;
