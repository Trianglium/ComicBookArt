import os
import pathlib
from PIL import Image


cwd = os.getcwd()
comic = os.path.join(cwd, 'comics')

def convert_AFP_to_PNG(all_paths):
    new_names = [(str(im_path).split('.')[0] + '.png') for im_path in all_paths]
    return new_names

def glob_AFP(directory):
    all_paths = []
    for filepath in pathlib.Path(directory).glob('**/*'):
        result = filepath.absolute()
        all_paths.append(result)
    return all_paths

all_paths = glob_AFP(directory=comic)

def convert_images(all_paths=None, new_names=None, numeric_names=False, comic=comic):
    counter = 0
    if numeric_names == True and new_names == None:
        new_names = [os.path.join(comic, str(n)+'.png') for n in range(len(x)+1)]
    for im_file in all_paths:
        im = Image.open(im_file)
        im.save(new_names[counter])
        counter = counter + 1
        print('Success! Finished: ', counter)
