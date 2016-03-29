import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent)
  }
  render() {
    const { year, photos, fetching } = this.props
    return (
      <div>
        <button onClick={::this.onYearBtnClick}>2016</button>
        <button onClick={::this.onYearBtnClick}>2015</button>
        <button onClick={::this.onYearBtnClick}>2014</button>
        <h3>{year} </h3>
        {
          fetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото за {year} год. </p>
        }
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  getPhotos: PropTypes.func.isRequired
}
