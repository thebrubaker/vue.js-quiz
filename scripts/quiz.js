var vm = new Vue({
	el: '#questions',
	data: {
		title: 'Oklahoma Nightlife Quiz',
		tagline: 'Take the quiz to see how much you know about OK nightlife',
		score: 0,
		questionsAnswered: 0,
		questions: [
			{
				id: 1,
				text: 'What is Oklahoma\'s oldest bar?',
				options: [
					{text: 'Grandad\'s Bar', mark: false},
					{text: 'Eischen\'s Bar', mark: false},
					{text: 'Enso Bar', mark: false},
					{text: 'Max Retro Pub', mark: false}
				],
				correctOptionByIndex: 1,
				correctResponse: {
					text: 'You\'re right! Eischen Bar was established back in 1896 and is currently a smokefree establishment. For a vintage feeling in an updated venue, check out the speakeasy style <a href="http://www.apothecary39.com/">Apothecary 39</a> in OKC.',
					hide: true
				},
				incorrectResponse: {
					text: 'That\'s actually incorrect. The correct answer is Eischen Bar. They were established back in 1896 and  are currently a smokefree establishment. For a vintage feeling in an updated venue, check out the speakeasy style <a href="http://www.apothecary39.com/">Apothecary 39</a> in OKC.',
					hide: true
				},
				answered: false
			},
			{
				id: 2,
				text: 'What are the benefits of going out to a smokefree establishment?',
				options: [
					{text: 'You can enjoy the taste of your food and drinks.', mark: false},
					{text: 'You can breathe easily.', mark: false},
					{text: 'You\'ll leave the bar smelling as great as when you came in.', mark: false},
					{text: 'All of the above.', mark: false}
				],
				correctOptionByIndex: 3,
				correctResponse: {
					text: 'You are most definitely correct - visiting smokefree establishments will certainly enhance your night. <a href="http://ensobar.com/">Enso Bar</a> in Tulsa has cheese, meat, and olive trays to pair with amazing drinks! And since they are smokefree, you won\'t have to sacrifice taste.',
					hide: true
				},
				incorrectResponse: {
					text: 'Close, but wrong. The correct answer is, "All of the above" - more reasons to always choose tobacco-free establishments, such as <a href="http://ensobar.com/">Enso Bar</a> in Tulsa. They have cheese, meat, and olive trays to pair with amazing drinks! And since they are smokefree, you won\'t have to sacrifice taste.',
					hide: true
				},
				answered: false
			},
		],
		results: [
			{
				id: 1,
				text: "That was a tough quiz, but feel free to take it again. The most important thing to remember is that smokefree establishments are better - no longer should you have to sacrifice the flavor of your food or drinks.",
				twitter: "http://www.twitter.com",
				facebook: "http://www.facebook.com",
				hide: true
			},
			{
				id: 2,
				text: "It's hard to know EVERYTHING, especially when it comes to the nightlife. But if there was anything to learn from this experience, it's that you should always choose smokefree establishments - it just makes your experience that much better.",
				twitter: "http://www.twitter.com",
				facebook: "http://www.facebook.com",
				hide: true
			},
			{
				id: 3,
				text: "You may not have gotten a perfect score, but it's never too late to deepen your knowledge on Oklahoma nightlife. And the best way to do so is to go out more, but when you decide to go out, choose smokefree establishments - a tobacco-free environment just makes the night that much better.",
				twitter: "http://www.twitter.com",
				facebook: "http://www.facebook.com",
				hide: true
			},
			{
				id: 4,
				text: "Your knowledge proves that you have mastered the OK NIGHTLIFE experience. And the best way to prolong that lifestyle is to visit non-smoking bars and clubs, because whether you're eating, drinking, or dancing - a tobacco-free environment is just that much better.",
				twitter: "http://www.twitter.com",
				facebook: "http://www.facebook.com",
				hide: true
			},
		]
	},
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