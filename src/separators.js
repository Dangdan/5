'use strict';

function thousands_separators(num) {
		var number_string = num.toString();
		var patter = /\./,
			find_end = null,
			result = null,
			return_string = '';
		if(result = patter.exec(number_string)){
			for(var i = (number_string.length - 1); i > result.index; i--){
				if (number_string[i] != '0') {
					find_end = i;
					break;
				}
			}
			for(var i = 0; i < result.index; i++){
				return_string += number_string[i]
				if (result.index > 3) {
					if((i == 0 || (i % 3) == 0) && (i != (result.index - 1))){
						return_string += ',';
					}					
				}
			}
			var end_string = number_string.substring(result.index, find_end + 1);
			// console.log(end_string);
			return_string += end_string;
		}
		else{
			for(var i = 0; i < number_string.length; i++){
				return_string += number_string[i]
				if (number_string.length > 3) {
					if((i == 0 || (i % 3) == 0) && (i != (number_string.length - 1))){
						return_string += ',';
					}					
				}

			}			
		}
		//console.log(return_string);	
		return return_string;	  	
}

module.exports = thousands_separators;
