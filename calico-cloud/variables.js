const releases = require('./releases.json');
const { getPPARepoName, getChartVersionName, getVersion } = require('./variableUtils');

const variables = {
  prodname: 'Calico Cloud',
  prodnamedash: 'calico-cloud',
  version: getVersion(releases),
  baseUrl: '/calico-cloud',
  filesUrl: 'https://docs.calicocloud.io',
  filesUrl_CE: 'https://docs.tigera.io/master',
  prodnameWindows: 'Calico Enterprise for Windows',
  rootDirWindows: 'C:\\TigeraCalico',
  nodecontainer: 'cnx-node',
  noderunning: 'calico-node',
  ppa_repo_name: getPPARepoName(releases),
  chart_version_name: getChartVersionName(releases),
  clouddownloadurl: 'https://installer.calicocloud.io/manifests/v3.14.1-1',
  clouddownloadbase: 'https://installer.calicocloud.io',
  releases,
  registry: 'quay.io/',
  imageNames: {
    node: 'tigera/cnx-node',
    'cnx-node': 'tigera/cnx-node',
    calicoctl: 'tigera/calicoctl',
    typha: 'tigera/typha',
    cnxManager: 'tigera/cnx-manager',
    cnxManagerProxy: 'tigera/cnx-manager-proxy',
    cnxApiserver: 'tigera/cnx-apiserver',
    cnxQueryserver: 'tigera/cnx-queryserver',
    felix: 'tigera/felix',
    calicoq: 'tigera/calicoq',
    cni: 'quay.io/calico/cni',
    kubeControllers: 'tigera/kube-controllers',
    calicoKubeControllers: 'calico/kube-controllers',
    'calico-upgrade': 'calico/upgrade',
    flannel: 'quay.io/coreos/flannel',
    dikastes: 'tigera/dikastes',
    flannelMigration: 'calico/flannel-migration-controller',
    'pilot-webhook': 'calico/pilot-webhook',
    flexvol: 'calico/pod2daemon-flexvol',
    fluentd: 'tigera/fluentd',
    'es-proxy': 'tigera/es-proxy',
    cloudControllers: 'tigera/cloud-controllers',
    'elastic-tsee-installer': 'tigera/intrusion-detection-job-installer',
    'intrusion-detection-controller': 'tigera/intrusion-detection-controller',
    'es-curator': 'tigera/es-curator',
    'compliance-controller': 'tigera/compliance-controller',
    'compliance-server': 'tigera/compliance-server',
    'compliance-snapshotter': 'tigera/compliance-snapshotter',
    'compliance-reporter': 'tigera/compliance-reporter',
    'compliance-benchmarker': 'tigera/compliance-benchmarker',
    'ingress-collector': 'tigera/ingress-collector',
    kibana: 'tigera/kibana',
    elasticsearch: 'tigera/elasticsearch',
    'license-agent': 'tigera/license-agent',
    'firewall-integration': 'tigera/firewall-integration',
    honeypod: 'tigera/honeypod',
    'honeypod-exp-service': 'tigera/honeypod-exp-service',
    'honeypod-controller': 'tigera/honeypod-controller',
    prometheusConfigReloader: 'tigera/prometheus-config-reloader',
    configMapReload: 'tigera/configmap-reload',
    alertManager: 'tigera/alertmanager',
    prometheus: 'tigera/prometheus',
    elasticsearchOperator: 'tigera/elasticsearch-operator',
    prometheusOperator: 'tigera/prometheus-operator',
    windows: 'tigera/calico-windows-upgrader',
  },
};

module.exports = variables;
