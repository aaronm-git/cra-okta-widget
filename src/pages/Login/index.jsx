import MainLayout from 'components/layouts/MainLayout';
import { Link } from 'react-router-dom';

// components
import OktaWidget from 'components/OktaWidget';

export default function Login() {
  return (
    <MainLayout className="pt-4">
      <div className="text-center">
        <Link to="callback" className="btn btn-primary">
          Login Callback Page
        </Link>
      </div>
      <div>
        <OktaWidget
          onSuccess={(tokens) => console.log('Success', tokens)}
          onError={(err) => console.error('Error', err)}
        />
      </div>
    </MainLayout>
  );
}
