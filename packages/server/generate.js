const fs = require("fs");
const dir = './assets';
let data = {};
const generateArt = () => {
  
  let nfts = getAllDirFiles(dir);  
  let nfts_cnt = getAllDirFiles(dir).length;
  let rand_nft = Math.floor(Math.random() * nfts_cnt) + 1;
  let selected_file;

  nfts.map(nft=> {
    let name_ext = nft.split('.');
    if(name_ext[0] == rand_nft)
      selected_file = name_ext[0] + '.' + name_ext[1];
  })
  
  data = {
    name: "SolCoolGirl_" + rand_nft,
    attributes: [
      { trait_type: 'BlockChain', value: 'Solana' },
    ],
    image: selected_file ,
  };
  
  return data;
}

const getAllDirFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllDirFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(file)
    }
  })

  return arrayOfFiles
}

module.exports = { generateArt }