import os
import argparse
from PIL import Image

cwd = os.get_cwd()

def jpg_to_png(sub_dirs, n=None):
    for im_file in sub_dirs:
        im_file = ''
        im = Image.open(im_file)
        if n == None:
            im_name = str(im_file).split('.')[0] + '.png'
            im.save(os.path.join(im_name)
        else:
            im_name = f'{}



convert_img = {
    "comics": os.path.join(cwd, 'comics'),
    "site": os.path.join(cwd, 'site'),
}

parser = argparse.ArgumentParser(description="Convert JPEG Image Files to PNG")
parser.add_argument("image_directory", type=str)
parser.add_argument("--rename-numeric", default=False, action="store_true")
args = parser.parse_args()

if args.rename_numeric:
    img_dir = jpg_to_png(sub_dirs = os.listdir(convert_img.get(args.image_directory, "")), n=0)

img_dir = jpg_to_png(sub_dirs = os.listdir(convert_img.get(args.image_directory, "")))
print(fish)





def jpg_to_png(im_dir, parent_dir):
    quantity = len(im_dir)
    im_dir = [(fname.split('.')[0]+'.png') for fname in im_dir]

    im = Image.open()


import os

def absoluteFilePaths(directory):
    for dirpath,_,filenames in os.walk(directory):
        for f in filenames:
            yield os.path.abspath(os.path.join(dirpath, f))

import pathlib
def glob_absoluteFilePaths(directory):
    all_paths = []
    for filepath in pathlib.Path(directory).glob('**/*'):
        result = filepath.absolute()
        all_paths.append(result)

    print(all_paths)
    return all_paths


import os

def absolute_file_paths(directory):
    path = os.path.abspath(directory)
    return [entry.path for entry in os.scandir(path) if entry.is_file()]
