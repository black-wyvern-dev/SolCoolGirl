const fs = require("fs");
const dir = './assets';
let data = {};
const generateArt = () => {
  
  let total_nfts = 0;
  total_nfts = getAllDirFiles(dir).length;
  
  console.log("total_ntfs: " + total_nfts);
  let rand_nft = Math.floor(Math.random() * total_nfts) + 1;

  data = {
    name: "SolCoolGirl_" + rand_nft,
    attributes: [
      { trait_type: 'BlockChain', value: 'Solana' },
    ],
    image: rand_nft + '.PNG' ,
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