/** Contains the main resizong function */

import sharp from 'sharp';

const processImage = async (inFile: string, width: number, height: number, outFile: string): Promise<void> => {
    try{
        await sharp(inFile).resize(width, height).toFile(outFile);
    }
    catch(error){
        console.log(error);
    }
};

export default processImage; 