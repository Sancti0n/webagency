/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-circle-thin': '&#xe909;',
		'icon-angle-right': '&#xe907;',
		'icon-chevron-right': '&#xe908;',
		'icon-angle-left': '&#xe906;',
		'icon-chevron-left': '&#xe905;',
		'icon-eye': '&#xe904;',
		'icon-cubes': '&#xe903;',
		'icon-circle': '&#xe902;',
		'icon-line-chart': '&#xe901;',
		'icon-pie-chart': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
