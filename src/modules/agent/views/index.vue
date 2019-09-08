<template>

  <div class="container-fluid">
    <div class="row d-f m-b-m card-panel-container">

      <div class="col-sm-4 col-xs-4 col-xs-6">
        <div class="card-panel bg-warning">
          <div class="cacrd-panel-icon icon-cog rotate180"></div>
          <div class="cacrd-panel-description">{{$t('agent.Building')}}</div>
          <div class="cacrd-panel-number">3</div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-xs-6">
        <div class="card-panel bg-success">
          <div class="cacrd-panel-icon icon-coffee"></div>
          <div class="cacrd-panel-description">{{$t('agent.Idle')}}</div>
          <div class="cacrd-panel-number">5</div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12 sum-row-panel">
        <div class="row-panel bg-white row n-m">
          <div class="row-panel-item col-sm-4 col-xs-4">
            <div class="row-panel-top">{{$t('agent.ALL')}}</div>
            <div class="row-panel-bottom">8</div>
          </div>

          <div class="row-panel-item col-sm-4 col-xs-4">
            <div class="row-panel-top">{{$t('agent.PHYSICAL')}}</div>
            <div class="row-panel-bottom">4</div>
          </div>

          <div class="row-panel-item col-sm-4 col-xs-4">
            <div class="row-panel-top">{{$t('agent.VIRTUAL')}}</div>
            <div class="row-panel-bottom">4</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row n-m-l bg-white m-b-m">
      <div class="tabs col-sm-4 col-xs-12">
        <div class="tabs-nav active">{{$t('agent.ALL')}}</div>
        <div class="tabs-nav">{{$t('agent.PHYSICAL')}}</div>
        <div class="tabs-nav">{{$t('agent.VIRTUAL')}}</div>
      </div>
      <div class="col-sm-8 col-xs-12 n-p-l search-container">
        <div class="search-input-container">
          <i class="icon-search"></i>
          <input
            class="search-input"
            type="text"
          >
        </div>

        <span class="change-show-type">
          <i class="icon-th-card active"></i>
          <i class="icon-th-list"></i>
        </span>

      </div>
    </div>

    <div
      class="row n-m-l bg-white card m-b-m"
      v-for="(message,key) in messageList"
      :class="message.status"
      :key="key"
    >
      <div class="message col-sm-12">
        <div class="message-icon">
          <img
            :src="getImgUrl(message.os)"
            alt=""
          >
        </div>
        <div class="message-detail">
          <div class="message-detail-top">
            <span class="message-detail-name m-r-l">
              <i class="icon-desktop"></i>
              <span class="text-info">
                {{message.host}}
              </span>
            </span>

            <span
              class="message-detail-status m-r-l"
              :class="{'bg-warning':message.status ==='building','bg-success':message.status ==='idle'}"
            >
              {{message.status}}
            </span>
            <span class="message-detail-ip m-r-l">
              <i class="icon-info"></i>
              {{message.ip}}
            </span>
            <span class="message-detail-path">
              <i class="icon-folder"></i>
              {{message.path}}
            </span>
          </div>
          <div class="message-detail-bottom">
            <span class="add-tag bg-info">
              <i class="icon-plus"></i>
            </span>
            <span
              class="message-tag-item"
              v-for="(tag,key) in message.tag"
              :key="key"
            >
              {{tag.name}}
              <i class="icon-trash"></i>
            </span>

            <div
              class="button button-info message-detail-change-status"
              v-show="message.status === 'building'"
            >
              <i class="icon-deny"></i>
              {{$t('agent.Deny')}}
            </div>
          </div>
          <img src="/public/osIcons/cent_os.png" alt="">
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      messageList: [
        {
          os: "windows",
          host: "bstsddf1/Acceptance_testbstsddf1/Accep",
          status: "idle",
          ip: "192.168.50.58",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        },
        {
          os: "windows",
          host: "bstsddf8/Acceptance_testbstsddf1/Accep",
          status: "building",
          ip: "192.168.50.59",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        },
        {
          os: "ubuntu",
          host: "bstsddf8/Acceptance_testbstsddf1/Accep",
          status: "building",
          ip: "192.168.50.59",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        },
        {
          os: "debin",
          host: "bstsddf8/Acceptance_testbstsddf1/Accep",
          status: "building",
          ip: "192.168.50.159",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        },
        {
          os: "suse",
          host: "bstsddf8/Acceptance_testbstsddf1/Accep",
          status: "idle",
          ip: "192.168.50.159",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        },
        {
          os: "cent_os",
          host: "bstsddf8/Acceptance_testbstsddf1/Accep",
          status: "idle",
          ip: "192.168.50.159",
          path: "/var/lib/cruise-agent",
          tag: [
            { id: 1, name: "Firefox" },
            { id: 2, name: "Safari" },
            { id: 3, name: "Ubuntu" },
            { id: 4, name: "Chrome" }
          ]
        }
      ]
    };
  },
  methods: {
    getImgUrl(src) {
      return ("/osIcons/" + src + ".png");
    }
  }
};
</script>
