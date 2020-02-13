export default async function index(router) {
  router.get('/', async (req, res, next) => {
    req.initialState = {
      ...req.initialState,
      config: {
        instanceLocator: req.config.get('services:pusher:chatKit:instanceLocator'),
        authToken: req.config.get('services:pusher:chatKit:authToken'),
        receiverUser: req.config.get('services:pusher:chatKit:receiverUser'),
      },
    };

    next();
  });
}
