const moment = require('moment');

const projects = [{
  "name": "Voluntree",
  "hash": "voluntree",
  "type": "personal",
  "year": "2020",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/voluntree-ml"
  }],
  "description": "Machine Learning based solution to automate volunteer recruiting from social media",
  "thumbnail": `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.81 245.88"><defs><style>.cls-1{fill:#4f4236;}.cls-2{fill:#b0c334;}</style></defs><title>logo-sq</title><path class="cls-1" d="M173.13,162.48v-51h29.08a3.69,3.69,0,1,0,0-7.37H173.13V71.19a5.53,5.53,0,0,0-11.06,0V157H132.34V97.27a7.38,7.38,0,0,0-14.75,0v30.09H63.28V101H91.36a3.69,3.69,0,0,0,3.69-3.69V77.21a3.69,3.69,0,0,0-7.38,0V93.59H63.28V82.73a5.53,5.53,0,0,0-11.06,0v50.16a5.54,5.54,0,0,0,5.53,5.53h59.84v42.45H78V155.46a3.69,3.69,0,1,0-7.37,0v29.09a3.69,3.69,0,0,0,3.69,3.69h43.28V256h14.75V168H167.6A5.52,5.52,0,0,0,173.13,162.48Z" transform="translate(-19.98 -10.12)"/><rect class="cls-2" x="59.5" y="139.45" width="18.43" height="18.43" rx="2.95" ry="2.95"/><rect class="cls-2" x="81.62" y="152.36" width="11.18" height="11.18" rx="2.95" ry="2.95"/><rect class="cls-2" x="28.04" y="139.45" width="20.43" height="20.43" rx="2.95" ry="2.95"/><rect class="cls-2" x="35.91" y="162.55" width="12.57" height="12.57" rx="2.95" ry="2.95"/><rect class="cls-2" x="116.28" y="163.54" width="20.89" height="20.89" rx="2.95" ry="2.95"/><rect class="cls-2" x="158.06" y="141.27" width="13.76" height="13.76" rx="2.95" ry="2.95"/><rect class="cls-2" x="142.09" y="161.08" width="14.26" height="14.26" rx="2.95" ry="2.95"/><rect class="cls-2" x="160.27" y="157.95" width="21.96" height="21.96" rx="2.95" ry="2.95"/><rect class="cls-2" x="158.06" y="105.78" width="22.61" height="22.61" rx="2.95" ry="2.95"/><rect class="cls-2" x="183.38" y="103.81" width="13.27" height="13.27" rx="2.95" ry="2.95"/><rect class="cls-2" x="190.34" y="86.36" width="11.47" height="11.47" rx="2.95" ry="2.95"/><rect class="cls-2" x="61.71" y="159.88" width="9.66" height="9.66" rx="2.95" ry="2.95"/><rect class="cls-2" x="45.49" y="179.9" width="8.83" height="8.83" rx="2.95" ry="2.95"/><rect class="cls-2" x="114.8" y="120.62" width="24.09" height="24.09" rx="2.95" ry="2.95"/><rect class="cls-2" x="121.93" y="99.88" width="15.98" height="15.98" rx="2.95" ry="2.95"/><rect class="cls-2" x="114.86" y="85.13" width="10.32" height="10.32" rx="2.95" ry="2.95"/><rect class="cls-2" x="125.86" y="74.81" width="13.03" height="13.03" rx="2.95" ry="2.95"/><rect class="cls-2" x="72.65" y="93.33" width="21.26" height="21.26" rx="2.95" ry="2.95"/><rect class="cls-2" x="47.21" y="97.83" width="14.5" height="14.5" rx="2.95" ry="2.95"/><rect class="cls-2" x="81.62" y="78.74" width="11.18" height="11.18" rx="2.95" ry="2.95"/><rect class="cls-2" x="156.34" y="76.04" width="15.48" height="15.48" rx="2.95" ry="2.95"/><rect class="cls-2" x="173.3" y="49.99" width="22.77" height="22.77" rx="2.95" ry="2.95"/><rect class="cls-2" x="174.45" y="75.5" width="12.34" height="12.34" rx="2.95" ry="2.95"/><rect class="cls-2" x="172.32" y="132.57" width="11.06" height="11.06" rx="2.95" ry="2.95"/><rect class="cls-2" x="81.01" y="130.36" width="11.8" height="11.8" rx="2.95" ry="2.95"/><rect class="cls-2" x="46.71" y="60.65" width="16.47" height="16.47" rx="2.95" ry="2.95"/><rect class="cls-2" x="13.05" y="121.18" width="14.99" height="14.99" rx="2.95" ry="2.95"/><rect class="cls-2" x="2.01" y="93.33" width="24.05" height="24.05" rx="2.95" ry="2.95"/><rect class="cls-2" x="4.64" y="137.99" width="10.16" height="10.16" rx="2.95" ry="2.95"/><rect class="cls-2" x="8.27" y="68.26" width="19.58" height="19.58" rx="2.95" ry="2.95"/><rect class="cls-2" y="44.32" width="19.44" height="19.44" rx="2.95" ry="2.95"/><rect class="cls-2" x="90.99" y="49.99" width="25.29" height="25.29" rx="2.95" ry="2.95"/><rect class="cls-2" x="120.02" y="22.9" width="24.39" height="24.39" rx="2.95" ry="2.95"/><rect class="cls-2" x="120.02" y="54.04" width="15.46" height="15.46" rx="2.95" ry="2.95"/><rect class="cls-2" x="60.01" y="30.15" width="26.89" height="26.89" rx="2.95" ry="2.95"/><rect class="cls-2" x="88.63" y="14.66" width="17.8" height="17.8" rx="2.95" ry="2.95"/><rect class="cls-2" x="105.11" y="35.42" width="11.17" height="11.17" rx="2.95" ry="2.95"/><rect class="cls-2" x="24.86" y="35.9" width="21.85" height="21.85" rx="2.95" ry="2.95"/><rect class="cls-2" x="154.48" y="43.6" width="12.26" height="12.26" rx="2.95" ry="2.95"/><rect class="cls-2" x="46.32" y="17.63" width="13.18" height="13.18" rx="2.95" ry="2.95"/><rect class="cls-2" x="147.61" y="7.77" width="33" height="33" rx="2.95" ry="2.95"/><rect class="cls-2" x="184.69" y="27.7" width="13.57" height="13.57" rx="2.95" ry="2.95"/><rect class="cls-2" x="129.17" y="3.8" width="15.24" height="15.24" rx="2.95" ry="2.95"/><rect class="cls-2" x="106.95" width="12.83" height="12.83" rx="2.95" ry="2.95"/><rect class="cls-2" x="64.78" y="4.96" width="20.36" height="20.36" rx="2.95" ry="2.95"/><rect class="cls-2" x="4.64" y="16.01" width="18.63" height="18.63" rx="2.95" ry="2.95"/></svg>`,
  "color": "#B1C436",
  "winner": [{
    "title": "Best Student Software",
    "platform": "Amazon Raise-up Buildathon",
    "url": "https://amazonraiseup.devpost.com/"
  }, {
    "title": "Best Student Software",
    "platform": "Redis 'Beyond Cache' Hackathon",
    "url": "https://redisbeyondcache2020.devpost.com/"
  }],
  "tags": ["react", "drf", "celery", "redis-ai", "redis-gears", "tensorflow", "django-channels", "aws"]
},
{
  "name": "Slack with Voice",
  "hash": "swv",
  "type": "personal",
  "year": "2018",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/swv"
  }],
  "description": "An unofficial skill that connects your Slack workspace with Amazon Echo",
  "color": "#470D4A",
  "thumbnail": "/images/projects/swv.jpg",
  "winner": [{
    "title": "Best Student Software",
    "platform": "Alexa Skills Challenge: Life Hacks",
    "url": "https://alexalifehacks.devpost.com/"
  }],
  "tags": ["node.js", "aws-lambda", "alexa-skills-kit", "slack-api"]
},
{
  "name": "Bear",
  "hash": "bear",
  "type": "personal",
  "year": "2017",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/bearbot"
  }],
  "description": "A classroom chat-bot that automates repetitive and time-consuming replies from the Professors",
  "color": "#00A7E1",
  "thumbnail": "/images/projects/bear.png",
  "winner": [{
    "title": "Best Education Software",
    "platform": "Cisco Spark The Industry Challenge",
    "url": "https://ciscospark.devpost.com/"
  }],
  "tags": ["node.js", "botkit", "nosql"]
},
{
  "name": "Apprise",
  "hash": "apprise",
  "type": "personal",
  "year": "2017",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/apprise-23ju6k"
  }],
  "description": "A Reddit like mobile utility for sharing road safety issues to draw local authority’s attention",
  "color": "#4B515B",
  "thumbnail": "/images/projects/apprise.png",
  "winner": [{
    "title": "Second Prize",
    "platform": "Ford Hack and Role Indore",
    "url": "https://hack-indore.devpost.com/"
  }],
  "tags": ["java", "android", "php", "mysql", "azure"]
},
{
  "name": "Rupai",
  "hash": "rupai",
  "type": "work",
  "year": "2017",
  "url": [{
    "title": "Github",
    "url": "https://github.com/RoboPi-CSEDU/rupai"
  },
  {
    "title": "Publication",
    "url": "#"
  }
  ],
  "description": "A web based visual programming editor for interfacing DIY Robotics kits",
  "color": "#007bff",
  "thumbnail": "/images/projects/rupai.png",
  "winner": null,
  "tags": ["blockly", "arduino", "raspberry-pi", "python"]
},
{
  "name": "Draw in Trello",
  "hash": "draw-in-trello",
  "type": "kid",
  "year": "2017",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/draw-power-up"
  }],
  "description": "A lightweight 'in-app' diagram maker plugin for Trello",
  "color": "#007bff",
  "thumbnail": "/images/projects/draw-in-trello.png",
  "winner": null,
  "tags": ["vanilla-js", "mxgraph"]
},
{
  "name": "Deal or No Deal",
  "hash": "dond",
  "type": "personal",
  "year": "2017",
  "url": [{
    "title": "Website",
    "url": "https://assistant.google.com/services/a/id/55055f085d9e0b30/"
  }],
  "description": "An interactive game for Google Assistant",
  "color": "#007bff",
  "thumbnail": "/images/projects/dond.png",
  "winner": null,
  "tags": [
    "actions-on-google",
    "node.js",
    "dialogflow",
    "google-cloud-functions"
  ]
},
{
  "name": "WiChat",
  "hash": "wichat",
  "type": "personal",
  "year": "2016",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/wichat"
  }],
  "description": "A Snapchat like Android application for sharing texts and images that connects nearby users by creating a WiFi Hotspot",
  "color": "#AF5CE0",
  "thumbnail": "/images/projects/wichat.png",
  "winner": [{
    "title": "Best Mobile App in java Tools Challenge",
    "platform": "Microsoft Visual Studio Marketplace Hackfest",
    "url": "https://javachallenge.devpost.com/"
  }],
  "tags": ["java", "networking", "sockets", "android"]
},
{
  "name": "LiveHealthy",
  "hash": "live-healthy",
  "type": "personal",
  "year": "2016",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/livehealthy"
  }],
  "description": "A Web app for Physicians to visualize raw health data synced across multiple devices of the patient",
  "color": "#005AA1",
  "thumbnail": "/images/projects/live-healthy.png",
  "winner": [{
    "title": "Best Student Software",
    "platform": "Redhat Code Healthy with OpenShift",
    "url": "https://openshift.devpost.com/"
  }],
  "tags": ["openshift", "php", "mysql", "java", "android"]
},
{
  "name": "OverDrive",
  "hash": "overdrive",
  "type": "personal",
  "year": "2016",
  "url": [{
    "title": "Github",
    "url": "https://github.com/sayon794/OverDrive"
  }],
  "description": "A DropBox like file hosting and sharing web app intended for local networks (i.e. lab/classroom)",
  "color": "#007bff",
  "thumbnail": "/images/projects/overdrive.png",
  "winner": null,
  "tags": ["c", "c++", "poco", "vanilla-js"]
},
{
  "name": "Lalbus",
  "hash": "lalbus",
  "type": "kid",
  "year": "2016",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/lalbus"
  }],
  "description": "Bus tracking and schedule management web app for University of Dhaka",
  "color": "#007bff",
  "thumbnail": "/images/projects/lalbus.png",
  "winner": null,
  "tags": ["php", "mysql", "jquery"]
},
{
  "name": "VisuQSort",
  "hash": "visuqsort",
  "type": "kid",
  "year": "2016",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/VisuQSort"
  }],
  "description": "Visualization on sorting algorithms in an Interactive Android App",
  "color": "#007bff",
  "thumbnail": "/images/projects/visuQSort.png",
  "winner": null,
  "tags": ["java", "android"]
},
{
  "name": "Elegant Resume",
  "hash": "elegant-resume",
  "type": "kid",
  "year": "2016",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/ElegantResume"
  }],
  "description": "Dashboard based web app maker, for non-tech people ",
  "color": "#007bff",
  "thumbnail": "/images/projects/elegant-resume.png",
  "winner": null,
  "tags": ["php", "mysql", "jquery"]
},
{
  "name": "Classic Snake",
  "hash": "snake",
  "type": "kid",
  "year": "2015",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/snake-assembly"
  }],
  "description": "ASCII charecter based Snake game in assembly language",
  "color": "#007bff",
  "thumbnail": "/images/projects/snake.png",
  "winner": null,
  "tags": ["assembly", "x86", "tasm"]
},
{
  "name": "DY Ball",
  "hash": "dy-ball",
  "type": "kid",
  "year": "2014",
  "url": [{
    "title": "Github",
    "url": "https://github.com/mehamasum/dy-ball"
  }],
  "description": "Clone of famous DX Ball game",
  "color": "#007bff",
  "thumbnail": "/images/projects/dy-ball.png",
  "winner": null,
  "tags": ["c", "c++", "graphics", "bgi"]
}
];

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const getProjects = () => {
  let sectionInnerHTML = '';
  const projectsToDisplay = projects.filter(project => project.type === 'personal' && project.winner);
  projectsToDisplay.forEach(project => {
    const rgb = hexToRgb(project.color);
    sectionInnerHTML += `
            <div id="${project.hash}" class="col-lg-6 col-xs-12">
                <article>
                    <header class="my-2 d-flex">
                        <div class="mr-2 p-1 rounded placeholder" style="background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.33);">
                          ${project.thumbnail}
                        </div>
                        
                        <div>
                          <h5>
                              <a href="${project.url[0].url}" target="_blank" rel="noopener" title="${project.url[0].title}">
                                  ${project.name}
                              </a>
                          </h5>
                          <time>${project.year}</time>
                        </div>
                    </header>
                    <div class="my-1">
                        ${project.winner ? project.winner.map(win => `
                            <div>
                                <i aria-hidden="true" class="fa fa-trophy"></i>
                                <span> <a href="${win.url}">${win.platform}</a></span>
                            </div>
                        `).join('') : ''}
                    </div>
                    <p class="my-2">
                        ${project.description}
                    </p>
                    <footer class="my-3">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </footer>
                </article>
            </div>
  `;
  });
  return sectionInnerHTML;
}

