const CronJob = require('cron').CronJob;

const randomMornings = [
    "It's a brand-new day. It's time to wake up, smell the coffee, and make it a beautiful one.",
    "Good morning, friend. Thanks for bringing sunshine to my life every day.",
    "Morning. It's time to rise and shine. Just checking in to tell you that I believe in you, and you're going to have the best day.",
    "Good Morning. I know things have been tough recently, but every day is a new beginning. You've got this, friend.",
    "Time to stop hitting the snooze button, wakey-wakey.",
    "Good morning. Sending you love today—I hope today is filled with lots of fun surprises and happy thoughts.",
    "Top of the morning to you. Today is going to be another beautiful adventure. Are you ready?",
    "Positive affirmation of the day: I have every little thing I need to make today the best day ever.",
    "Hope your morning is relaxing. I just wanted to send a quick message to say I am thinking of you and filling your day with light and love, friend.",
    "Cheers to a beautiful new day—have a great one."
]

const morningJob = channel => new CronJob(
    '0 10 * * *',
    function () {
        channel.send(Math.random() > 0.5 ? randomMornings[Math.floor(Math.random() * randomMornings.length)] : "Good morning, friend. Thanks for bringing sunshine to my life every day.");
    }
);

module.exports = morningJob;