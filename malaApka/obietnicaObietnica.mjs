import {promises as fsPromises} from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

(async ()=>{
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const folderPath = path.join(__dirname, "nowyFolder2")
    const filePath = path.join(folderPath, "plik2.txt")

    try{

        await fsPromises.access(folderPath)
        console.log("folder istnieje")

    }catch(err){
        console.log("folder nie istnieje, wiec go zrobie")
        await fsPromises.mkdir(folderPath, {recursive:true})
        console.log("folder juz zrobiony")
    }

    try{
        const content = "to jest zawartosc z obietnicy"
        await fsPromises.writeFile(filePath, content)
        console.log(`zapisano do pliku ${filePath}`)

        const data = await fsPromises.readFile(filePath, 'utf8')
        console.log(`odczytano \n ${data}`)
    }catch(ex){
        console.log(ex)
    }

})()