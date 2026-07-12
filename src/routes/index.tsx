import { createBrowserRouter } from 'react-router';
import EmployeesPage from '../pages/Employees';

const router = createBrowserRouter([
  {
    path: '/employees',
    Component: EmployeesPage,
  },
]);

export default router;
