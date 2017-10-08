const expect = require('expect');
const  {isRealString} = require('./validation');

describe('is Real String', () => {
    it('should reject non string values', () => {
        var res = isRealString(123)
        expect(res).toBe(false);
    });
    it('should reject strings with only spaces', () => {
        var res = isRealString('     ')
        expect(res).toBe(false);
    });
    it('should allow strings with non-space characters', () => {
        var res = isRealString('saturn')
        expect(res).toBe(true);
    });


});
