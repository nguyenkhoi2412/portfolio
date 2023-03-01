import SignIn from '@dashboard/signIn';
import { MODULES } from '@routes/_modules';

export default [
  {
    path: MODULES.DASHBOARD + '/signin',
    public: true,
    title: 'cxStudio | Dashboard | SignIn',
    element: <SignIn title='cxStudio | Dashboard | SignIn' />
  }
];