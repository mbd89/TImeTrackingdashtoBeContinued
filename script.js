const currentWeeklyHours = document.querySelector('.current')
const previousWeeklyHours = document.querySelector('#previousweekly')
const text = document.querySelector('.text')

async function populate(){
      const response = await fetch('data.json')
      const results = await response.json();
      

for (let i = 0; i<results.length;i++){
  
  console.log(results[i].timeframes.weekly.current)
  

 /*previousWeeklyHours.textContent = results[i].timeframes.weekly.previous*/
 console.log(currentWeeklyHours)
}


}


populate()






/*function populateData(obj){
  const currentWeeklyHours = document.querySelector('.current')
  const previousWeeklyHours = document.querySelector('#previousweekly')
  
 const results = obj;

for (let i = 0; i<results.length;i++){
  console.log(results[i].timeframes.weekly.current)
  currentWeeklyHours.textContent = results[i].timeframes.weekly.current
  previousWeeklyHours.textContent = results[i].timeframes.weekly.previous
}
} */






/*
iterate over results, 
for each results[i] = create title h3 
  so const title = document.createElement('h4')
  title.textContent = results[i].title

  for dailyresults = 
  const dailyresults = document.createElement('h3')
  dailyresults.textContent = results[i].timeframes.daily.current
  

*/

