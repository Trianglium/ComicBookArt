import argparse
from convert_image import JPGtoPNG, PNGtoICO


parser = argparse.ArgumentParser(description="Convert Image Format")
parser.add_argument("new", type=str)
parser.add_argument("old", type=str, default='jpegs')
parser.add_argument(
    "--png", 
    default=True, 
    action="store_true",
    help="Convert JPG to PNG"
)
parser.add_argument(
    "--ico", 
    default=False, 
    action="store_true",
    help="Convert PNG to ICO"
)
args = parser.parse_args()

if args.png:
    if args.new == None:
        args.new = "comics"

    converter = JPGtoPNG(args.new, args.old)

elif args.ico:
    if args.new == None:
        args.new = "icons"

    converter = PNGtoICO(args.new, args.old)

print(converter)