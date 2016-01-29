(function (window) {
	window.RhRebuke = {
		rebukePage: function () {
			//remove conflicts with other javascript libraries
			var $ 			= jQuery,
				foundNoNos 	= false,
				body 		= $('body'),
				head		= $('head');

			if ( !body.hasClass('rh-rebuke') ) {

				var noNos = {
					'.band .band': 'Band within a band',
					'.container .container': 'Container within a container',
					'.row > *:not([class*="col-"])': 'Rows can only have columns. No text allowed here',
					'[class*="col-"] > [class*="col-"]': 'Column inside another column. Must have a row',
					'*:not(.row) > [class*="col-"]': 'Columns must be inside a row',
					'ul > ul, ol > ol': 'Improperly nested list',
					'img:not([alt])': 'Images must have alt attributes',
					'th:not([scope])': 'Table headers need scopes for accessibility',
					'th:not([id])': 'Table headers need IDs for accessibility',
					'td:not([headers])': 'Table cells need headers for accessibility',
					'table:not([summary])': 'Tables need summary attributes for accessibility',
					'.band > .container > .section-title:not(:first-child), .band > .container > .row > [class*="col-"] > .section-title:not(:first-child)': 'Section titles must be the first heading used in a band'
				};

				head.append('<style id="rebuke-styles">.rebuke-highlight{position:relative;outline:#c00 solid 2px}.rebuke-highlight-block{display:inline-block}.rebuke-flag{position:absolute;right:-2px;bottom:100%;padding-bottom:8px}.rebuke-reason{position:relative;display:block;background:#c00;color:#fff;padding:5px 10px;font-weight:700;text-transform:none!important;box-shadow:0 0 3px rgba(0,0,0,.3)}.rebuke-reason:hover{z-index:9999;background:#a30000}.rebuke-arrow{position:absolute;left:50%;bottom:2px;margin-left:-3px;display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #c00}.rebuke-backdrop{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:99999}.rebuke-backdrop.rebuked{background:rgba(130,0,0,.8)}.rebuke-backdrop.success{background:rgba(42,105,36,.8)}.rebuke-done{position:fixed;left:50%;top:50%;margin-top:-100px;margin-left:-100px;width:200px;height:200px;background:#fff;border-radius:50%;padding:5px;z-index:100000}#rebuke-check,#rebuke-ex{display:none}.rebuke-backdrop,.rebuke-done{visibility:hidden}.rebuke-backdrop.open,.rebuke-done.open{animation:rebuke-fade 3s cubic-bezier(.465,.183,.153,.946)}.go .checkmark,.go>.ex,.go>.ex-cross{animation:rebuke-dash 2s cubic-bezier(.465,.183,.153,.946) forwards}.rebuke-done.rebuked #rebuke-ex,.rebuke-done.success #rebuke-check{display:block}.go .checkmark{stroke:#3f9c35;stroke-width:4px;stroke-dashoffset:745.74853515625;stroke-dasharray:745.74853515625}.go>.ex,.go>.ex-cross{stroke:#c00;stroke-width:4px;stroke-dashoffset:745.74853515625;stroke-dasharray:745.74853515625}.ex-cross.go{animation-delay:1s;animation-duration:.75s}@keyframes rebuke-dash{0%{stroke-dashoffset:745.74853515625}100%{stroke-dashoffset:0}}@keyframes rebuke-fade{0%,100%{visibility:hidden}20%{visibility:visible}}</style>');
				body.append('<div class="rebuke-backdrop"></div><div class="rebuke-done"><svg version="1.1" id="rebuke-check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-130 230 98.5 98.5" enable-background="new -130 230 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" d="M-48.3,247.8C-56.5,239.3-68,234-80.8,234c-24.9,0-45.2,20.3-45.2,45.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0l-42.3,42.4l-19-19"/></svg><svg version="1.1" id="rebuke-ex" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-130 230 98.5 98.5" enable-background="new -130 230 98.5 98.5" xml:space="preserve"><path class="ex" fill="none" d="M-56.7,241c-7-4.4-15.3-7-24.1-7c-25,0-45.2,20.2-45.2,45.2c0,25,20.2,45.2,45.2,45.2s45.2-20.2,45.2-45.2c0-12.5-5-23.7-13.2-31.9c0,0,0,0,0,0l-54.6,54.6"/><line class="ex-cross" fill="none" x1="-103.3" y1="256.7" x2="-58.2" y2="301.8"/></svg></div>');

				for (var i in noNos ) {
					$( i, '#cp-main').each(function(index, value) {

						if ( $(this).is('img') || $(this).is('br') ) {
							$(this).wrap('<span>').parent().addClass('rebuke-highlight rebuke-highlight-block').append('<span class="rebuke-flag"><span class="rebuke-reason">' + noNos[i] + '!</span><span class="rebuke-arrow"></span></span>');
						} else {
							$(this).addClass('rebuke-highlight').append('<span class="rebuke-flag"><span class="rebuke-reason">' + noNos[i] + '!</span><span class="rebuke-arrow"></span></span>');
						}

						foundNoNos = true;
					});
				}

				if ( foundNoNos ) {
					$('.rebuke-backdrop, .rebuke-done').addClass('open').addClass('rebuked');
					$('#rebuke-ex').attr('class', 'go');
				} else {
					$('.rebuke-backdrop, .rebuke-done').addClass('open').addClass('success');
					$('#rebuke-check').attr('class', 'go');
				}

				body.addClass('rh-rebuke');

			} else {

				// Just refresh...

			}
		}
	};
}(window));