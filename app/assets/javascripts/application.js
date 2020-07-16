// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require_tree .


$(function(){
    load_effect();
    $(window).scroll(function (){
        scroll_effect();
    });
});
 
//ふわっとロード
function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.load-fade').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.load-up').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}
 
//ふわっとスクロール
function scroll_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.scroll-fade').each(function(){
        var yy = $(this).offset().top+0;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-up').each(function(){
        var yy = $(this).offset().top+0;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}
 function gate(){
    // ▼ユーザの入力を求める
    var UserInput = prompt("パスワードを入力して下さい:","");
    // ▼入力内容をチェック
    if( /\W+/g.test(UserInput) ) {
       // ▼半角英数字以外の文字が存在したらエラー
       alert("半角英数字のみを入力して下さい。");
    }
    // ▼キャンセルをチェック
    else if( UserInput == "orion" ){
       // ▼入力内容からファイル名を生成して移動
       location.href = "https://suno61wharf.thebase.in";
    }
    else{
       alert("パスワードが違います");
    }
 }

function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
  },
  countDown: function () {
    var timer = '';
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor((day * 24) + ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
    var me = this;

    if ((this.tl - today) > 0) {
      if (hour) timer += '<span class="cdt_num">' + hour + '</span><small>h</small>';
      timer += '<span class="cdt_num">' + this.addZero(min) + '</span><small>m</small><span class="cdt_num">' + this.addZero(sec) + '</span><small>s</small><span class="cdt_num">' + this.addZero(milli) + '</span>';
      this.elem.innerHTML = timer;
      tid = setTimeout(function () {
        me.countDown();
      }, 10);
    } else {
      this.elem.innerHTML = this.mes;
      return;
    }
  },
  addZero: function (num) {
    return ('0' + num).slice(-2);
  }
}

// ▼ 開始＆終了日時の指定と日付の判別
function CDT() {
  var myD = Date.now(); // 1970/1/1午前0時から現在までのミリ秒
  var start = new Date('2020-07-17T20:00+09:00'); // 開始日時の指定
  var myS = start.getTime(); // 1970/1/1午前0時からの開始日時までのミリ秒
  var end = new Date('2020-04-01T23:59+09:00'); // 終了日時の指定
  var myE = end.getTime(); // 1970/1/1午前0時から終了日時までのミリ秒

  // 今日が開始日前か期間中か終了日後かの判別
  if (myS <= myD && myE >= myD) {
    var text = '<span>終了</span><span>まで</span>';
    var tl = end;
  } // 期間中
  else if (myS > myD) {
    var text = '<span></span><span></span>';
    var tl = start;
  } // 開始日前
  else {
    var text = "";
  } // 終了日後

  var timer = new CountdownTimer('cdt_date', tl, '<small></small>'); // 終了日後のテキスト
  timer.countDown();
  target = document.getElementById("cdt_txt");
  target.innerHTML = text;
}
window.onload = function () {
  CDT();
}


