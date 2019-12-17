// ==UserScript==
// @name         icourse163 auto-mark
// @namespace    https://www.eolstudy.com
// @version      1.0
// @description  Automatic homework marking/judging for icourse163
// @author       Eol
// @match        https://www.icourse163.org/learn/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

/* globals       $ */
(function () {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function mark() {
    $('html,body').animate({ scrollTop: 9999 }, 'slow') // scroll to bottom
    for (let s of $('.s')) {
      s.children[s.children.length - 1].children[0].checked = true
    }
    for (let inputBox of $('textarea.inputtxt')) {
      inputBox.value = 'Good!'
    }
    $('a.j-submitbtn')[0].click()
    $('a.j-gotonext')[0].click()
  }

  (async function check() {
    var
      sleepTime = 3000,
      markedCnt = 0
    for (;;) {
      if ($('textarea').length > 0) {
        sleepTime = 1000
        mark()
        ++markedCnt
        if (markedCnt === 10) {
          break
        }
      }
      await sleep(sleepTime)
    }
  })()
})()
