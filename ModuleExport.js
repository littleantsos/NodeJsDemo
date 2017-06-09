function Hello(){
	var name;
	
	this.setName = function(sname){
		name = sname;
	}
	
	this.sayHello = function(){
		console.log('hello : ' + name);
	}
	
	
};

module.exports = Hello;