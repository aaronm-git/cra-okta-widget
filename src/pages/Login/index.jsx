import MainLayout from 'components/layouts/MainLayout';
import { Link } from 'react-router-dom';

// components
import OktaWidget from 'components/OktaWidget';
// config
import config from 'configs/okta';

export default function Login() {
  return (
    <MainLayout>
      <Link to="callback" className="btn btn-primary">
        Login Callback Page
      </Link>
      <div className="my-4">
        <OktaWidget
          onSuccess={(tokens) => console.log('Success', tokens)}
          onError={(err) => console.error('Error', err)}
        />
      </div>
    </MainLayout>
  );
}
