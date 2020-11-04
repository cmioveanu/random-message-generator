
const stoicism = {
    names: ["Cristian", "James", "John", "Mary", "Nina", "Laura", "Matthew", "Andrew", "Michelle", "Nicholas"],
    verbs: ["should be", "can endure", "must live", "stands", "can handle life", "can face problems"],
    objects: ["rock", "mountain", "tree", "cliff", "colossus", "giant", "juggernaut", "goliath"],      // prepend "like the" later on
    events: ["snow", "rain", "storm", "wind", "fate", "lightning", "wave", "pain"],    // prepend "that the" later on
    actions: ["rolls", "washes", "flies", "rages", "leaps", "surges"],    // append "over" later on

    combineMessage() {
        const numberSelector = number => Math.floor(Math.random() * number);    //takes an array.length and returns a random number based on that length

        console.log(this.names[numberSelector(this.names.length)] + " " + this.verbs[numberSelector(this.verbs.length)]
                    + " like the " + this.objects[numberSelector(this.objects.length)] + " that the "
                    + this.events[numberSelector(this.events.length)] + " " + this.actions[numberSelector(this.actions.length)] + " over.");
    }
};

stoicism.combineMessage();

