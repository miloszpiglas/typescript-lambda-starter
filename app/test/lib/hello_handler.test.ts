import {HelloHandler} from '../../src/lib/hello_handler';

describe('GIVEN HelloHandler', () => {

    const handler = new HelloHandler();

    it('WHEN function name is undefined THEN default message is returned', async () => {
        expect(await handler.sayHello()).toBe('Hello anonymous Lambda!');
    });

    it('WHEN function name is empty THEN error is thrown', async (done) => {
        try {
            await handler.sayHello('    ');
            done.fail('Error was expected');
        } catch (error) {
            expect(error.message).toBe('Empty function name is not allowed');
            done();
        }
    });

    it('WHEN function name is defined THEN message contains function name', async () => {
        const testFunctionName = 'test-function';
        expect(await handler.sayHello(testFunctionName)).toBe(`Hello Lambda ${testFunctionName}`);
    });
});
