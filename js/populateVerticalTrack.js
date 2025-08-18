function populateVerticalTrack(wrapper, label) {
  const detail = wrapper.querySelector(".project-detail");
  const track = detail.querySelector(".vertical-track");

  // Clear existing content if needed
  track.innerHTML = "";

  // Header section
  if (label === "Electronics") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Electronics</h1>
      <p>Experimental circuits and embedded systems built from the ground up.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1 - PORTAL
    const portal = document.createElement("section");
    portal.className = "project-panel";
    portal.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/electronics/portal.png" alt="PORTAL Image 1" />
          <img src="images/work/personal/personal_2.jpg" alt="PORTAL Image 2" />
          <!-- Add more images as needed -->
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>PØRTAL</h2>
        <p>A networked smart display system designed for asynchronous visual communication.</p>
        <p>Users can send images, animations, and messages to designated displays via a custom web interface, creating a seamless channel for personal expression and remote connection. The system integrates real-time content delivery with dynamic media rendering, forming a persistent link between friends and family.</p>
        <ul class="tag-list">
          <li class="tag">JavaScript</li>
          <li class="tag">Python</li>
          <li class="tag">Node.js</li>
          <li class="tag">HTML</li>
          <li class="tag">CSS</li>
        </ul>
        <a href="https://github.com/sorenair/portal" style="color: rgb(255, 107, 144)">View on GitHub</a>
      </div>
    `;
    //setupDotCarousel(portal.querySelector(".project-panel-images"));
    portal.appendChild(createIndexIndicator("1 / 2"));
    track.appendChild(portal);

    // Project 2 - NightEye
    const nighteye = document.createElement("section");
    nighteye.className = "project-panel";
    nighteye.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/electronics/ne_fd.png" alt="PORTAL Image 1" />
          <img src="images/work/personal/electronics/ne.jpg" alt="PORTAL Image 2" />
          <!-- Add more images as needed -->
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>NightEye</h2>
        <p>A modular night vision headset capable of infrared-spectrum imaging and facial detection.</p>
        <p>With a Raspberry Pi 5 microcomputer serving as the design's foundation, efficiency in both power and processing is ensured. The headset leverages machine vision and artificial intelligence for real-time feature analysis.</p>
        <ul class="tag-list">
          <li class="tag">Python</li>
          <li class="tag">OpenCV</li>
          <li class="tag">AI / ML</li>
          <li class="tag">IR Imaging</li>
        </ul>
        <a href="" style="color: rgba(207, 81, 207, 1)">View on GitHub</a>
      </div>
      `;
    setupDotCarousel(nighteye.querySelector(".project-panel-images"));
    nighteye.appendChild(createIndexIndicator("2 / 2"));
    track.appendChild(nighteye);
  }

  if (label === "Video") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Video</h1>
      <p>Cinematic shorts capturing the best moments of life.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down", true));
    track.appendChild(headerSection);

    // Project 1
    const vid1 = document.createElement("section");
    vid1.className = "project-panel";
    vid1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/video/pr.jpg" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Puerto Rico 2025</h2>
        <p>A vivid glimpse of Puerto Rico — lush landscapes, coastal light, and fleeting moments stitched into motion.</p>
        <a href="https://www.youtube.com/watch?v=oQqhxZM-spU" style="color: red">Watch on YouTube</a>
      </div>
    `;
    //setupDotCarousel(portal.querySelector(".project-panel-images"));
    vid1.appendChild(createIndexIndicator("1 / 2"));
    track.appendChild(vid1);

    // Project 2
    const vid2 = document.createElement("section");
    vid2.className = "project-panel";
    vid2.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/video/dakota.jpg" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Dakota</h2>
        <p>A raw journey through South Dakota's wild terrain — carved stone, open sky, and footsteps deep in the Badlands and Black Hills.</p>
        <a href="https://www.youtube.com/watch?v=cLCHvzKW28Y" style="color: red">Watch on YouTube</a>
      </div>
    `;
    //setupDotCarousel(portal.querySelector(".project-panel-images"));
    vid2.appendChild(createIndexIndicator("2 / 2"));
    track.appendChild(vid2);
  }

  if (label === "Music") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Music</h1>
      <p>Original compositions, beats, and sound design in digital audio.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/music/soren.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>SØREN</h2>
        <p>My published music, both independant and collaborative.</p>
        <ul class="tag-list">
          <li class="tag">FL Studio</li>
        </ul>
        <a href="https://open.spotify.com/artist/4ggpbtPned46AQGxsFwnTg" style="color: #1db954">Listen on Spotify</a>
      </div>
    `;
    //setupDotCarousel(portal.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }

  if (label === "Art") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Art</h1>
      <p>Fragments of thought, shape, and feeling — captured in form.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/art/1.jpg" alt="Thumbnail" />
          <img src="images/work/personal/art/5.jpg" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Digital Photography</h2>
        <p>A mix of photos capturing everyday moments, interesting places, and people along the way. Focused on light, mood, and composition — these shots reflect how I see the world through a lens.</p>
        <a href="https://www.instagram.com/gaborsoren/?hl=en" style="color: #1877f2">View more on Instagram</a>
      </div>
    `;
    setupDotCarousel(proj1.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }

  if (label === "Game Dev") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Game Dev</h1>
      <p>Independent games blending code, design, and interaction.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/personal/game_dev/overclock_mainmenu.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>ØVERCLOCK</h2>
        <p>ØVERCLOCK is a 1v1 indie fighting game where androids battle for survival in the ruins of a fragmented system. Set in a world where humanity lost control to its own machines, each fighter brings a unique combat style forged from the chaos. Sharp controls and a stripped-down, cyber-industrial aesthetic drive the action in this brutal digital arena.</p>
        <p>Development is ongoing, with no current release date.</p>
        <ul class="tag-list">
          <li class="tag">Godot</li>
          <li class="tag">Aseprite</li>
        </ul>
      </div>
    `;
    //setupDotCarousel(portal.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }

  if (label === "Coursework") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Coursework</h1>
      <p>A selection of university courses that reflect foundational knowledge and technical skills applicable to my field.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down", true));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 331 - Designing with Microprocessors</p>
        <p>Developed embedded applications involving memory-mapped I/O, timers, ADC/DAC conversion, interrupts, and serial communication protocols. Emphasized low-power design and real-world interfacing with sensors and actuators. Led a major project building an autonomous line-following robot using an STM32 microcontroller, integrating infrared and ultrasonic sensors for obstacle detection and an accelerometer for impact measurement—demonstrating real-time control, sensor fusion, and robust system integration.</p>
        <ul class="tag-list">
          <li class="tag">Microcontrollers</li>
          <li class="tag">C</li>
          <li class="tag">Assembly</li>
          <li class="tag">Keil uVision</li>
          <li class="tag">I2C / SPI / UART</li>
        </ul>
      </div>
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 230 - Digital Logic Design</p>
        <p>Designed, simulated, and implemented digital circuits using Boolean algebra and Hardware Description Languages (HDL). Optimized combinational and sequential logic systems, addressed logic hazards, and developed projects on FPGAs. Gained hands-on experience in the full development cycle—specification, design, testing, and documentation of digital hardware systems.</p>
        <ul class="tag-list">
          <li class="tag">Verilog</li>
          <li class="tag">Xilinx Vivado</li>
          <li class="tag">FPGAs</li>
        </ul>
       </div>
    `;
    proj1.appendChild(createIndexIndicator("1 / 4"));
    track.appendChild(proj1);

    // Project 2
    const proj2 = document.createElement("section");
    proj2.className = "project-panel";
    proj2.innerHTML = `
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 342 - Electromagnetic Fields and Waves</p>
        <p>Studied the practical implications of Maxwell’s equations in high-frequency systems, including wave propagation, reflection, transmission lines, and antenna design. Gained experience analyzing electromagnetic interference and designing systems for RF integrity. Final project involved developing a Wi-Fi-enabled microcontroller system using an ESP32, with an optimized board layout and impedance-controlled traces to minimize signal reflection and parasitic effects—demonstrating principles of RF design, PCB layout, and wireless communication integration.</p>
        <ul class="tag-list">
          <li class="tag">NI Ultiboard</li>
          <li class="tag">KiCAD</li>
          <li class="tag">ESP32 Microprocessor</li>
          <li class="tag">RF Instrumentation</li>
        </ul>
      </div>
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 346 - Analog Electronics</p>
        <p>Applied network theorems to analyze and design feedback systems and amplifier circuits, with emphasis on frequency response and stability. Explored common op-amp topologies and their real-world behaviors. Gained foundational knowledge in switch-mode power supplies and electrical noise sources, developing insight into noise-aware analog system design.</p>
        <ul class="tag-list">
          <li class="tag">NI Multisim</li>
          <li class="tag">Oscilloscopes</li>
          <li class="tag">Signal Generators</li>
        </ul>
      </div>
    `;
    proj2.appendChild(createIndexIndicator("2 / 4"));
    track.appendChild(proj2);

    // Project 3
    const proj3 = document.createElement("section");
    proj3.className = "project-panel";
    proj3.innerHTML = `
      <div class="project-panel-text">
        <p style="font-weight: bold">PHYS 325 - Methods of Computational Physics</p>
        <p>Focused on building a functional physics simulation engine in Python using object-oriented programming principles. Implemented numerical methods for solving differential equations, optimization techniques for parameter estimation, and algorithms for simulating Newtonian dynamics and N-body interactions. Emphasized clean, modular code design and effective data visualization to model and animate complex physical systems.</p>
        <ul class="tag-list">
          <li class="tag">Python</li>
          <li class="tag">Anaconda</li>
          <li class="tag">PyGame</li>
        </ul>
      </div>
      <div class="project-panel-text">
        <p style="font-weight: bold">PHYS 215 - Foundations of Modern Physics</p>
        <p>Explored foundational topics in relativity, particle physics, and the four fundamental forces, with a focus on nuclear radiation and subatomic phenomena. Conducted hands-on lab experiments using nuclear instrumentation modules to detect, measure, and characterize radioactive emissions. Designed and executed custom experiments to analyze particle behavior, reinforcing concepts in radiation physics and detector technology.</p>
        <ul class="tag-list">
          <li class="tag">LabVIEW</li>
          <li class="tag">Nuclear Instrumentation Modules (NIMs)</li>
        </ul>
      </div>
    `;
    proj3.appendChild(createIndexIndicator("3 / 4"));
    track.appendChild(proj3);

    // Project 4
    const proj4 = document.createElement("section");
    proj4.className = "project-panel";
    proj4.innerHTML = `
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 340 - Signals and Systems</p>
        <p>Analyzed continuous and discrete-time systems using Fourier series, Fourier and Z transforms to characterize frequency-domain behavior. Applied filtering, modulation, and sampling theory to real-world signal processing problems. Explored foundational concepts in Artificial Intelligence, integrating signal analysis techniques with emerging AI applications.</p>
        <ul class="tag-list">
          <li class="tag">MATLAB</li>
          <li class="tag">Python</li>
          <li class="tag">AI / ML</li>
        </ul>
      </div>
      <div class="project-panel-text">
        <p style="font-weight: bold">ENGR 255 - Fabrication Skills Lab</p>
        <p>Gained practical experience in mechanical fabrication through hands-on training with manual mills, lathes, and various woodshop tools. Emphasized workshop safety protocols and precise equipment operation, building foundational skills applicable across mechanical engineering projects.</p>
        <ul class="tag-list">
          <li class="tag">Manual Machining</li>
          <li class="tag">Woodworking</li>
        </ul>
      </div>
    `;
    proj4.appendChild(createIndexIndicator("4 / 4"));
    track.appendChild(proj4);
  }

  if (label === "Projects") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Projects</h1>
      <p>A collection of academic projects designed to deepen theoretical understanding while building practical engineering experience.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/academic/projects/wifi_pcb.jpg" alt="Thumbnail" />
          <img src="images/work/academic/projects/wifi_schematic.png" alt="Thumbnail" />
          <img src="images/work/academic/projects/wifi_layout.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>WiFi Transceiver</h2>
        <p style="font-weight: bold">ENGR 342 - Electromagnetic Fields and Waves</p>
        <p>Designed and built a custom microcontroller system featuring an ESP32 with integrated WiFi. The project focused on high-frequency design principles—optimizing PCB layout with impedance-controlled traces and antenna placement to reduce signal reflections and parasitic effects. Developed as a capstone to coursework in electromagnetic systems and RF applications.</p>
        <ul class="tag-list">
          <li class="tag">NI Ultiboard</li>
          <li class="tag">KiCAD</li>
          <li class="tag">ESP32 Microprocessor</li>
        </ul>
      </div>
    `;
    setupDotCarousel(proj1.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 3"));
    track.appendChild(proj1);

    // Project 2
    const proj2 = document.createElement("section");
    proj2.className = "project-panel";
    proj2.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/academic/projects/mp_front.png" alt="Thumbnail" />
          <img src="images/work/academic/projects/mp_back.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Autonomous EV Model</h2>
        <p style="font-weight: bold">ENGR 331 - Designing with Microprocessors</p>
        <p>Designed and built a self-driving electric vehicle model using an STM32 microcontroller and a network of IR, ultrasonic, and accelerometer sensors. The robot autonomously followed a taped path, adjusted steering in real time, and performed emergency stops when detecting nearby obstacles. Sensor fusion and feedback control enabled adaptive path correction and deceleration measurement, with system states displayed on an onboard LCD. The project demonstrated principles of embedded systems, sensor integration, and real-time robotics in a compact, fully autonomous prototype.</p>
        <ul class="tag-list">
          <li class="tag">Microcontrollers</li>
          <li class="tag">C</li>
          <li class="tag">Keil uVision</li>
          <li class="tag">SPI</li>
        </ul>
      </div>
    `;
    setupDotCarousel(proj2.querySelector(".project-panel-images"));
    proj2.appendChild(createIndexIndicator("2 / 3"));
    track.appendChild(proj2);

    // Project 3
    const proj3 = document.createElement("section");
    proj3.className = "project-panel";
    proj3.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/academic/projects/ag_lvl.png" alt="Thumbnail" />
          <img src="images/work/academic/projects/ag_mp.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>ASTROGOLF</h2>
        <p style="font-weight: bold">PHYS 325 - Methods of Computational Physics</p>
        <p>Built a space-themed golf game driven by a custom Python-based N-body simulation engine. Players launch an astronaut through gravitationally complex galactic courses, using orbital mechanics to slingshot around massive bodies. Developed with object-oriented design, the engine numerically solves Newtonian dynamics for realistic motion. Features include 10 handcrafted levels, endless multiplayer survival mode, and animated visualizations of gravitational interactions.</p>
        <ul class="tag-list">
          <li class="tag">Python</li>
          <li class="tag">PyGame</li>
        </ul>
        <a href="https://github.com/sorenair/astrogolf" style="color: #d04dd5ff">View on GitHub</a>
      </div>
    `;
    setupDotCarousel(proj3.querySelector(".project-panel-images"));
    proj3.appendChild(createIndexIndicator("3 / 3"));
    track.appendChild(proj3);
  }

  if (label === "Activities") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Activities</h1>
      <p>A collection of extracurricular experiences that reflect a balance of teamwork, discipline, and exploration beyond the classroom.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/academic/activities/sailing_me.jpg" alt="Thumbnail" />
          <img src="images/work/academic/activities/sailing_kb.jpg" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>UST Sailing Team</h2>
        <p>Competitor on the University of St. Thomas sailing team, representing the school at regional and national regattas across the country in both dinghy and keelboat racing. Beyond competing, I contribute as the team’s media content creator and cinematographer, capturing dynamic footage and producing engaging visual content that showcases our team’s performance and spirit.</p>
        <a href="https://www.ustsailing.org" style="color: #9300ddff">Learn more about Sailing at UST</a>
      </div>
    `;
    setupDotCarousel(proj1.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 3"));
    track.appendChild(proj1);

    // Project 2 - Shredders Club
    const proj2 = document.createElement("section");
    proj2.className = "project-panel";
    proj2.innerHTML = `
      <div class="project-panel-images">
      <div class="image-carousel">
        <img src="images/work/academic/activities/shredders_logo_alt.png" alt="Shredders Club 1" />
        <img src="images/work/academic/activities/shredders_group.png" alt="Shredders Club 2" />
      </div>
      <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
      <h2>Shredders Club</h2>
      <p>Founder and president of the Shredders Club, the university’s recreational ski and snowboard club and one of the largest and most active student organizations on campus. I lead the organization and coordination of group trips, volunteering, and community events that promote outdoor adventure and camaraderie among students of all skill levels. Under my leadership, the club has grown into a vibrant community fostering a passion for winter sports and inclusive student engagement.</p>
      <a href="https://www.instagram.com/ust_shredders/?hl=en" style="color: #1877f2">View more on Instagram</a>
      </div>
    `;
    setupDotCarousel(proj2.querySelector(".project-panel-images"));
    proj2.appendChild(createIndexIndicator("2 / 3"));
    track.appendChild(proj2);

    // Project 3 - Aquinas Honors Scholars
    const proj3 = document.createElement("section");
    proj3.className = "project-panel";
    proj3.innerHTML = `
      <div class="project-panel-images">
      <div class="image-carousel">
        <img src="images/work/academic/activities/ahs.png" alt="Aquinas Honors Scholars 1" />
      </div>
      </div>
      <div class="project-panel-text">
      <h2>Aquinas Honors Scholars</h2>
      <p>Selected as a member of the Aquinas Honors Scholars program, engaging in interdisciplinary seminars, service projects, and leadership development. Collaborated with peers on research, community outreach, and academic enrichment activities that foster critical thinking and intellectual growth.</p>
      </div>
    `;
    proj3.appendChild(createIndexIndicator("3 / 3"));
    track.appendChild(proj3);
  }

  if (label === "Lockheed Martin") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Lockheed Martin</h1>
      <p>Ahead of tomorrow.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/professional/lm_atl.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Embedded Systems R & D Intern</h2>
        <p style="font-weight: bold">Advanced Technology Laboratories - Spectrum Systems</p>
        <p>Developed Python-based automation tools to interface with a wide range of lab equipment via I2C, SPI, and Ethernet, significantly improving the speed and consistency of embedded system characterization workflows. Supported system bring-up and firmware deployment for novel devices bound for client delivery, ensuring proper initialization and configuration. Contributed to hardware design by writing and simulating AXI Stream cores using VHDL and SystemVerilog, with verification in QuestaSim prior to FPGA implementation. Performed large-scale data processing and analysis using custom MATLAB scripts.</p>
        <a href="https://www.lockheedmartin.com/en-us/capabilities/research-labs/advanced-technology-labs.html" style="color: #3a44ffff">Learn more about LM ATL</a>
        <ul class="tag-list">
          <li class="tag">Python</li>
          <li class="tag">HDL / FPGAs</li>
          <li class="tag">Xilinx Vivado</li>
          <li class="tag">Questasim</li>
          <li class="tag">MATLAB</li>
          <li class="tag">C</li>
          <li class="tag">Microcontrollers</li>
          <li class="tag">Creo</li>
        </ul>
      </div>
    `;
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }

  if (label === "University of St. Thomas") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>University of St. Thomas</h1>
      <p>For the Common Good.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/professional/ust_schematic.png" alt="Thumbnail" />
          <img src="images/work/professional/ust_nims.jpg" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Nuclear Physics Research Assistant</h2>
        <p style="font-weight: bold">University of St. Thomas - Physics Department</p>
        <p>Designed and implemented a custom high-voltage splitter circuit for use in nuclear physics labs, enabling safe and accurate measurement of high-voltage power supplies used with NIM systems. Led the full development process—from researching prior designs and selecting components to schematic design, fabrication, and deployment across all lab stations. Conducted experimental validation using radiation detection equipment and ensured long-term functionality through rigorous testing. Additionally, organized and cataloged the lab’s complete inventory of nuclear instrumentation modules and related hardware to streamline future experimental work.</p>
        <a href="https://cas.stthomas.edu/departments/areas-of-study/physics/" style="color: #9300ddff">Learn more about Physics at UST</a>
        <ul class="tag-list">
          <li class="tag">Multisim</li>
          <li class="tag">Nuclear Instrumentation Modules (NIMs)</li>
          <li class="tag">Soldering</li>
          <li class="tag">Microsoft Office</li>
        </ul>
      </div>
    `;
    setupDotCarousel(proj1.querySelector(".project-panel-images"));
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }

  if (label === "Multimedia Production") {
    const headerSection = document.createElement("section");
    headerSection.className = "project-panel section-header";

    // Use background image from the clicked wrapper
    const imageSrc = wrapper.querySelector("img.image")?.src;
    if (imageSrc) {
      headerSection.style.backgroundImage = `url(${imageSrc})`;
    }

    headerSection.innerHTML = `
      <h1>Multimedia Production</h1>
      <p>Video, audio, and more.</p>
    `;
    headerSection.appendChild(createIndexIndicator("Scroll down"));
    track.appendChild(headerSection);

    // Project 1
    const proj1 = document.createElement("section");
    proj1.className = "project-panel";
    proj1.innerHTML = `
      <div class="project-panel-images">
        <div class="image-carousel">
          <img src="images/work/professional/mm_t10.png" alt="Thumbnail" />
        </div>
        <div class="carousel-dots"></div>
      </div>
      <div class="project-panel-text">
        <h2>Multimedia Producer</h2>
        <p style="font-weight: bold">Freelance</p>
        <p>Worked with private clients and mid-sized companies (i.e. construction, photography), creating advertisements, logos, and compilations of corporate events. Applied understanding of professional-grade music production, video editing, photo manipulation, and animation software to tailor final products to client specifications.</p>
        <ul class="tag-list">
          <li class="tag">Adobe Photoshop</li>
          <li class="tag">Adobe Premiere Pro</li>
          <li class="tag">Adobe After Effects</li>
          <li class="tag">Adobe Lightroom</li>
          <li class="tag">FL Studio</li>
        </ul>
      </div>
    `;
    proj1.appendChild(createIndexIndicator("1 / 1"));
    track.appendChild(proj1);
  }
}