import chai from 'chai';
import chaiHttp from 'chai-http';
import signin from '../model/current';
import app from '../index';

const {expect} = chai;
chai.use(chaiHttp);

describe('signup container test',()=>{
    describe('POST /api/v1/auth/signin',()=>{
        it('should return 200 status if user successfully logged in',(done)=>{
            chai
              .request(app)
              .post('/api/v1/auth/signin')
              .send(signin)
              .end((err,res)=>{
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  expect(res.body).to.have.property('message','User logged in successfully');
                  done();
              })
        });
        it('should return 400 status if user does not input password as required',(done)=>{
            chai
              .request(app)
              .post('/api/v1/auth/signin')
              .send({email: 'elnino@gmail.com'})
              .end((err,res)=>{
                  expect(err).to.be.null;
                  expect(res).to.have.status(400);
                  done();
              })
        });
        it('should return 400 status if user does not input email as required',(done)=>{
            chai
              .request(app)
              .post('/api/v1/auth/signin')
              .send({password: '1234567'})
              .end((err,res)=>{
                  expect(err).to.be.null;
                  expect(res).to.have.status(400);
                  done();
              })
        })
    });
})