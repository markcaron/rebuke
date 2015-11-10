(function (window) {
	window.RhRebuke = {
		rebukePage: function () {
			//remove conflicts with other javascript libraries
			var $ = jQuery;
			
			var noNos = {
				'.band .band': 'Band within a band',
				'.container .container': 'Container within a container',
				'.row > *:not([class*="col-"])': 'Rows can only have columns. No text allowed here',
				'[class*="col-"] > [class*="col-"]': 'Columns cannot be directly inside another column. Must have a row',
				'*:not(.row) > [class*="col-"]': 'Columns must be inside a row'
			};

			$('head').append('<style>.rebuke-highlight { position: relative; outline: 2px solid red; } .rebuke-flag { position: absolute; right: -2px; bottom: 100%; padding-bottom: 8px; } .rebuke-reason { display: block; background: red; color: white; padding: 5px 10px; font-weight: bold; } .rebuke-arrow { position: absolute; left: 50%; bottom: 2px; margin-left: -3px; display: block; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid red; }</style>');

			for (var i in noNos ) {
				$( i ).addClass('rebuke-highlight').append('<span class="rebuke-flag"><span class="rebuke-reason">Ooops! ' + noNos[i] + '!</span><span class="rebuke-arrow"></span></span>');
			}
		}
	};
}(window));