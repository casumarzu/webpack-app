import $ from 'jquery';
import _ from 'lodash';

$.ajax({
  url: '/api/v1/tasks.json',
  type: 'GET',
  data: {
    private_token: 'DHPAmq8LLcNhbGsZHYyf'
  }
})
.done(
  (data)=> {
    var results = [];
    data.forEach((task)=> {
      console.info(_.pick(task, ['id','name']))
      results.push(_.pick(task, ['id','name']))
    })
    return results;
  })
.fail(
  (data)=> {
    console.error(data)
  });