const works = [
  {
    title: 'Software Engineer',
    companyName: 'Newscred Inc.',
    companyWebsite: 'https://newscred.com/',
    tags: [
      'node.js',
      'react',
      'expressjs',
      'mongodb',
      'redis',
      'elasticsearch',
      'oauth2',
      'facebook-graph-api',
      'twitter-api',
      'linkedin-api',
      'youtube-api',
      'xml-rpc',
      'docker',
      'AWS',
      'jenkins',
      'nagios',
    ],
    location: 'Dhaka, Bangladesh',
    startDate: '2019-08-04',
    endDate: null,
    excerptHTML: `Working as a full-stack engineer in developing the <a href="https://get.newscred.com/gartner-mq-cmp-2019/">world's leading content
    marketing platform</a>`,
    responsibilityHTMLs: [
      `Led the research, development and deployment of format-agnostic file annotation service that allows clients to markup uploaded files and allows real-time collaboration. Deployed it in AWS ECS with autoscaling`,
      `Maintained and developed new features for NewsCred’s publishing integrations including OAuth integrations (i.e., Facebook, LinkedIn, YouTube, Instagram), RPC and Plugin-based integrations (i.e., WordPress, AEM, Sitecore), WOPI-based integrations (i.e., Microsoft Office for web) etc.`,
      `Rebuilt Newscred’s content publishing and social scheduling experience (AngularJS to ReactJS). Identified and resolved performance issues, added monitoring and proactive publishing failure prevention steps. Reduced client-reported bugs by more than 15% in two quarters`,
      `Built a trial version of the existing software, allowing public signup and metered resource utilizations. Designed the architecture and implemented social login capabilities into existing SSO architecture`,
    ]
  },
  {
    title: 'Software Engineer',
    companyName: 'Codemarshal',
    companyWebsite: 'https://algo.codemarshal.org/',
    tags: [
      'django',
      'django-rest-framework',
      'django-channels',
      'react',
      'redux',
      'pixi',
      'postgresql',
      'celery',
      'redis',
      'elasticsearch',
      'gitlab-ci',
    ],
    location: 'Dhaka, Bangladesh',
    startDate: '2018-02-04',
    endDate: '2019-07-31',
    excerptHTML: `Worked as a full-stack engineer on different CodeMarshal projects`,
    responsibilityHTMLs: [
      `Developed a gaming environment with ReactJS, Redux and PixiJS, implemented real-time messaging backend from scratch with Django Channels`,
      `Led the CORE team in building a REST backend module using DRF in form of reusable Django apps, to share across different products. Built CI pipeline to run tests and publish as a private Python module`,
      `Created and maintained a shared ReactJS component library, showcased by a style guide app. Added tests & documentation, built CI pipeline to run tests, lint, build with Webpack and publish as private Node package`
    ]
  },
  {
    title: 'Research Intern',
    companyName: 'Robolab, Dept. of CSE, Univ. of Dhaka',
    companyWebsite: 'http://cse.du.ac.bd/robolab',
    location: 'Dhaka, Bangladesh',
    startDate: '2016-06-01',
    endDate: '2018-02-01',
    excerptHTML: `Front- and back-end engineering and Machine Learning R&amp;D for <a href="https://github.com/RoboPi-CSEDU">Rupai</a>, a graphically programmable robotics kit, funded by Ministry of Education, Govt. of Bangladesh.`,
    responsibilityHTMLs: [
      `Led a team of six in building a visual programming interface for robotics kits. Designed the system, was responsible for budget & resource management, documentation and reporting`,
      `Worked on both front- and back-end, developed the programming editor, code transfer module and code transpilation into the kit-specific language`
    ],
    tags: [
      'python',
      'opencv',
      'tensorflow',
      'keras',
      'blockly',
      'php',
    ]
  }
];

