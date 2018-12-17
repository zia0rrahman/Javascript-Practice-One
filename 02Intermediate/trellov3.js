let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    meetingDone: function(numTwo){
        this.meetDone = this.meetDone + numTwo
    },

    resetDay: function(){
        this.meetings = 0,
        this.meetDone = 0
    },

    summary: function(){
        return `You have ${this.meetings - this.meetDone} meetings today!`
    }
}

myTodos.addMeeting(7)
myTodos.meetingDone(3)
console.log(myTodos.summary())