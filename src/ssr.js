var dayjs = require('dayjs');

const projects = [{
  "name": "Collabright",
  "hash": "collabright",
  "type": "personal",
  "year": "2021",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/collabright"
  }],
  "description": "Version control and collaboration platform for GIS mapping with integrated e-signature workflow",
  "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M250.148 132.385c22.567-.042 42.659-14.311 50.135-35.605 80.736 21.969 136.844 95.178 137.06 178.845.294 7.992 9.13 12.668 15.904 8.418a10.39 10.39 0 0 0 4.859-8.418c-.259-94-63.911-175.995-154.913-199.552-2.399-40.878-48.152-63.832-82.357-41.314-34.202 22.513-31.205 73.61 5.395 91.98a53.212 53.212 0 0 0 23.917 5.646zm0-85.629c24.971 0 40.577 27.027 28.092 48.655-12.487 21.625-43.699 21.625-56.179 0a32.416 32.416 0 0 1-4.352-16.217c0-17.924 14.515-32.46 32.439-32.488zM96.739 324.152a53.07 53.07 0 0 0-23.56-.886c-21.823-81.655 14.494-167.715 88.223-209.045 6.955-3.993 6.973-14.015.039-18.037a10.407 10.407 0 0 0-10.416-.018C68.394 142.807 28.233 239.804 53.712 331.21c-34.165 22.495-31.182 73.541 5.387 91.887a53.553 53.553 0 0 0 24.041 5.682c40.951.005 66.557-44.318 46.084-79.786a53.169 53.169 0 0 0-32.485-24.841zm17.596 59.789c-6.344 24.152-36.454 32.376-54.196 14.808-15.206-15.052-11.928-40.443 6.604-51.141 21.621-12.485 48.652 3.121 48.652 28.092 0 2.778-.355 5.548-1.06 8.241zm360.326-25.589c-10.679-39.535-60.155-52.673-89.049-23.657-19.556 19.639-20.755 51.003-2.754 72.077-61.294 61.103-156.719 71.643-229.858 25.38-6.758-4.279-15.598.362-15.93 8.344a10.396 10.396 0 0 0 4.824 9.197c82.161 52.012 189.513 39.462 257.462-30.1a52.722 52.722 0 0 0 23.77 5.808c35.047.042 60.571-33.203 51.488-67.049zm-23.301 29.999c-12.506 21.607-43.724 21.575-56.182-.065-12.461-21.636 3.173-48.65 28.14-48.626 14.686.02 27.528 9.901 31.313 24.09a32.51 32.51 0 0 1-3.271 24.601z" style="fill:#1890ff;stroke:#1890ff;stroke-width:3.21373px" fill="#52abfa"/></svg>`,
  "color": "#1890ff",
  "winner": [{
    "title": "First Place - Jane Goodall Institute App",
    "platform": "DocuSign Good Code Hackathon",
    "url": "https://docusign2021.devpost.com/"
  }],
  "tags": ["esri", "arcgis", "docusign", "react", "django", "celery", "redis", "postgresql", "heroku"]
}, {
  "name": "Voluntree",
  "hash": "voluntree",
  "type": "personal",
  "year": "2020",
  "url": [{
    "title": "Website",
    "url": "https://devpost.com/software/voluntree-ml"
  }],
  "description": "Machine Learning based solution to automate volunteer recruiting from social media",
  "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path style="fill:#4f4236" d="M351.557 317.267V214.334h59.139c4.145-.249 7.289-3.791 7.038-7.892-.24-3.754-3.255-6.746-7.038-6.984h-59.139v-66.46c.94-6.167-3.339-11.922-9.554-12.85-6.215-.933-12.014 3.314-12.948 9.482a10.891 10.891 0 0 0 0 3.381v173.084h-60.48V185.602c.013-8.214-6.687-14.888-14.963-14.912-8.277-.013-15.002 6.636-15.027 14.85v60.781H128.244v-53.238h56.886c4.145.05 7.55-3.256 7.601-7.369v-40.562c0-4.114-3.368-7.456-7.513-7.456-4.144 0-7.514 3.342-7.514 7.456v33.056h-49.473v-21.909c.941-6.168-3.339-11.923-9.554-12.85-6.214-.933-12.013 3.314-12.947 9.482a10.946 10.946 0 0 0 0 3.38V257.53c0 6.239 5.096 11.296 11.382 11.296h121.724v85.685H158.02V303.1c.251-4.113-2.892-7.642-7.037-7.891-4.144-.248-7.7 2.871-7.951 6.984a5.435 5.435 0 0 0 0 .92v58.718c.012 4.101 3.369 7.419 7.513 7.419h88.04l.601 136.785h28.45l.939-177.596h71.712c6.186-.087 11.194-5.033 11.27-11.172z"/><path d="M167.086 291.208h25.482c3.312 0 5.998 2.665 5.998 5.952v25.289c0 3.288-2.686 5.953-5.998 5.953h-25.482c-3.313 0-5.998-2.665-5.998-5.953V297.16c-.013-3.281 2.68-5.952 5.998-5.952zm44.991 26.059h10.718c3.313 0 5.998 2.665 5.998 5.953v10.638c0 3.287-2.685 5.952-5.998 5.952h-10.718c-3.313 0-5.998-2.665-5.998-5.952V323.22c0-3.281 2.692-5.953 5.998-5.953zm-108.976-26.059h29.55c3.313 0 5.998 2.665 5.998 5.952v29.328c0 3.288-2.685 5.953-5.998 5.953h-29.55c-3.313 0-5.998-2.665-5.998-5.953V297.16c0-3.281 2.691-5.952 5.998-5.952zm15.989 46.639h13.536c3.313 0 5.998 2.665 5.998 5.952v13.434c0 3.287-2.685 5.952-5.998 5.952H119.09c-3.312 0-5.998-2.665-5.998-5.952v-13.434c0-3.287 2.686-5.952 5.998-5.952zm163.459 1.976h30.491c3.312 0 5.998 2.665 5.998 5.952v30.26c0 3.288-2.686 5.953-5.998 5.953h-30.491c-3.312 0-5.998-2.665-5.998-5.953v-30.26c-.012-3.281 2.68-5.952 5.998-5.952zm84.986-44.949h15.989c3.313 0 5.999 2.665 5.999 5.952v15.87c0 3.287-2.686 5.952-5.999 5.952h-15.989c-3.314 0-5.998-2.665-5.998-5.952v-15.87c0-3.281 2.691-5.952 5.998-5.952zm-32.482 39.978h16.979c3.313 0 5.998 2.665 5.998 5.952v16.851c0 3.288-2.685 5.953-5.998 5.953h-16.979c-3.313 0-5.998-2.665-5.998-5.953v-16.851c0-3.287 2.685-5.952 5.998-5.952zm36.976-6.326h32.657c3.313 0 5.998 2.665 5.998 5.953v32.41c0 3.287-2.685 5.952-5.998 5.952h-32.657c-3.312 0-5.997-2.665-5.997-5.952v-32.41c0-3.281 2.691-5.953 5.997-5.953zm-4.494-105.27h33.996c3.312 0 5.998 2.665 5.998 5.953v33.739c0 3.288-2.686 5.953-5.998 5.953h-33.996c-3.314 0-5.998-2.665-5.998-5.953v-33.739c0-3.281 2.691-5.953 5.998-5.953zm51.488-3.976h14.989c3.312 0 5.998 2.665 5.998 5.952v14.875c0 3.288-2.686 5.953-5.998 5.953h-14.989c-3.312 0-5.997-2.665-5.997-5.953v-14.875c0-3.287 2.685-5.952 5.997-5.952zm14.175-35.231h11.32c3.313 0 5.998 2.665 5.998 5.952v11.234c0 3.288-2.685 5.953-5.998 5.953h-11.32c-3.312 0-5.998-2.665-5.998-5.953v-11.234c-.012-3.293 2.68-5.952 5.998-5.952zM171.582 332.453h7.651c3.312 0 5.997 2.665 5.997 5.953v7.593c0 3.287-2.685 5.952-5.997 5.952h-7.651c-3.313 0-5.998-2.665-5.998-5.952v-7.593c-.013-3.281 2.679-5.953 5.998-5.953zm-32.971 40.401h5.949c3.312 0 5.998 2.665 5.998 5.952v5.903c0 3.288-2.686 5.953-5.998 5.953h-5.949c-3.312 0-5.997-2.665-5.997-5.953v-5.903c-.013-3.28 2.68-5.952 5.997-5.952zm140.945-119.648h36.977c3.312 0 5.998 2.665 5.998 5.952v36.697c0 3.288-2.686 5.953-5.998 5.953h-36.977c-3.312 0-5.998-2.665-5.998-5.953v-36.697c0-3.287 2.686-5.952 5.998-5.952zm14.513-41.867h20.485c3.313 0 5.998 2.665 5.998 5.952v20.331c0 3.287-2.685 5.953-5.998 5.953h-20.485c-3.312 0-5.998-2.666-5.998-5.953v-20.331c-.012-3.281 2.68-5.952 5.998-5.952zm-14.399-29.776h8.989c3.314 0 5.999 2.665 5.999 5.953v8.923c0 3.287-2.685 5.952-5.999 5.952h-8.989c-3.314 0-5.999-2.665-5.999-5.952v-8.923c0-3.293 2.68-5.953 5.999-5.953zm22.388-20.84h14.475c3.312 0 5.998 2.665 5.998 5.953v14.365c0 3.288-2.686 5.953-5.998 5.953h-14.475c-3.312 0-5.998-2.665-5.998-5.953v-14.353c0-3.293 2.679-5.965 5.998-5.965zM193.82 198.104h31.229c3.312 0 5.998 2.665 5.998 5.952v30.994c0 3.287-2.686 5.952-5.998 5.952H193.82c-3.312 0-5.998-2.665-5.998-5.952v-30.994c0-3.287 2.686-5.952 5.998-5.952zm-51.715 9.121h17.494c3.312 0 5.998 2.665 5.998 5.953v17.36c0 3.288-2.686 5.953-5.998 5.953h-17.494c-3.312 0-5.997-2.665-5.997-5.953v-17.36c0-3.293 2.679-5.953 5.997-5.953zm69.972-38.536h10.718c3.313 0 5.998 2.665 5.998 5.952v10.638c0 3.287-2.685 5.953-5.998 5.953h-10.718c-3.313 0-5.998-2.666-5.998-5.953v-10.638c0-3.287 2.685-5.952 5.998-5.952zm151.963-5.456h19.484c3.313 0 5.999 2.665 5.999 5.953v19.336c0 3.288-2.686 5.953-5.999 5.953H364.04c-3.312 0-5.997-2.665-5.997-5.953v-19.336c0-3.288 2.685-5.953 5.997-5.953zm34.473-52.591h34.309c3.313 0 5.999 2.665 5.999 5.952v34.051c0 3.287-2.686 5.952-5.999 5.952h-34.309c-3.313 0-5.998-2.665-5.998-5.952v-34.038c0-3.29 2.683-5.958 5.998-5.965zm2.342 51.498h13.084c3.314 0 5.999 2.665 5.999 5.952v12.987c0 3.287-2.685 5.952-5.999 5.952h-13.084c-3.313 0-5.998-2.665-5.998-5.952v-12.987c-.013-3.293 2.679-5.952 5.998-5.952zm-4.333 115.174h10.493c3.313 0 5.998 2.665 5.998 5.953v10.414c0 3.287-2.685 5.952-5.998 5.952h-10.493c-3.313 0-5.998-2.665-5.998-5.952v-10.414c0-3.281 2.692-5.953 5.998-5.953zm-185.684-4.449h12.008c3.312 0 5.997 2.665 5.997 5.953v11.917c0 3.288-2.685 5.953-5.997 5.953h-12.008c-3.314 0-5.999-2.665-5.999-5.953v-11.917c-.012-3.293 2.68-5.953 5.999-5.953zm-69.76-140.712h21.475c3.313 0 5.998 2.665 5.998 5.953v21.312c0 3.288-2.685 5.953-5.998 5.953h-21.475c-3.312 0-5.997-2.665-5.997-5.953v-21.312c0-3.281 2.692-5.953 5.997-5.953zM72.61 254.336h18.494c3.313 0 5.999 2.665 5.999 5.953v18.355c0 3.287-2.686 5.952-5.999 5.952H72.61c-3.313 0-5.998-2.665-5.998-5.952v-18.355c0-3.288 2.685-5.953 5.998-5.953zm-22.439-56.232h36.926c3.313 0 5.998 2.665 5.998 5.952v36.648c0 3.287-2.685 5.952-5.998 5.952H50.171c-3.313 0-5.998-2.665-5.998-5.952v-36.648c-.013-3.28 2.679-5.952 5.998-5.952zm5.346 90.171h8.653c3.313 0 5.998 2.665 5.998 5.952v8.588c0 3.287-2.685 5.952-5.998 5.952h-8.653c-3.312 0-5.997-2.665-5.997-5.952v-8.588c0-3.287 2.685-5.952 5.997-5.952zm7.364-140.762h27.823c3.312 0 5.998 2.665 5.998 5.953v27.613c0 3.287-2.686 5.952-5.998 5.952H62.881c-3.313 0-5.998-2.665-5.998-5.952v-27.613c0-3.281 2.691-5.953 5.998-5.953zM46.076 99.209h27.536c3.312 0 5.997 2.665 5.997 5.952v27.328c0 3.287-2.685 5.952-5.997 5.952H46.076c-3.312 0-5.998-2.665-5.998-5.952v-27.328c-.012-3.28 2.68-5.952 5.998-5.952zm185.034 11.433h39.431c3.312 0 5.998 2.665 5.998 5.952v39.133c0 3.288-2.686 5.953-5.998 5.953H231.11c-3.313 0-5.998-2.665-5.998-5.953v-39.12c0-3.29 2.683-5.958 5.998-5.965zm59.052-54.68h37.603c3.312 0 5.998 2.665 5.998 5.953v37.319c0 3.287-2.686 5.952-5.998 5.952h-37.603c-3.312 0-5.998-2.665-5.998-5.952V61.915c0-3.288 2.686-5.953 5.998-5.953zm0 62.869h19.434c3.313 0 5.998 2.665 5.998 5.953v19.287c0 3.287-2.685 5.952-5.998 5.952h-19.434c-3.312 0-5.998-2.665-5.998-5.952v-19.287c0-3.281 2.692-5.953 5.998-5.953zM168.138 70.589h42.7c3.312 0 5.997 2.665 5.997 5.953v42.376c0 3.288-2.685 5.953-5.997 5.953h-42.7c-3.312 0-5.998-2.665-5.998-5.953V76.542c-.012-3.293 2.679-5.953 5.998-5.953zm58.164-31.254h24.179c3.312 0 5.998 2.665 5.998 5.953v23.996c0 3.288-2.686 5.953-5.998 5.953h-24.179c-3.313 0-5.999-2.665-5.999-5.953V45.288c0-3.288 2.686-5.953 5.999-5.953zm33.545 41.892h10.694c3.312 0 5.998 2.665 5.998 5.952v10.638c0 3.287-2.686 5.953-5.998 5.953h-10.694c-3.313 0-5.998-2.666-5.998-5.953V87.179c-.013-3.28 2.68-5.952 5.998-5.952zm-163.196.994h32.432c3.312 0 5.998 2.665 5.998 5.953v32.186c0 3.287-2.686 5.952-5.998 5.952H96.651c-3.312 0-5.998-2.665-5.998-5.952V88.174c-.012-3.294 2.681-5.953 5.998-5.953zm263.608 15.521h12.91c3.312 0 5.998 2.665 5.998 5.953v12.812c0 3.288-2.686 5.953-5.998 5.953h-12.91c-3.313 0-5.998-2.665-5.998-5.953v-12.812c0-3.288 2.685-5.953 5.998-5.953zM140.29 45.312h14.788c3.312 0 5.997 2.665 5.997 5.953v14.676c0 3.288-2.685 5.953-5.997 5.953H140.29c-3.313 0-5.998-2.665-5.998-5.953V51.277c-.01-3.293 2.679-5.967 5.998-5.965zm205.995-19.895h55.133c3.313 0 5.998 2.665 5.998 5.952v54.717c0 3.287-2.685 5.952-5.998 5.952h-55.133c-3.313 0-5.998-2.665-5.998-5.952V31.369c0-3.287 2.685-5.952 5.998-5.952zm75.418 40.226h15.59c3.312 0 5.998 2.665 5.998 5.953v15.471c0 3.288-2.686 5.953-5.998 5.953h-15.59c-3.312 0-5.997-2.665-5.997-5.953V71.596c-.013-3.281 2.679-5.953 5.997-5.953zM308.77 17.401h19.008c3.312 0 5.997 2.665 5.997 5.953v18.864c0 3.288-2.685 5.953-5.997 5.953H308.77c-3.312 0-5.998-2.665-5.998-5.953V23.354c0-3.293 2.679-5.953 5.998-5.953zm-45.167-7.655h14.088c3.312 0 5.998 2.665 5.998 5.953v13.98c0 3.288-2.686 5.953-5.998 5.953h-14.088c-3.312 0-5.997-2.665-5.997-5.953v-13.98c-.013-3.281 2.68-5.953 5.997-5.953zm-85.774 10.029h29.415c3.312 0 5.998 2.665 5.998 5.952v29.192c0 3.287-2.686 5.952-5.998 5.952h-29.415c-3.312 0-5.997-2.665-5.997-5.952V25.727c0-3.287 2.685-5.952 5.997-5.952zM55.517 42.069H81.4c3.312 0 5.998 2.665 5.998 5.953v25.686c0 3.288-2.686 5.953-5.998 5.953H55.517c-3.312 0-5.997-2.665-5.997-5.953V48.034c0-3.293 2.68-5.965 5.997-5.965z" style="fill:#b0c334"/></svg>`,
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
  "tags": ["redis-ai", "redis-gears", "tensorflow", "react", "django", "postgresql", "celery", "aws"]
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
  "thumbnail": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#71cef4" d="M218.96 17.43c19.35-5.06 38.6-11.27 58.71-12.49 16.96-.83 34.11-.65 50.79 2.88-24.03 13.67-47.92 27.62-71.9 41.4-14.36 7.92-26.26 20.88-31.49 36.55l-.73-.21c-34.47-9.32-68.99-18.49-103.48-27.79-5.59-1.53-11.28-2.72-16.7-4.81 12.24-6.49 25.23-11.48 38.58-15.11 25.41-6.83 50.83-13.59 76.22-20.42zm193.56 264.74c28.26-16.65 56.88-32.68 85.09-49.38C511.5 276.37 510.37 325 491.69 367c-8.16-14.6-19.9-27.25-34.16-36.08-15.41-9.12-31.04-17.89-46.49-26.97 3.12-6.81 3.49-14.61 1.48-21.78z"/><path style="fill:#27713a" d="M328.47 7.82c19.07 3.5 37.54 10.24 54.44 19.77-8.13 6.29-17.43 10.75-26.24 15.93-33.75 19.59-67.61 39.04-101.33 58.71l-.39.21c-8.59-7.66-18.99-13.07-29.87-16.68 5.24-15.67 17.14-28.63 31.49-36.55 23.98-13.76 47.87-27.71 71.9-41.39zm153.07 164.89c5.51 19.98 10.81 40.01 16.06 60.08-28.21 16.7-56.83 32.73-85.09 49.38-4.47-13.82-20.02-23.19-34.28-19.45-9.89 2.46-19.72 5.09-29.49 8-4.42-17.22-9.22-34.34-13.67-51.56 4.49-3.37 7.58-8.1 10.63-12.71 8.49-2.65 17.89-3.5 25.2-8.99 5.63-4.06 9.11-10.41 11.07-16.94 9.48-2.57 19.01-5.58 28.91-5.82 23.25-.36 46.53.41 69.77-.31l.89-1.68z"/><path d="M382.91 27.59c31.58 17.17 57.85 43.75 74.84 75.43 12.13 21.61 17.2 46.05 23.79 69.69l-.88 1.67c-23.23.72-46.52-.05-69.77.31-9.9.24-19.43 3.25-28.91 5.82 2.21-11.38-2.37-23.97-12.18-30.42-7.48-5.41-17.41-6.13-26.11-3.69-8.55 2.46-17.25 4.44-25.72 7.15-5.22-11.87-5.38-25.64-12.02-36.91-8.81-13.97-29.53-17.37-42.37-7.01-2.85-2.37-5.59-4.85-8.24-7.4 33.72-19.67 67.57-39.12 101.33-58.71 8.81-5.18 18.11-9.63 26.24-15.93z" style="fill:#578c3d"/><path d="M94.5 58.41c3.19-1.89 6.41-3.74 9.67-5.45 5.41 2.1 11.11 3.28 16.7 4.81 34.49 9.3 69.01 18.47 103.48 27.79-3.14 11.64-4.83 23.92-2.41 35.88l-.36.18c-18.78 9.33-40.99 11.41-61.1 5.4-19.74-5.79-37.2-19.1-47.72-36.81-6.15-10.57-12.34-21.11-18.26-31.8z" style="fill:#69903f"/><path d="M8.66 178.3c10.7-49.43 42.37-93.96 85.83-119.9 5.92 10.7 12.11 21.23 18.26 31.8 10.52 17.71 27.98 31.02 47.72 36.81 20.11 6.02 42.32 3.93 61.1-5.4 3.89 18.83 16.18 34.16 25.04 50.81-15.32 4.24-30.76 8.02-46 12.52-3.33-10.13-5.37-20.62-8.62-30.76-4.44-13.28-19.63-21.9-33.3-18.71-14.47 2.68-25.36 17.51-23.19 32.13 1.98 11.06 6.18 21.58 8.06 32.65-9.35 2.31-18.8 4.46-27.9 7.61-12.08 4.89-19.67 18.65-17.35 31.49 1.79 11.76 11.38 21.67 23.04 23.97 6.8 1.85 13.69-.46 20.26-2.13-2.86 6.08-6.39 11.82-9.76 17.64-25.53 44.32-51.22 88.53-76.65 132.91a190.36 190.36 0 0 1-17.59-43.33c-8.36-31.19-16.7-62.36-25.07-93.54-4.78-16.65-8-33.82-8.41-51.17.13-15.22.99-30.52 4.53-45.4z" style="fill:#edb242"/><path d="m224.35 85.56.73.21c10.88 3.61 21.28 9.02 29.87 16.68-11.14 6.08-21.9 12.83-33.01 18.99-2.42-11.96-.73-24.24 2.41-35.88z" style="fill:#244f0f"/><path d="M221.94 121.44c11.11-6.16 21.87-12.91 33.01-18.99l.39-.21c2.65 2.55 5.4 5.02 8.24 7.4-8.37 6.75-13.04 18.02-10.72 28.68 2.49 10.1 5.3 20.13 8.11 30.15-4.75 1.45-9.54 2.72-14.36 3.97-8.86-16.65-21.15-31.98-25.04-50.81l.37-.19z" style="fill:#516210"/><path d="M263.58 109.64c12.85-10.36 33.56-6.96 42.37 7.01 6.63 11.27 6.8 25.04 12.02 36.91 8.47-2.72 17.17-4.7 25.72-7.15 8.7-2.44 18.63-1.72 26.11 3.69 9.8 6.46 14.39 19.04 12.18 30.42-1.97 6.54-5.45 12.88-11.07 16.94-7.32 5.5-16.71 6.34-25.2 8.99-4.33 1.17-8.65 2.31-12.98 3.43.7 3.11 1.48 6.21 2.34 9.28 4.46 17.22 9.25 34.34 13.67 51.56 9.77-2.91 19.61-5.54 29.49-8 14.26-3.74 29.8 5.63 34.28 19.45 2.02 7.17 1.64 14.98-1.48 21.77-3.72 7.06-10.02 12.89-17.76 15.14-9.69 2.72-19.4 5.3-29.15 7.76 1.84 11.61 7.66 22.55 7.17 34.47-.83 12.81-11.22 24.1-23.84 26.28-8.42 1.72-17.2-.94-23.9-6.13-11.59-9.74-11.5-26.06-16.18-39.35-20.15 5.74-40.62 10.41-60.58 16.65 3.11 14.03 11.54 28.99 5.06 43.28-5.76 13.85-22.86 20.81-36.83 15.67-8.05-3.28-14.94-9.87-17.58-18.28-2.6-8.62-4.6-17.41-7.14-26.05-8.76 2.49-17.54 4.98-26.41 7.06-14.84 3.32-30.84-7.46-33.84-22.29-3.66-14.13 5.51-29.92 19.4-34.15 8.44-2.49 16.97-4.68 25.53-6.8-4.67-20.41-10.83-40.45-15.92-60.76-5.84 1.48-11.64 3.07-17.45 4.75-6.57 1.67-13.46 3.98-20.26 2.13-11.66-2.29-21.25-12.21-23.04-23.97-2.33-12.85 5.27-26.6 17.35-31.49 9.11-3.15 18.55-5.3 27.9-7.61-1.89-11.07-6.08-21.59-8.06-32.65-2.18-14.62 8.72-29.45 23.19-32.13 13.67-3.19 28.86 5.43 33.3 18.71 3.25 10.15 5.28 20.63 8.62 30.76 15.24-4.5 30.68-8.28 46-12.52 4.81-1.25 9.61-2.52 14.36-3.97-2.81-10.02-5.63-20.05-8.11-30.15-2.32-10.65 2.35-21.91 10.72-28.66zm-47.66 131.47c4.34 20.41 10.8 40.36 15.72 60.65 9.14-2.1 18.11-4.88 27.23-7.09l.15-.76c11.22-1.58 22.03-5.61 33.07-8.19-4.89-18.99-9.61-38.11-15.45-56.84-.07-.89-.18-2.67-.23-3.56-20.29 4.67-40.28 10.75-60.49 15.79z" style="fill:#fff"/><path d="M332.73 209.88c4.33-1.12 8.65-2.26 12.98-3.43-3.06 4.62-6.15 9.35-10.63 12.71-.87-3.07-1.65-6.18-2.35-9.28z" style="fill:#578c3c"/><path style="fill:#d6221d" d="M215.92 241.11c20.21-5.04 40.19-11.12 60.5-15.8.05.89.16 2.67.23 3.56-4.08 10.13-6.02 20.93-9.12 31.36-2.65 11.27-6.57 22.24-8.5 33.67l-.15.76c-9.12 2.21-18.1 4.99-27.23 7.09-4.93-20.28-11.39-40.23-15.73-60.64zm-74.29 20.08c5.8-1.67 11.61-3.27 17.45-4.75 5.09 20.31 11.25 40.36 15.92 60.76-8.55 2.11-17.09 4.31-25.53 6.8-13.89 4.23-23.06 20.02-19.4 34.15 2.99 14.83 18.99 25.61 33.84 22.29 8.86-2.08 17.64-4.57 26.41-7.06 2.54 8.63 4.54 17.43 7.14 26.05 2.63 8.41 9.53 14.99 17.58 18.28-16.81 18.1-40.97 29.58-65.85 29.48-16.47 1.04-31.98-5.22-47.71-9.02-11.63-2.75-22.93-7.04-34.8-8.6-4.19-5.69-7.97-11.67-11.45-17.82 25.43-44.37 51.12-88.58 76.65-132.91 3.36-5.83 6.89-11.56 9.75-17.65z"/><path style="fill:#e63170" d="M276.65 228.87c5.84 18.73 10.55 37.85 15.45 56.84-11.04 2.59-21.85 6.62-33.07 8.19 1.93-11.43 5.85-22.41 8.5-33.67 3.11-10.43 5.04-21.23 9.12-31.36zM246.8 358.75c19.97-6.24 40.44-10.91 60.58-16.65 4.68 13.28 4.59 29.61 16.18 39.35-.02 27.4-.03 54.81 0 82.21-.08 7.2.99 14.34 2.7 21.32-19.01 5.33-38.13 10.28-57.18 15.41-23.04 6.34-47.28 8.52-71.02 5.72-51.97-5.51-100.96-34.06-131.38-76.55 11.87 1.56 23.17 5.85 34.8 8.6 15.72 3.8 31.23 10.06 47.71 9.02 24.88.1 49.04-11.38 65.85-29.48 13.97 5.14 31.07-1.82 36.83-15.67 6.47-14.29-1.96-29.25-5.07-43.28z"/><path d="M411.04 303.94c15.45 9.09 31.07 17.85 46.49 26.97 14.26 8.83 26 21.48 34.16 36.08-3.53 7.66-7.51 15.07-11.56 22.45-23.3 39.06-61.36 68.97-104.89 82.21-16.24 4.75-32.7 8.68-48.97 13.32-1.71-6.98-2.78-14.11-2.7-21.32-.03-27.4-.02-54.81 0-82.21 6.7 5.19 15.48 7.85 23.9 6.13 12.62-2.18 23.01-13.46 23.84-26.28.49-11.92-5.33-22.86-7.17-34.47 9.76-2.46 19.46-5.04 29.15-7.76 7.73-2.23 14.02-8.06 17.75-15.12z" style="fill:#66286b"/></svg>`,
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
  "thumbnail": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#00A7E1" d="M78.38 116.02c37.55-38.38 88.21-63.14 141.09-71.5 33.39-3.22 67.65-3.88 100.28 4.99C421.17 73.89 504.42 167.09 510 272.26c-21.15 16.16-51.42 19.31-74.1 4.51-18.59-10.37-24.55-31.83-35.3-48.65-11.06-19.35-27.74-34.4-44.31-48.86-9.33-6.66-6.21-20.15-13.9-27.98-9.29-12.07-25.1-16.78-39.81-16.4-27.77 3.95-55.41 12.93-77.91 30.1-13.42 10.33-29.61 15.95-45.6 20.94-9.88 3.19-17.93 11.96-19 22.47.03 15.43 6.59 30.89 19.31 40.08 8.18 8.01 20.84 9.22 28.12 18.31-7.28 9.15-13.45 19.07-18.76 29.47-22.26 5.37-45.15 11.51-62.97 26.73-17.54 12.9-28.4 32-40.53 49.51-8.98 13.18-23.96 20.15-38.83 24.38-7.25.17-14.53.24-21.78.31-12.14-22.82-16.68-48.72-20.7-73.96-1.53-17.51-.83-35.12-.38-52.67l1.7-2.7C9.83 210.54 37.6 156.1 78.38 116.02z"/><path style="fill:#2d2c2f" d="M235.83 183.46c17.41-13.63 38.77-21.5 60.37-25.38 10.75-1.66 25-2.05 30.79 9.22 3.95 8.7-5.96 14.15-9.95 20.46-.42 6.66 1.87 13.07 6.38 18 6.48-2.64 12.41-6.31 17.86-10.68 23.82 17.79 42.89 41.82 54.13 69.42 24.9 62.52 25.31 131.41 22.92 197.68-73.02.03-146.05 0-219.07.03-5.93-43.72-6.76-88.63 2.01-132.04 4.54-18.9 11.37-38.7 25.97-52.25 10.96-7.21 20.91 5.37 28.95 11.51 25.31 21.26 37.79 52.46 51.01 81.69 6.28-2.12 16.57-.8 17.79-9.47-13.38-47.02-43.9-91.89-89.67-112.07-12.48-6.24-26.98-6.93-39.08-13.9-9.74-5.69-13.9-17.02-14.15-27.84 18.69-6.11 38.07-12 53.74-24.38zM169.3 323.64c3.95-2.88 12.14.35 9.78 5.89-8.25 43.79-6.62 88.63-2.32 132.73-30.3-.17-60.61-.07-90.91-.07 3.12-35.51 12.14-71.84 33.08-101.25 12.54-17.12 29.98-30.92 50.37-37.3z"/></svg>`,
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
  "thumbnail": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#4a505b" d="M259.7 5C144.7 5 51.4 98.2 51.4 213.2c0 37 9.9 71.6 26.8 101.7 2.8 5 5.7 9.9 8.9 14.7l172.4 180.2 172.4-180.2c2.7-3.9 4.9-8.1 7.3-12.2l1.6-2.4c16.9-30.1 26.8-64.7 26.8-101.7C467.9 98.2 374.6 5 259.7 5zm0 104.1c57.5 0 104.1 46.6 104.1 104.1 0 57.5-46.6 104.1-104.1 104.1s-104.1-46.6-104.1-104.1c0-57.5 46.6-104.1 104.1-104.1z"/><path style="fill:#2d343d" d="M259.7 83.1c-71.9 0-130.1 58.3-130.1 130.1 0 71.9 58.3 130.1 130.1 130.1 71.9 0 130.1-58.3 130.1-130.1S331.5 83.1 259.7 83.1zm0 52c43.1 0 78.1 35 78.1 78.1s-35 78.1-78.1 78.1-78.1-35-78.1-78.1 34.9-78.1 78.1-78.1z"/><circle style="fill:#2d343d" cx="263.7" cy="214.9" r="134.2"/><circle style="fill:#96d300" cx="320.9" cy="334" r="35.4"/><path style="fill:#fff" d="M305.4 250.1c-1.9-36.3 16.8-73.5 17.6-111-15.4-.5-30.8-.3-45.9 3.3-62.7-23.9-105.3 59.3-93.2 111.1 7.3 35.6 60.9 35.7 75.3 5.2 9.7 8.5 17.2 25 32.6 22.1 29.7 3 48.6-29.7 53.5-54.8-19.9-1.5-20.7 45.3-39.9 24.1zm-28.6-79.6c-5.7 24.6-8 51.2-20.5 73.4-7.4 14.7-34.5 11-31.3-7.7 1-28.5 8.6-62.6 33.3-80.1 13.5-3.6 19.7 1.2 18.5 14.4z"/></svg>`,
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
  "description": "A group messaging Android app that allows exchanging texts and images without the Internet",
  "color": "#AF5CE0",
  "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M248.044 16.286C118.555 16.286 18.2 115.342 18.2 249.127c0 69.98 27.47 130.449 72.191 172.227a19.696 19.696 0 0 1 6.195 13.668l1.248 42.695c.418 13.619 13.876 22.458 25.806 17.001l45.601-21.009c3.882-1.787 8.186-2.126 12.253-.968 20.95 6.038 43.286 9.227 66.55 9.227 129.49 0 229.841-99.058 229.841-232.841 0-133.785-100.351-232.841-229.841-232.841z" fill-rule="evenodd" clip-rule="evenodd" style="fill:#af5ce0"/><g transform="matrix(12.61892 0 0 12.50443 111.219 126.458)"><circle style="fill:#fff" cx="10.432" cy="15.771" r="2.426"/><path style="fill:#fff" d="M16.23 9.926c-.036-.037-.074-.07-.111-.104l-.109-.103c-.018-.019-.038-.033-.061-.051a7.914 7.914 0 0 0-10.932.257l-.351.352-.486.486a1.522 1.522 0 0 0 .004 2.15 1.52 1.52 0 0 0 2.15.004l.838-.838a4.89 4.89 0 0 1 6.904-.001l.605.586a1.508 1.508 0 0 0 2.131-.005 1.5 1.5 0 0 0 .443-1.066 1.483 1.483 0 0 0-.439-1.063l-.586-.604z"/><path style="fill:#fff" d="m20.363 6.927-.504-.504c-.002-.002-.003-.005-.007-.006l-.398-.4a1.435 1.435 0 0 0-.226-.181c-5.113-4.489-12.89-4.351-17.84.411-.024.022-.051.037-.075.061l-.91.911a1.384 1.384 0 0 0 .006 1.959 1.384 1.384 0 0 0 1.959.005l.91-.909c.006-.008.011-.015.017-.02 4.003-3.867 10.353-3.891 14.388-.079l.716.717a1.387 1.387 0 0 0 1.96-.005 1.388 1.388 0 0 0 .004-1.96z"/></g></svg>`,
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
  "color": "#004d8b",
  "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle style="fill:#006cc5" cx="250.56" cy="249.28" r="218.737"/><path d="M338.855 258.408c-17.378 33.417-63.865 78.863-90.152 103.073a7.426 7.426 0 0 1-9.951 0c-26.437-24.21-72.924-69.656-90.301-103.073-38.17-73.517 58.071-122.53 95.202-49.012 37.13-73.518 133.371-24.505 95.202 49.012z" style="fill:#29b6f6"/></svg>`,
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
    const rgb = hexToRgb(project.color || '#ffffff');
    sectionInnerHTML += `
            <div id="${project.hash}" class="col-lg-6 col-xs-12 d-flex">
                <article class="mb-4 p-4 flex-fill section-card">
                    <header class="mb-3 d-flex">
                        <div class="mr-2 p-1 rounded placeholder" style="background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.33);">
                          ${project.thumbnail}
                        </div>
                        
                        <div>
                          <h3>
                              <a href="${project.url[0].url}" target="_blank" rel="noopener" title="${project.url[0].title}">
                                  ${project.name}
                              </a>
                          </h3>
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
                    <footer class="mt-3">
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
    title: 'Senior Software Engineer',
    companyName: 'Automattic Inc.',
    companyWebsite: 'https://automattic.com/',
    tags: [
      'php',
      'react',
      'wordpress',
      'memcached',
      'mysql',
      'docker',
      'ELK',
      'newrelic',
      'grafana',
      'aws',
      'circleci',
    ],
    location: 'Remote',
    startDate: '2021-12-13',
    endDate: null,
    excerptHTML: `Working as a full-stack engineer and a tech lead and manager of seven in <a href="https://woocommerce.com/" target="_blank">Woo Marketplace</a> that take care of backend stuff (auth, orders, subscriptions, payments, taxes, invoicing, external integrations and APIs).`,
    responsibilityHTMLs: [
      `Rewrote the backend to support flexible subscription cycles for marketplace products. This refactor transitioned the business from a hard-coded one-year subscription model to supporting diverse plans, including monthly and bi-yearly options, driving scalability and adaptability in revenue streams.`,
      `Developed data validation rules for Hadoop, enabling the detection of anomalies in critical business data that ensures early problem identification and allows for preemptive measures to maintain system reliability.`,
      `Integrated diverse payment methods including Card, Google/Apple Pay, WooPay, Buy Now Pay Later (via Klarna), alongside adding multi-currency support. Lead the marketplace side of things in making our payment service processor agnostic, enabling improved negotiation leverage with the primary payment processor, and establishing backup payment gateways to ensure business continuity in case of service disruptions.`,
      `Developed a Salesforce integration that allows our sales team to collect payment according to the agreed Quote, prepare a new account, set up order and paid subscriptions for the customer.`,
      `Oversaw sprint planning, project planning and delivery; mentored team members, conducted 1:1s, helped with learning and growth plans, fostering a high-performing and collaborative team culture.`
    ],
    "quotes": [],
    "color": "#702bd5",
    "thumbnail": `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path d="M 405.081 244.936 C 405.081 169.024 350.136 101.067 249.642 101.067 C 149.937 101.067 94.92 169.024 94.92 244.936 L 94.92 254.26 C 94.92 330.173 149.866 398.848 249.642 398.848 C 350.065 398.848 405.081 330.165 405.081 254.26 Z M 249.642 461.102 C 110.83 461.102 20.464 360.608 20.464 256.505 L 20.464 243.494 C 20.464 137.218 110.83 38.898 249.642 38.898 C 389.17 38.898 479.537 137.218 479.537 243.494 L 479.537 256.505 C 479.537 360.608 389.17 461.102 249.642 461.102 Z" fill="#2f99ce" style=""></path>
    <path d="M 298.075 175.544 C 311.81 184.152 315.432 202.3 306.681 215.304 L 239.528 319.406 C 230.921 332.418 213.504 336.765 199.769 328.013 C 186.756 319.406 183.141 301.259 191.877 288.253 L 259.038 184.223 C 267.647 171.211 285.063 166.864 298.081 175.616 Z" fill="#050604" style=""></path>
  </svg>`,
  },
  {
    title: 'Software Engineer',
    companyName: 'Newscred Inc.',
    companyWebsite: 'https://newscred.com/',
    tags: [
      'node.js',
      'react',
      'express.js',
      'socket.io',
      'oauth2',
      'xml-rpc',
      'mocha.js',
      'mongodb',
      'redis',
      'elasticsearch',
      'docker',
      'AWS',
      'jenkins',
      'ansible',
      'nagios',
      'logstash',
      'kibana',
      'sentry',
    ],
    location: 'Dhaka, Bangladesh',
    startDate: '2019-08-04',
    endDate: '2021-12-12',
    excerptHTML: `Worked as a full-stack engineer on NewsCred’s enterprise marketing management SaaS <a href="https://welcomesoftware.com/" rel="nofollow">Welcome</a>.`,
    responsibilityHTMLs: [
      `Led the research, development and deployment of format-agnostic file annotation service that allows clients to mark up uploaded files and allows real-time collaboration. Deployed it in AWS ECS with autoscaling`,
      `Maintained and developed new features for NewsCred’s publishing integrations including OAuth integrations (i.e., Facebook, LinkedIn, YouTube, Instagram), RPC and Plugin-based integrations (i.e., WordPress, AEM, Sitecore), WOPI-based integrations (i.e., Microsoft Office for web) etc.`,
      `Rebuilt NewsCred’s content publishing and social scheduling experience (AngularJS to ReactJS). Identified and resolved server-side performance issues, added monitoring and proactive publishing failure prevention steps. Reduced client-reported bugs by more than 15% in two quarters`,
      `Built a trial version of the existing software, allowing public signup and metered resource utilizations. Designed the architecture of onboarding experience, implemented social login capabilities into existing SSO architecture which bumped up the number of weekly signups by more than 10%`,
      `Lead a team of 4 engineers to develop the "Settings as Code" project. It allows clients to easily sync workspace settings such as Workflows, Templates, Labels, etc between different workspaces (often between Staging and Production) and even <a href="https://github.com/newscred/settings-ex-im-automation-sample">automate this process via CI jobs</a>.`,
      `Lead a team of 3 engineers in the "Workflow Simplification" project. The project converted the ever-complex Workflow setup experience to a bare minimum thanks to both UX engineering and backend architecture improvements.`,
      `Alongside technical contributions, I conducted interviews, trained fresh hires, and led other software engineers in different projects.`,
    ],
    "color": "#702bd5",
    "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.191 31.262h21.337c48.094 2.502 95.354 20.595 132.189 51.731 46.426 38.179 75.246 96.003 79.647 155.797v27.916c-2.78 40.588-16.24 80.55-39.707 113.887-31.716 45.917-81.362 79.022-135.989 90.42-43.276 9.614-89.308 5.236-130.313-11.444-46.357-18.765-85.925-53.747-110.274-97.463-25.298-45.152-34.495-99.362-24.325-150.213 9.452-50.503 37.252-97.323 77.03-129.873 36.487-30.418 83.052-48.071 130.405-50.758m98.783 88.358c14.109 28.657 11.977 61.461 10.24 92.412-3.869 40.773-9.684 81.941-24.974 120.166-4.17 9.684-8.502 19.831-16.518 26.989-4.008 4.286-12.371 4.077-15.128-1.529-4.54-8.131-4.934-17.792-5.583-26.873-1.436-53.562 1.552-107.1 2.016-160.615.718-6.95-5.584-11.653-11.885-12.186-8.108-.857-19.043-3.382-24.325 4.772-6.579 11.144-10.494 23.584-15.892 35.306-19.738 42.604-36.303 86.575-55.994 129.201-6.904 14.039-14.271 28.264-25.252 39.592-1.46-11.49-.556-23.074.834-34.541 5.073-52.844 20.92-103.764 32.711-155.333 1.483-5.792 1.089-12.001-2.455-16.958-6.626-.417-13.275-.464-19.877.092-.672 9.035-4.101 17.468-6.255 26.202-14.48 54.164-27.731 108.884-34.542 164.623-1.228 12.116-1.923 26.827 7.761 35.908 12.742 11.051 32.827 5.931 44.109-4.749 15.406-17.051 24.349-38.549 33.152-59.446 18.556-40.31 33.082-82.288 50.897-122.923a25.588 25.588 0 0 1 4.379-6.996c-1.066 51.152-8.155 102.212-5.004 153.433 1.251 13.02 5.977 27.221 17.56 34.588 10.703 5.931 24.047 7.669 35.631 3.197 14.664-5.513 25.622-18.301 31.599-32.503 9.73-24.047 16.634-49.183 20.92-74.759 7.923-44.989 12.927-91.161 7.367-136.73-1.437-9.683-3.753-21.985-14.178-25.854-7.066.533-16.078.139-21.314 5.514z" fill="#702bd5"/><path d="M340.974 119.62c5.236-5.375 14.248-4.981 21.314-5.514 10.425 3.869 12.741 16.171 14.178 25.854 5.56 45.569.556 91.741-7.367 136.73-4.286 25.576-11.19 50.712-20.92 74.759-5.977 14.202-16.935 26.99-31.599 32.503-11.584 4.472-24.928 2.734-35.631-3.197-11.583-7.367-16.309-21.568-17.56-34.588-3.151-51.221 3.938-102.281 5.004-153.433a25.588 25.588 0 0 0-4.379 6.996c-17.815 40.635-32.341 82.613-50.897 122.923-8.803 20.897-17.746 42.395-33.152 59.446-11.282 10.68-31.367 15.8-44.109 4.749-9.684-9.081-8.989-23.792-7.761-35.908 6.811-55.739 20.062-110.459 34.542-164.623 2.154-8.734 5.583-17.167 6.255-26.202 6.602-.556 13.251-.509 19.877-.092 3.544 4.957 3.938 11.166 2.455 16.958-11.791 51.569-27.638 102.489-32.711 155.333-1.39 11.467-2.294 23.051-.834 34.541 10.981-11.328 18.348-25.553 25.252-39.592 19.691-42.626 36.256-86.597 55.994-129.201 5.398-11.722 9.313-24.162 15.892-35.306 5.282-8.154 16.217-5.629 24.325-4.772 6.301.533 12.603 5.236 11.885 12.186-.464 53.515-3.452 107.053-2.016 160.615.649 9.081 1.043 18.742 5.583 26.873 2.757 5.606 11.12 5.815 15.128 1.529 8.016-7.158 12.348-17.305 16.518-26.989 15.29-38.225 21.105-79.393 24.974-120.166 1.737-30.951 3.869-63.755-10.24-92.412z" fill="#fff"/></svg>`,
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
    excerptHTML: `Worked as a full-stack engineer on numerous client SaaS projects`,
    responsibilityHTMLs: [
      `Developed a web-based gaming environment with ReactJS, Redux and PixiJS, implemented real-time messaging backend from scratch with Django Channels.`,
      `Led the CORE team in building a REST backend module using DRF in form of reusable Django apps to share across different products which allowed us to bootstrap new projects in a matter of minutes. Built CI pipeline to run tests and publish as a private Python package.`,
      `Created and maintained a shared ReactJS component library with Webpack, showcased by a style guide app. Added tests & documentation, built CI pipeline testing and publishing as private Node module.`
    ],
    "color": "#87ceb4",
    "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#1e3b6e" d="M243.558 46.545c9.777-5.886 21.195 1.576 25.762 10.581 13.509 23.125 27.435 46.057 40.654 69.376 5.179 7.719.322 19.715-9.584 19.522-32.163.515-64.358.193-96.521.129-6.304.386-12.319-4.085-13.444-10.324.128-6.272 3.409-11.772 6.464-17.014 12.029-20.07 23.769-40.268 35.605-60.435 2.798-4.631 5.95-9.488 11.064-11.835z"/><path d="M147.616 224.566c25.023-12.222 57.957 3.506 64.647 30.394 8.331 25.859-10.935 55.417-37.566 59.244-23.125 4.407-47.665-11.353-53.39-34.125-6.594-21.742 5.628-46.604 26.309-55.513zm169.917-.386c25.955-11.996 59.469 5.597 64.422 33.675 6.336 25.827-13.476 53.873-39.882 56.542-22.739 3.57-46.154-12.029-51.782-34.285-6.497-22.064 5.853-47.473 27.242-55.932zm-251 150.265c26.663-10.388 59.212 8.974 62.396 37.438 4.857 26.374-17.078 53.423-43.838 54.066-23.865 2.091-46.958-17.014-49.531-40.783-3.312-21.517 10.485-43.741 30.973-50.721zm167.408.386c25.859-10.742 58.151 6.851 63.007 34.415 6.176 25.408-13.026 52.811-38.788 56.285-23.029 4.149-47.344-11.675-52.94-34.35-6.851-22.514 6.754-48.405 28.721-56.35zm167.601.804c21.356-9.681 48.984-.546 59.952 20.295 12.994 22.096 3.763 53.616-19.427 64.841-22.867 12.768-54.548 1.672-64.744-22.353-11.289-23.029.676-53.101 24.219-62.783z" fill="#88CFB5"/></svg>`,
  },
  {
    title: 'Research & Development Intern',
    companyName: 'Robotics Lab, CSE, DU',
    companyWebsite: 'http://cse.du.ac.bd/robolab',
    location: 'Dhaka, Bangladesh',
    startDate: '2016-06-01',
    endDate: '2018-02-01',
    excerptHTML: `Worked as an Intern for the "Robolab" in Dept. of CSE, Univ. of Dhaka during my undergrad years.`,
    responsibilityHTMLs: [
      `Did Machine Learning based R&amp;D for <a href="https://github.com/RoboPi-CSEDU">Rupai</a>, a graphically programmable robotics kit (funded by Ministry of Education, Govt. of Bangladesh).`,
      `Led a team of six people in the same project for building a visual programming interface for robotics kits. Designed the system and was responsible for budget & resource management, documentation and reporting.`,
      `Worked on both front- and back-end; developed the programming editor, code transfer and transpilation modules.`
    ],
    tags: [
      'python',
      'opencv',
      'tensorflow',
      'keras',
      'blockly',
      'php',
    ],
    "color": "#000000",
    "thumbnail": `<svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M36.815 45.146c142.356 0 284.712-.031 427.068.031v427.038H36.815V45.146m42.678 111.607c-.787 15.138-.66 30.372-.094 45.511.063 5.886 6.074 9.788 11.551 9.567 38.776.409 77.551-.094 116.296.221 6.514.157 13.03-.378 19.388-1.826l3.65-6.798c-.251-15.894.851-31.852-.503-47.683-.818-6.011-7.585-8.497-12.904-8.182-40.948-.221-81.927-.033-122.874-.096-6.074-.503-14.131 2.172-14.51 9.286m191.267-.063c-.818 15.138-.661 30.404-.094 45.574.188 6.2 6.42 9.914 12.148 9.567 41.042.315 82.084.032 123.126.158 5.067.284 9.725-1.7 14.289-3.588 2.14-19.041 2.297-38.398-.126-57.408-4.501-1.826-9.096-3.839-14.101-3.526-40.003 0-80.005 0-120.009-.031-6.232-.409-14.855 1.669-15.233 9.254z"/></svg>`,
  }
];

