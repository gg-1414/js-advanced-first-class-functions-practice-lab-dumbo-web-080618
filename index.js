const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(x, y){
    return x.revenue - y.revenue
  })
}

const driversByName = function(drivers){
  return drivers.slice().sort(function(x, y){
    return x["name"].localeCompare(y["name"])
  })
}

// function totalRevenue(drivers){
//   let sum = 0
//   drivers.forEach(function(driver){
//     sum += driver.revenue
//   })
//   return sum
// }

function totalRevenue(drivers){
  return drivers.slice().reduce(function(total, driver){
    return total + driver.revenue
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
