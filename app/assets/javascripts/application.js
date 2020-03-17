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
               location.href = "https://www.instagram.com/sunsorion_wharf.cig/";
            }
            else{
               alert("パスワードが違います");
            }
         }
