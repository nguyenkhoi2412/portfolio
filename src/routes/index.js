import clientapp from '@routes/data/clientapp';
import authentication from '@routes/data/authentication';

export default {
  buildRoutes: (locale) => {
    let routeBuild = [
      ...clientapp,
      ...authentication
    ];
  
    return routeBuild;
  }
}
