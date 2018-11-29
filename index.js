const xl = {
	isUndef: function  (v) {
	  return v === undefined || v === null
	},

	isDef : function (v) {
	  return v !== undefined && v !== null
	},

	isTrue : function (v) {
	  return v === true
	},

	isArray :function (v){
		return Object.prototype.toString.call(v) === '[object Array]'
	},

	isFalse : function  (v) {
	  return v === false
	},

	isString: function(v) {
		return typeof v === "string"
	},

	isObject : function (obj) {
	  return obj !== null && typeof obj === 'object'
	},

	isEqual : function (x, y) {
	    if (x === y) { 
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      return x !== x && y !== y;
	    }
	},
	remove : function (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	},
	getArrEleCount : function  (arr, ele) { 
		if(!this.isArray(arr)){
			throw new TypeError(arr + ' is not Array');
		}
		var num = 0;                  
	    for (var i = 0, len = arr.length; i < len; i++) { 
	        if (ele == arr[i]) {
	            num++;
	        }
	    }
	    return num;  
	},
	getStrEleCount : function (str,ele){
		if(!this.isString(str)){
			throw new TypeError(str + ' is not String');
		}
		return str.split(strSplit).length - 1
	},
	getCurrentTime : function (type,time){ 
			var date = time ?  new Date(time) : new Date(),year = date.getFullYear(),month = date.getMonth() + 1,day = date.getDate(),week = date.getDay(),hour = date.getHours(),Minutes = date.getMinutes(),seconds = date.getSeconds(),Milliseconds =date.getMilliseconds(),time;
				
		   switch(type){
		   		case 0:
		   		      return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒' + Milliseconds + '毫秒';
		   		      break;
		   		case 1:
		   			  return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒';
		   			  break;
		   		case 2:
		   			  return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分';
		   			  break;
		        case 3:
		   			  return time = year + '年' + month + '月' + day +'日';	
		   			  break;
		        default:
		              return time = year + '年' + month + '月' + day +'日';
		              break;   	
		    }
	}
	
}