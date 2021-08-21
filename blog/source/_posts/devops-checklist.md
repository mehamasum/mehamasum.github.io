title: 'DevOps checklist for bootstrapping new projects'
date: 2021-08-22
disqusId: devops-checklist-for-bootstrapping-new-projects
categories:
- Tips
tags:
- devops
language: en
toc: true
cover: 'https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
excerpt: 'Starting out a new project? Make sure you add these into your devops workflow as you grow'
---

Starting out a new project? Make sure you add these into your DevOps workflow as your project grows.
This may also be a good starting point if you just started learning DevOps.

<style type="text/css">
.content ul { margin-left: 0; }
.content ul li { list-style-type: none;}
.content ul li input[type="checkbox"] { margin-right: 0.5em; }
</style>

## Dev automation
- [ ]  Environment setup for local development

## Pull request automation
- [ ]  Automated unit test running with code coverage
- [ ]  Linting
- [ ]  Automated security scanning
- [ ]  Automated E2E test running
- [ ]  Ephemeral environments: for PR Reviewers, QA, Designers, PMs
- [ ]  Notifications to PR Author/Reviewers

## Deployment automation
- [ ]  Continuous Staging: Mirror prod environment for QA, Designers, PMs
- [ ]  Zero downtime deployment: Blue-Green deployments/Rolling deployments 
- [ ]  Feature flagging/Canary deployments
- [ ]  Roll back mechanism
- [ ]  Autoscaling

## Application Performance Management (APM)
- [ ]  Log aggregation: e.g. Logstash + ElasticSearch + Kibana
- [ ]  Metrics: e.g. Prometheus + Grafana
- [ ]  Error tracking: e.g. Sentry
- [ ]  Monitoring: e.g. Take the metrics and logs and convert them into health metrics
- [ ]  Uptime status: e.g. Pingdom
- [ ]  Alerting: e.g. PagerDuty

<script type="text/javascript">
   document.querySelectorAll('.content ul li input[type="checkbox"]').forEach(node => node.disabled = false);
</script>