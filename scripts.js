window.onload = function() {

  var scroled = window.pageYOffset;
  btnScroll = document.getElementById('scrol_botton');
  var btnScroll;
  showBotton();
  positioning();


  function showBotton(){
    var timer;
    scroled = window.pageYOffset;
    timer = setTimeout(showBotton, 100);
    if (scroled>100) {
      btnScroll.style.display = 'inline';
    } else {
      btnScroll.style.display = 'none';
  }
}

  btnScroll.onclick = function toTop() {
    var timer;
    if (scroled>0) {
      window.scrollTo(0, scroled);
      scroled = scroled - 100;
      timer = setTimeout(toTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  document.getElementById('big').onclick = function anhor() {
    window.scrollTo(0,0);
  }

  function positioning() {
    var firstCards = document.getElementsByClassName('card_big');
    var secondCards = document.getElementsByClassName('average_card');
    var thirdCards = document.getElementsByClassName('small_card');


    for (var i = 0; i < firstCards.length; i++) {
      if ((firstCards[i].id % 3 == 1) && (i == firstCards.length - 1)) {
        let div = document.createElement('div');
        div. className = 'hidden';
        firstCards[i].after(div);
      }
    }

    for (var i = 0; i < secondCards.length; i++) {
      if ((secondCards[i].id % 3 == 1) && (i == secondCards.length - 1)) {
        let div = document.createElement('div');
        div. className = 'hidden';
        secondCards[i].after(div);
      }
    }

    for (var i = 0; i < thirdCards.length; i++) {
      if ((thirdCards[i].id % 3 == 1) && (i == thirdCards.length - 1)) {
        let div = document.createElement('div');
        div. className = 'hidden';
        thirdCards[i].after(div);
      }
    }
  }

  document.getElementById('big_card_box').classList.add("hidden_cards");
  document.getElementById('average_card_box').classList.add("hidden_cards");
  document.getElementById('small_card_box').classList.add("hidden_cards");
  document.getElementById('big_title').addEventListener('click', showBigCards);
  function showBigCards () {
    var stateBtn = document.getElementById('bigBtnTitle').dataset.state;
    if (stateBtn == 'false') {
      document.getElementById('bigBtnTitle').src = 'img/title_btn_2.png';
      document.getElementById('bigBtnTitle').setAttribute('data-state', 'true');
      document.getElementById('big_card_box').classList.remove("hidden_cards");
    } else {
      document.getElementById('bigBtnTitle').src = 'img/title_btn.png';
      document.getElementById('bigBtnTitle').setAttribute('data-state', 'false');
      document.getElementById('big_card_box').classList.add("hidden_cards");
    }
  }
  document.getElementById('average_title').addEventListener('click', showAvrageCards);
  function showAvrageCards () {
    var stateBtn = document.getElementById('averageBtnTitle').dataset.state;
    if (stateBtn == 'false') {
      document.getElementById('averageBtnTitle').src = 'img/title_btn_2.png';
      document.getElementById('averageBtnTitle').setAttribute('data-state', 'true');
      document.getElementById('average_card_box').classList.remove("hidden_cards");
    } else {
      document.getElementById('averageBtnTitle').src = 'img/title_btn.png';
      document.getElementById('averageBtnTitle').setAttribute('data-state', 'false');
      document.getElementById('average_card_box').classList.add("hidden_cards");
    }
  }

  document.getElementById('small_title').addEventListener('click', showSmallCards);
  function showSmallCards () {
    var stateBtn = document.getElementById('smallBtnTitle').dataset.state;
    if (stateBtn == 'false') {
      document.getElementById('smallBtnTitle').src = 'img/title_btn_2.png';
      document.getElementById('smallBtnTitle').setAttribute('data-state', 'true');
      document.getElementById('small_card_box').classList.remove("hidden_cards");
    } else {
      document.getElementById('smallBtnTitle').src = 'img/title_btn.png';
      document.getElementById('smallBtnTitle').setAttribute('data-state', 'false');
      document.getElementById('small_card_box').classList.add("hidden_cards");
    }
  }
}
