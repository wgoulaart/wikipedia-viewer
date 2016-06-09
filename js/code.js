var url = "";
var inputSearch = document.querySelector('.input-search');
var btSearch = document.querySelector('.bt-search');

btSearch.addEventListener('click', function() {
  var inputSearchVal = inputSearch.value;

  url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    inputSearchVal + "&format=json&callback=?";

  $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log(data);
      for (var i = 0; i < data[1].length; i++) {
        $("#main-content").prepend(
          '<article class="article"><h2><a href="' + data[3][i] +
          ' "class="article-title" target="_blank">' + data[1][i] +
          '</a></h2><p><a href="' + data[3][i] +
          '"class="article-text" target="_blank">' + data[2][i] +
          '</a></p></article>');
      }
    }
  });

});