const getWorks = () => {
  let innerHtml = '';

  works.forEach(work => {
    const startDate = dayjs(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? dayjs(work.endDate, 'YYYY-MM-DD') : dayjs();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');
    const tenureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const rgb = hexToRgb(work.color || '#ffffff');

    innerHtml += `
      <div class="col-12 d-flex">
        <article class="mb-4 p-4 flex-fill section-card">
            <header class="mb-3 d-flex">
                <div class="mr-2 p-1 rounded placeholder" style="background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.33);">
                  ${work.thumbnail}
                </div>
                <div>
                  <h3>
                      ${work.title} at <a href="${work.companyWebsite}" target="_blank" rel="noopener noreferrer">${work.companyName}</a>
                  </h3>
                  <address>${work.location}</address>
                  <time class="tenure" data-start="${work.startDate}" ${work.endDate && `data-end="${work.endDate}"`}>${tenureStr}</time>
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
            <footer class="mt-3">
              ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
            </footer>
        </article>
    </div>
    `
  });
  return innerHtml;
}

const getAnalyticsService = () => {
  if (process.env.NODE_ENV !== 'production') return '';

  return `
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106861471-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-106861471-1');
    </script>
  `
}

module.exports = {
  getAnalyticsService,
  getProjects,
  getWorks
}
