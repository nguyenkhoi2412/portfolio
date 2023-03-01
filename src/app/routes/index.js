import clientapp from '@routes/data/clientapp';
import dashboard from '@routes/data/dashboard';

export default {
  buildRoutes: (locale) => {
    let routeBuild = [
      ...clientapp,
      ...dashboard
    ];
  
    return routeBuild;
  }
}
