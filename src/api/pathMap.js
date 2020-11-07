import homeRoute from './homeRoute.js';
import newRoute from './newRoute.js';
import askRoute from './askRoute.js';
import showRoute from './showRoute.js';

const pathMap = new Map();
pathMap.set('/', homeRoute);
pathMap.set('/new', newRoute);
pathMap.set('/ask', askRoute);
pathMap.set('/show', showRoute);

export default pathMap;