import homeRoute from './homeRoute.js';
import newRoute from './newRoute.js';

const pathMap = new Map();
pathMap.set('/', homeRoute);
pathMap.set('/new', newRoute);

export default pathMap;