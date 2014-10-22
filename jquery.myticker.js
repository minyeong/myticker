/**
https://github.com/minyeong/myticker/

USAGE
<ul id='ticker'>
	<li><a target='_blank' href='http://www.google.co.kr/#1'>What&#039;s New in jQuery UI 1.10?</a></li>
	<li><a target='_blank' href='http://www.google.co.kr/#2'>That&#039;s why we love Perl 5.</a></li>
	<li><a target='_blank' href='http://www.google.co.kr/#3'>Learn JavaScript Programming.</a></li>
	<li><a target='_blank' href='http://www.google.co.kr/#4'>Mad Hatter Ball 2014 Benefits PHP!</a></li>
</ul>
$('#ticker').ticker({
	wait: 0,
	speed: 1000,
	delay: 2000,
	easing: 'easeOutBounce'
});

<div id='ticker'>
	<p><a target='_blank' href='http://www.google.co.kr/#1'>What&#039;s New in jQuery UI 1.10?</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#2'>That&#039;s why we love Perl 5.</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#3'>Learn JavaScript Programming.</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#4'>Mad Hatter Ball 2014 Benefits PHP!</a></p>
</div>
<div id='ticker2'>
	<p><a target='_blank' href='http://www.google.co.kr/#1'>What&#039;s New in jQuery UI 1.10?</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#2'>That&#039;s why we love Perl 5.</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#3'>Learn JavaScript Programming.</a></p>
	<p><a target='_blank' href='http://www.google.co.kr/#4'>Mad Hatter Ball 2014 Benefits PHP!</a></p>
</div>
$('#ticker1').ticker({
	wait: 0,
	speed: 1000,
	delay: 2000,
	easing: 'easeOutBounce',
	item: 'p'
});
$('#ticker2').ticker({
	wait: 1000,
	speed: 1000,
	delay: 2000,
	easing: 'easeOutBounce',
	item: 'p'
});

<div id='ticker'>
	<div>
		<p><a target='_blank' href='http://www.google.co.kr/#1'>What&#039;s New in jQuery UI 1.10?</a></p>
		<p><a target='_blank' href='http://www.google.co.kr/#2'>That&#039;s why we love Perl 5.</a></p>
		<p><a target='_blank' href='http://www.google.co.kr/#3'>Learn JavaScript Programming.</a></p>
		<p><a target='_blank' href='http://www.google.co.kr/#4'>Mad Hatter Ball 2014 Benefits PHP!</a></p>
	</div>
	<div>
		<p><a target='_blank' href='http://www.google.co.kr/#5'>Strategic MySQL Operationalization.</a></p>
	</div>
</div>
$('#ticker').ticker({
	wait: 0,
	speed: 1000,
	delay: 2000,
	easing: 'easeOutBounce',
	item: 'div'
});
*/
(function($) {
	$.fn.ticker = function(options) {
		var opts = $.extend({}, {
			wait: 0,
			delay: 5000,
			speed: 1000,
			easing: 'easeOutExpo',
			item: 'li',
			stop: this
		}, options);

		var wait   = opts.wait;
		var delay  = opts.delay;
		var speed  = opts.speed;
		var easing = opts.easing;
		var item   = opts.item;
		var stop   = opts.stop;

		var $node = $(this).css({ overflow: 'hidden' });
		var $items = $node.find(item);
		var $stop  = $(stop);

		var index = 0;
		var pause = false;
		if ($items.length <= 1) return;
		$stop.mouseover(function() { pause = true }).mouseout(function() { pause = false });
		setTimeout(function() {
			setInterval(function() {
				if (pause == true) return;
				var $item = $items.eq(index++ % $items.length);
				var height = $item.height();
				$item.animate({ marginTop: '-' +height+ 'px' }, {
					duration: speed,
					easing: easing,
					complete: function() {
						$item.css({ marginTop: '' }).appendTo($node);
					}
				});
			}, delay);
		}, wait);
	};
})(jQuery);
