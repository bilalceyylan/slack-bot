const knex = require('../config/database');

function running(data) {  

    // Adding the points of users
    return knex('users')
        .insert({
            username: data.user_name,
            point: data.text * 1.25
        })
        .then(function () {
            return {
                response_type: 'in_channel', // public to the channel
                text: data.text * 1.25
            };
        })
}

async function leaderBoard() {

    // Set fields
    const fields = await setFields();

    return {
        "blocks": [
            {
                "type": "section",
                "fields": fields
            }
        ]
    };
}

async function setFields() {

    const fields = [];

    //Pushing rows
    fields.push({
        "type": "mrkdwn",
        "text": "*Username*"
    },
    {
        "type": "mrkdwn",
        "text": "*Point(A Last Hour)*"
    })
    
    //Getting top 3 users by point
    const data = await knex('users')
        .select('*')
        .sum('point as point')
        .where('created_at', '>=', new Date(new Date().getTime() - (1000*60*60)).toISOString())
        .orderBy('point', 'desc')
        .groupBy('username')
        .limit(3);

    //Pushing columns
    data.forEach(element => {
        fields.push(
            {
                "type": "mrkdwn",
                "text": element.username
            },
            {
                "type": "mrkdwn",
                "text": element.point
            }
        )
    });

    return fields
}

module.exports = {
  running,
  leaderBoard
}