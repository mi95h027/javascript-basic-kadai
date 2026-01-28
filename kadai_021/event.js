const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click' , () => {
  //２秒後に処理を実行
  setTimeout(function() {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});