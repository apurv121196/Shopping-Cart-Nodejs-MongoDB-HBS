module.exports = function(oldCart){
	this.items=oldCart.items;
	this.totalQty=oldCart.totalQty||0;
	this.totalPrice=oldCart.totalPrice||0;
	this.add=function(item,id){
		var storedItem=this.items[id];
		if(!storedItem){
			storedItem=this.items[id]={item:item,qty:0,price:0};
		}
		storedItem.qty++;
		storedItem.price=storedItem.item.price*storedItem.qty;
		this.totalPrice+=storedItem.item.price;
		this.totalQty++;
	};
	this.generateArray=function(){
		var arr=[];
		for(var i in this.items){
			arr.push(this.items[i]);
		}
		return arr;
	};

};