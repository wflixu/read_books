import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { fetchTodos } from './actions'
import Todo from './todo'


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
