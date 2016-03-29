import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    return (
      <div className="wrapper">
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fething} />
      </div>
    )
  }
}

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  page: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired
  }),
  pageActions: PropTypes.shape({
    getPhotos: PropTypes.func.isRequired
  })
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
