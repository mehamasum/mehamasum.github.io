title: 'ওয়েব সার্ভার কি? HTTP কি? এগুলো কিভাবে কাজ করে?'
date: 2018-03-01
disqusId: what-is-web-server
categories:
- Tutorial
tags:
- web
- http
- python
language: bn
toc: true
cover: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2639&q=80'
excerpt: 'যখন আমরা একটা ওয়েব ব্রাউজার খুলে তার এড্রেসবারে একটা ওয়েবসাইটের এড্রেস লিখে Enter চাপি তখন আসলে কি হয়?'
---

যখন আমরা একটা ওয়েব ব্রাউজার যেমন Chrome খুলে তার এড্রেস বারে একটা ওয়েবসাইটের এড্রেস যেমন http://example.com লিখি তখন আসলে আমরা ব্রাউজার কে বলি এই অ্যাড্রেসে যেই ওয়েব সার্ভার আছে তার সাথে যোগাযোগ করো। যেন চিঠি পাঠানোর মত। ব্রাউজার আমাদের চিঠি ওয়েব সার্ভার কাছে নিয়ে যাচ্ছে এবং ওয়েব সার্ভার সেই চিঠির উত্তরে যা বলবে তা আমাদের কাছে নিয়ে আসবে। ওয়েব সার্ভার মানে ধরে নিন একটি কম্পিউটার যেখানে সারাদিন একটা প্রোগ্রাম চলে। এই প্রোগ্রাম আমাদের চিঠির আশায় বসে থাকে এবং চিঠি পেলে তার উত্তর দেয়।
{% img /images/what-is-web-server/01_overview.png "Overview" %}

## URL কি?

এড্রেসবারে আমরা যে এড্রেসটি লিখি তাকে URL বলে
এই URL এই বলা থাকে আমাদের ব্রাউজার কার সাথে যোগাযোগ করব কিভাবে যোগাযোগ করবে এবং তাকে কি বলবে। 

{% img /images/what-is-web-server/02_url.png "URL" %}

যোগাযোগের ভাষা হচ্ছে HTTP, Host আর Port হচ্ছে যোগাযোগের ঠিকানা।
যেমন ধরেন কাউকে বললাম বাংলায় লেখা একটি চিঠি অমুক শহরে অমুক বাড়িতে পাঠান।


এখন ব্রাউজার এই URL এর ঠিকানা HTTP ভাষায় যোগাযোগ করবে এবং ওই ওয়েব সার্ভার আমাদের চিঠির যেই উত্তর দিবে আমাদের দেখাবে, যেমন আমরা ফেসবুকের বেলায় একটি সুন্দর HTML ওয়েবপেজ দেখতে পাবো।

যোগাযোগের ব্যাপারটা মোটেও এত সহজে হয় না। শুরুতে ব্রাউজার ওয়েব সার্ভার এর সাথে একটি TCP কানেকশন তৈরি করে। তারপরেই TCP কানেকশন দিয়ে HTTP Request পাঠায়। তারপর সার্ভারের উত্তরের জন্য অপেক্ষা করে এবং সার্ভারের উত্তর (HTTP Response) দিলে তা নিয়ে ফেরত আসে এবং  আমাদের দেখায় কি উত্তর এলো।


এই সাহায্যে শুধুমাত্র ব্রাউজার এর সাথে কথা বলতে পারে তা না, এটি হতে পারে যে কোন কিছু যা HTTP ভাষায় (Protocol) কথা বলতে পারে। এদের Client বলে।


## Python Socket দিয়ে ওয়েব সার্ভার লিখি

তাহলে এবার একটু পরীক্ষা করে দেখা যাক জিনিসটা কিভাবে কাজ করে। 

Python Socket দিয়ে অতি সাধারণ ওয়েব সার্ভার লিখি (server.py)

