import findByZip from '~/components/js/findByZip'

describe('FindByZip', () => {
  test('returns details for zip', async () => {
    const details = await findByZip('0010000')

    expect(details.region).toEqual('北海道')
  })
  test('returns details for zip', async () => {
    const details = await findByZip('0020851')

    expect(details.locality).toEqual('札幌市北区')
  })
  test('returns details for zip', async () => {
    const details = await findByZip('8998424')

    expect(details.locality).toEqual('曽於市')
  })
})
