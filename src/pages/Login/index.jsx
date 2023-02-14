import MainLayout from 'components/layouts/MainLayout';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <MainLayout>
      <Link to="callback" className="btn btn-primary">
        Login Callback Page
      </Link>
    </MainLayout>
  );
}
