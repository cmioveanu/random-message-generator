/* 
1. make an object with 3 arrays of words/sentences
2. make a method in the object that takes random words from
   each of the array and combines them to output them to the console

*/

const stoicism = {
    names: ["Cristian", "James", "John", "Mary", "Nina", "Laura", "Matthew", "Andrew", "Michelle", "Nicholas"],
    verbs: ["should be", "can endure", "must live", "stands", "can handle life", "can face problems"],
    objects: ["rock", "mountain", "tree", "cliff", "colossus", "giant", "juggernaut", "goliath"],      // prepend "like the" later on
    events: ["snow", "rain", "storm", "wind", "fate", "lightning", "wave", "pain"],    // prepend "that the" later on
    actions: ["rolls", "washes", "flies", "rages", "leaps", "surges"],    // append "over" later on

    combineMessage() {
        const numberSelector = number => Math.floor(Math.random() * number);

        console.log(this.names[numberSelector(this.names.length)] + " " + this.verbs[numberSelector(this.verbs.length)]
                    + " like the " + this.objects[numberSelector(this.objects.length)] + " that the "
                    + this.events[numberSelector(this.events.length)] + " " + this.actions[numberSelector(this.actions.length)] + " over.");
    }
};

stoicism.combineMessage();

