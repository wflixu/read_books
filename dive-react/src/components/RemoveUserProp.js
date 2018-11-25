import react from 'react';
function removeUserProp(WrappedComponent){
    return class WrappingComponent extends React.Component {
        render(){
            const {user, ...otherProps} =this.props;
            return <WrappedComponent {...otherProps}></WrappedComponent>
        }
    }

}

export default removeUserProp;