const getWorks = () => {
  let innerHtml = '';

  works.forEach(work => {
    const startDate = moment(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? moment(work.endDate, 'YYYY-MM-DD') : moment();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');

    const tanureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const diffInMonths = Math.ceil(moment(endDate).diff(startDate, 'months', true));
    const diffInYears = Math.floor(moment(endDate).diff(startDate, 'years', true));
    const durationStr = diffInYears > 0 ? `${diffInYears} year${diffInYears === 1 ? '' : 's'}, ${(diffInMonths % 12)} month${diffInMonths % 12 === 1 ? '' : 's'}` : `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`

    innerHtml += `
      <div class="col-12">
        <article>
            <header class="my-2">
                <h5>
                    ${work.title} at <a href="${work.companyWebsite}" target="_blank" rel="noopener noreferrer">${work.companyName}</a>
                </h5>
                <div class="my-1">
                    <address>${work.location}</address><time>${tanureStr} (${durationStr})</time>
                </div>
            </header>
            <div class="my-2">
                <p>${work.excerptHTML}</p>
                <details>
                    <summary class="mb-3">Learn More</summary>
                    <ul>
                      ${work.responsibilityHTMLs.map(responsibility => `<li>${responsibility}</li>`).join('')}
                    </ul>
                </details>
            </div>
            <footer class="my-3">
              ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
            </footer>
        </article>
    </div>
    `
  });
  return innerHtml;
}

module.exports = {
  getProjects,
  getWorks
}