import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import signup from '../model/user';

const { expect } = chai;
chai.use(chaiHttp);

describe('signup test container ', () =>{
    describe('POST /api/v1/auth/signup',()=>{
        it('shoult return 201 status if all field required obtained ', (done) =>{
            chai
              .request(app)
              .post('/api/v1/auth/signup')
              .send(signup)
              .end((err,res)=>{
                  expect(err).to.be.null;
                  expect(res).to.have.status(201);
                  expect(res.body).to.have.property('message','User created successfully');
                  done();
              });
        });
    });
});
