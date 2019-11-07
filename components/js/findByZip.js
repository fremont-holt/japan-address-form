async function findByZip(zip) {
  let zips = {}
  const zipRange = Number(zip)

  if (zipRange < 100000) {
    zips = await import('./zips/zips0.js')
  } else if (zipRange < 200000) {
    zips = await import('./zips/zips1.js')
  } else if (zipRange < 300000) {
    zips = await import('./zips/zips2.js')
  } else if (zipRange < 400000) {
    zips = await import('./zips/zips3.js')
  } else if (zipRange < 500000) {
    zips = await import('./zips/zips4.js')
  } else if (zipRange < 600000) {
    zips = await import('./zips/zips5.js')
  } else if (zipRange < 700000) {
    zips = await import('./zips/zips6.js')
  } else if (zipRange < 800000) {
    zips = await import('./zips/zips7.js')
  } else if (zipRange < 900000) {
    zips = await import('./zips/zips8.js')
  } else if (zipRange < 1000000) {
    zips = await import('./zips/zips9.js')
  } else if (zipRange < 1200000) {
    zips = await import('./zips/zips10.js')
  } else if (zipRange < 1500000) {
    zips = await import('./zips/zips12.js')
  } else if (zipRange < 1700000) {
    zips = await import('./zips/zips15.js')
  } else if (zipRange < 2000000) {
    zips = await import('./zips/zips17.js')
  } else if (zipRange < 2200000) {
    zips = await import('./zips/zips20.js')
  } else if (zipRange < 2500000) {
    zips = await import('./zips/zips22.js')
  } else if (zipRange < 2700000) {
    zips = await import('./zips/zips25.js')
  } else if (zipRange < 3000000) {
    zips = await import('./zips/zips27.js')
  } else if (zipRange < 3200000) {
    zips = await import('./zips/zips30.js')
  } else if (zipRange < 3500000) {
    zips = await import('./zips/zips32.js')
  } else if (zipRange < 3700000) {
    zips = await import('./zips/zips35.js')
  } else if (zipRange < 4000000) {
    zips = await import('./zips/zips37.js')
  } else if (zipRange < 4200000) {
    zips = await import('./zips/zips40.js')
  } else if (zipRange < 4300000) {
    zips = await import('./zips/zips42.js')
  } else if (zipRange < 4500000) {
    zips = await import('./zips/zips43.js')
  } else if (zipRange < 4700000) {
    zips = await import('./zips/zips45.js')
  } else if (zipRange < 5000000) {
    zips = await import('./zips/zips47.js')
  } else if (zipRange < 5100000) {
    zips = await import('./zips/zips50.js')
  } else if (zipRange < 5200000) {
    zips = await import('./zips/zips51.js')
  } else if (zipRange < 5500000) {
    zips = await import('./zips/zips52.js')
  } else if (zipRange < 5700000) {
    zips = await import('./zips/zips55.js')
  } else if (zipRange < 6000000) {
    zips = await import('./zips/zips57.js')
  } else if (zipRange < 6100000) {
    zips = await import('./zips/zips60.js')
  } else if (zipRange < 6200000) {
    zips = await import('./zips/zips61.js')
  } else if (zipRange < 6500000) {
    zips = await import('./zips/zips62.js')
  } else if (zipRange < 6700000) {
    zips = await import('./zips/zips65.js')
  } else if (zipRange < 7000000) {
    zips = await import('./zips/zips67.js')
  } else if (zipRange < 7200000) {
    zips = await import('./zips/zips70.js')
  } else if (zipRange < 7500000) {
    zips = await import('./zips/zips72.js')
  } else if (zipRange < 7700000) {
    zips = await import('./zips/zips75.js')
  } else if (zipRange < 8000000) {
    zips = await import('./zips/zips77.js')
  } else if (zipRange < 8200000) {
    zips = await import('./zips/zips80.js')
  } else if (zipRange < 8500000) {
    zips = await import('./zips/zips82.js')
  } else if (zipRange < 8700000) {
    zips = await import('./zips/zips85.js')
  } else if (zipRange < 9000000) {
    zips = await import('./zips/zips87.js')
  } else if (zipRange < 9200000) {
    zips = await import('./zips/zips90.js')
  } else if (zipRange < 9300000) {
    zips = await import('./zips/zips92.js')
  } else if (zipRange < 9400000) {
    zips = await import('./zips/zips93.js')
  } else if (zipRange < 9500000) {
    zips = await import('./zips/zips94.js')
  } else if (zipRange < 9600000) {
    zips = await import('./zips/zips95.js')
  } else if (zipRange < 9700000) {
    zips = await import('./zips/zips96.js')
  } else if (zipRange < 9800000) {
    zips = await import('./zips/zips97.js')
  } else if (zipRange < 9900000) {
    zips = await import('./zips/zips98.js')
  } else if (zipRange < 10000000) {
    zips = await import('./zips/zips99.js')
  } else {
    console.error('invalid zip')
  }

  let zipDetails = ''

  if (zips.zips) {
    zipDetails = zips.zips[zip]
  }

  return zipDetails
}

export default findByZip
