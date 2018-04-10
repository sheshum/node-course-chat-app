const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {

        var from = "od mene";
        var text = "tttetess";

        var message = generateMessage( from, text );

        expect(message.createdAt).toEqual(new Date().getTime());

       /*  expect(message).toInclude({
            from: from,
            text: text
        }) */

    });
});