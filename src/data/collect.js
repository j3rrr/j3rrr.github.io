const axios = require('axios')
const fs = require('fs')

progress = {
  'difficulties': [
    {'diff' : 'heroic'},
    {'diff': 'mythic'}
  ],
  'data': {
    'raids': [
      {
        'name': 'nyalotha-the-waking-city',
        'bosse': [          
          {'name' : 'wrathion-the-black-emperor'},
          {'name' : 'the-prophet-skitra'},
          {'name' : 'maut'},
          {'name' : 'shadhar-the-insatiable'},
          {'name' : 'the-hivemind'},
          {'name' : 'dark-inquisitor-xanesh'},
          {'name' : 'vexiona'},
          {'name' : 'ra-den-the-despoiled'},
          {'name' : 'drestagath'},
          {'name' : 'ilgynoth-corruption-reborn'},
          {'name' : 'carapace-of-nzoth'}
        ]      
      }
      // {
      //   'name': 'the-eternal-palace',
      //   'bosse': [
      //     {'name' : 'zaqul'},
      //     {'name' : 'orgozoa'}
      //   ]      
      // }
    ]
  }
}

var progressCollection = {
  "dummy": {
    "blogpost":[]
  }
}

function collectData(raid, boss, difficulty) {    
  
  axios({
    method: 'get',
    url: 'https://raider.io/api/v1/guilds/boss-kill',
    params: {
      region: 'eu',
      realm: 'aegwynn',
      guild: 'zero',
      raid: raid,
      boss: boss,
      difficulty: difficulty
    }
  })
  .then(function(res) {

    if(res.data.statusCode === 400){
      return
    }

  //  console.log('(=============================)')
  //  console.log(JSON.stringify(progressCollection, null, 2))
  //  console.log('(=============================)')
    
    if(!progressCollection[raid]) {
      progressCollection[raid] = {}
    }

    if(!progressCollection[raid][difficulty]) {
      progressCollection[raid][difficulty] = []
    }

    const data = res.data
    data.boss = boss

    data.roster.forEach(rost => {      
      var keys = Object.keys(rost.character)
      keys.forEach(key => {
        if(key != "name" && key != "class"){
          delete rost.character[key]
        }
      })
      delete rost.character.class.id
      delete rost.character.class.name
    })

    delete data.kill.itemLevelTotalAvg
    delete data.kill.itemLevelEquippedAvg
    delete data.kill.artifactTraitsAvg
    
    
    //const kill = JSON.stringify(data, null, 2)
    // const detail = JSON.stringify(data.kill)
    // const roster = JSON.stringify(data.roster)

    // console.log('(=============================)')
    // console.log('Data collected for:')
    // console.log(raid)
    // console.log(difficulty)
    // console.log(boss)
    // console.log('(=============================)')

    progressCollection[raid][difficulty].push(data)

    fs.writeFile('./progress.json', JSON.stringify(progressCollection, null, 2), function(err) {
      console.log('error:', err)
    })
  })
  .catch(err => console.error(err))
}

function getProgress() {
  progress.data.raids.forEach(raid => {
    progress.difficulties.forEach(difficulty => {
      raid.bosse.forEach(boss => {
        collectData(raid.name,boss.name,difficulty.diff)
      });
    });
  });  
}

getProgress()

