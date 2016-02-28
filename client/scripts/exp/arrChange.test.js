import assert from 'assert';
import arrChange from './arrChange';

describe('Test arrChange.js', () => {

  describe('#DEBUG arrChange', () => {
    // hooks
    // before( () => console.info('before') );
    // after( () => console.info('after') );
    // beforeEach( () => console.info('beforeEach') );
    // afterEach( () => console.info('afterEach') );

    it('[1,2,3] -> [1,4,9]', () => assert.deepEqual( arrChange([1,2,3]), [1,4,9]) );
  });

});
