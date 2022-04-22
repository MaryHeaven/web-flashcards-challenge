const express = require('express');

const path = require('path');
const hbs = require('hbs');
const config = (app) => {
  // set
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));
  // hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
  // use
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, 'public')));

}

module.exports = config;
