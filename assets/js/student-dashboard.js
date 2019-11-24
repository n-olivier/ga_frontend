function fetchTopics() {
    const url = "https://grading-stage.herokuapp.com/topics/all";

    fetch(url, {mode='no-cors'})
      .then(function(resp) {
        return response.text().then(function(text) {
            return text ? JSON.parse(text) : {}
          })
      })
      .then(function(data) {
        console.log(data);
      });
  }