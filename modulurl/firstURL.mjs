import url from 'url'


const myURL = new URL ('https://www.example.com:8080/pathname?name=NodeJS#hash')
//console.log(myURL)
console.log(myURL.search)
console.log(myURL.searchParams)
console.log(Object.fromEntries(myURL.searchParams))

// const resolvedUrl = url.resolve('httos:example/dir/', 'subdir/file.txt')
// console.log(resolvedUrl)

// const parsedUrl = url.parse('https://www.example.com:8080/pathname?name=NodeJS#hash', true)
// console.log(parsedUrl)

// const formattedUrl = url.format({
//     protocol: 'https',
//     host: 'www.example.com:8080',
//     pathname: '/pathname',
//     query: {name:'Maciej'},
//     hash: '#hash'
// })
// console.log(formattedUrl)