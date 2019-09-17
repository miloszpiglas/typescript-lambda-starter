import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import { HelloHandler } from './lib/hello_handler';

export const handle = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const helloHandler = new HelloHandler();
    try {
        const message = await helloHandler.sayHello(context.functionName);
        callback(undefined, message);
    } catch (error) {
        callback(error);
    }
};
