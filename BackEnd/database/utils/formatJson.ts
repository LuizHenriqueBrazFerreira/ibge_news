import {readFileSync} from 'fs'

const formatJson = () => {
  const content = JSON.parse(readFileSync('../fsmsss.json', 'utf-8'))
  console.log(content.features[0]);
}

formatJson()