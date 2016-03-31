import { combineReducers } from 'redux'
import incrementer from './Incrementer.Reducer'
import todoList from './TodoList.Reducer'

import $ from 'jquery'

export default combineReducers({
  incrementer, todoList
})

window.$ = $

function showProducts() {
  $.ajax({
    type: 'GET',
    url: '/api/products',
    dataType: 'json'
  }).done(function(data) {
    console.log(data);
  })
}
showProducts()


function addProduct (name, sku, price) {
  $.ajax({
    type: 'POST',
    url: '/api/products',
    dataType: 'json',
    data: {
      name: name,
      sku: sku,
      price: price
    }
  }).done(function(data) {
    console.info('done add', data);
  }).fail(function(data) {
    console.error('fail add', data);
  })
}
