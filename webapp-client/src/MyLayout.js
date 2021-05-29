// in src/MyLayout.js
import { Layout } from 'react-admin';
import MyMenu from './MyMenu';
import MyAppBar from './MyAppBar';

const MyLayout = (props) => <Layout {...props} menu={MyMenu} appBar={MyAppBar}/>;

export default MyLayout;