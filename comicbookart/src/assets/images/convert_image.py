import os
import pathlib
from PIL import Image

class ConvertImages():
    def __init__(self, converted, unconverted, cwd=os.getcwd()):
        self.converted = os.path.join(cwd, converted)
        self.unconverted = os.path.join(cwd, unconverted)
        self.cwd = cwd
    
    def get_directory_context(self, unconverted='jpegs', converted='comics'):
        cwd = os.getcwd()
        comics, jpegs = os.path.join(cwd, converted), os.path.join(cwd, unconverted)

    def get_all_image_paths(self, ext):
        image_paths = [(os.path.join(self.unconverted, im_path), os.path.join(self.converted, im_path.split('.')[0]+ext)) for im_path in os.listdir(self.unconverted)]
        return image_paths

class JPGtoPNG(ConvertImages):

    def __init__(self, converted, unconverted, cwd=os.getcwd()):
        super().__init__(converted, unconverted, cwd=os.getcwd())

    def convert_to_png(self):
        image_paths = self.get_all_image_paths(ext='.png')
        for image_path in image_paths:
            im = Image.open(image_path[0])
            im.save(image_path[1])

        return "Success! Finished Conversion to PNG"

    def __str__(self):
        msg = self.convert_to_png()
        return msg


class PNGtoICO(ConvertImages):
    ICON_SIZES = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (255, 255)]
    def __init__(self, converted, unconverted, cwd=os.getcwd()):
        super().__init__(converted, unconverted, cwd=os.getcwd())

    def convert_to_ico(self):
        image_paths = self.get_all_image_paths(ext='.ico')
        for image_path in image_paths:
            im = Image.open(image_path[0])
            im.save(image_path[1], sizes=self.ICON_SIZES)

        return "Success! Finished Conversion to ICO"

    def __str__(self):
        msg = self.convert_to_ico()
        return msg



