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
  "thumbnail": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M266.21 1033.4c-92.05 0-166.67 74.62-166.67 166.67 0 29.6 7.95 57.29 21.48 81.38 2.25 4 4.6 7.94 7.16 11.73l138.02 240.23 138.02-240.23c2.13-3.15 3.96-6.48 5.85-9.77l1.31-1.96c13.52-24.08 21.48-51.77 21.48-81.38.02-92.05-74.61-166.67-166.65-166.67zm0 83.33c46.02 0 83.33 37.31 83.33 83.33 0 46.02-37.31 83.33-83.33 83.33-46.02 0-83.33-37.31-83.33-83.33 0-46.02 37.31-83.33 83.33-83.33z" style="fill:#4a505b" transform="translate(0 -1028.4)"/><path style="fill:#2d343d" d="M266.21 1095.9c-57.53 0-104.17 46.64-104.17 104.17 0 57.52 46.64 104.17 104.17 104.17 57.52 0 104.17-46.65 104.17-104.17 0-57.53-46.65-104.17-104.17-104.17zm0 41.67c34.52 0 62.5 27.98 62.5 62.5 0 34.52-27.98 62.5-62.5 62.5s-62.5-27.98-62.5-62.5c0-34.52 27.98-62.5 62.5-62.5z" transform="translate(0 -1028.4)"/><circle style="fill:#2d343d" cx="269.43" cy="172.98" r="107.38"/><circle cx="314.25" cy="268.5" r="22.53" style="fill:#96d300"/><path d="M302.81 201.15c-1.52-29.02 13.46-58.84 14.11-88.88-12.3-.43-24.68-.22-36.7 2.61-50.16-19.11-84.25 47.48-74.62 88.95 5.86 28.52 48.71 28.59 60.29 4.13 7.74 6.8 13.75 20.05 26.13 17.66 23.74 2.39 38.94-23.81 42.85-43.86-16.06-1.09-16.71 36.4-32.06 19.39zm-22.87-63.69c-4.56 19.69-6.37 40.97-16.43 58.77-5.94 11.73-27.58 8.83-25.04-6.15.8-22.8 6.88-50.09 26.64-64.13 10.85-2.9 15.77.94 14.83 11.51z" style="fill:#fff"/></svg>`,
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