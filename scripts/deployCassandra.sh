nspace="greencompute"
svc=$(kubectl get svc  --namespace $nspace | grep cassandra-svc)
if [ -z "$svc" ]; then
  echo "Cassandra service not found under namespace " $nspace
  kubectl apply -f ../deployments/cassandra/cassandra-service.yaml --namespace $nspace
fi
echo "Found cassandra service: " $svc " under namespace " $nspace


pvs=$(kubectl get pv  --namespace $nspace | grep cassandra-data )
if [ -z "$pvs" ]; then
  echo "Cassandra Persistence volume not found... "
  kubectl apply -f ../deployments/cassandra/cassandra-volumes.yaml --namespace $nspace
  echo sleep to be sure PVs are created
  sleep 200
fi
echo "Found cassandra PVs "
echo $pvs


sfs=$(kubectl get statefulset --namespace $nspace | grep cassandra)
if [ -z "$sfs" ]; then
  echo "Cassandra Statefulset not found... "
  kubectl apply -f ../deployments/cassandra/cassandra-statefulset.yaml --namespace $nspace
fi
echo "Found cassandra statefulset "
kubectl get statefulsets

kubectl get pods -o wide -n $nspace
