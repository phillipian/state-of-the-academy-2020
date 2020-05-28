import argparse, os, subprocess
import pandas as pd

parser = argparse.ArgumentParser(description='Transpose all correlations csvs for a section',
                                 formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument('--section', type=str, help='section to transpose')
parser.parse_args()

if __name__ == '__main__':
    args = parser.parse_args()
    path = os.path.join('data', args.section)
    old_folder_path = os.path.join(path, '{}_old'.format(args.section))
    subprocess.call('mkdir {}'.format(old_folder_path), shell=True)
    for file in os.listdir(path):
        if 'X' in file and '.csv' in file:
            temp = pd.read_csv(os.path.join(path, file), index_col=0)
            transposed = pd.DataFrame(temp.T)
            subprocess.call('mv {} {}'.format(os.path.join(path, file), old_folder_path), shell=True)
            new_path = file[:-4] + '.csv'
            transposed.to_csv(os.path.join(path, new_path), index_label='group')
