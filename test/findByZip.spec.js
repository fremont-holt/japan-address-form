import findByZip from '~/components/js/findByZip'

describe('FindByZip', () => {
  test('returns details for zip begin 0', async () => {
    const details = await findByZip('0010000')

    expect(details.region).toEqual('北海道')
  })
  test('returns details for zip end 0', async () => {
    const details = await findByZip('0078632')

    expect(details.streetAddress).toEqual('東苗穂二条')
  })

  test('returns details for zip begin 1', async () => {
    const details = await findByZip('0100000')

    expect(details.locality).toEqual('秋田市')
  })
  test('returns details for zip end 1', async () => {
    const details = await findByZip('0192742')

    expect(details.locality).toEqual('秋田市')
  })

  test('returns details for zip begin 2', async () => {
    const details = await findByZip('0200000')

    expect(details.locality).toEqual('盛岡市')
  })
  test('returns details for zip end 2', async () => {
    const details = await findByZip('0295703')

    expect(details.streetAddress).toEqual('沢内貝沢')
  })

  test('returns details for zip begin 3', async () => {
    const details = await findByZip('0300111')

    expect(details.streetAddress).toEqual('荒川')
  })
  test('returns details for zip end 3', async () => {
    const details = await findByZip('0395346')

    expect(details.streetAddress).toEqual('脇野沢口広')
  })

  test('returns details for zip begin 4', async () => {
    const details = await findByZip('0400000')

    expect(details.locality).toEqual('函館市')
  })
  test('returns details for zip end 4', async () => {
    const details = await findByZip('0495892')

    expect(details.streetAddress).toEqual('洞爺町')
  })

  test('returns details for zip begin 5', async () => {
    const details = await findByZip('0500000')

    expect(details.locality).toEqual('室蘭市')
  })
  test('returns details for zip end 5', async () => {
    const details = await findByZip('0598701')

    expect(details.streetAddress).toEqual('中央町')
  })

  test('returns details for zip begin 6', async () => {
    const details = await findByZip('0600000')

    expect(details.locality).toEqual('札幌市中央区')
  })
  test('returns details for zip end 6', async () => {
    const details = await findByZip('0698585')

    expect(details.streetAddress).toEqual('西野幌')
  })

  test('returns details for zip begin 7', async () => {
    const details = await findByZip('0700000')

    expect(details.locality).toEqual('旭川市')
  })
  test('returns details for zip end 7', async () => {
    const details = await findByZip('0798656')

    expect(details.streetAddress).toEqual('永山二条')
  })

  test('returns details for zip begin 8', async () => {
    const details = await findByZip('0800000')

    expect(details.locality).toEqual('帯広市')
  })
  test('returns details for zip end 8', async () => {
    const details = await findByZip('0895869')

    expect(details.streetAddress).toEqual('チプネオコッペ')
  })

  test('returns details for zip begin 9', async () => {
    const details = await findByZip('0900000')

    expect(details.locality).toEqual('北見市')
  })
  test('returns details for zip end 9', async () => {
    const details = await findByZip('0996592')

    expect(details.streetAddress).toEqual(
      '上湧別屯田市街地３１８番地（上湧別郵便局私書箱第１号）'
    )
  })

  test('returns details for zip begin 10', async () => {
    const details = await findByZip('1000000')

    expect(details.locality).toEqual('千代田区')
  })
  test('returns details for zip end 10', async () => {
    const details = await findByZip('1168621')

    expect(details.streetAddress).toEqual('東日暮里')
  })

  test('returns details for zip begin 12', async () => {
    const details = await findByZip('1200000')

    expect(details.locality).toEqual('足立区')
  })
  test('returns details for zip end 12', async () => {
    const details = await findByZip('1468677')

    expect(details.streetAddress).toEqual('下丸子')
  })

  test('returns details for zip begin 15', async () => {
    const details = await findByZip('1500000')

    expect(details.locality).toEqual('渋谷区')
  })
  test('returns details for zip end 15', async () => {
    const details = await findByZip('1698915')

    expect(details.streetAddress).toEqual('高田馬場')
  })

  test('returns details for zip begin 17', async () => {
    const details = await findByZip('1700000')

    expect(details.locality).toEqual('豊島区')
  })
  test('returns details for zip end 17', async () => {
    const details = await findByZip('1988760')

    expect(details.streetAddress).toEqual('末広町')
  })

  test('returns details for zip begin 20', async () => {
    const details = await findByZip('2010000')

    expect(details.locality).toEqual('狛江市')
  })
  test('returns details for zip end 20', async () => {
    const details = await findByZip('2168631')

    expect(details.streetAddress).toEqual('水沢')
  })

  test('returns details for zip', async () => {
    const details = await findByZip('0020851')

    expect(details.locality).toEqual('札幌市北区')
  })
  test('returns details for zip', async () => {
    const details = await findByZip('8998424')

    expect(details.locality).toEqual('曽於市')
  })
  // TODO add tests for each file
})
