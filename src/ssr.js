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
  "thumbnail": "/images/projects/swv.jpg",
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
  "thumbnail": "/images/projects/dy-ball.png",
  "winner": null,
  "tags": ["c", "c++", "graphics", "bgi"]
}
];

const getProjects = () => {
  let sectionInnerHTML = '';
  const projectsToDisplay = projects.filter(project => project.type === 'personal' && project.winner);
  projectsToDisplay.forEach(project => {
    sectionInnerHTML += `
            <div id="${project.hash}" class="col-lg-6 col-xs-12">
                <article>
                    <header class="my-2">
                        <h5>
                            <a href="${project.url[0].url}" target="_blank" rel="noopener" title="${project.url[0].title}">
                                ${project.name}
                            </a>
                        </h5>

                        <div class="my-1"><time>${project.year}</time></div>

                        <div class="my-1">
                            ${project.winner ? project.winner.map(win => `
                                <div>
                                    <i aria-hidden="true" class="fa fa-trophy"></i>
                                    <span> <a href="${win.url}">${win.platform}</a></span>
                                </div>
                            `).join('') : ''}
                        </div>
                    </header>
                    <p class="my-2">
                        ${project.description}
                    </p>
                    <footer class="my-3">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
              ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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