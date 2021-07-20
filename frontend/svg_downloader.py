import sys
import subprocess
from shutil import copy

if len(sys.argv) != 2:
    raise ValueError("file name expected")

if __name__ == "__main__":
    svg_name = sys.argv[1]
    # cmd = f"wget https://htmlstream.com/front/assets/svg/components/{svg_name} > {svg_name}"
    # import pdb; pdb.set_trace()
    subprocess.call("curl https://htmlstream.com/front/assets/svg/components/f" +svg_name + " > " + svg_name)
    # import pdb; pdb.set_trace()
    copy(svg_name, "src/assets/svg/components")