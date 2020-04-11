function betterThanAverage(classPoints, yourPoints) {
    var classNum = classPoints.length + 1;
    var scoreSum = yourPoints;
    for ( var i = 0; i < classPoints.length; i++){
      scoreSum = scoreSum + classPoints[i];
      console.log(scoreSum);
    }
    var average = scoreSum / classNum ;
    console.log(average);
    if ( yourPoints > average ) {
      return true;
    }
    else {
      return false;
    }
  }