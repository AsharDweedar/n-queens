/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

/*
window.setABoard = function(n){
  for(var i=0; i < n; i++) {
      for(var j=0; j < n; i++) {
         window.m[i][j] = 0;
      }
    }
  }*/
  window.findNRooksSolution = function(n) {
    var r = new Board({ n : n})
    var solution = r.rows();
    var count = 0;
    var ii = 0;
    var jj = 0;
    function locator(ii,jj) {
      for(var i = ii ; i < n; i++) {
        for(var j = jj ; j < n; j++) {
          solution[i][j] = 1;
          r.set(solution);
          if (r.hasAnyRooksConflicts()){
            solution[i][j] = 0;
            r.set(solution)
          } else {
            j = n;
            count++;
          }
        }
      }
        if(count < n) {
          if (jj < n) jj++;
          if (jj === n) {
            jj = 0;
            ii++;
          }
          locator(ii,jj);
        }
       
    }
    locator(ii,jj);
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return r.rows();
  };

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var ii = 0;
  var jj = 0;
  var r = new Board({ n : n});
  var solution ;
  var empty = (new Board({n:n})).rows()

  function locator(ii,jj) {
    r.set ( empty )
    solution = r.rows();
    var count = 0;
    for(var i = ii ; i < n; i++) {
      for(var j = jj ; j < n; j++) {
        solution[i][j] = 1;
        r.set(solution);
        if (r.hasAnyQueensConflicts()){
          solution[i][j] = 0;
          r.set(solution)
        } else {
          j = n ;
          count++;
        }
      }
    }
    if(count < n) {
      if (jj < n) jj++;
      if (jj === n) {
        jj = 0;
        ii++;
      }
      locator(ii,jj);
    }
  }

  locator(ii,jj);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(r.rows()));
  return r.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
