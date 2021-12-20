/** Contains the main resizong function */

import sharp from 'sharp';

const processImage = async (inFile: string, width: number, height: number, outFile: string): Promise<void> => {
    await sharp(inFile).resize(width, height).toFile(outFile);
};

export default processImage;