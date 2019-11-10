'use strict';

// Creates an array that lists out all of the options
var guessesAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var randomNumber = Math.floor(Math.random() * guessesAlphabets.length);
    var number = guessesAlphabets[randomNumber];


    if (number === userGuess) {
        wins++;
        guessesLeft = 9;
        guesses = [];
    } else {
        if (guessesLeft === 1) {
            losses++;
            guessesLeft = 9;
            guesses = [];
        }
    }

    if (guessesLeft === 1) {
        losses = 9;
        guesses = [];
    } else {
        guessesLeft--;
        guesses.push(userGuess);
  
    }

    
    document.getElementById("wins-text").textContent = "wins: " + wins;
    document.getElementById("losses-text").textContent = "losses: " + losses;
    document.getElementById("guessesLeft-text").textContent = "Guesses left: " + guessesLeft;
    document.getElementById("guesses-text").textContent = "Your Guesses so far: " + guesses;
   
        
};