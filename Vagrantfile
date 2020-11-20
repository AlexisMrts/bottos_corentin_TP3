# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 config.vm.box_check_update = true
 config.vm.box = "debian/buster64"

 config.vm.network "forwarded_port", guest: 80, host: 3000, id: "nginx"

 config.vm.network "private_network", type: "dhcp"

 config.vm.provider "virtualbox" do |vb|

    vb.gui = true
       vb.name = "ansible"
       vb.memory = "2048"
       vb.cpus = "2"
    end

    config.vm.provision "ansible_local" do |ansible|
        ansible.install_mode = "pip"
        ansible.limit = "all"
        ansible.verbose = "vvv"
        ansible.playbook = "playbook.yaml"
     end
end
