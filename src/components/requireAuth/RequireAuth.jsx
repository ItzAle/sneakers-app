const RequireAuth = ({isLogged, children}) => {

    if (!isLogged) {  
    return <Navigate to="/"/>
    }
    return children
    };

export default RequireAuth    