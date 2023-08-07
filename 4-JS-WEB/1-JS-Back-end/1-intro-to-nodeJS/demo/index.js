const http = require('http');
const { homePage, aboutPage, defaultPage } = require('./controllers/homeController');
const { catalogPage, createPage, createItem } = require('./controllers/catalogController');
const router = require('./router');


router.get('/', homePage);
router.get('/catalog', catalogPage);
router.get('/create', createPage);
router.post('/create', createItem);
router.get('/about', aboutPage);
router.get('default', defaultPage);

const server = http.createServer(router.match);

server.listen(3000);
