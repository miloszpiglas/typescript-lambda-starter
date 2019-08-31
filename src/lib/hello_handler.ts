export class HelloHandler {

    public async sayHello(functionName?: string): Promise<string> {
        if (functionName) {
            const fnName = functionName.trim();
            if (fnName.length === 0) {
                throw new Error('Empty function name is not allowed');
            }
            return `Hello Lambda ${fnName}`;
        }
        return 'Hello anonymous Lambda!';
    }
}
