import logo from './logo.svg';
import './App.css';

function Header(){
  return(<> <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
  <meta charSet="UTF-8" />
  <link
    rel="icon"
    type="image/png"
    href="resource/kailaasa-favicon-32x32.png"
  />
  <link
    rel="stylesheet"
    href="assets/styles.css"
    type="text/css"
  />
  <link
    rel="stylesheet"
    href="assets/menu.css"
    type="text/css"
  />
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
</>);
}

function footer(){

}
function App() {
  return (
<>
<Header/>
   <title>Kailasapedia Form</title>
  <div className="menu">
    <div className="menu_content">
      <img
        className="menu_logo_img"
        src="assets/kailasa-logo.png"
      />
      <span>Kailasapedia Form</span>
      <img
        className="menu_logo_img"
        src="assets/swamiji.png"
      />
    </div>
  </div>
  <form
    id="upload"
    action="http://localhost:3000/upload"
    method="post"
    encType="multipart/form-data"
  >
    <div className="email_id input_container">
      <label htmlFor="email_id">Email id</label>
      <input
        type="text"
        id="email_id"
        name="email_id"
        required=""
        inputMode="email"
      />
      <span id="email_id_helptext" className="helptext">
        Email id of the person or Kailasa entity submitting this form. Please
        enter a valid email, <strong>which you have access to</strong>. Please
        note, later if you register an account with this email id, you will be
        able to find all images you uploaded with this email id. Ex. -
        arsjp@kailaasa.org, newjerseysatsangcenter@gmail.com,
        nithyagautama@yahoo.com etc.
      </span>
      <span className="denote_required">This input field is mandatory.</span>
    </div>
    <div className="date">
      <label htmlFor="date">Date of Images</label>
      <input
        type="text"
        id="date"
        name="date"
        defaultValue="2023-07-24"
        required=""
        className="flatpickr-input"
        readOnly="readonly"
      />
      <span id="date_helptext" className="helptext">
        Select the actual date when this event took place, and the
        photographs/images were captured.
      </span>
      <span className="denote_required">This input field is mandatory.</span>
    </div>
    <div className="entity">
      <label htmlFor="entity">Place</label>
      <select
        id="entity"
        name="entity"
        data-select2-id="entity"
        tabIndex={-1}
        className="select2-hidden-accessible"
        aria-hidden="true"
      >
        <option value="Bidadi" data-select2-id={2} selected="selected">
          Adikailasa AK
        </option>
        <option value="TVM">KAILASA Thiruvannamalai TVM</option>
        <option value="Madurai">KAILASA Madurai </option>
        <option value="LA">KAILASA Los Angeles LA</option>
        <option value="SanJose">KAILASA San Jose </option>
        <option value="Seattle">KAILASA Seattle </option>
        <option value="Houston">KAILASA Houston </option>
        <option value="Toronto">KAILASA Toronto</option>
        <option value="Ohio">KAILASA Ohio </option>
        <option value="Oklahoma">KAILASA Oklahoma </option>
        <option value="Mauritius">KAILASA Mauritius </option>
        <option value="Singapore">KAILASA Singapore </option>
        <option value="KL">KAILASA Kuala Lumpur </option>
        <option value="Australia">KAILASA Australia </option>
        <option value="Sripuram">KAILASA Hyderabad Sripuram</option>
        <option value="NJ">KAILASA New Jersey </option>
        <option value="Trishulam">KAILASA Trishulam </option>
        <option value="Hosur">KAILASA Hosur </option>
        <option value="Podicherry">Kailasa Pondicherry</option>
        <option value="Essex,UK">Kailasa Essex,UK</option>
        <option value="Chinese-world">Kailasa Chinese-world</option>
        <option value="Salem">Kailasa Salem</option>
        <option value="Seeragapadi">Kailasa Seeragapadi</option>
        <option value="London">Kailasa London</option>
        <option value="Kashi">Kailasa Kashi</option>
        <option value="Ichapuram">kailasa Ichapuram</option>
        <option value="Trinidad & Tobago">Kailasa Trinidad &amp; Tobago</option>
        <option value="Oragadam">Kailasa Oragadam</option>
        <option value="Thiruchengode">Kailasa Thiruchengode</option>
        <option value="Oklahoma">Kailasa Oklahoma</option>
        <option value="Dubai">Kailasa Dubai</option>
        <option value="Vadodara">Kailasa Vadodara</option>
        <option value="Phoenix">Kailasa Phoenix</option>
        <option value="Kozhikode">Kailasa Kozhikode</option>
        <option value="Rajapalayam">Kailasa Rajapalayam</option>
        <option value="Pattanam">Kailasa Pattanam</option>
        <option value="Thanjavur">Kailasa Thanjavur </option>
        <option value="Banashankari">Kailasa Bhanashankari</option>
        <option value="Uttarahalli">Kailasa Uttarahalli</option>
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
        Please select the KAILASA entity for which you are submitting these
        images. If your KAILASA entity is not in the list, please contact
        NPedia/KPedia team.{" "}
      </span>
    </div>
    <div className="pd_brief textarea_container">
      <label htmlFor="pd_brief">Presidential Briefing</label>
      <textarea
        id="pd_brief"
        name="pd_brief"
        rows={5}
        cols={50}
        required=""
        defaultValue={""}
      />
      <span id="pd_brief_helptext" className="helptext">
        <p>
          <strong>Presidential Brief</strong> is a concise reports providing
          significant and publicly reportable achievements of your KAILASA
          entity to Swamiji - the SPH JGM HDH Bhagavan Nithyananda Paramashivam
          and KAILASA. These will be used as input for newsletters and other
          publications. Please submit these reports per the latest format, and
          usually it is mandatory to include numbers and statistics, some
          examples:
        </p>
        <ul>
          <li>
            200 people were served anna daan, including 10 policemen, and 5
            public healthcare workers.
          </li>
          <li>1008 Naivedyams offered on the occasion of Guru Purnima</li>
        </ul>
      </span>
      <span className="denote_required">This input field is mandatory.</span>
    </div>
    <div className="event_type">
      <label htmlFor="event_type">Event Type</label>
      <select
        id="event_type"
        name="event_type"
        tabIndex={-1}
        className="select2-hidden-accessible"
        aria-hidden="true"
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
        <option value="dr">Diplomatic Meeting, outreach or recognition</option>
        <option value="cultural">Cultural Event or gathering</option>
        <option value="secular">National or state event or holiday</option>
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
      <input type="text" id="event_name" name="event_name" inputMode="text" />
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
        className="select2-hidden-accessible"
        aria-hidden="true"
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
      {/* <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5"
          style="width: 613.867px;"><span class="selection"><span
                  class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true"
                  aria-expanded="false" tabindex="-1" aria-disabled="false">
                  <ul class="select2-selection__rendered">
                      <li class="select2-search select2-search--inline"><input class="select2-search__field"
                              type="search" tabindex="0" autocomplete="off" autocorrect="off"
                              autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"
                              placeholder="" style="width: 0.75em;"></li>
                  </ul>
              </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
               */}
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
        required=""
      />
      <span id="volunteer_count_helptext" className="helptext">
        Enter here the total number of volunteers/monks who directly worked for
        this event
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
        required=""
      />
      <span id="lives_enriched_helptext" className="helptext">
        Enter here the total number of people amongst the general public who
        were benefited/enriched during this event
      </span>
    </div>
    <div className="description textarea_container">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={5}
        cols={50}
        required=""
        defaultValue={""}
      />
      <span id="description_helptext" className="helptext">
        Give a complete description of the event, in as few words as possible.
      </span>
      <span className="denote_required">This input field is mandatory.</span>
    </div>
    <div className="filesselect">
      <label htmlFor="files">Select files</label>
      <input
        type="file"
        id="files"
        name="files"
        accept=".jpg, .jpeg, .png, .webp"
        multiple=""
        required=""
      />
      <span id="files_helptext" className="helptext">
        Select images files and photographs of the event to upload
      </span>
      <span className="denote_required">This input field is mandatory.</span>
    </div>
    <button>Upload</button>
  </form>
  <grammarly-desktop-integration data-grammarly-shadow-root="true" />
</>

  );
}

export default App;
