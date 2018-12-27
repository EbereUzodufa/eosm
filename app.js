function(){
	function toogleMenu(){
		let menu = document.getElementById('mobile-top-menu');
		menu.toggleAttribute('hidden');

		let btn = $('#btnHamburgar').css("background-color").toString();
		if(btn === 'rgba(0, 0, 0, 0)'){
			$('#btnHamburgar').css('background-color','rgb(227, 0, 7,0.8)');
		}else{
			$('#btnHamburgar').css('background-color','rgba(0, 0, 0, 0)');
		}
	}
}