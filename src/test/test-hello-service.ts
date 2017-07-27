import { HelloService } from "../components/hello-service";
import { should } from "chai";
should();

describe('Hello Service', () => {
    it('greet', () => {
        let service = new HelloService();
        let greetings = service.greet('charles');
        greetings.should.equals('Hello charles');
        greetings.should.not.equals('hello charles');
    });
});