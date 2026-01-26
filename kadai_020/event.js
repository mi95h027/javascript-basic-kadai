const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンがクリックされたときに実行するイベント処理
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});