```py
#!/usr/bin/env python3
import socket

HOST='127.0.0.1'
PORT= 8000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
   s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
   s.bind((HOST, PORT))
   s.listen()
   print('Server up ...')
   while True:
       conn, addr = s.accept()
       with conn:
           request = conn.recv(1024)
           print('Client said', request)
           response = b'HTTP/1.1 200 OK\r\n\nHello, World!'
           conn.sendall(response)
           print('Server said', response)
           conn.close()
```

### কি লিখলাম?

শুরুতে বলে দিলাম হচ্ছে আমাদের ওয়েব সার্ভার `HOST` এবং `PORT`। 
```py
HOST='127.0.0.1'
PORT= 8000
```

এরপর TCP সকেট খুললাম, সকেটে কিছু অপশন সেট করলাম, Host এবং Port এ Bind করলাম এবং সকেট দিয়ে Listen করা শুরু করলাম।
```py
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
   s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
   s.bind((HOST, PORT))
   s.listen()
   print('Server up ...')
```

তারপর নতুন কানেকশন Accept করলাম, কানেকশন এ Client সাইড থেকে কি বলা হয়েছে তা Print দিলাম এবং উত্তরে “Hello world” পাঠিয়ে দিলাম, তা Print দিলাম।
```py
conn, addr = s.accept()
with conn:
    request = conn.recv(1024)
    print('Client said', request)
    response = b'HTTP/1.1 200 OK\r\n\nHello, World!'
    conn.sendall(response)
    print('Server said', response)
    conn.close()
```


যেকোনো টার্মিনালে প্রোগ্রামটি রান দিলাম 

```bash
python server.py
```

এবার একটি ওয়েব ব্রাউজার খুলে এই http://127.0.0.1:8000/ অ্যাড্রেসে গেলে “Hello world” লেখাটা দেখতে পাবো


এভাবেই আমরা একটি HTTP সার্ভার লিখে ফেললাম.

## HTTP Syntax

অন্য যেকোনো ভাষার মতো HTTP Protocol এর নিজস্ব সিনট্যাক্স রয়েছে। আমাদের code এ প্রিন্ট দেওয়া লাইন দুটো দেখলে এটা বোঝা যায়। চলো দেখি কি প্রিন্ট হয়েছে টার্মিনালে। 


খেয়াল করলে দেখবে `Client said` এই লাইনে সে কথাটি প্রিন্ট হয়েছে:
```
Client said b'GET / HTTP/1.1\r\n...blah blah...'
```

সব HTTP Request এভাবে লেখা লাগে:
{% img /images/what-is-web-server/03_request.png "HTTP Request" %}



- শুরুতে থাকে HTTP Method, এক্ষেত্রে GET কেননা আমরা সার্ভার থেকে উত্তর “পেতে” যাচ্ছি 
- তারপর একটা স্পেস দিয়ে থাকে path (এই ক্ষেত্রে /) 
- তারপর একটা স্পেস দিয়ে HTTP Version (1.1)
- তার পরের লাইনে HTTP Header। আমাদের বেলায় ব্রাউজার একগাদা হেডার পাঠিয়েছে



এবার দেখি আমাদের সার্ভার কি উত্তর দিয়েছিল:
```
Server said b'HTTP/1.1 200 OK\r\n\nHello, World!'
```

আবার সব HTTP Response এই ফরম্যাটে লেখা লাগে
{% img /images/what-is-web-server/04_response.png "HTTP Response" %}


- শুরুতেই থাকে HTTP Version
- তারপর একটা স্পেস দিয়ে Status Code 
- তার পরের লাইনে HTTP Header যদি থাকে 
- তারপর এক লাইন গ্যাপ দিয়ে Response Body। স্ট্যাটাস কোড আমাদের বুঝায় সার্ভার ঠিকঠাক উত্তর দিয়েছে কিনা। যেমন এক্ষেত্রে সার্ভার “ওকে”। সার্ভার যদি ঠিকঠাক উত্তর দিতে না পারে তাহলে অন্য স্ট্যাটাস রিটার্ন করতে পারে। আমাদের পরিচিত একটা স্ট্যাটাস হচ্ছে 500 Internel Server Error

## আরো জানতে:

* URL: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL
* HTTP Overview https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
