
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('1件目の検索結果');
  console.log('経度: ' + data.coord.lon);
  console.log('緯度: ' + data.coord.lat);
  console.log('天気: ' + data.weather.description);
  console.log('最低気温: ' + data.main.temp_min);
  console.log('最高気温: ' + data.main.temp_max);
  console.log('湿度: ' + data.main.humidity);
  console.log('風速: ' + data.wind.speed);
  console.log('風向: ' + data.wind.deg);
  console.log('都市名: ' + data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let hantei = document.querySelector('#result');
  if (hantei != null) {
    hantei.remove();
  }
  let result = document.createElement('div');
  result.setAttribute('id', 'result');
  document.body.insertAdjacentElement('beforeend', result)
  let ul = document.createElement('ul');
  result.insertAdjacentElement('beforeend', ul);
  let lon = document.createElement('li');
  lon.textContent = '経度: ' + data.coord.lon;
  ul.insertAdjacentElement('beforeend', lon);
  let lat = document.createElement('li');
  lat.textContent = '緯度: ' + data.coord.lat;
  ul.insertAdjacentElement('beforeend', lat);
  let description = document.createElement('li');
  description.textContent = '天気: ' + data.weather[0].description;
  ul.insertAdjacentElement('beforeend', description);
  let temp_min = document.createElement('li');
  temp_min.textContent = '最低気温: ' + data.main.temp_min;
  ul.insertAdjacentElement('beforeend', temp_min);
  let temp_max = document.createElement('li');
  temp_max.textContent = '最高気温: ' + data.main.temp_max;
  ul.insertAdjacentElement('beforeend', temp_max);
  let humidity = document.createElement('li');
  humidity.textContent = '湿度: ' + data.main.humidity;
  ul.insertAdjacentElement('beforeend', humidity);
  let speed = document.createElement('li');
  speed.textContent = '風速: ' + data.wind.speed;
  ul.insertAdjacentElement('beforeend', speed);
  let deg = document.createElement('li');
  deg.textContent = '風向: ' + data.wind.deg;
  ul.insertAdjacentElement('beforeend', deg);
  let name = document.createElement('li');
  name.textContent = '都市名: ' + data.name;
  ul.insertAdjacentElement('beforeend', name);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelectorAll('input[name="timei"]');
for (let i of b) {
  i.addEventListener('click', sendRequest);
}



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let rs = document.querySelectorAll('input[name="timei"]');
  for (let r of rs) {
    if (r.checked) {
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + r.value + '.json';
      axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
    }
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data ==='string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること