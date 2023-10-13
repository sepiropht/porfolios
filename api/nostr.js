export default (_, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({
    names: {
      sepiropht:
        '8fac8f40655ed30f55e647f82c18b4a029e4ffd06d66ebde1f8c24e03065fad1',
    },
  })
}
