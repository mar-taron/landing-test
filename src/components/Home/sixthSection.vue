<template>
  <div class="container-fluid sixth-section-container">
    <div class="container">
      <div class="row">
        <div class="col-12 main-title">
            <h2 class="dark-text font-weight-normal">
              So <span class="blue-text font-weight-500">how</span> do we plan on doing this?
            </h2>
        </div>
        <div class="col-12 sixth-section-content">
            <div class="row d-flex align-items-center">
                <div class="col-3">
                  <img class="img-fluid icon-img-1" src="../../assets/icon-img1.png" alt="Icon">
                </div>
                <div class="col-9">
                    <h3 class="dark-text font-weight-normal mb-4">
                      We are building the <span class="blue-text font-weight-500">AgoraMeshNetwork</span>.
                    </h3>
                    <p class="default-text">
                      This network will consist of various sized nodes that share data with one another. Nodes can be phones, tablets, laptops or large computers. Users will have the ability to enable the Mesh Network on their phones or other devices, allowing them to send messages or access data otherwise restricted to internet connectivity without requiring an internet connection.
                    </p>
                    <p class="default-text">
                      Devices will send packets of data to nodes in their area, which will pass on data back and forth with other nodes that may be connected with the internet. This enables users to transmit data among each other without any direct internet connection themselves.
                    </p>
                    <p class="default-text">
                      Imagine a large festival or event where cell coverage is spotty or even completely unavailable. Not a problem if you are using the AgoraMeshApp on the Mesh Network. Users running a node will continuously transmit data to other nodes, ensuring you remain connected to your friends in and outside of the area.
                    </p>
                    <p class="default-text">
                      The AgoraMeshNetwork is still under development, with initial release planned for early 2019.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-12 sixth-section-content">
            <div class="row d-flex align-items-center">
                <div class="col-9">
                    <h5 class="dark-text font-weight-normal mb-4">
                      We are building a decentralized solution - <br><span class="blue-text font-weight-500">AgoraMeshBlockchain</span>.
                    </h5>
                    <p class="default-text">
                      The AgoraMeshBlockchain will be the fuel that powers the network and incentivizes users to contribute to the network capacity and and size. As a mobile user, you will be able to run a lite node, transmitting packets from other users through the internet or through the mesh. Because running a mesh node uses battery and cpu power, users are compensated with AGM tokens.
                    </p>
                    <p class="default-text">
                      These AGM tokens will serve various purposes within the AgoraMesh ecosystem as it grows and expands. For example, some users may require access to the mesh network while abroad to avoid high roaming costs. These users would in turn pay AGM tokens to access data transfer on the AgoraMeshNetwork.
                    </p>
                    <p class="default-text">
                      This model allows for large nodes and lite nodes to sell excess bandwidth to the network that they are not currently using. In turn, AGM tokens represent an asset or right to use part of the network and create an incentivization structure that encourages adoption.
                    </p>
                  </div>
                  <div class="col-3">
                    <img class="img-fluid icon-img-2" src="../../assets/icon-img2.png" alt="Icon">
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sixthSection"
    }
</script>

<style scoped>
  .icon-img-1{
    margin-top: 110px;
  }

  .icon-img-2{
    margin-top: 200px;
  }

  .sixth-section-container h2{
    font-family: Open Sans;
    font-size: 42px;
  }

  .sixth-section-container h3, .sixth-section-content h5{
    font-family: Open Sans Light;
    font-size: 32px;
  }

  .sixth-section-container h3 span, .sixth-section-content h5 span{
    font-family: Open Sans;
  }

  .sixth-section-container p{
    font-family: Open Sans Light;
  }

  .sixth-section-content h3{
    margin: 125px 0;
  }

  .sixth-section-content h5{
    margin: 230px 0 0 0;
  }

</style>
