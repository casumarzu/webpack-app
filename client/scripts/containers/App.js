import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Counter from '../components/Counter'
import Incrementer from '../components/Incrementer'
import * as pageActions from '../actions/PageActions'
import * as incrementActions from '../actions/IncrementActions'

class App extends Component {
  render() {
    const { user, page, incrementer } = this.props
    const { getPhotos } = this.props.pageActions
    const { increment } = this.props.incrementActions
    return (
      <div className="wrapper">
        <Counter />
        <Incrementer count={incrementer.count} getIncrement={increment} />
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fething} />
      </div>
    )
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  incrementer: PropTypes.object.isRequired,
  pageActions: PropTypes.shape({
    getPhotos: PropTypes.func.isRequired
  }),
  incrementActions: PropTypes.shape({
    increment: PropTypes.func.isRequired
  })
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    incrementer: state.incrementer,
    pageActions: state.pageActions,
    incrementActions: state.incrementActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    incrementActions: bindActionCreators(incrementActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
