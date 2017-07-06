while :
do
	for NAME_SHORT in ins0 ins1 ins2 ins3 
	do
		for ZONE in us-central1-b us-west1-b us-east1-b
		do
			NAME=$NAME_SHORT$ZONE;
			if [ "$NAME" != "ins3us-east1-b" ]
			then
				echo "checking $NAME"
				gcloud compute instances describe $NAME --zone $ZONE | grep status > cur.txt;
				value=$(<cur.txt);
				if ! grep "RUNNING" cur.txt
				then
					gcloud compute instances delete $NAME --zone $ZONE -q;
					gcloud compute instances create "$NAME" --zone "$ZONE" --machine-type "n1-highcpu-2" --subnet "default" --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring.write","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" --image "debian-8-jessie-v20170619" --image-project "debian-cloud" --boot-disk-size "10" --boot-disk-type "pd-standard" --boot-disk-device-name "$NAME" --metadata "startup-script=mkdir /home/hilcj0001/hello;wget http://yogurtnetdl.github.io./namdrun.sh; source namdrun.sh" --preemptible;
					gcloud compute instances reset "$NAME" --zone $ZONE;
				fi 
			fi
		done
	done
	sleep 60
done
