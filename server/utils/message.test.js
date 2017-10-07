var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = "Admin";
        var text = "A test message"
        var res = generateMessage(from, text);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        var from = "Admin";
        var latitude = 52;
        var longitude = -1;
        var url = `https://www.google.com/maps/?q=${latitude},${longitude}`;
        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, url});
    });
});