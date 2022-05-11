const tb = $('.tab-button');
const tc = $('.tab-content');

for(let i = 0; i < tb.length; i++) {
  tb.eq(i).on('click', function() {
    tb.removeClass('orange');
    tb.eq(i).addClass('orange');
    tc.removeClass('show');
    tc.eq(i).addClass('show');
  });
}