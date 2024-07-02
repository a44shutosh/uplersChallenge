import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
    const auth = localStorage.getItem('token');
    return !auth ? children : <Navigate to="/products" />;
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired
};
export default PublicRoute;
