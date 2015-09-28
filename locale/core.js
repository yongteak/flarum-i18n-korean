app.translator.plural = function(count) {
  if (count >= 0 && count < 2) {
    return 'one';
    }
  else {
    return 'other';
  }
};

moment.locale('ko', {
  months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  monthsShort : 'jan._feb._mar._apr._may_jun._jul._aug._sep._oct._nov._dec.'.split('_'),
  weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
  weekdaysShort : '일._월._화._수._목._금._토.'.split('_'),
  weekdaysMin : '일._월._화._수._목._금._토.'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[오늘] LT',
    nextDay: '[내일] LT',
    nextWeek: 'dddd [의] LT',
    lastDay: '[어제] LT',
    lastWeek: 'dddd [의] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : '후 %s',
    past : '%s 전',
    s : '몇초',
    m : '몇분',
    mm : '%d 분',
    h : '한시간',
    hh : '%d 시간',
    d : '하루',
    dd : '%d 일',
    M : '한달',
    MM : '%d 개월',
    y : '일년',
    yy : '%d 년'
  },
  ordinalParse: /\d{1,2}(er|)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  week : {
    dow : 1,
    doy : 4
  }
});
