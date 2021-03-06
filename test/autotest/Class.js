
// src/core/Class 类工具函数
define(['../../src/core/Class'],function(Class){
    var Class = Class.create;
    var expect = chai.expect;
    describe('Class类测试', function(){
        describe('Class结构函数',function(){
            it('Class函数', function () {
                expect(Class).to.be.a('function');
                expect(Class).to.be.instanceof(Function);
            });
        });

        describe('创建类',function(){
            var classA = Class({
                attributes : {
                    "title":"11",
                    "doctitle":"22"
                },
                statics:{
                    "sTitle":"aaa"
                },
                otherMethod : function(){
                    this.set("title","33");
                }
            });
            var objClasA = new classA();
            it('classA类', function () {
                expect(classA).to.be.instanceof(Function);
                expect(classA.sTitle).to.equal('aaa');
            });
            it('classA类的实例', function () {
                expect(objClasA).to.be.instanceof(classA);
                expect(objClasA.get('title')).to.equal('11');
                objClasA.set('title','22');
                expect(objClasA.get('title')).to.equal('22');
                objClasA.otherMethod();
                expect(objClasA.get('title')).to.equal('33');
            });

            var classB = Class({
                extend: classA,
                otherMethod1 : function(){
                    this.set("title","44");
                }
            });

            var objClasB = new classB();
            it('类的继承', function () {
                expect(objClasB).to.be.instanceof(classB);
                expect(classB.Parent).to.be.instanceof(Function);
                expect(objClasB.Super.constructor).to.be.instanceof(Function);
                expect(objClasB.constructor).to.equal(classB);
                expect(objClasB.Super.constructor).to.equal(classA);
                objClasA.set('title','11');
                expect(objClasA.get('title')).to.equal('11');
                expect(objClasB.get('title')).to.not.equal('11');
                objClasB.set('title','22');
                // console.log(objClasB);
                expect(objClasB.get('title')).to.equal('22');
                objClasB.otherMethod1();
                expect(objClasB.get('title')).to.equal('44');
            });
        });
    });
});