import { stringExtension } from '@utils/helpers';

// import GenerateKey from '@containers/GenerateKey';
import clientapp from '@routes/data/clientapp';
import dashboard from '@routes/data/dashboard';

// import DashboardSignIn from '@dashboard/containers/SignIn';
// import Secure2FA from '@dashboard/containers/Secure_2fa';
// import DashboardLayoutTemplate from '@dashboard/containers/RenderPages/LayoutTemplate';

const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
  buildRoutes: (locale) => {

    let routeBuild = [
      ...clientapp,
      ...dashboard
    ];
  
    return routeBuild;
  }
}
