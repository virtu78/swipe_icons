//ссылки на контейнеры для изображения, которые меняют свойства opacity и transform
var multiple_smartphones = document.getElementById("multiple_smartphones");
var money_transfer= document.getElementById("money_transfer");
var manager_= document.getElementById("manager_manager");
var in_transit= document.getElementById("in_transit");
var high_priority= document.getElementById("high_priority");
var file_= document.getElementById("file_file");
var engineering_= document.getElementById("engineering_engineering");
var database_= document.getElementById("database_database");
var businessman_= document.getElementById("businessman_businessman");
var approval_= document.getElementById("approval_approval");
//ссылки на изображения, которые меняют свойство visibility
var smartphones = document.getElementById("smartphones");
var money = document.getElementById("money");
var manager = document.getElementById("manager");
var transit = document.getElementById("transit");
var priority = document.getElementById("priority");
var file =  document.getElementById("file");
var engineering = document.getElementById("engineering");
var database = document.getElementById("database");
var businessman = document.getElementById("businessman");
var approval = document.getElementById("approval");
function multiplesmartphonesHidden(){
	smartphones.style.visibility = 'hidden';
}
function moneytransferHidden(){
	money.style.visibility = 'hidden';
}
function managerHidden(){
	manager.style.visibility = 'hidden';
}
function intransitHidden(){
	transit.style.visibility = 'hidden';
}
function highpriorityHidden(){
	priority.style.visibility = 'hidden';
}
function fileHidden(){
	file.style.visibility = 'hidden';
}
function engineeringHidden(){
	engineering.style.visibility = 'hidden';
}
function databaseHidden(){
	database.style.visibility = 'hidden';
}
function businessmanHidden(){
	businessman.style.visibility = 'hidden';
}
function approvalHidden(){
	approval.style.visibility = 'hidden';
}
function multiplesmartphonesVisible(){
	smartphones.style.visibility = 'visible';
}
function moneytransferVisible(){
	money.style.visibility = 'visible';
}
function managerVisible(){
	manager.style.visibility = 'visible';
}
function intransitVisible(){
	transit.style.visibility = 'visible';
}
function highpriorityVisible(){
	priority.style.visibility = 'visible';
}
function fileVisible(){
	file.style.visibility = 'visible';
}
function engineeringVisible(){
	engineering.style.visibility = 'visible';
}
function databaseVisible(){
	database.style.visibility = 'visible';
}
function businessmanVisible(){
	businessman.style.visibility = 'visible';
}
function approvalVisible(){
	approval.style.visibility = 'visible';
}
function slide_1(){
	money_transfer.className = 'opacityMore';
	multiple_smartphones.className = 'opacityLess';
	manager_.className = 'opacityLess';
}
function slide_2(){
	manager_.className = 'opacityMore';
	money_transfer.className = 'opacityLess';
	in_transit.className = 'opacityLess';
}
function slide_3(){
	in_transit.className = 'opacityMore';
	manager_.className = 'opacityLess';
	high_priority.className = 'opacityLess';
}
function slide_4(){
	high_priority.className = 'opacityMore';
	in_transit.className = 'opacityLess';
	file_.className = 'opacityLess';
}
function slide_5(){
	file_.className = 'opacityMore';
	high_priority.className = 'opacityLess';
	engineering_.className = 'opacityLess';
}
function slide_6(){
	engineering_.className = 'opacityMore';
	file_.className = 'opacityLess';
	database_.className = 'opacityLess';
}
function slide_7(){
	database_.className = 'opacityMore';
	engineering_.className = 'opacityLess';
	businessman_.className = 'opacityLess';
}
function slide_8(){
	businessman_.className = 'opacityMore';
	database_.className = 'opacityLess';
	approval_.className = 'opacityLess';
}
function slide_9(){
	approval_.className = 'opacityMore';
	businessman_.className = 'opacityLess';
	multiple_smartphones.className = 'opacityLess';
}
function default_(){
	multiple_smartphones.className = 'opacityMore';
	approval_.className = 'opacityLess';
	money_transfer.className = 'opacityLess';
}
var elem = document.getElementById('mySwipe');
	window.mySwipe = Swipe(elem, {
	//startSlide: 4,
	//auto: 3000,
	// continuous: true,
	// disableScroll: true,
	//stopPropagation: true,
	callback: function(index) {
	console.log(index);
		switch (index){
			case 1: 
				slide_1();
				setTimeout(moneytransferVisible, 2);
				setTimeout(multiplesmartphonesHidden,250);
				setTimeout(managerHidden,250);
			break;
			case 2: 
				slide_2();
				setTimeout(managerVisible, 2);
				setTimeout(moneytransferHidden, 250);
				setTimeout(intransitHidden, 250);
			break;
			case 3: 
				slide_3();
				setTimeout(intransitVisible, 2);
				setTimeout(managerHidden, 250);
				setTimeout(highpriorityHidden, 250);
			break;
			case 4: 
				slide_4();
				setTimeout(highpriorityVisible, 2);
				setTimeout(intransitHidden, 250);
				setTimeout(fileHidden, 250);
			break;
			case 5: 
				slide_5();
				setTimeout(fileVisible, 2);
				setTimeout(highpriorityHidden, 250);
				setTimeout(engineeringHidden, 250);
			break;
			case 6: 
				slide_6();
				setTimeout(engineeringVisible, 2);
				setTimeout(fileHidden, 250);
				setTimeout(databaseHidden, 250);
			break;
			case 7: 
				slide_7();
				setTimeout(databaseVisible, 2);
				setTimeout(engineeringHidden, 250);
				setTimeout(businessmanHidden, 250);
			break;
			case 8: 
				slide_8();
				setTimeout(businessmanVisible, 2);
				setTimeout(databaseHidden, 250);
				setTimeout(approvalHidden, 250);
			break;
			case 9: 
			slide_9();
				setTimeout(approvalVisible, 2);
				setTimeout(multiplesmartphonesHidden, 250);
				setTimeout(businessmanHidden, 250);
			break;    
			default: 
				default_();
				setTimeout(multiplesmartphonesVisible, 2);
				setTimeout(approvalHidden, 250);
				setTimeout(moneytransferHidden, 250);
		}
	}
 //transitionEnd: function(index, element) {
 //}
});
// with jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');


//});