'use strict';
var assert = require('assert');
var JNsolve = require('../index');
var test_array= [[0,40],[1,48],[3,56],[4,70]];
     var test_query = [3.4, 4.8, 8, 11] ;
     var test_y     = [75,83,99,105] ;
    function g(x) {
      return Math.cos(x)-x;
    }
    var f = g ;
    // Interval and initial point to use in the numerical modules.
    var initialpoint =  0.5 ;
    var interval =  [-3,5] ;
// Defining a suite of tests
var fitted = JNsolve.bestfit(test_array,test_query,test_y);
Number.prototype.truncate = function (n) {
  return Math.floor(this*Math.pow(10,n))/Math.pow(10,n);
} ;

describe('JNsolve Module numeric values function test.', function () {
  it('JNsolve should be a object', function () {
    assert.equal(typeof JNsolve, 'object'); // should returns true
  });

  it('Found the correct solution to cos(x)-x=0 is 0.73 using the regulafalsi method.', function () {
    assert.equal(JNsolve.regulafalsi(f,interval).Root.truncate(2), 0.73); // should returns true
  });

    it('Found the correct solution to cos(x)-x=0 is 0.73 using the fixedpoint method.', function () {
      assert.equal(JNsolve.fixedpoint(f,initialpoint).Root.truncate(2), 0.73); // should returns true
    });

    it('Found the correct solution to cos(x)-x=0 is 0.73 using the bisection method.', function () {
        assert.equal(JNsolve.bisection(f,interval).Root.truncate(2), 0.73); // should returns true
    });


    it('Found the correct solution to cos(x)-x=0 is 0.73  using the Newton_Raphson method.', function () {
          assert.equal(JNsolve.Newton_Raphson(f,interval,initialpoint).Root.truncate(2), 0.73); // should returns true
    });

      it('Found the correct solution to cos(x)-x=0 is 0.73 using the Newton_Raphson-Higher Order method.', function () {
            assert.equal(JNsolve.Newton_Raphson_Higherorder(f,interval,initialpoint).Root.truncate(2), 0.73); // should returns true
      });

      it('Found the correct solution to cos(x)-x=0 is 0.73  using the findroot module.', function () {
            assert.equal(JNsolve.findroot(f,interval,initialpoint).Root.truncate(2), 0.73); // should returns true
      });

      it('The method using the findroot module is Newton_Raphson_Higherorder.', function () {
            assert.equal(JNsolve.findroot(f,interval,initialpoint).method, 'Newton_Raphson_Higherorder' ); // should returns true
      });

      it('The best fit should be the logarithmic.', function () {
            assert.equal(fitted.fit.best.name, 'exponential'); // should returns true

      });

        it('The best fit error should be.', function () {
              assert.equal(fitted.fit.best.error.truncate(2), 2.39); // should returns true
        });

          it('The best fit should define the function fitted', function () {
                assert.equal(typeof fitted.fit.best.f, 'function'); // should returns true
          });


              it('The ans_ofX should be a array.', function () {
                    assert.equal(Array.isArray(fitted.ans_ofX),true); // should returns true
              });

          it('The ans_ofY should be a array.', function () {              assert.equal(Array.isArray(fitted.ans_ofY),true); // should returns true
                  });

          it('The best fit used should be the exponential', function () {
                assert.equal(fitted.fitUsed,'exponential'); // should returns true
          });

            it('The best fit equation should be y = 40.55e^(0.13x)', function () {
                  assert.equal( fitted.fitEquationUsed, 'y = 40.55e^(0.13x)'); // should returns true
            });

            it('The bestfit object define a function of the fit.', function () {
                  assert.equal( typeof fitted.fit.best.f , 'function'); // should returns true
            });
});


describe('derivative numeric .', function () {


  it('JNsolve.D should be a object', function () {
    assert.equal(typeof JNsolve.D, 'object'); // should returns true
  });

    it('JNsolve.D.Nof() should build a object', function () {
      assert.equal(typeof new JNsolve.D.Nof(f,100,[0,19]), 'object'); // should returns true
    });

      it('JNsolve.D.Nof().f_x should be a Function', function () {
        assert.equal(typeof new JNsolve.D.Nof(f,100,[0,19]).f_x, 'function'); // should returns true
      });
  it('JNsolve.D.Nof().f_x should be a Function', function () {
    assert.equal(typeof new JNsolve.D.Nof(f,100,[0,19]).f_x, 'function'); // should returns true
  });
  it('JNsolve.D.deltax method return a object', function () {
    assert.equal(typeof  JNsolve.D.deltax(100,[0,123]), 'object'); // should returns true
  });
  it('JNsolve.D.deltax return aobject with property x_n_array like a Array', function () {
    assert.equal( Array.isArray( JNsolve.D.deltax(100,[0,123]).x_n_array), true); // should returns true
  });

  it('JNsolve.D.derivativenumeric return a object with property dfdx_array like a Array', function () {
    assert.equal( Array.isArray( JNsolve.D.derivativenumeric(f,100,[0,123]).dfdx_array), true); // should returns true
  });

  it('JNsolve.D.linearinterapolation is a constructor', function () {
    assert.equal( typeof JNsolve.D.linearinterapolation, 'function'); // should returns true
  });

  it('JNsolve.D.linearinterapolation is a constructor that define the function_interpolated', function () {
    assert.equal( typeof new JNsolve.D.linearinterapolation([3,2],[6,8],[2,9]).function_interpolated, 'function'); // should returns true
  });

  it('JNsolve.D.linearinterapolation is a constructor that define the function_interpolated', function () {
    assert.equal( typeof new JNsolve.D.linearinterapolation([3,2],[6,8],[2,9]).function_interpolated, 'function'); // should returns true
  });

});
