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
  } else if (zipRange < 200000) {
    zips = await import('./zips/zips10.js')
  } else if (zipRange < 3000000) {
    zips = await import('./zips/zips20.js')
  } else if (zipRange < 4000000) {
    zips = await import('./zips/zips30.js')
  } else if (zipRange < 5000000) {
    zips = await import('./zips/zips40.js')
  } else if (zipRange < 6000000) {
    zips = await import('./zips/zips50.js')
  } else if (zipRange < 7000000) {
    zips = await import('./zips/zips60.js')
  } else if (zipRange < 8000000) {
    zips = await import('./zips/zips70.js')
  } else if (zipRange < 9000000) {
    zips = await import('./zips/zips80.js')
  } else if (zipRange < 10000000) {
    zips = await import('./zips/zips90.js')
  } else {
    console.error('invalid zip')
  }

  return zips.zips[zip]
}

export default findByZip
