const resolveRoutes = (route) => {
  const regex = /^[a-zA-Z]+$/;

    if (regex.test(route)) {
        //let validRoute = route === '/' ? route : '/:id';
        let validRoute = '';
        switch (route) {
            case '/':
                validRoute = '/';
                break;
            case 'about':
                validRoute = '/about';
                break;
            default:
                validRoute = '/:id';
                break;
        }
        return validRoute;
    }
    return `${route}`;
};

export default resolveRoutes;