 let Content={
  Intro:` <div class="intro" id="intro">
          <h3>Wellcome to the HIDDEN WORDS !!</h3>
          <p>
            This is very simple and fun game. You are given a sequence of letters and you need to find asked number of the hidden words from the given sequence of letters in the given amount of time.The hidden word's letters can have any order in given sequence. The hodden words shoud of size greater that or equal to 3 and less than or equal to 5. 
            <p>
              Eg. The sequence DCAOGT contains words like CAT,DOG and many more.
            </p>
            <p>
              As you answer more quizes your level will increase and also the difficulty of game . You can see you Current level on right top corner. Maximum Level you can reach is 10 after that difficulty will be same for all levels. 
            </p>
          </p>  
          <button id="starter" >Get Started</button>
          </div>`
          ,
 	Starter: `<div class="timer">Time left is :<span id="timer"></span></div>
          <div id="BigW" class="mb-3"></div>
           <div class="input" class="mb-3">
              <form id="form">
                <div class="mb-3">
                  <label for="word" class="form-label"> </label>
                    <input type="text" class="form-control" id="word" minlength="3" maxlength="5" required>
                   <div id="input" class="form-text">Word should be of 3 to 5 letter long</div>
               </div>
  
              <button type="submit" >Submit</button>
           </form>
          </div>
          <div class="Answered" class="mb-3">
            <h5>The correct hiddens words answered by you :</h5>
           <ol id="answers">
           </ol>
          </div>`
 ,

 
 	retry: `<h3> Your time is over!!!</h3>
	        <h4>The given sequence was : <span id="BigW"> </span></h4>
	       <p> The possible hidden words from above sequence are:
	         <ol id="anslist">
           </ol> 
	       </p>
         `
 ,

completed :`<h1> Congratulations!!</h1>
          <h3>You have succesfully completed previous quiz</h3>
          <h4>Your current Level is <span class="level"></span></h4>
          <h4>Your will have to complete <span class="level"></span> quizes to reach next Level</h4>
          <button id="nextquiz">Next quiz</button>
          
          `
};

export {Content}; 