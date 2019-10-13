(function() {
  var transformData = function(rawData) {
    var keys = Object.keys(rawData[0]);

    var oneArray = rawData.slice(0, 6).map(function(item, i) {
      var newArr = [{ v: i + 1, f: item[keys[0]] }, item[keys[1]]];
      return newArr;
    });

    oneArray.push([{ v: 7, f: "" }, null]);

    return oneArray;
  };
  var onError = function(errorMessage) {
    alert(errorMessage);
  };

  // window.network = {
  //   load: function(onLoad, address, value) {
  //     var URL = '/api/' + address + '/' + value;
  //     var xhr = new XMLHttpRequest();
  //     xhr.responseType = 'json';

  //     xhr.addEventListener('load', function() {
  //       if (xhr.status === 200) {
  //         console.log(xhr.response);
  //         var transformedData = transformData(xhr.response);
  //         onLoad(transformedData);
  //       } else {
  //         onError(xhr.status + ' ' + xhr.statusText);
  //       }
  //     });
  //     xhr.addEventListener('error', function(errorMessage) {
  //       onError(errorMessage);
  //     });
  //     xhr.open('GET', URL);
  //     xhr.send();
  //   },
  // };
  window.network = {
    load: function(onLoad, address, value) {
      let URL = "/api/" + address + "/" + value;
      fetch(URL)
        .then(response => response.json())
        .then(
          result => {
            let transformedData = transformData(result);
            onLoad(transformedData);
          },
          reject => {
            let errorMessage = reject;
            onError(errorMessage);
          }
        );
    }
  };
})();
