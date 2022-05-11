const tb = $('.tab-button');
const tc = $('.tab-content');

// for(let i = 0; i < tb.length; i++) {
//   tb.eq(i).on('click', function() {
//     tapOpen(i)
//   });
// }

$('.list').click(function(e) {
    tabOpen(e.target.dataset.id);
})

function tabOpen(index) {
  tb.removeClass('orange');
  tb.eq(index).addClass('orange');
  tc.removeClass('show');
  tc.eq(index).addClass('show');
};