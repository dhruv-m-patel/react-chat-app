export default async function index(router) {
  router.get('/', async (req, res, next) => {
    req.initialState = {
      ...req.initialState,
      config: {
        instanceLocator: req.config.get('services:pusher:chatKit:instanceLocator'),
        secretKey: req.config.get('services:pusher:chatKit:secretKey'),
        chatroomId: req.config.get('services:pusher:chatKit:chatroomId'),
        authToken: req.config.get('services:pusher:chatKit:authToken'),
        receiverUser: req.config.get('services:pusher:chatKit:receiverUser'),
      },
    };

    next();
  });
}
