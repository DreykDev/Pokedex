import Header from '../templates/Header';
import Github from '../templates/github'
import Home from '../pages/home';
import Character from '../pages/character';
import Footer from '../templates/footer'
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  // '/about': About,
  // '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const github = null || document.getElementById('github')
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer')


  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();

  github.innerHTML = await Github();

  footer.innerHTML = await Footer();
};

export default router;