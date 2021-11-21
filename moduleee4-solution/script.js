


(function () {

    var names = ["Johny", "Harris", "Jenifer", "jacky", "frankistine", "Emilo", "Janey", "katrina", "Lauda", "josephite"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        sayonaraSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
    
    