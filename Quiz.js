class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    quiz.hide();
    //write code to change the background color here
    backgroundColor = "yellow";
    //write code to show a heading for showing the result of Quiz
    var resultTitle = createElement("h1");
    resultTitle.html("RESULTS");
    resultTitle.position(100,10);
    //call getContestantInfo( ) here
    Person.getPersoninfo();
    //write condition to check if contestantInfor is not undefined
    if(allPeople !== undefined){
      var display_pos = 130;
      var correctAnswer = 2;
      for(var ppl in allPeople){
        if (correctAnswer === allPeople[ppl].answer)
          fill("green")
        else
          fill("black");
        textSize(15);
        text(allPeople[ppl].name + ": " + allPlayers[ppl].answer, 120,display_pos);
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
