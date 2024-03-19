// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin (record){
    //we're looking for a season in record who's result is W. If not it will find undefined.
    if (record.find(season=> season.result === "W")===undefined){
        return undefined
    } else {
    return record.find((season) => season.result === "W").year
  }
}