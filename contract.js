"use strict"


var Item = function(text) {
	if(text) {
		// 解析json
		var obj=JSON.parse(text);
		this.name = obj.name;
		this.com = obj.com;
		this.content = obj.content;
		this.account = obj.account;
	}else {
		this.name = "";
		this.com = "";
		this.content = "";
		this.account = "";
	}
};


Item.prototype ={
	toString :function() {
		return JSON.stringify(this);
	}
};


var Connotations = function (){
	LocalContractStorage.defineMapProperty(this,"Map",{
		parse: function (text) {
            return new Item(text);
        },
        stringify: function (o) {
            return o.toString();
        }
        
    });
    LocalContractStorage.defineProperty(this, "length",null);
}


Connotations.prototype ={
	init: function(){
		
		this.length=0;
	},
	
	save: function(n,c,value){
		

		
		var from= Blockchain.transaction.from;
		var item = new Item();
		
		item.content=value;
		item.name=n;
		item.com=c;
		item.account=from;
		this.Map.put(this.length,item);
		this.length=this.length+1;
		
	},
	
	
	
	getone:function(x){
		return this.Map.get(x-1);
	},
	getlength: function(){
		return this.length;
	}

};
module.exports = Connotations;

