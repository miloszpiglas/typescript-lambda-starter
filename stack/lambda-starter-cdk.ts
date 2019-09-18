import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

class StarterStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new lambda.Function(this, 'StarterHandler', {
            functionName: 'typescript-lambda-starter-fn',
            code: lambda.Code.fromAsset('function.zip'),
            handler: 'handler.handle', 
            runtime: lambda.Runtime.NODEJS_10_X
        });
    }
} 

const app = new cdk.App();
new StarterStack(app, 'StarterStack');
