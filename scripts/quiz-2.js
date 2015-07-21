var vm = new Vue({
	el: '#questions',
	data: "",
	methods: {
		checkAnswer: function(option) {
			// Check if the question has already been answered
			if (!option.$parent.answered) {
				// Find out which option is the correct answer to this question
				var correct = option.$parent.correctOptionByIndex;
				// Set the property of the correct option's mark attribute to true
				option.$parent.options[correct].mark = true;
				// Check if what we clicked the wrong answer
				if (!option.mark) {
					// Grab the element that was clicked
					var el = option.$el;
					// Add the incorrect class
					$(el).addClass("incorrect");
					// Show the incorrect response
					option.$parent.incorrectResponse.hide = false;
				} else {
					// The answer they selected was correct, so add to the user's quiz score
					this.score += 1;
					// Show the correct response
					option.$parent.correctResponse.hide = false;
				}
				// Mark that the question has now been answered, so clicks won't do anything anymore
				option.$parent.answered = true;
				this.questionsAnswered += 1;
			}

			// Check if its the last question that was just answered
			if (this.questionsAnswered == this.countQuestions()) {
				// Get the score as a percentage
				var score = this.score / this.countQuestions();
				if (score <= 0.25) {
					this.results[0].hide = false;
				} else if (score <= 0.5) {
					this.results[1].hide = false;
				} else if (score <= 0.75) {
					this.results[2].hide = false;
				} else if (score <= 1) {
					this.results[3].hide = false;
				}
			}
		},
		getScore: function() {
			return this.score;
		},
		countQuestions: function() {
			return this.questions.length;
		}
	}
})